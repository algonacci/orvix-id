import { Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { docsUrl, platformUrl } from "@/data/pricing";
import { contactCopy, emailPlaceholder, locationLabel, whatsappDisplay, whatsappUrl } from "@/data/siteContent";
import ProductLayout, { PlatformLink } from "./products/ProductLayout";

const Kontak = () => (
  <ProductLayout title="Hubungi Orvix" eyebrow="Kontak · Orvix Cloud Platform" description={contactCopy}>
    <section aria-labelledby="contact-title">
      <h2 id="contact-title" className="text-3xl font-bold">Diskusikan kebutuhan Anda</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">Hubungi kami untuk pertanyaan produk, billing, atau ruang lingkup proyek enterprise. Orvix ditujukan untuk developer dan bisnis di {locationLabel}.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="rounded-3xl border border-slate-200 bg-white p-6 transition-colors hover:border-cyan-400 sm:p-8"><MessageCircle size={28} className="text-cyan-700" aria-hidden="true" /><h3 className="mt-5 text-xl font-bold">WhatsApp</h3><p className="mt-3 text-xl font-semibold">{whatsappDisplay}</p><p className="mt-3 text-sm leading-relaxed text-slate-600">Ceritakan produk yang ingin Anda gunakan atau kebutuhan proyek Anda.</p><span className="mt-5 inline-block text-sm font-semibold text-cyan-700">Mulai percakapan →</span></a>
        <a href={`mailto:${emailPlaceholder}`} className="rounded-3xl border border-slate-200 bg-white p-6 transition-colors hover:border-cyan-400 sm:p-8"><Mail size={28} className="text-cyan-700" aria-hidden="true" /><h3 className="mt-5 text-xl font-bold">Email</h3><p className="mt-3 break-all text-xl font-semibold">{emailPlaceholder}</p><p className="mt-3 text-sm leading-relaxed text-slate-600">Kirim pertanyaan integrasi atau rangkuman kebutuhan untuk didiskusikan.</p><span className="mt-5 inline-block text-sm font-semibold text-cyan-700">Kirim email →</span></a>
      </div>
    </section>
    <section aria-labelledby="start-title" className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
      <h2 id="start-title" className="text-2xl font-bold">Mulai dari platform atau dokumentasi</h2><p className="mt-4 max-w-3xl leading-relaxed text-slate-600">Buka platform untuk mengelola produk dan saldo Anda. Untuk integrasi API, lihat panduan penggunaan di dokumentasi.</p><div className="mt-6 flex flex-wrap items-center gap-5"><PlatformLink href={platformUrl}>Buka platform</PlatformLink><a href={docsUrl} className="text-sm font-semibold text-cyan-700 underline underline-offset-4">Baca dokumentasi</a><Link to="/layanan" className="text-sm font-semibold text-cyan-700 underline underline-offset-4">Kebutuhan enterprise</Link></div>
    </section>
    <section className="max-w-3xl"><h2 className="text-xl font-bold">Apa yang perlu diceritakan?</h2><p className="mt-4 text-sm leading-relaxed text-slate-600">Sebutkan tujuan aplikasi, produk yang sedang digunakan, dan kendala yang Anda temui. Untuk kebutuhan enterprise, sertakan gambaran workload dan ruang lingkup yang ingin dibahas. Jika lokasi pemrosesan data menjadi persyaratan proyek, tanyakan untuk layanan yang akan Anda gunakan.</p></section>
  </ProductLayout>
);

export default Kontak;
