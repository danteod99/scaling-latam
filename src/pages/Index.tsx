import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import UseCases from "@/components/UseCases";
import Technology from "@/components/Technology";
import Testimonials from "@/components/Testimonials";
import Calendly from "@/components/Calendly";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Benefits />
      <UseCases />
      <Technology />
      <Testimonials />
      <Calendly />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
