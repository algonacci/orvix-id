import { FormEvent, useEffect, useRef, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { CheckCircle2, LockKeyhole, Mail, QrCode } from "lucide-react";
import { aiPlan, formatIdr, pricingCopy } from "@/data/pricing";
import { whatsappUrl } from "@/data/siteContent";
import { captureAttribution, Checkout, CheckoutError, checkoutRequest, checkoutSchema, CheckoutStatus, errorCopy, gatewayUrl, restoreCheckout, saveCheckout, statusSchema } from "@/lib/aiCheckout";
import { startPixel, trackPixel } from "@/lib/aiPixel";

const button = "min-h-12 w-full rounded-xl bg-primary px-5 py-3 font-bold text-primary-foreground transition hover:brightness-110 disabled:opacity-50";
export default function AiPlanCheckout() {
  const [initial] = useState(restoreCheckout);
  const [checkout, setCheckout] = useState<Checkout | null>(initial.checkout);
  const [status, setStatus] = useState<CheckoutStatus | null>(null);
  const [invalid, setInvalid] = useState(initial.invalid);
  const [email, setEmail] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [now, setNow] = useState(Date.now());
  const [attribution] = useState(captureAttribution);
  const openController = useRef<AbortController>();
  useEffect(() => { startPixel(); return () => openController.current?.abort(); }, []);
  const state = invalid ? "invalid" : status?.status ?? (checkout ? "pending" : "form");
  const serverState = status?.status;

  useEffect(() => {
    if (!checkout || invalid || (serverState && !["pending", "paid"].includes(serverState))) return;
    let disposed = false;
    let running = false;
    let timer: ReturnType<typeof setTimeout>;
    const controller = new AbortController();
    async function poll() {
      clearTimeout(timer);
      if (disposed || running || document.visibilityState === "hidden") return;
      running = true;
      let delay = 3000;
      let terminal = false;
      try {
        const next = statusSchema.parse(await checkoutRequest(`/${encodeURIComponent(checkout.checkoutId)}`, "GET", undefined, checkout.checkoutSecret, controller.signal));
        if (disposed) return;
        setStatus(next); setError("");
        terminal = !["pending", "paid"].includes(next.status);
        if (next.status === "fulfilled") trackPixel("Purchase", checkout.amountIdr, checkout.checkoutId, next.purchaseEventId);
        if (["fulfilled", "expired"].includes(next.status)) saveCheckout(null);
      } catch (e) {
        if (disposed) return;
        if (e instanceof CheckoutError && e.status === 404) {
          setInvalid(true); saveCheckout(null); terminal = true;
        } else { setError(errorCopy(e)); delay = 10000; }
      } finally {
        running = false;
        if (!disposed && !terminal) timer = setTimeout(poll, delay);
      }
    }
    void poll();
    const visibility = () => { if (document.visibilityState === "visible") void poll(); else clearTimeout(timer); };
    document.addEventListener("visibilitychange", visibility);
    return () => { disposed = true; controller.abort(); clearTimeout(timer); document.removeEventListener("visibilitychange", visibility); };
  }, [checkout, invalid, serverState]);

  useEffect(() => {
    if (state !== "pending") return;
    const timer = setInterval(() => { if (document.visibilityState === "visible") setNow(Date.now()); }, 1000);
    return () => clearInterval(timer);
  }, [state]);

  async function open(event: FormEvent) {
    event.preventDefault();
    if (busy) return;
    if (email.trim().toLowerCase() !== confirmation.trim().toLowerCase()) { setError("Kedua alamat email harus sama."); return; }
    setBusy(true); setError(""); setNotice("");
    openController.current = new AbortController();
    try {
      const latestAttribution = captureAttribution();
      const next = checkoutSchema.parse(await checkoutRequest("", "POST", { email: email.trim(), attribution: { ...attribution, ...latestAttribution } }, undefined, openController.current.signal));
      // Reused checkout IDs still carry a NEW secret. Always replace the complete record.
      if (!saveCheckout(next)) setNotice("Penyimpanan browser tidak tersedia. Biarkan halaman ini terbuka sampai selesai.");
      setCheckout(next); setStatus(null); setInvalid(false); setEmail(""); setConfirmation("");
      trackPixel("InitiateCheckout", next.amountIdr, next.checkoutId);
    } catch (e) { setError(errorCopy(e)); } finally { setBusy(false); }
  }
  async function resend() {
    if (!checkout || state !== "fulfilled" || busy) return;
    setBusy(true); setError("");
    try {
      await checkoutRequest(`/${encodeURIComponent(checkout.checkoutId)}/resend`, "POST", undefined, checkout.checkoutSecret);
      setNotice("Link masuk dikirim ulang. Periksa inbox dan folder spam.");
    } catch (e) {
      if (e instanceof CheckoutError && e.status === 404) { setInvalid(true); setNotice(""); }
      else setError(errorCopy(e));
    } finally { setBusy(false); }
  }
  function reopen() { saveCheckout(null); setCheckout(null); setStatus(null); setInvalid(false); setError(""); setNotice(""); }
  const remaining = Math.max(0, Math.ceil((Date.parse(status?.expiresAt ?? checkout?.expiresAt ?? "") - now) / 1000));
  return <section id="checkout" aria-labelledby="checkout-title" className="scroll-mt-24 rounded-3xl border border-primary/30 bg-[#101923] p-6 shadow-[0_0_70px_-30px_#4de4ff55] sm:p-8">
    <div className="flex items-center justify-between"><span className="text-xs font-bold uppercase tracking-[.2em] text-primary">Checkout langsung</span><LockKeyhole size={18} className="text-primary" aria-hidden="true" /></div>
    <h2 id="checkout-title" className="mt-4 text-2xl font-bold">{state === "form" ? "Mulai dengan email Anda" : state === "pending" ? "Scan QRIS untuk membayar" : state === "paid" ? "Pembayaran diterima" : state === "fulfilled" ? "AI Plan Anda aktif" : state === "expired" ? "QRIS sudah kedaluwarsa" : state === "failed" ? "Aktivasi perlu bantuan" : "Buka kembali checkout"}</h2>
    {state === "form" && <form onSubmit={open} className="mt-5 space-y-4">
      <p className="text-sm text-text-secondary">{pricingCopy.aiPlanPrice}. Link masuk dikirim ke email setelah aktivasi.</p>
      <label className="block text-sm font-medium" htmlFor="checkout-email">Email<input id="checkout-email" type="email" autoComplete="email" required maxLength={254} value={email} onChange={(e) => setEmail(e.target.value)} className="mt-2 min-h-12 w-full rounded-xl border border-white/15 bg-background px-4 text-base" placeholder="nama@email.com" /></label>
      <label className="block text-sm font-medium" htmlFor="checkout-confirm">Konfirmasi email<input id="checkout-confirm" type="email" autoComplete="off" required maxLength={254} value={confirmation} onChange={(e) => setConfirmation(e.target.value)} className="mt-2 min-h-12 w-full rounded-xl border border-white/15 bg-background px-4 text-base" placeholder="Ketik ulang email Anda" /></label>
      {email && <p className="break-all text-sm text-text-secondary">Link masuk akan dikirim ke <strong className="text-foreground">{email}</strong>.</p>}
      <button className={button} disabled={busy || !gatewayUrl()}>{busy ? "Menyiapkan QRIS…" : `Bayar ${formatIdr(aiPlan.priceIdr)} dengan QRIS`}</button>
      {!gatewayUrl() && <p role="status" className="text-sm text-amber-200">Pembayaran belum tersedia. Hubungi kami atau coba lagi nanti.</p>}
      <p className="text-xs leading-relaxed text-text-secondary">Pastikan email benar sebelum membayar. Akses akun hanya melalui link di email.</p>
    </form>}
    {state === "pending" && checkout && <div className="mt-5 text-center">
      <p className="text-3xl font-bold">{formatIdr(checkout.amountIdr)}</p>
      {remaining > 0 ? <><div className="mx-auto my-5 w-fit rounded-2xl bg-white p-4"><QRCodeSVG value={checkout.qrisPayload} size={224} marginSize={4} title="QRIS pembayaran AI Plan" /></div><p className="font-mono text-sm text-primary">Berlaku {Math.floor(remaining / 60)}:{String(remaining % 60).padStart(2, "0")}</p></> : <p className="my-6 text-amber-200">Waktu QR habis. Memeriksa status terakhir… Jangan bayar QR ini.</p>}
      <p className="mt-3 text-sm leading-relaxed text-text-secondary">Scan dengan m-banking atau e-wallet. Di HP yang sama, screenshot QR lalu pilih gambar dari galeri di aplikasi pembayaran.</p>
      <p className="mt-4 break-all text-sm">Email tujuan: {status?.emailMasked ?? checkout.emailMasked}</p>
      <p className="mt-3 flex items-center justify-center gap-2 text-xs text-text-secondary"><QrCode size={15} /> Status diperbarui otomatis</p>
    </div>}
    {state === "paid" && <div className="mt-6 space-y-4"><CheckCircle2 className="text-primary" size={40} /><p>Pembayaran berhasil diterima. AI Plan sedang diaktifkan.</p><p className="text-sm text-text-secondary">Kami terus memeriksa aktivasi. Tidak perlu membayar lagi.</p></div>}
    {state === "fulfilled" && <div className="mt-6 space-y-4"><CheckCircle2 className="text-primary" size={40} /><p>Pembayaran diterima.{status?.planExpiresAt && ` AI Plan aktif sampai ${new Date(status.planExpiresAt).toLocaleString("id-ID", { timeZone: "Asia/Jakarta" })} WIB.`}</p><p className="break-all text-text-secondary">Cek email <strong className="text-foreground">{status?.emailMasked}</strong> untuk masuk. Periksa juga folder spam.</p><button onClick={resend} disabled={busy} className={button}><Mail className="mr-2 inline" size={18} />{busy ? "Mengirim…" : "Kirim ulang link masuk"}</button></div>}
    {state === "failed" && <p className="mt-5 leading-relaxed text-text-secondary">Dana pembayaran sudah masuk ke saldo, tetapi AI Plan belum berhasil diaktifkan. Jangan bayar ulang. Hubungi tim kami melalui WhatsApp untuk bantuan.</p>}
    {state === "expired" && <div className="mt-5 space-y-5"><p className="text-text-secondary">Masa berlaku QR ini berakhir. Jika sudah membayar, hubungi kami sebelum membuat pembayaran lain.</p><button onClick={reopen} className={button}>Buat QR baru</button></div>}
    {state === "invalid" && <div className="mt-5 space-y-5"><p className="text-text-secondary">Kunci checkout tidak tersedia atau sudah tidak valid. Masukkan email yang sama untuk membuka kembali checkout. Jika sudah membayar, cek email atau hubungi kami; jangan bayar ulang.</p><button onClick={reopen} className={button}>Buka kembali dengan email</button></div>}
    {error && <p role="alert" className="mt-4 rounded-xl border border-amber-300/20 bg-amber-300/5 p-3 text-sm text-amber-200">{error}</p>}
    {notice && <p role="status" className="mt-4 text-sm text-primary">{notice}</p>}
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-6 block text-center text-sm text-primary underline underline-offset-4">Butuh bantuan? WhatsApp Orvix</a>
  </section>;
}
