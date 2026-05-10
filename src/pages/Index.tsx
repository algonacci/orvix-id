import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import { siteDescription, siteTitle, siteUrl } from "@/data/siteContent";

const Index = () => (
  <>
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <link rel="canonical" href={`${siteUrl}/`} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
    </Helmet>
    <HeroSection />
    <ServicesSection />
  </>
);

export default Index;
