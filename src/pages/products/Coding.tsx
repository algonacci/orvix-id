import { codingEndpoint, codingIntro, codingKeyEnv, codingPluginCommands, codingSetup } from "@/data/products";
import { codingPlan, formatIdr, formatTokens, formatValidity, pricingCopy } from "@/data/pricing";
import ProductLayout, { CodeExample, PlatformLink } from "./ProductLayout";

const Coding = () => (
  <ProductLayout title="Coding Plan untuk coding agent" description={codingIntro} actions={<PlatformLink href={codingSetup.url}>Buka Coding di platform</PlatformLink>}>
    <section aria-labelledby="plan-title" className="grid gap-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 md:grid-cols-2">
      <div><h2 id="plan-title" className="text-3xl font-bold">{codingPlan.name}</h2><p className="mt-4 text-3xl font-extrabold">{formatIdr(codingPlan.priceIdr)} <span className="text-base font-normal text-text-muted">/ {formatValidity(codingPlan.validityDays)}</span></p><p className="mt-4 font-semibold">{formatTokens(codingPlan.tokens)} untuk coding</p><p className="mt-4 text-sm leading-relaxed text-text-secondary">{codingPlan.audience}</p></div>
      <div className="rounded-2xl bg-white/[0.04] p-6"><h3 className="text-lg font-bold">Endpoint khusus coding</h3><p className="mt-4 text-sm leading-relaxed text-text-secondary">Coding Plan dipakai lewat endpoint <code className="text-foreground">{codingEndpoint}</code>, dengan API key ber-scope <code className="text-foreground">coding:invoke</code>. Plugin Orvix mengatur endpoint dan sesi untuk Anda.</p><div className="mt-6"><PlatformLink href={codingPlan.platformUrl}>Pilih Coding Plan</PlatformLink></div></div>
    </section>
    <section aria-labelledby="plugins-title">
      <h2 id="plugins-title" className="text-3xl font-bold">Pasang plugin di coding agent Anda</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-text-secondary">Satu perintah, sesuai alat yang Anda pakai. Plugin menghubungkan coding agent ke endpoint coding Orvix dan menjaga sesi tetap di rute yang sama agar cache prompt terpakai.</p>
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {codingPluginCommands.map((plugin) => <CodeExample key={plugin.name} label={plugin.name} code={plugin.command} />)}
      </div>
    </section>
    <section aria-labelledby="setup-title" className="max-w-3xl">
      <h2 id="setup-title" className="text-3xl font-bold">Mulai menggunakan Coding Plan</h2>
      <ol className="mt-6 list-decimal space-y-5 pl-6 leading-relaxed text-text-secondary">
        <li>Beli Coding Plan di <a href={codingSetup.url} className="font-semibold text-primary underline underline-offset-4">halaman Coding</a>.</li>
        <li>Buat API key dengan scope <code className="text-foreground">coding:invoke</code>, lalu simpan di environment:</li>
      </ol>
      <div className="mt-5"><CodeExample label="Terminal" code={codingKeyEnv} /></div>
      <ol start={3} className="mt-5 list-decimal space-y-5 pl-6 leading-relaxed text-text-secondary">
        <li>Pasang plugin untuk coding agent Anda (lihat di atas), lalu pilih model Orvix di dalam agent tersebut.</li>
      </ol>
    </section>
    <p className="border-t border-white/10 pt-6 text-sm text-text-secondary">{pricingCopy.footnote}</p>
  </ProductLayout>
);

export default Coding;
