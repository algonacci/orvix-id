// Reproducible artwork using existing brand colors, local fonts and native browser.
import { readFileSync } from "node:fs";
import { join } from "node:path";
import puppeteer from "puppeteer-core";
import { browserOptions } from "./browser.mjs";
import { ROOT } from "./routes.mjs";
import { getMetadata } from "./seo-metadata.mjs";

export const banners = [
  ["home", "", "ORVIX CLOUD PLATFORM · AI-FIRST", "Akses AI,", "bangun aplikasi Anda.", "AI Gateway, paket AI dan coding, API data Indonesia,<br>serta domain dengan billing rupiah."],
  ["harga", "/harga", "HARGA DALAM RUPIAH", "Pilih paket AI", "sesuai kebutuhan Anda.", "Token Plan, AI Plan dengan fair use,<br>Coding Plan, dan Image Credits."],
  ["ai-gateway", "/ai-gateway", "AI GATEWAY · INDONESIA", "Satu API key.", "Pilihan model AI Anda.", "API kompatibel OpenAI, failover otomatis,<br>BYOK, dan billing rupiah."],
  ["coding", "/coding", "CODING PLAN · INDONESIA", "AI untuk alur", "kerja coding Anda.", "Plugin untuk OpenCode, Pi, dan omp.<br>Paket token dengan endpoint coding khusus."],
  ["api-store", "/api-store", "API STORE · INDONESIA", "Data lokal.", "Ide aplikasi Anda.", "Wilayah, sekolah, hari libur, BMKG, KBLI, dan NIK Parser.<br>Gratis saat ini."],
  ["domain", "/domain", "DOMAIN · INDONESIA", "Nama untuk ide Anda.", "Saldo yang sama.", "Daftar domain .id dan ekstensi lainnya.<br>Cek ketersediaan dan harga terbaru di platform."],
  ["about", "/tentang", "TENTANG ORVIX", "Cloud platform", "untuk developer Indonesia.", "AI-first, billing rupiah, dan visi developer cloud.<br>Kenali produk serta jalur enterprise Orvix."],
  ["contact", "/kontak", "KONTAK ORVIX", "Mari bicarakan", "kebutuhan Anda.", "Pertanyaan produk, billing, atau proyek enterprise.<br>Hubungi tim melalui WhatsApp atau email."],
  ["services", "/layanan", "ENTERPRISE SOLUTIONS", "Untuk workload dengan", "penanganan langsung.", "Kelola cloud, migrasi, dan infrastruktur bisnis.<br>Ruang lingkup disepakati per proyek."],
  ...[
    ["managed-cloud", "Kelola server", "sesuai kebutuhan bisnis."],
    ["cloud-migration", "Rencanakan migrasi", "server bisnis Anda."],
    ["managed-hosting", "Hosting terkelola", "untuk website bisnis."],
    ["devops-cicd", "Diskusikan alur", "deployment aplikasi."],
    ["backup-disaster-recovery", "Rencanakan backup", "dan pemulihan data."],
    ["monitoring-security", "Diskusikan monitoring", "dan keamanan server."],
    ["private-hybrid-cloud", "Arsitektur cloud", "untuk kebutuhan bisnis."],
    ["ai-saas-infrastructure", "Fondasi infrastruktur", "aplikasi AI dan SaaS."],
  ].map(([slug, line1, line2]) => [`service-${slug}`, `/services/${slug}`, "LAYANAN ENTERPRISE · SESUAI SCOPE", line1, line2, getMetadata(`/services/${slug}`).description]),
];

const font = (weight) => readFileSync(join(ROOT, `node_modules/@fontsource/plus-jakarta-sans/files/plus-jakarta-sans-latin-${weight}-normal.woff2`)).toString("base64");
const browser = await puppeteer.launch(await browserOptions());
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
  for (const [name, path, label, line1, line2, description] of banners) {
    await page.setContent(`<!doctype html><html><head><style>
      @font-face{font-family:Jakarta;src:url(data:font/woff2;base64,${font(400)});font-weight:400}
      @font-face{font-family:Jakarta;src:url(data:font/woff2;base64,${font(800)});font-weight:800}
      *{box-sizing:border-box}body{margin:0;width:1200px;height:630px;color:#f1f5f9;background:radial-gradient(ellipse at 85% 12%,#173640 0%,transparent 54%),linear-gradient(130deg,#070b14,#131b2e);font-family:Jakarta,sans-serif;text-align:center;display:flex;align-items:center;justify-content:center}
      body:before{content:'';position:absolute;inset:0;background-image:linear-gradient(#ffffff03 1px,transparent 1px),linear-gradient(90deg,#ffffff03 1px,transparent 1px);background-size:56px 56px;mask-image:linear-gradient(black,transparent)}
      body:after{content:'';position:absolute;bottom:0;left:0;right:0;height:4px;background:linear-gradient(90deg,transparent,#43cfe4,transparent)}
      main{position:relative;width:1080px}.logo{display:flex;justify-content:center;align-items:center;gap:26px;font-size:50px;letter-spacing:-2px;margin-bottom:18px}.logo em{font-style:normal;color:#42cfe6}.bars{display:flex;align-items:end;gap:5px;transform:skew(-12deg);height:50px}.bars i{width:13px;border-radius:3px;background:linear-gradient(#43e1f4,#5b8cff);height:28px;box-shadow:0 0 35px #43e1f433}.bars i:nth-child(2){height:50px}.bars i:nth-child(3){height:39px;background:linear-gradient(#5b8cff,#9b72ff)}
      .label{display:inline-block;padding:6px 17px;border:1px solid #69d8eb40;border-radius:99px;background:#42cfe610;color:#9de9f3;font:800 14px monospace;letter-spacing:.7px}h1{font-size:49px;line-height:1.18;font-weight:800;letter-spacing:-2px;margin:22px 0 18px}h1 span{background:linear-gradient(90deg,#a0f2ef,#47d1ec,#7789ff);color:transparent;background-clip:text}p{font-size:22px;line-height:1.5;color:#94a3b8;margin:0}.url{color:#64748b;font:800 17px monospace;margin-top:22px}
    </style></head><body><main><div class="logo"><span class="bars"><i></i><i></i><i></i></span><span>Orvix<em>.id</em></span></div><div class="label">${label}</div><h1>${line1}<br><span>${line2}</span></h1><p>${description}</p><div class="url">orvix.id${path}</div></main></body></html>`);
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({ path: join(ROOT, `public/og/banner_${name}.webp`), type: "webp", quality: 92 });
    if (name === "home") await page.screenshot({ path: join(ROOT, "public/og.jpg"), type: "jpeg", quality: 93 });
    console.log(`Generated ${name}: 1200×630`);
  }
} finally { await browser.close(); }
