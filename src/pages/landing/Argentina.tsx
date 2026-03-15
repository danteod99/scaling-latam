import { Smartphone, Music, Bot, Wallet, RefreshCw, Zap, Mic, ShoppingBag, Video, BarChart3 } from "lucide-react";
import LandingTemplate from "@/components/LandingTemplate";

const LandingArgentina = () => (
  <LandingTemplate
    countryFlag="🇦🇷"
    badge="Plataforma #1 para creadores argentinos"
    headlineTop="HACÉ CRECER TUS REDES"
    headlineHighlight="DESDE ARGENTINA"
    subheadline="La herramienta de automatización que usan los creadores argentinos. Crecé en Instagram, TikTok, YouTube y Spotify con granjas de bots inteligentes."
    ctaText="Agendá tu llamada gratis"
    ctaSubtext="Consultoría gratuita · Sin compromiso · Sin humo"
    stats={[
      { value: "4,200+", label: "Usuarios en Argentina" },
      { value: "25M+", label: "Seguidores entregados" },
      { value: "$0.40", label: "Precio desde / 1K" },
      { value: "< 5min", label: "Tiempo de entrega" },
    ]}
    featuresTitle="Pensado para el"
    featuresHighlight="mercado argentino"
    features={[
      { icon: Smartphone, title: "Instagram & TikTok", description: "Seguidores, likes, views y comentarios. Engagement real optimizado para cuentas argentinas. El algoritmo te va a amar." },
      { icon: Music, title: "Spotify & YouTube", description: "Streams para tu trap, cumbia 420 o lo que sea. Views en YouTube. Hacé que tu música llegue a más gente." },
      { icon: Bot, title: "Bots inteligentes", description: "Granjas configuradas con anti-detección avanzada. Comportamiento humano realista. Cero baneos." },
      { icon: Wallet, title: "Precios accesibles", description: "Pagá con crypto o tarjeta. Precios competitivos pensados para el bolsillo argentino. Sin mínimos ridículos." },
      { icon: RefreshCw, title: "Panel de reseller", description: "Revendé servicios a tus clientes. Marca blanca, precios mayoristas y panel independiente. Ideal para agencias." },
      { icon: Zap, title: "Entrega inmediata", description: "La mayoría de servicios se entregan en minutos. Sin esperas, sin vueltas. Tu cuenta crece desde el primer pedido." },
    ]}
    useCasesTitle="Para quién es Scaling en"
    useCasesHighlight="Argentina"
    useCases={[
      { icon: Mic, title: "Artistas de trap", description: "Duki, Bizarrap... la movida argentina explota. Promocioná tu música con streams reales y views que te posicionen." },
      { icon: ShoppingBag, title: "Emprendedores", description: "Tiendas de ropa, gastronomía, servicios — crecé tu Instagram con seguidores argentinos que se convierten en ventas." },
      { icon: Video, title: "Streamers y YouTubers", description: "Más subs, más views, más watch time. Impulsá tu canal para monetizar más rápido y conseguir sponsors." },
    ]}
    testimonials={[
      { name: "Nico F.", role: "Productor musical · Buenos Aires", text: "Metí 50K streams en un mes a mi último track. Me ayudaron a elegir los mejores servicios. Una masa.", country: "🇦🇷" },
      { name: "Valentina S.", role: "Tienda online · Córdoba", text: "Pasé de 5K a 30K seguidores en Instagram. Las ventas se triplicaron. Lo mejor es que es re fácil de usar.", country: "🇦🇷" },
      { name: "Matías L.", role: "Agencia digital · Rosario", text: "El panel de reseller me salvó. Revendo a mis clientes y la ganancia es excelente. El soporte responde al toque.", country: "🇦🇷" },
    ]}
    finalCtaTitle="¿Listo para crecer en"
    finalCtaHighlight="Argentina?"
    finalCtaSubtitle="Unite a miles de argentinos que ya automatizan su crecimiento digital"
  />
);

export default LandingArgentina;
