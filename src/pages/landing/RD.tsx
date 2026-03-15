import { Smartphone, Music, Bot, CreditCard, BarChart3, Flame, Mic, Store, Camera, Building2 } from "lucide-react";
import LandingTemplate from "@/components/LandingTemplate";

const LandingRD = () => (
  <LandingTemplate
    countryFlag="🇩🇴"
    badge="Plataforma #1 en República Dominicana"
    headlineTop="DOMINA LAS REDES"
    headlineHighlight="DESDE REPÚBLICA DOMINICANA"
    subheadline="Automatiza tu crecimiento en Instagram, TikTok, YouTube y Spotify. La herramienta preferida por emprendedores y artistas dominicanos."
    ctaText="Agenda tu llamada gratis"
    ctaSubtext="Consultoría gratuita · Sin compromiso · En español"
    stats={[
      { value: "2,500+", label: "Usuarios en RD" },
      { value: "15M+", label: "Seguidores entregados" },
      { value: "$0.50", label: "Precio desde / 1K" },
      { value: "24/7", label: "Soporte en español" },
    ]}
    featuresTitle="Hecho para el"
    featuresHighlight="mercado dominicano"
    features={[
      { icon: Smartphone, title: "Instagram & TikTok", description: "Seguidores, likes, views y comentarios optimizados para cuentas dominicanas. Engagement real que impulsa el algoritmo." },
      { icon: Music, title: "Promoción musical", description: "Impulsa tu dembow, bachata o trap dominicano. Streams en Spotify, views en YouTube y promoción en todas las plataformas." },
      { icon: Bot, title: "Bots inteligentes", description: "Granjas de bots configuradas para el mercado caribeño. Anti-detección avanzada y comportamiento humano realista." },
      { icon: CreditCard, title: "Pagos accesibles", description: "Crypto, tarjeta y más. Precios en USD accesibles para el mercado dominicano. Sin mínimos altos." },
      { icon: BarChart3, title: "Dashboard completo", description: "+5,000 servicios disponibles. Monitorea tus pedidos en tiempo real. Historial completo de todas tus órdenes." },
      { icon: Flame, title: "Resultados rápidos", description: "Entrega en minutos para la mayoría de servicios. Tu cuenta empieza a crecer desde el primer pedido." },
    ]}
    useCasesTitle="Para quién es Scaling en"
    useCasesHighlight="RD"
    useCases={[
      { icon: Mic, title: "Artistas urbanos", description: "Promociona tu dembow y trap en Spotify, YouTube y TikTok. Gana streams y visibilidad sin gastar una fortuna." },
      { icon: Store, title: "Negocios locales", description: "Restaurantes, barbershops, tiendas en Santo Domingo — crece tu Instagram con seguidores dominicanos reales." },
      { icon: Camera, title: "Influencers", description: "Impulsa tus métricas para conseguir mejores deals con marcas. Likes, views y engagement automatizado." },
    ]}
    testimonials={[
      { name: "Carlos M.", role: "Artista urbano · Santo Domingo", text: "Mis tracks tienen 3x más streams desde que uso Scaling. El equipo me ayudó a configurar todo en minutos.", country: "🇩🇴" },
      { name: "María P.", role: "Dueña de salón · Santiago", text: "Mi Instagram pasó de 2K a 15K seguidores en un mes. Ahora tengo más clientes que nunca. Súper recomendado.", country: "🇩🇴" },
      { name: "Juan R.", role: "Agencia digital · Punta Cana", text: "Revendo los servicios a mis clientes de turismo. Los precios son imbatibles y la calidad es consistente.", country: "🇩🇴" },
    ]}
    finalCtaTitle="¿Listo para crecer en"
    finalCtaHighlight="República Dominicana?"
    finalCtaSubtitle="Únete a miles de dominicanos que ya automatizan su crecimiento digital"
  />
);

export default LandingRD;
