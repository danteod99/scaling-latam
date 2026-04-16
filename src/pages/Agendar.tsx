import Navbar from "@/components/Navbar";
import VideoSection from "@/components/VideoSection";
import Testimonials from "@/components/Testimonials";
import BrandsSection from "@/components/BrandsSection";
import ComparisonSection from "@/components/ComparisonSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Agendar = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Conoce Scaling — Tu Granja de Bots Personalizada"
        description="Mira cómo funciona el sistema Scaling y diseña tu propia granja de bots. Automatización inteligente para generar ingresos en redes sociales."
        path="/agendar"
      />
      <Navbar />
      <div className="pt-20">
        <VideoSection />

        <section id="iniciar-quiz" className="py-20 md:py-28 relative bg-[#0A0A0A] overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[200px]" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan/40 bg-cyan/10 mb-6">
              <Sparkles className="w-4 h-4 text-cyan" />
              <span className="text-xs font-bold tracking-wider uppercase text-cyan">Tu plan personalizado en 2 minutos</span>
            </div>
            <h2
              className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-wider glow-text"
              style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}
            >
              Inicia el Quiz
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Responde 8 preguntas rápidas y recibe un plan personalizado para tu granja de bots.
            </p>
            <Link to="/quiz">
              <Button size="lg" className="relative text-lg px-10 py-7 bg-primary hover:bg-cyan text-primary-foreground font-bold tracking-wider uppercase animate-halo group overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Iniciar Quiz
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan to-primary bg-[length:200%_100%] animate-shimmer opacity-50" />
              </Button>
            </Link>
          </div>
        </section>

        <Testimonials />
        <BrandsSection />
        <ComparisonSection />
      </div>
      <Footer />
    </div>
  );
};

export default Agendar;
