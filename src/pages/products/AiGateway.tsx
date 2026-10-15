import { Link } from "react-router-dom";
import { gatewayExamples, gatewayFeatures, gatewayIntegration, gatewayLinks } from "@/data/products";
import { formatNumber, modelCount, modelFamilies, pricingCopy } from "@/data/pricing";
import ProductLayout, { CodeExample, PlatformLink } from "./ProductLayout";

// Built from the shared integration contract; request shape verified in public quickstart/models docs.
const curlExample = [
  `curl ${gatewayIntegration.baseUrl}/chat/completions \\`,
  `  -H "Authorization: Bearer ${gatewayIntegration.apiKeyPlaceholder}" \\`,
  '  -H "Content-Type: application/json" \\',
  `  -d '${JSON.stringify({ model: gatewayIntegration.model, messages: [{ role: "user", content: "Halo Orvix!" }] })}'`,
].join("\n");

const AiGateway = () => (
  <ProductLayout title="Orvix AI Gateway" description={`Akses ${formatNumber(modelCount)} model melalui satu API key dengan API kompatibel OpenAI. Coba model, integrasikan ke aplikasi, dan lihat pemakaian berdasarkan proyek.`} actions={<><PlatformLink href={gatewayLinks.apiKeys}>Buat API key</PlatformLink><a href={gatewayIntegration.quickstartUrl} className="text-sm font-semibold text-primary hover:underline">Baca quickstart →</a></>}>
    <section aria-labelledby="integration-title">
      <h2 id="integration-title" className="text-3xl font-bold">Mulai dari request pertama</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">Buat API key di platform, lalu gunakan base URL <code className="break-all text-sm font-semibold text-slate-800">{gatewayIntegration.baseUrl}</code>. Contoh ini memakai <code>{gatewayIntegration.model}</code> agar gateway memilih model untuk request Anda.</p>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">Ganti placeholder pada curl dengan API key Anda. Untuk contoh JavaScript, pasang paket <code>openai</code> sesuai quickstart dan isi environment variable <code>ORVIX_API_KEY</code>. Jalankan request dari server aplikasi Anda.</p>
      <div className="mt-8 grid min-w-0 gap-6 lg:grid-cols-2">
        <CodeExample label="curl · Chat Completions" code={curlExample} />
        <CodeExample label="JavaScript · OpenAI SDK" code={gatewayExamples.javascript} />
      </div>
      <p className="mt-4 text-sm text-slate-600">Format request: <a className="font-semibold text-cyan-700 underline underline-offset-4" href={gatewayIntegration.quickstartUrl}>Quickstart</a> · Pemilihan model: <a className="font-semibold text-cyan-700 underline underline-offset-4" href={gatewayIntegration.modelsDocsUrl}>Dokumentasi model</a>.</p>
    </section>

    <section aria-labelledby="routing-title">
      <h2 id="routing-title" className="text-3xl font-bold">Routing, pilihan model, dan API key</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {gatewayFeatures.map((feature) => <article key={feature.title} className="rounded-2xl border border-slate-200 bg-white p-6"><h3 className="text-lg font-bold">{feature.title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-600">{feature.description}</p></article>)}
      </div>
      <div className="mt-6 space-y-4 rounded-2xl border border-slate-200 bg-white p-6 text-sm leading-relaxed text-slate-600">
        <p><strong className="text-light-text">Failover dan pemilihan model berbeda.</strong> Failover mencoba rute lain ketika suatu rute gagal. <code>{gatewayIntegration.model}</code> memilih model berdasarkan request; nama model yang benar-benar dipakai muncul pada respons. Tarif mengikuti model yang dipilih.</p>
        <p><strong className="text-light-text">Format ID model.</strong> Model managed memakai awalan <code>orvix/</code>. Untuk BYOK, tambahkan API key Anda sendiri di platform lalu gunakan ID asli model tanpa awalan tersebut. Lihat dokumentasi dan katalog proyek untuk ID yang tersedia.</p>
      </div>
    </section>

    <section aria-labelledby="models-title">
      <h2 id="models-title" className="text-3xl font-bold">Keluarga model</h2>
      <p className="mt-4 text-slate-600">Pilih model sesuai kebutuhan. Katalog dan ID terbaru tersedia di platform.</p>
      <div className="mt-7 grid gap-6 md:grid-cols-2">
        {Object.entries(modelFamilies).map(([kind, families]) => <div key={kind} className="rounded-2xl border border-slate-200 bg-white p-6"><h3 className="font-bold">{kind === "text" ? "Teks" : "Gambar"}</h3><ul className="mt-4 flex flex-wrap gap-2">{families.map((family) => <li key={family} className="rounded-lg bg-slate-100 px-3 py-2 text-sm text-slate-700">{family}</li>)}</ul></div>)}
      </div>
      <p className="mt-6 text-sm leading-relaxed text-slate-600">{pricingCopy.tokenRate} <Link to="/harga" className="font-semibold text-cyan-700 underline underline-offset-4">Bandingkan paket</Link>.</p>
      <div className="mt-6 flex flex-wrap gap-4"><PlatformLink href={gatewayLinks.models}>Lihat katalog model</PlatformLink><PlatformLink href={gatewayLinks.playground}>Coba di playground</PlatformLink></div>
    </section>
  </ProductLayout>
);

export default AiGateway;
