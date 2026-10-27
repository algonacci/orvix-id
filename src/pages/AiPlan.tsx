import { ArrowDown, ArrowUpRight, RefreshCw, Sparkles, Terminal, Zap } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import AiPlanCheckout from "@/components/AiPlanCheckout";
import { aiPlan, docsUrl, formatNumber, formatTokens, formatValidity, pricingCopy } from "@/data/pricing";
import { whatsappUrl } from "@/data/siteContent";

export default function AiPlan() {
  return <>
    <SEOHead path="/ai-plan" />
    <div className="relative overflow-hidden pt-28 pb-20 sm:pt-36">
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-0 h-[700px] w-full bg-[radial-gradient(ellipse_at_top_left,_#4de4ff18,_transparent_65%)]" />
      <div className="container relative mx-auto px-5">
        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div className="lg:pt-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-4 py-2 text-xs font-bold tracking-widest text-primary"><Sparkles size={15} /> ORVIX AI PLAN</span>
            <h1 className="mt-7 text-4xl font-bold leading-[1.12] tracking-tight sm:text-6xl">Ide jalan terus.<br /><span className="text-primary">Kuota AI reset harian.</span></h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-secondary">Pemakaian hari ini tidak mengurangi jatah harian besok. Untuk AI agent sesekali, sesi coding ringan, dan personal project yang terus Anda bangun.</p>
            <div className="mt-7 flex flex-wrap items-center gap-4"><span className="text-2xl font-bold">{pricingCopy.aiPlanPrice}</span><span className="rounded-full border border-white/10 px-3 py-1 text-xs text-text-secondary">Dengan fair use</span></div>
            <a href="#checkout" className="mt-7 inline-flex min-h-12 items-center gap-3 rounded-xl bg-primary px-6 font-bold text-primary-foreground">Aktifkan lewat QRIS <ArrowDown size={18} /></a>
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-6"><div><RefreshCw size={20} className="text-primary" /><p className="mt-3 font-semibold">Hari baru, jatah baru</p><p className="mt-1 text-sm text-text-secondary">Reset {aiPlan.resetTime}</p></div><div><Zap size={20} className="text-primary" /><p className="mt-3 font-semibold">Bayar, cek email, mulai</p><p className="mt-1 text-sm text-text-secondary">Langsung di halaman ini</p></div></div>
          </div>
          <AiPlanCheckout />
        </div>
        <section className="mt-20 rounded-3xl border border-white/10 bg-white/[.025] p-6 sm:p-9" aria-labelledby="fair-use-title">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Batas yang jelas</span><h2 id="fair-use-title" className="mt-3 text-2xl font-bold">Ritme harian, dengan fair use.</h2>
          <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{[
            [`Hingga ${formatTokens(aiPlan.fairUse.dailyTokens)} terhitung per hari`, ""],
            [`${formatNumber(aiPlan.fairUse.requestsPerMinute)} request/menit`, "Batas laju pemakaian"],
            [`${formatNumber(aiPlan.fairUse.concurrentRequests)} bersamaan`, "Request yang berjalan bersamaan"],
            [`Cache ${formatNumber(aiPlan.fairUse.cachedTokenPercent)}%`, "Bobot token cache dalam perhitungan"],
          ].map(([title, copy]) => <div key={title}><p className="text-xl font-bold">{title}</p>{copy && <p className="mt-2 text-sm text-text-secondary">{copy}</p>}</div>)}</div>
          <p className="mt-7 border-t border-white/10 pt-5 text-sm leading-relaxed text-text-secondary">Jatah harian reset pukul {aiPlan.resetTime} selama masa aktif {formatValidity(aiPlan.validityDays)}. Kebutuhan tiap model dan proyek berbeda. {aiPlan.lineupNote}</p>
        </section>
        <section className="mt-20"><h2 className="text-3xl font-bold">Pakai di alur kerja Anda.</h2><p className="mt-3 text-text-secondary">Dari agent pribadi sampai asisten harian.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">{[
            ["OpenCode", "Plugin resmi Orvix. Pilih provider orvix melalui endpoint /v1."],
            ["OpenClaw & Hermes", "Hubungkan melalui API kompatibel OpenAI menggunakan API key AI Plan."],
            ["Pi & omp", "Gunakan provider custom melalui API kompatibel OpenAI. Periksa konfigurasi dengan API key AI Plan Anda."],
            ["API & Orvix One", "Integrasikan ke proyek lewat API, atau gunakan AI Plan di Orvix One pada model dalam lineup."],
          ].map(([name, copy]) => <div key={name} className="rounded-2xl border border-white/10 p-6"><Terminal size={21} className="text-primary" /><h3 className="mt-4 text-lg font-bold">{name}</h3><p className="mt-2 text-sm leading-relaxed text-text-secondary">{copy}</p></div>)}</div>
          <a href={docsUrl} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary">Baca panduan integrasi <ArrowUpRight size={16} /></a>
        </section>
        <section className="mx-auto mt-20 max-w-3xl"><h2 className="mb-7 text-3xl font-bold">Sebelum mulai.</h2>{[
          ["Bagaimana cara masuk setelah membayar?", "Setelah AI Plan aktif, link masuk dikirim ke email yang Anda isi. Buka inbox atau folder spam. Anda juga dapat mengirim ulang link dari halaman ini."],
          ["Bagaimana jika email saya salah?", "Periksa dan konfirmasi email sebelum membuat QR. Jika sudah membayar ke email yang salah, jangan membayar ulang; hubungi WhatsApp Orvix agar tim dapat membantu."],
          ["Saya sudah punya AI Plan. Bisa diperpanjang?", `Bisa. Gunakan email akun yang sama. Pembelian menambah masa aktif ${formatValidity(aiPlan.validityDays)} pada AI Plan Anda.`],
          ["Apakah jatah hari ini mengurangi jatah besok?", `Tidak. Kuota harian reset pukul ${aiPlan.resetTime} selama plan aktif. Pemakaian tetap mengikuti fair use.`],
        ].map(([question, answer]) => <details key={question} className="border-b border-white/10 py-5"><summary className="cursor-pointer font-semibold">{question}</summary><p className="mt-4 text-sm leading-relaxed text-text-secondary">{answer}</p></details>)}<a href={whatsappUrl} className="mt-6 inline-block text-sm text-primary">Ada pertanyaan lain? Hubungi WhatsApp Orvix →</a></section>
      </div>
    </div>
  </>;
}
