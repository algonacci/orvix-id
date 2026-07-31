import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyOrvixSection from "@/components/WhyOrvixSection";
import InfrastructureStackSection from "@/components/InfrastructureStackSection";
import WorkflowSection from "@/components/WorkflowSection";
import FaqSection from "@/components/FaqSection";
import FinalCtaSection from "@/components/FinalCtaSection";
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
    <WhyOrvixSection />
    <ServicesSection />
    <WorkflowSection />
    <InfrastructureStackSection />
    <FaqSection />
    <FinalCtaSection />
  </>
);

export default Index;
