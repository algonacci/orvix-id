import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { emailPlaceholder, faqs, pricingFaqs, siteLocale, siteName, siteUrl, whatsappNumber } from "@/data/siteContent";
import { aiPlan, allPlans, formatNumber, formatTokens, formatValidity, pricingCopy, tokenPlans } from "@/data/pricing";
import { canonicalPath, getMetadata } from "../../scripts/seo-metadata.mjs";

type SEOHeadProps = {
  title?: string;
  description?: string;
  keywords?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
};

const organization = {
  "@type": "Organization", "@id": `${siteUrl}/#organization`,
  name: siteName, alternateName: "Orvix", url: siteUrl,
  logo: `${siteUrl}/logo.png`, image: `${siteUrl}/og.jpg`,
  description: getMetadata("/").description,
  telephone: `+${whatsappNumber}`, email: emailPlaceholder,
};
const website = {
  "@type": "WebSite", "@id": `${siteUrl}/#website`, name: siteName,
  url: `${siteUrl}/`, inLanguage: "id-ID", publisher: { "@id": organization["@id"] },
};

function pricingProducts() {
  return allPlans.map((plan) => {
    const variants = tokenPlans.find((token) => token.id === plan.id)?.variants ?? [plan];
    const detail = plan.id === aiPlan.id ? `${pricingCopy.fairUse} ${aiPlan.lineupNote}` : pricingCopy.tokenRate;
    return {
      "@type": "Product", "@id": `${siteUrl}/harga#${plan.id}`,
      name: plan.name, description: `${plan.audience} ${plan.id === aiPlan.id ? detail : ""}`.trim(),
      image: `${siteUrl}/og/banner_harga.webp`, brand: { "@type": "Brand", name: "Orvix" },
      offers: variants.map((variant) => {
        const quota = variant.tokens !== null ? formatTokens(variant.tokens) : plan.credits !== null ? `${formatNumber(plan.credits)} kredit` : "Fair use";
        return {
          "@type": "Offer", "@id": `${siteUrl}/harga#${plan.id}-${variant.id}-offer`,
          name: `${plan.name} — ${quota} · ${formatValidity(variant.validityDays)}`,
          description: `${quota}. ${formatValidity(variant.validityDays)}. ${plan.category === "token" || plan.category === "ai" ? detail : plan.audience} ${pricingCopy.footnote}`,
          price: plan.priceIdr, priceCurrency: "IDR", url: plan.platformUrl,
          availability: "https://schema.org/InStock", seller: { "@id": organization["@id"] },
        };
      }),
    };
  });
}

const SEOHead = ({ path, image, type = "website", noindex = false }: SEOHeadProps) => {
  const location = useLocation();
  const pathname = noindex ? "/404" : canonicalPath(path ?? location.pathname);
  const meta = getMetadata(pathname);
  const canonical = `${siteUrl}${pathname}`;
  const ogImage = image ?? `${siteUrl}${meta.image}`;
  const items = [{ name: "Beranda", item: `${siteUrl}/` }];
  if (pathname.startsWith("/services/")) items.push({ name: "Layanan enterprise", item: `${siteUrl}/layanan` });
  items.push({ name: meta.title, item: canonical });
  const pageFaqs = pathname === "/" ? faqs : pathname === "/harga" ? pricingFaqs : [];
  const graph = [
    // Define each referenced entity once in this page's graph; no global shell graph.
    ...(!noindex ? [organization, website] : []),
    {
      "@type": "WebPage", "@id": `${canonical}#webpage`, name: meta.title,
      description: meta.description, url: canonical, inLanguage: "id-ID",
      ...(!noindex ? { isPartOf: { "@id": website["@id"] } } : {}),
      primaryImageOfPage: { "@type": "ImageObject", url: ogImage, width: 1200, height: 630 },
    },
    ...(!noindex && pathname !== "/" ? [{
      "@type": "BreadcrumbList", itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, ...item })),
    }] : []),
    ...(pathname === "/harga" ? pricingProducts() : []),
    ...(pageFaqs.length ? [{
      "@type": "FAQPage", "@id": `${canonical}#faq`,
      mainEntity: pageFaqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
    }] : []),
  ];

  return (
    <Helmet prioritizeSeoTags defer={false}>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keyword} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1"} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={siteLocale} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:type" content={ogImage.endsWith(".webp") ? "image/webp" : "image/jpeg"} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={meta.title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={meta.title} />
      <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c")}</script>
    </Helmet>
  );
};
export default SEOHead;
