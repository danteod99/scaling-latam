import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import UseCases from "@/components/UseCases";
import Technology from "@/components/Technology";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <UseCases />
      <Technology />
      <Testimonials />
      <FinalCTA />
    </div>
  );
};

export default Index;
