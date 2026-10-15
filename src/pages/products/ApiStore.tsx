import { apiCatalog, apiStore, gatewayIntegration } from "@/data/products";
import { lastVerified } from "@/data/pricing";
import ProductLayout, { CodeExample, PlatformLink } from "./ProductLayout";

// Endpoint shapes and scopes verified at docs.orvix.id/api-store; catalog stays in C1 data.
const requests: Record<string, { path: string; scope: string; body?: string }> = {
  "regional-indonesia": { path: "/regions/provinces", scope: "regions:read" },
  "schools-indonesia": { path: "/schools?search=Jakarta", scope: "schools:read" },
  "national-holidays": { path: `/holidays?year=${lastVerified.slice(0, 4)}`, scope: "holidays:read" },
  "bmkg-indonesia": { path: "/bmkg/earthquakes/latest", scope: "bmkg:read" },
  "kbli-indonesia": { path: "/kbli/codes?q=software", scope: "kbli:read" },
  "nik-parser-indonesia": { path: "/nik/parse", scope: "nik:read", body: '{"nik":"YOUR_NIK"}' },
};

function requestExample(request: (typeof requests)[string]) {
  const lines = [
    `curl "${gatewayIntegration.baseUrl}${request.path}" \\`,
    `  -H "Authorization: Bearer ${gatewayIntegration.apiKeyPlaceholder}"`,
  ];
  if (request.body) {
    lines[1] += " \\";
    lines.push('  -H "Content-Type: application/json" \\', `  -d '${request.body}'`);
  }
  return lines.join("\n");
}

const ApiStore = () => (
  <ProductLayout title="API Store: data Indonesia untuk aplikasi" description={apiStore.description} actions={<><PlatformLink href={apiStore.platformUrl}>Buka API Store</PlatformLink><a href={`${apiStore.docsUrl}/api-store`} className="text-sm font-semibold text-primary hover:underline">Dokumentasi API Store →</a></>}>
    <section aria-labelledby="auth-title" className="max-w-4xl">
      <h2 id="auth-title" className="text-3xl font-bold">Autentikasi request</h2>
      <p className="mt-4 leading-relaxed text-text-secondary">Gunakan API key proyek Orvix dengan scope baca produk yang dipilih atau <code>api_store:all</code>. Ganti placeholder <code className="break-all">{gatewayIntegration.apiKeyPlaceholder}</code> pada contoh dengan key Anda.</p>
      <p className="mt-4 text-sm leading-relaxed text-text-secondary">{apiStore.priceLabel}. Periksa status harga terbaru di platform. Respons sukses menggunakan <code>data</code> dan <code>meta</code>; respons gagal memuat <code>error.code</code> dan <code>error.message</code>.</p>
    </section>
    <section aria-label="Katalog API" className="grid items-start gap-6 lg:grid-cols-2">
      {apiCatalog.map((api) => {
        const request = requests[api.id];
        return <article key={api.id} className="min-w-0 space-y-5 rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-7">
          <div><h2 className="text-2xl font-bold">{api.name}</h2><p className="mt-3 text-sm leading-relaxed text-text-secondary">{api.description}</p></div>
          {request && <><p className="text-xs text-text-muted">Scope: <code className="font-semibold text-foreground">{request.scope}</code> atau <code>api_store:all</code></p><CodeExample label={`${request.body ? "POST" : "GET"} · Contoh request`} code={requestExample(request)} /></>}
          {api.id === "nik-parser-indonesia" && <p className="text-sm leading-relaxed text-text-secondary">Ganti <code>YOUR_NIK</code> dengan nilai NIK yang ingin diparse. Parser membaca struktur NIK; hasilnya bukan verifikasi identitas atau pemeriksaan KYC.</p>}
          <a href={api.platformUrl} className="inline-block text-sm font-semibold text-primary underline underline-offset-4">Lihat {api.name} di platform →</a>
        </article>;
      })}
    </section>
    <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <h2 className="text-xl font-bold">Referensi integrasi</h2>
      <p className="mt-3 text-sm leading-relaxed text-text-secondary">Baca parameter, pagination, struktur respons, serta kode error di <a href={`${apiStore.docsUrl}/api-store`} className="font-semibold text-primary underline underline-offset-4">dokumentasi API Store</a>. Contoh di atas menunjukkan bentuk request, bukan respons dari akun produksi.</p>
    </section>
  </ProductLayout>
);

export default ApiStore;
