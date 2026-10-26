# AI Plan landing and direct QRIS checkout

Authority: `Orvix-id/gateway` PR #44, commit `744f2ca`, `docs/ai-plan-checkout.md`.
Commercial data: `src/data/pricing.ts`. Slug `ai-plan` matches gateway migration/catalogue;
daily reset `00.00 WIB` matches `plans.service.ts` (Asia/Jakarta day).

## Environment and release setup

- Set `VITE_GATEWAY_URL` at build time. Empty/invalid config disables checkout; there is no production fallback.
- Production candidate **https://gateway.orvix.id** requires founder confirmation in Vercel. This task does not configure or deploy production.
- `VITE_META_PIXEL_ID=4302084656749999` is public configuration. Empty means no script/events. Never put CAPI tokens in Vite env.
- Preview must have its **actual origin** explicitly added to gateway `ORVIX_ID_PREVIEW_ORIGINS`; no Vercel wildcard. Actual origin reported by the Vercel bot on [frontend PR #6](https://github.com/algonacci/orvix-id/pull/6#issuecomment-6423048597): `https://orvix-id-git-feat-ai-plan-landing-checkout-algonaccis-projects.vercel.app`. Vercel reported Ready for implementation commit `6fe38cc`. Gateway allowlist configuration is still pending; no live checkout request was made.
- Gateway rollout/migration and platform PR #35 return-path handling are coordinated release prerequisites.
- Real payment, inbox delivery, Meta Test Events/CAPI dedup, and live custom-provider compatibility require founder-authorized validation before ads. All verification here uses mocks.

## Contract and behavior

POST `{email, attribution}` expects 201; errors 400/429/503 have safe copy. Repeated POST may return the same ID/QR and a fresh secret; every response replaces storage. GET and resend use `X-Checkout-Secret`, never query parameters. Fetch omits credentials and referrer, disables cache, and has a timeout. No sessions or tokens are accepted.

Session storage retains only checkoutId, checkoutSecret, qrisPayload, amountIdr, expiresAt, emailMasked. It clears on fulfilled/expired/invalid secret. Fulfilled credentials live in component memory for resend (202). Missing/corrupt storage and GET 404 offer reopening with the same email. Storage failure leaves payment usable with a keep-open warning.

Polling is single-flight, about 3s while visible, with delayed retries on network/rate-limit errors and abort on unmount. `paid` continues polling and says activating. Server status is authoritative: local QR expiry hides QR but continues reconciliation, so a payment racing the deadline is not declared unpaid. `failed` directs to support and explains retained wallet funds. Refresh restores pending payment and rechecks server status.

Pixel loads only on `/ai-plan`, excludes automation/bots/prerender, disables autoConfig, and removes query/fragment before loading Meta (attribution already captured). PageView + ViewContent on load; InitiateCheckout on QR creation; Purchase only fulfilled with purchaseEventId as exact eventID. Checkout-level event markers prevent duplicates across refresh. No ID means no browser Purchase, leaving CAPI. Raw email is never sent in URLs, storage, or Pixel parameters. Attribution allows only campaign/click fields and `_fbc`/`_fbp`; HTTPS source URL excludes query/fragment. IP/UA belong to the server.

## Reproducible verification

```sh
bun install --frozen-lockfile
bun run build:static
bun run test
bun run lint
bunx tsc --noEmit -p tsconfig.app.json
bun run test:checkout
```

Browser tests start a local Vite server with a `.invalid` mock gateway, intercept all API/Meta traffic, and block other external requests. No public mock route or live payment is used. Browser path comes from `PRERENDER_CHROME_PATH` or the same native detection used by prerender.

Screenshots are generated at `docs/screenshots/ai-plan/` for 390px mobile and desktop: form, QR, paid, fulfilled, expired, failed, invalid secret (404), missing secret. The checked-in images use fictitious emails and non-payable QR data. Reproduce with `bun run test:checkout`.
