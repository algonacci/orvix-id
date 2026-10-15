import { billing, domainContent } from "@/data/products";
import { formatNumber } from "@/data/pricing";
import ProductLayout, { PlatformLink } from "./ProductLayout";

const Domain = () => (
  <ProductLayout title="Domain dalam akun Orvix Anda" description={domainContent.description} actions={<PlatformLink href={domainContent.platformUrl}>Cari domain di platform</PlatformLink>}>
    <section aria-labelledby="tld-title">
      <h2 id="tld-title" className="text-3xl font-bold">Pilihan ekstensi domain</h2>
      <p className="mt-4 leading-relaxed text-text-secondary">Tersedia {formatNumber(domainContent.totalTlds)} TLD. Berikut sebagian pilihan yang dapat Anda cari di platform.</p>
      <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">{domainContent.tlds.map((tld) => <li key={tld} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-6 text-center text-xl font-bold">{tld}</li>)}</ul>
    </section>
    <section aria-labelledby="balance-title" className="grid gap-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 md:grid-cols-2">
      <div><h2 id="balance-title" className="text-2xl font-bold">Bayar dari saldo Orvix</h2><p className="mt-4 leading-relaxed text-text-secondary">{billing.description}</p><div className="mt-6"><PlatformLink href={billing.platformUrl}>Buka saldo organisasi</PlatformLink></div></div>
      <div><h3 className="text-xl font-bold">Kelola melalui akun yang sama</h3><p className="mt-4 leading-relaxed text-text-secondary">Pendaftaran dan pengelolaan domain tersedia melalui akun Orvix Anda. Buka halaman Domain untuk memeriksa pilihan domain dan harga terbaru.</p><p className="mt-4 text-sm leading-relaxed text-text-muted">Harga domain dapat berubah. Periksa harga di platform sebelum mendaftar.</p><div className="mt-6"><PlatformLink href={domainContent.platformUrl}>Buka halaman Domain</PlatformLink></div></div>
    </section>
  </ProductLayout>
);

export default Domain;
