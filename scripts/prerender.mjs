// Renders every route to static HTML in dist/, so scrapers that never execute
// JavaScript still get the right meta tags.
//
// Why this exists: Facebook, WhatsApp, and LinkedIn read the raw HTML only.
// Without prerendering they see index.html for every URL, which means every
// shared link previews with the home-page banner regardless of the page. Google
// is unaffected either way — it renders JS.
//
// Usage: node scripts/prerender.mjs   (run after `vite build`)

import { createReadStream, existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import http from "node:http";
import { extname, join } from "node:path";
import chromium from "@sparticuz/chromium";
import puppeteer from "puppeteer-core";
import { getPrerenderPaths, ROOT } from "./routes.mjs";

const DIST = join(ROOT, "dist");
const PORT = Number(process.env.PRERENDER_PORT) || 45678;
const ORIGIN = `http://127.0.0.1:${PORT}`;
const CONCURRENCY = Number(process.env.PRERENDER_CONCURRENCY) || 4;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
};

// Serves dist/ with an SPA fallback to the pristine shell. Directory paths never
// match the file check, so routes already written this run still fall through to
// the shell rather than being re-rendered from their own output.
function createServer(indexHtml) {
  return http.createServer((req, res) => {
    try {
      const urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
      const filePath = join(DIST, urlPath);

      if (
        filePath.startsWith(DIST) &&
        urlPath !== "/" &&
        existsSync(filePath) &&
        statSync(filePath).isFile()
      ) {
        res.writeHead(200, {
          "Content-Type": MIME[extname(filePath).toLowerCase()] || "application/octet-stream",
        });
        createReadStream(filePath).pipe(res);
        return;
      }

      res.writeHead(200, { "Content-Type": MIME[".html"] });
      res.end(indexHtml);
    } catch (error) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(`Prerender server error: ${error.message}`);
    }
  });
}

function writeHtml(routePath, html) {
  const outDir = routePath === "/" ? DIST : join(DIST, routePath);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "index.html"), html, "utf8");
}

async function renderRoute(browser, routePath) {
  const page = await browser.newPage();
  try {
    await page.setViewport({ width: 1280, height: 800 });

    // Block anything off-origin so a slow font or analytics host cannot stall
    // or vary the output.
    await page.setRequestInterception(true);
    page.on("request", (request) => {
      const url = request.url();
      if (url.startsWith(ORIGIN) || url.startsWith("data:")) {
        request.continue();
      } else {
        request.abort();
      }
    });

    await page.goto(`${ORIGIN}${routePath}`, { waitUntil: "networkidle0", timeout: 45000 });
    await page.waitForSelector("#root > *", { timeout: 45000 });

    // Guard against silently shipping the shell's tags: SEOHead must have taken
    // over the head by now, and every route's canonical is its own URL.
    const canonical = await page.$eval(
      'link[rel="canonical"]',
      (el) => el.getAttribute("href") ?? ""
    );
    const expected = routePath === "/" ? "/" : routePath;
    if (!canonical.endsWith(expected)) {
      throw new Error(`canonical is "${canonical}", expected it to end with "${expected}"`);
    }

    writeHtml(routePath, await page.content());
  } finally {
    await page.close();
  }
}

async function main() {
  if (!existsSync(join(DIST, "index.html"))) {
    console.error("dist/index.html not found. Run `vite build` before prerendering.");
    process.exit(1);
  }

  const indexHtml = readFileSync(join(DIST, "index.html"), "utf8");
  const routes = getPrerenderPaths();

  const server = createServer(indexHtml);
  await new Promise((resolve) => server.listen(PORT, "127.0.0.1", resolve));
  console.log(`Prerendering ${routes.length} routes from ${ORIGIN}\n`);

  const browser = await puppeteer.launch({
    args: chromium.args,
    executablePath: process.env.PRERENDER_CHROME_PATH || (await chromium.executablePath()),
    headless: true,
  });

  let ok = 0;
  let failed = 0;
  const queue = [...routes];

  async function worker() {
    while (queue.length > 0) {
      const routePath = queue.shift();
      try {
        await renderRoute(browser, routePath);
        ok += 1;
        console.log(`  OK   ${routePath}`);
      } catch (error) {
        failed += 1;
        console.error(`  FAIL ${routePath} — ${error.message}`);
      }
    }
  }

  try {
    await Promise.all(Array.from({ length: Math.min(CONCURRENCY, routes.length) }, worker));
  } finally {
    await browser.close();
    server.close();
  }

  console.log(`\nDone. ${ok} prerendered, ${failed} failed.`);
  if (failed > 0) process.exit(1);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
