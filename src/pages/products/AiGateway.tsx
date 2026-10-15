import { Link } from "react-router-dom";
import { gatewayExamples, gatewayFeatures, gatewayIntegration, gatewayLinks } from "@/data/products";
import { formatNumber, modelCount, modelFamilies, pricingCopy } from "@/data/pricing";
import ProductLayout, { CodeExample, PlatformLink } from "./ProductLayout";

const AiGateway = () => (
  <ProductLayout title="Orvix AI Gateway" description={`Akses ${formatNumber(modelCount)} model melalui satu API key dengan API kompatibel OpenAI. Coba model, integrasikan ke aplikasi, dan lihat pemakaian berdasarkan proyek.`} actions={<><PlatformLink href={gatewayLinks.apiKeys}>Buat API key</PlatformLink><a href={gatewayIntegration.quickstartUrl} className="text-sm font-semibold text-primary hover:underline">Baca quickstart →</a></>}>
    <section aria-labelledby="integration-title">
      <h2 id="integration-title" className="text-3xl font-bold">Mulai dari request pertama</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-text-secondary">Buat API key di platform, lalu gunakan base URL <code className="break-all text-sm font-semibold text-foreground">{gatewayIntegration.baseUrl}</code>. Contoh ini memakai <code>{gatewayIntegration.model}</code> agar gateway memilih model untuk request Anda.</p>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-text-secondary">Ganti placeholder pada curl dengan API key Anda. Untuk contoh JavaScript, pasang paket <code>openai</code> sesuai quickstart dan isi environment variable <code>ORVIX_API_KEY</code>. Jalankan request dari server aplikasi Anda.</p>
      <div className="mt-8 grid min-w-0 gap-6 lg:grid-cols-2">
        <CodeExample label="curl · Chat Completions" code={gatewayExamples.curl} />
        <CodeExample label="JavaScript · OpenAI SDK" code={gatewayExamples.javascript} />
      </div>
      <p className="mt-4 text-sm text-text-secondary">Format request: <a className="font-semibold text-primary underline underline-offset-4" href={gatewayIntegration.quickstartUrl}>Quickstart</a> · Pemilihan model: <a className="font-semibold text-primary underline underline-offset-4" href={gatewayIntegration.modelsDocsUrl}>Dokumentasi model</a>.</p>
    </section>

    <section aria-labelledby="routing-title">
      <h2 id="routing-title" className="text-3xl font-bold">Routing, pilihan model, dan API key</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {gatewayFeatures.map((feature) => <article key={feature.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"><h3 className="text-lg font-bold">{feature.title}</h3><p className="mt-3 text-sm leading-relaxed text-text-secondary">{feature.description}</p></article>)}
      </div>
      <div className="mt-6 space-y-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-sm leading-relaxed text-text-secondary">
        <p><strong className="text-foreground">Failover dan pemilihan model berbeda.</strong> Failover mencoba rute lain ketika suatu rute gagal. <code>{gatewayIntegration.model}</code> memilih model berdasarkan request; nama model yang benar-benar dipakai muncul pada respons. Tarif mengikuti model yang dipilih.</p>
        <p><strong className="text-foreground">Format ID model.</strong> Model managed memakai awalan <code>orvix/</code>. Untuk BYOK, tambahkan API key Anda sendiri di platform lalu gunakan ID asli model tanpa awalan tersebut. Lihat dokumentasi dan katalog proyek untuk ID yang tersedia.</p>
      </div>
    </section>

    <section aria-labelledby="models-title">
      <h2 id="models-title" className="text-3xl font-bold">Keluarga model</h2>
      <p className="mt-4 text-text-secondary">Pilih model sesuai kebutuhan. Katalog dan ID terbaru tersedia di platform.</p>
      <div className="mt-7 grid gap-6 md:grid-cols-2">
        {Object.entries(modelFamilies).map(([kind, families]) => <div key={kind} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"><h3 className="font-bold">{kind === "text" ? "Teks" : "Gambar"}</h3><ul className="mt-4 flex flex-wrap gap-2">{families.map((family) => <li key={family} className="rounded-lg bg-white/[0.04] px-3 py-2 text-sm text-foreground">{family}</li>)}</ul></div>)}
      </div>
      <p className="mt-6 text-sm leading-relaxed text-text-secondary">{pricingCopy.tokenRate} <Link to="/harga" className="font-semibold text-primary underline underline-offset-4">Bandingkan paket</Link>.</p>
      <div className="mt-6 flex flex-wrap gap-4"><PlatformLink href={gatewayLinks.models}>Lihat katalog model</PlatformLink><PlatformLink href={gatewayLinks.playground}>Coba di playground</PlatformLink></div>
    </section>
  </ProductLayout>
);

export default AiGateway;
