const fields = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid"] as const;
const prefix = "orvix_attr=";
const attributes = "; Domain=.orvix.id; Path=/; Max-Age=2419200; SameSite=Lax; Secure";
type Attribution = Partial<Record<typeof fields[number], string>> & {
  v: 1;
  landing_path: string;
  ts: number;
  fbc_ts?: number;
};

function validValue(value: string | null): value is string {
  return value !== null && /^[\x20-\x7E]{1,200}$/.test(value)
    && !/[^\s@]+@[^\s@]+/.test(value);
}

/** Build only allowlisted attribution; never retain the full URL, query or fragment. */
export function buildAttributionCookie(search: string, pathname: string, cookies = "", now = Date.now()): string | undefined {
  const params = new URLSearchParams(search);
  const values: Partial<Record<typeof fields[number], string>> = {};
  for (const field of fields) {
    const value = params.get(field);
    if (validValue(value)) values[field] = value;
  }
  if (!Object.keys(values).length || !validValue(pathname)) return;
  // Also reject percent-encoded email addresses in paths.
  try {
    if (!validValue(decodeURIComponent(pathname))) return;
  } catch { return; }
  const attribution: Attribution = { v: 1, ...values, landing_path: pathname, ts: now };
  if (values.fbclid) {
    attribution.fbc_ts = now;
    try {
      const previous = cookies.split(";").map(value => value.trim()).find(value => value.startsWith(prefix));
      const stored = previous ? JSON.parse(decodeURIComponent(previous.slice(prefix.length))) : null;
      if (stored?.v === 1 && stored.fbclid === values.fbclid && Number.isSafeInteger(stored.fbc_ts)
        && stored.fbc_ts > 0 && stored.fbc_ts <= now) attribution.fbc_ts = stored.fbc_ts;
    } catch { /* An unreadable cookie must not prevent a fresh touch. */ }
  }
  const cookie = `${prefix}${encodeURIComponent(JSON.stringify(attribution))}${attributes}`;
  // All characters are ASCII after encoding. Include name and attributes in the byte budget.
  return cookie.length < 1024 ? cookie : undefined;
}

export function captureAttributionCookie(search: string, pathname: string): void {
  try {
    const cookie = buildAttributionCookie(search, pathname, document.cookie);
    if (cookie) document.cookie = cookie;
  } catch { /* Storage restrictions must never interrupt navigation. */ }
}
