import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import UseCases from "@/components/UseCases";
import Technology from "@/components/Technology";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Scaling LATAM — Granjas de Bots Inteligentes | Automatiza tu Crecimiento Digital"
        description="Arma tu granja de bots con dispositivos reales. Multiplica tu alcance en YouTube, TikTok, Spotify y Facebook. Genera ingresos 24/7 con automatización inteligente."
        path="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Scaling LATAM",
          url: "https://www.scalinglatam.site",
          description: "Granjas de bots inteligentes para automatizar tu crecimiento en redes sociales.",
          founder: { "@type": "Person", name: "Dante Oliveros" },
          sameAs: ["https://www.skool.com/artificial-humans-7653/about"],
        }}
      />
      <Navbar />
      <Hero />
      <Benefits />
      <UseCases />
      <Technology />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
