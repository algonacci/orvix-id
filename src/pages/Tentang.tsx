import { Helmet } from "react-helmet-async";
import { industries, siteUrl, whyOrvix } from "@/data/siteContent";

const Tentang = () => (
  <div className="pt-24">
    <Helmet>
      <title>Tentang Orvix.id</title>
      <meta
        name="description"
        content="Kenali Orvix.id sebagai partner cloud dan managed infrastructure untuk deployment, hosting, security, monitoring, dan maintenance bisnis."
      />
      <link rel="canonical" href={`${siteUrl}/about`} />
    </Helmet>

    <section className="infra-shell bg-background py-24">
      <div className="mx-auto max-w-5xl px-6">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
          Tentang Orvix.id
        </span>
        <h1 className="mt-4 text-4xl font-extrabold text-foreground sm:text-5xl">
          Orvix.id membantu bisnis memiliki infrastruktur yang lebih terkelola, aman, dan siap
          berkembang
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-text-secondary">
          Kami fokus pada cloud, server, deployment, backup, monitoring, DevOps, dan managed
          support untuk bisnis yang membutuhkan partner teknis tanpa harus membangun tim
          infrastruktur besar dari awal.
        </p>
      </div>
    </section>

    <section className="bg-light-bg py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
            Fokus Utama
          </span>
          <h2 className="mt-4 text-3xl font-bold text-light-text sm:text-4xl">
            Bukan general IT support, tetapi managed cloud dan infrastruktur yang dekat dengan
            kebutuhan operasional modern
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {whyOrvix.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50">
                  <Icon size={22} className="text-cyan-700" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-light-text">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    <section className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
            Siapa yang cocok
          </span>
          <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
            Dirancang untuk bisnis yang membutuhkan reliability tanpa overhead operasional berlebih
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-text-secondary">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Tentang;
