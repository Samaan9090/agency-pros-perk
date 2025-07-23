import BenefitsHero from "@/components/BenefitsHero";
import BenefitsGrid from "@/components/BenefitsGrid";
import StatsSection from "@/components/StatsSection";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <BenefitsHero />
      <BenefitsGrid />
      <StatsSection />
      <HowItWorks />
      <Testimonials />
      <CTASection />
    </div>
  );
};

export default Index;
