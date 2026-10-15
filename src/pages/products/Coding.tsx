import { codingIntro, codingPlugins, codingSetup } from "@/data/products";
import { codingPlan, formatIdr, formatTokens, formatValidity, pricingCopy } from "@/data/pricing";
import ProductLayout, { PlatformLink } from "./ProductLayout";

const Coding = () => (
  <ProductLayout title="Coding Plan untuk coding agent" description={codingIntro} actions={<PlatformLink href={codingSetup.url}>Buka Coding di platform</PlatformLink>}>
    <section aria-labelledby="plan-title" className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 md:grid-cols-2">
      <div><h2 id="plan-title" className="text-3xl font-bold">{codingPlan.name}</h2><p className="mt-4 text-3xl font-extrabold">{formatIdr(codingPlan.priceIdr)} <span className="text-base font-normal text-slate-500">/ {formatValidity(codingPlan.validityDays)}</span></p><p className="mt-4 font-semibold">{formatTokens(codingPlan.tokens)} untuk coding</p><p className="mt-4 text-sm leading-relaxed text-slate-600">{codingPlan.audience}</p></div>
      <div className="rounded-2xl bg-slate-50 p-6"><h3 className="text-lg font-bold">Endpoint khusus coding</h3><p className="mt-4 text-sm leading-relaxed text-slate-600">Gunakan konfigurasi plugin dari halaman Coding. Paket ini dipakai melalui endpoint coding khusus; ikuti pilihan model dan API key pada panduan tersebut.</p><div className="mt-6"><PlatformLink href={codingPlan.platformUrl}>Pilih Coding Plan</PlatformLink></div></div>
    </section>
    <section aria-labelledby="plugins-title">
      <h2 id="plugins-title" className="text-3xl font-bold">Plugin untuk alat pengembangan Anda</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">Pilih plugin yang sesuai dengan coding agent yang Anda gunakan.</p>
      <ul className="mt-8 grid gap-5 sm:grid-cols-3">{codingPlugins.map((plugin) => <li key={plugin} className="rounded-2xl border border-slate-200 bg-white p-6"><h3 className="text-xl font-bold">{plugin}</h3><a href={codingSetup.url} className="mt-4 inline-block text-sm font-semibold text-cyan-700 underline underline-offset-4">Panduan plugin di platform →</a></li>)}</ul>
    </section>
    <section aria-labelledby="setup-title" className="max-w-3xl">
      <h2 id="setup-title" className="text-3xl font-bold">Mulai menggunakan Coding Plan</h2>
      <ol className="mt-6 list-decimal space-y-5 pl-6 leading-relaxed text-slate-600">
        <li>Buka <a href={codingSetup.url} className="font-semibold text-cyan-700 underline underline-offset-4">halaman Coding</a>, lalu masuk ke akun Orvix Anda.</li>
        <li>Pilih Coding Plan dan alat pengembangan yang Anda gunakan.</li>
        <li>Ikuti panduan plugin di halaman tersebut untuk pemasangan, API key, dan konfigurasi endpoint coding.</li>
      </ol>
      <p className="mt-6 rounded-xl bg-white p-5 text-sm leading-relaxed text-slate-600">Panduan konfigurasi tersedia setelah masuk ke platform. Gunakan instruksi di sana untuk perintah pemasangan terbaru.</p>
    </section>
    <p className="border-t border-slate-200 pt-6 text-sm text-slate-600">{pricingCopy.footnote}</p>
  </ProductLayout>
);

export default Coding;
