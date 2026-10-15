import { existsSync } from "node:fs";
import chromium from "@sparticuz/chromium";

export async function browserOptions() {
  const native = process.env.PRERENDER_CHROME_PATH || (process.platform === "darwin" ? [
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser",
  ].find(existsSync) : undefined);
  if (native) return { executablePath: native, args: [], headless: true };
  if (process.platform !== "linux") throw new Error("Set PRERENDER_CHROME_PATH to a native Chrome/Chromium browser.");
  return { executablePath: await chromium.executablePath(), args: chromium.args, headless: true };
}
