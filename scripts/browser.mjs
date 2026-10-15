import { existsSync } from "node:fs";
import chromium from "@sparticuz/chromium";

// Headless pages can be treated as hidden, which throttles timers and pauses
// requestAnimationFrame. The head manager applies tags in rAF, so on Vercel a
// page was once serialized with its description and canonical removed.
const NO_THROTTLE = [
  "--disable-background-timer-throttling",
  "--disable-backgrounding-occluded-windows",
  "--disable-renderer-backgrounding",
];

export async function browserOptions() {
  const native = process.env.PRERENDER_CHROME_PATH || (process.platform === "darwin" ? [
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser",
  ].find(existsSync) : undefined);
  if (native) return { executablePath: native, args: NO_THROTTLE, headless: true };
  if (process.platform !== "linux") throw new Error("Set PRERENDER_CHROME_PATH to a native Chrome/Chromium browser.");
  return { executablePath: await chromium.executablePath(), args: [...chromium.args, ...NO_THROTTLE], headless: true };
}
