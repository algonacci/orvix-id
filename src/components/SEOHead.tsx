import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import {
  defaultOgImage,
  ogImageBase,
  services,
  siteDescription,
  siteKeywords,
  siteLocale,
  siteName,
  siteTitle,
  siteUrl,
} from "@/data/siteContent";

type SEOHeadProps = {
  /** Page title without the site suffix. Omit on the home page. */
  title?: string;
  description?: string;
  /** Appended to the site-wide keyword list. */
  keywords?: string;
  /** Canonical path override, e.g. "/services". Defaults to the current route. */
  path?: string;
  /** Absolute image URL override. Falls back to the banner for this route. */
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
};

const serviceSlugs = new Set(services.map((service) => service.slug));

/**
 * Maps a route to its pre-rendered banner in public/og/.
 *
 * The home page deliberately keeps /og.jpg rather than banner_home.webp: it is
 * the same artwork, but index.html hardcodes the JPEG as the static default, and
 * serving two different URLs for one page confuses scrapers that read the shell
 * before React swaps the tags in.
 */
function resolveOgImage(pathname: string): string {
  const segments = pathname.replace(/^\/+|\/+$/g, "").split("/").filter(Boolean);

  if (segments.length === 0) return defaultOgImage;

  const [first, second] = segments;

  if (first === "services") {
    if (second && serviceSlugs.has(second)) {
      return `${ogImageBase}/banner_service-${second}.webp`;
    }
    return `${ogImageBase}/banner_services.webp`;
  }

  if (segments.length === 1 && (first === "about" || first === "contact")) {
    return `${ogImageBase}/banner_${first}.webp`;
  }

  return defaultOgImage;
}

function buildBreadcrumbs(pathname: string, pageTitle: string) {
  const segments = pathname.replace(/^\/+|\/+$/g, "").split("/").filter(Boolean);
  if (segments.length === 0) return null;

  const items = [{ name: "Beranda", url: `${siteUrl}/` }];

  if (segments[0] === "services") {
    items.push({ name: "Enterprise Solutions", url: `${siteUrl}/services` });
    if (segments[1]) {
      items.push({ name: pageTitle, url: `${siteUrl}${pathname}` });
    }
  } else {
    items.push({ name: pageTitle, url: `${siteUrl}${pathname}` });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

const SEOHead = ({
  title,
  description,
  keywords,
  path,
  image,
  type = "website",
  noindex = false,
}: SEOHeadProps) => {
  const location = useLocation();
  const pathname = path ?? location.pathname;

  const fullTitle = title ? `${title} - ${siteName}` : siteTitle;
  const finalDescription = description ?? siteDescription;
  const finalKeywords = keywords ? `${keywords}, ${siteKeywords}` : siteKeywords;
  const canonical = `${siteUrl}${pathname === "/" ? "/" : pathname}`;
  const ogImage = image ?? resolveOgImage(pathname);
  const ogImageType = ogImage.endsWith(".webp") ? "image/webp" : "image/jpeg";
  const breadcrumbs = noindex ? null : buildBreadcrumbs(pathname, title ?? siteName);

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: fullTitle,
    description: finalDescription,
    url: canonical,
    inLanguage: "id-ID",
    // Reference the WebSite node declared in index.html's @graph rather than
    // repeating it — a duplicate node makes Google guess whether the two
    // describe the same entity.
    isPartOf: { "@id": `${siteUrl}/#website` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: ogImage,
      width: 1200,
      height: 630,
    },
  };

  return (
    // defer={false} matters: Helmet's default commits the head via
    // requestAnimationFrame, which never fires in a backgrounded or headless
    // page — so the tags silently stay at the index.html defaults. Committing
    // on mount instead keeps prerenderers and hidden tabs correct.
    <Helmet prioritizeSeoTags defer={false}>
      <title>{fullTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <link rel="canonical" href={canonical} />
      <meta
        name="robots"
        content={
          noindex
            ? "noindex, nofollow"
            : "index, follow, max-image-preview:large, max-snippet:-1"
        }
      />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={siteLocale} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:type" content={ogImageType} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={fullTitle} />

      <script type="application/ld+json">{JSON.stringify(webPage)}</script>
      {breadcrumbs ? (
        <script type="application/ld+json">{JSON.stringify(breadcrumbs)}</script>
      ) : null}
    </Helmet>
  );
};

export default SEOHead;
