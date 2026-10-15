import { Link } from "react-router-dom";
import { billing, community, liveProducts, roadmapIntro, roadmapProducts } from "@/data/products";
import { platformUrl } from "@/data/pricing";
import { enterpriseScopeNote } from "@/data/siteContent";
import ProductLayout, { PlatformLink } from "./products/ProductLayout";

const Tentang = () => (
  <ProductLayout title="Tentang Orvix Cloud Platform" eyebrow="Tentang Orvix" description="Cloud platform untuk developer Indonesia. Kami membangun tempat untuk menggunakan layanan pengembangan aplikasi dalam satu akun, dengan billing rupiah." actions={<PlatformLink href={platformUrl}>Buka platform</PlatformLink>}>
    <section aria-labelledby="focus-title" className="max-w-4xl">
      <h2 id="focus-title" className="text-3xl font-bold">Cloud platform, dimulai dari yang tersedia</h2>
      <p className="mt-5 leading-relaxed text-text-secondary">Visi Orvix adalah membantu developer membangun, menjalankan, dan mengembangkan aplikasi melalui satu cloud platform. Layanan AI menjadi pintu masuk saat ini; setiap produk tetap berada di bawah Orvix Cloud Platform.</p>
      <p className="mt-4 leading-relaxed text-text-secondary">{billing.description}</p>
    </section>
    <section aria-labelledby="live-title">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Tersedia sekarang</p>
      <h2 id="live-title" className="mt-3 text-3xl font-bold">Produk yang dapat Anda gunakan</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {liveProducts.map((product) => <Link key={product.id} to={product.path ?? "/harga"} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-cyan-400"><h3 className="text-xl font-bold">{product.name}</h3><p className="mt-3 text-sm leading-relaxed text-text-secondary">{product.description}</p><span className="mt-4 inline-block text-sm font-semibold text-primary">Pelajari produk →</span></Link>)}
      </div>
    </section>
    <section className="grid gap-8 md:grid-cols-2">
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"><h2 className="text-2xl font-bold">Untuk kebutuhan enterprise</h2><p className="mt-4 text-sm leading-relaxed text-text-secondary">{enterpriseScopeNote}</p><Link to="/layanan" className="mt-5 inline-block text-sm font-semibold text-primary underline underline-offset-4">Lihat layanan enterprise →</Link></div>
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"><h2 className="text-2xl font-bold">Bersama komunitas developer</h2><p className="mt-4 font-semibold">{community.name}</p><p className="mt-3 text-sm leading-relaxed text-text-secondary">{community.description}</p></div>
    </section>
    <section aria-labelledby="roadmap-title" className="border-t border-white/10 pt-8">
      <h2 id="roadmap-title" className="text-2xl font-bold">Segera</h2><p className="mt-4 text-sm leading-relaxed text-text-secondary">{roadmapIntro}</p><ul className="mt-5 flex flex-wrap gap-2">{roadmapProducts.map((product) => <li key={product.id} className="rounded-lg border border-white/10 px-3 py-2 text-sm text-text-muted">{product.name}</li>)}</ul>
    </section>
  </ProductLayout>
);

export default Tentang;
