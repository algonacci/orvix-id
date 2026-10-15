import { aiPlan, aiPlanModelFamilies, codingPlan, formatIdr, formatNumber, formatTokens, formatValidity, imageCredits, pricingCopy, pricingGroups, tokenPlans } from "@/data/pricing";
import { billing, codingPlugins } from "@/data/products";
import { pricingFaqs } from "@/data/siteContent";
import ProductLayout, { PlatformLink } from "./products/ProductLayout";

const Harga = () => (
  <ProductLayout title="Harga dalam rupiah" description="Pilih paket sesuai cara Anda memakai AI: kuota token, pemakaian rutin dengan fair use, coding agent, atau pembuatan gambar." actions={<PlatformLink href={billing.platformUrl}>Isi saldo melalui {billing.paymentMethod}</PlatformLink>}>
    <section aria-labelledby="token-title">
      <p className="text-sm font-semibold text-cyan-700">{pricingCopy.currency}</p>
      <h2 id="token-title" className="mt-3 text-3xl font-bold">{pricingGroups.find((group) => group.id === "token")?.title}</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">Untuk Anda yang ingin memilih kuota sesuai kebutuhan, dengan pilihan masa berlaku atau tanpa kedaluwarsa. {pricingCopy.tokenRate}</p>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">Harga berlaku untuk salah satu varian yang Anda pilih. Kuota varian dengan masa berlaku dan tanpa kedaluwarsa berbeda; keduanya bukan kuota gabungan.</p>
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {tokenPlans.map((plan) => (
          <article key={plan.id} className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold">{plan.name}</h3>
            <p className="mt-3 text-3xl font-extrabold tracking-tight">{formatIdr(plan.priceIdr)}</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">{plan.audience}</p>
            <ul className="my-6 space-y-3">
              {plan.variants.map((variant) => (
                <li key={variant.id} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-medium text-slate-500">{variant.id === "expiring" ? "Dengan masa berlaku" : "Tanpa kedaluwarsa"}</p>
                  <p className="mt-2 font-semibold">{formatTokens(variant.tokens)}</p>
                  <p className="mt-1 text-sm text-slate-600">{variant.validityDays === null ? "Tidak kedaluwarsa" : `Berlaku ${formatValidity(variant.validityDays)}`}</p>
                </li>
              ))}
              {!plan.variants.some((variant) => variant.id === "no-expiry") && <li className="px-1 text-xs leading-relaxed text-slate-500">Pilihan tanpa kedaluwarsa tidak tersedia untuk paket ini.</li>}
            </ul>
            <div className="mt-auto"><PlatformLink href={plan.platformUrl}>Pilih {plan.name}</PlatformLink></div>
          </article>
        ))}
      </div>
    </section>

    <section aria-labelledby="ai-title" className="rounded-3xl border border-cyan-200 bg-white p-6 sm:p-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold text-cyan-700">{aiPlan.tagline}</p>
          <h2 id="ai-title" className="mt-3 text-3xl font-bold">{aiPlan.name}</h2>
          <p className="mt-4 text-3xl font-extrabold">{formatIdr(aiPlan.priceIdr)} <span className="text-base font-normal text-slate-500">/ {formatValidity(aiPlan.validityDays)}</span></p>
          <p className="mt-4 leading-relaxed text-slate-600">{aiPlan.audience}</p>
          <div className="mt-6"><PlatformLink href={aiPlan.platformUrl}>Pilih AI Plan</PlatformLink></div>
        </div>
        <div className="rounded-2xl bg-slate-50 p-6">
          <h3 className="text-lg font-bold">Batas pemakaian wajar (fair use)</h3>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-relaxed text-slate-600">
            <li>{formatNumber(aiPlan.fairUse.requestsPerMinute)} request per menit.</li>
            <li>{formatNumber(aiPlan.fairUse.concurrentRequests)} request bersamaan.</li>
            <li>Hingga {formatTokens(aiPlan.fairUse.dailyTokens)} per hari.</li>
            <li>Token cache dihitung {formatNumber(aiPlan.fairUse.cachedTokenPercent)}%.</li>
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-slate-600">Lineup mencakup {aiPlanModelFamilies.join(", ")}, dan lainnya. {aiPlan.lineupNote}</p>
        </div>
      </div>
    </section>

    <div className="grid gap-6 md:grid-cols-2">
      <section aria-labelledby="coding-title" className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
        <h2 id="coding-title" className="text-2xl font-bold">{codingPlan.name}</h2>
        <p className="mt-4 text-3xl font-extrabold">{formatIdr(codingPlan.priceIdr)} <span className="text-base font-normal text-slate-500">/ {formatValidity(codingPlan.validityDays)}</span></p>
        <p className="mt-4 font-semibold">{formatTokens(codingPlan.tokens)} untuk coding</p>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">{codingPlan.audience} Plugin tersedia untuk {codingPlugins.join(", ")}.</p>
        <div className="mt-6"><PlatformLink href={codingPlan.platformUrl}>Pilih Coding Plan</PlatformLink></div>
      </section>
      <section aria-labelledby="image-title" className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
        <h2 id="image-title" className="text-2xl font-bold">{imageCredits.name}</h2>
        <p className="mt-4 text-3xl font-extrabold">{formatIdr(imageCredits.priceIdr)}</p>
        <p className="mt-4 font-semibold">{formatNumber(imageCredits.credits)} kredit · Berlaku {formatValidity(imageCredits.validityDays)}</p>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">{imageCredits.audience}</p>
        <div className="mt-6"><PlatformLink href={imageCredits.platformUrl}>Beli Image Credits</PlatformLink></div>
      </section>
    </div>

    <p className="border-y border-slate-200 py-5 text-sm leading-relaxed text-slate-600">{pricingCopy.footnote}</p>

    <section aria-labelledby="faq-title" className="max-w-4xl">
      <h2 id="faq-title" className="text-3xl font-bold">Pertanyaan tentang paket</h2>
      <div className="mt-8 divide-y divide-slate-200">
        {pricingFaqs.map((faq) => <details key={faq.question} className="group py-5"><summary className="cursor-pointer font-semibold leading-relaxed">{faq.question}</summary><p className="mt-4 text-sm leading-relaxed text-slate-600">{faq.answer}</p></details>)}
      </div>
    </section>
  </ProductLayout>
);

export default Harga;
