import Navbar from "@/components/Navbar";
import VideoSection from "@/components/VideoSection";
import Testimonials from "@/components/Testimonials";
import BrandsSection from "@/components/BrandsSection";
import Calendly from "@/components/Calendly";
import ComparisonSection from "@/components/ComparisonSection";
import Footer from "@/components/Footer";

const Agendar = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <VideoSection />
        <Testimonials />
        <BrandsSection />
        <Calendly />
        <ComparisonSection />
      </div>
      <Footer />
    </div>
  );
};

export default Agendar;
