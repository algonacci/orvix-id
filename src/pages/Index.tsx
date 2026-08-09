import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/HeroSection";
import PlatformSection from "@/components/PlatformSection";
import EnterpriseSection from "@/components/EnterpriseSection";
import WhyOrvixSection from "@/components/WhyOrvixSection";
import InfrastructureStackSection from "@/components/InfrastructureStackSection";
import WorkflowSection from "@/components/WorkflowSection";
import FaqSection from "@/components/FaqSection";
import FinalCtaSection from "@/components/FinalCtaSection";

const Index = () => (
  <>
    <SEOHead path="/" />
    <HeroSection />
    <PlatformSection />
    <WhyOrvixSection />
    <EnterpriseSection />
    <WorkflowSection />
    <InfrastructureStackSection />
    <FaqSection />
    <FinalCtaSection />
  </>
);

export default Index;
