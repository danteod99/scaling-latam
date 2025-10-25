import Navbar from "@/components/Navbar";
import Calendly from "@/components/Calendly";
import Footer from "@/components/Footer";

const Agendar = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <Calendly />
      </div>
      <Footer />
    </div>
  );
};

export default Agendar;
