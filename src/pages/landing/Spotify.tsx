import { Music, ListMusic, DollarSign, Bot, BarChart3, RefreshCw, Mic, Piano, Disc3, Headphones, Globe } from "lucide-react";
import LandingTemplate from "@/components/LandingTemplate";

const LandingSpotify = () => (
  <LandingTemplate
    badge="Especialistas en Spotify Growth · +50M streams entregados"
    headlineTop="MONETIZA TU MÚSICA EN"
    headlineHighlight="SPOTIFY"
    subheadline="Más streams, más oyentes mensuales, más playlists. La plataforma que usan artistas independientes en toda Latam para vivir de su música."
    ctaText="Agenda tu llamada gratis"
    ctaSubtext="Consultoría gratuita para artistas · Sin compromiso"
    stats={[
      { value: "50M+", label: "Streams entregados" },
      { value: "2,000+", label: "Artistas activos" },
      { value: "500+", label: "Playlists disponibles" },
      { value: "98%", label: "Tasa de retención" },
    ]}
    featuresTitle="Todo para crecer en"
    featuresHighlight="Spotify"
    features={[
      { icon: Music, title: "Streams de calidad", description: "Streams con retención alta que cuentan para royalties. Proveedores premium verificados. Tu música genera ingresos reales." },
      { icon: ListMusic, title: "Playlisting profesional", description: "Acceso a playlists orgánicas y editoriales. Inclusión en playlists con miles de seguidores que impulsan tu alcance." },
      { icon: DollarSign, title: "Monetización real", description: "Streams que cuentan para royalties en Spotify. Cada reproducción es dinero. Recupera tu inversión y más." },
      { icon: Bot, title: "Estrategia con bots", description: "Granjas de bots configuradas específicamente para streaming musical. Anti-detección y comportamiento humano realista." },
      { icon: BarChart3, title: "Analytics completo", description: "Ve cómo crecen tus streams, oyentes mensuales y saves. Dashboard completo con métricas que importan." },
      { icon: RefreshCw, title: "Multi-plataforma", description: "No solo Spotify — también YouTube Music, Apple Music, SoundCloud, Deezer y más. Crece en todas las plataformas." },
    ]}
    useCasesTitle="Cómo usan Scaling los"
    useCasesHighlight="artistas"
    useCases={[
      { icon: Mic, title: "Independientes", description: "Sube tu música y empieza a generar streams reales. Sin discográfica, sin intermediarios. Tú controlas tu crecimiento." },
      { icon: Piano, title: "Productores", description: "Promociona tus beats y producciones. Más plays = más clientes que te buscan para colaborar." },
      { icon: Globe, title: "Música latina", description: "Reggaetón, trap, cumbia, dembow, salsa, bachata — servicios optimizados para todos los géneros latinos." },
    ]}
    testimonials={[
      { name: "Sebastián T.", role: "Artista trap · Colombia", text: "En 2 meses pasé de 500 a 15K oyentes mensuales. Ya estoy generando royalties reales. Me armaron toda la estrategia.", country: "🇨🇴" },
      { name: "Camila F.", role: "Cantante indie · México", text: "Mi single entró en 3 playlists algorítmicas gracias al impulso inicial. Ahora Spotify me recomienda sola. Increíble.", country: "🇲🇽" },
      { name: "Los Primates", role: "Banda de cumbia · Perú", text: "Nuestro álbum llegó a 200K streams en el primer mes. El ROI fue brutal. Ahora toda la banda vive de la música.", country: "🇵🇪" },
    ]}
    finalCtaTitle="¿Listo para vivir de"
    finalCtaHighlight="tu música?"
    finalCtaSubtitle="Más de 2,000 artistas ya monetizan con Scaling — agenda tu llamada gratuita"
  />
);

export default LandingSpotify;
