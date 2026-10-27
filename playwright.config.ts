import { defineConfig } from "@playwright/test";
import { browserOptions } from "./scripts/browser.mjs";
const browser = await browserOptions();
export default defineConfig({
  testDir: "./scripts/checkout-tests", timeout: 30000, workers: 1,
  use: { baseURL: "http://127.0.0.1:4179", launchOptions: { executablePath: browser.executablePath, args: browser.args } },
  webServer: { command: "bun run dev --host 127.0.0.1 --port 4179 --strictPort", url: "http://127.0.0.1:4179", reuseExistingServer: false, env: { VITE_GATEWAY_URL: "https://checkout.invalid", VITE_META_PIXEL_ID: "4302084656749999" } },
});
