import { Smartphone, MapPin, Bot, CreditCard, BarChart3, Building2, Store, Music, Camera, Users } from "lucide-react";
import LandingTemplate from "@/components/LandingTemplate";

const LandingPeru = () => (
  <LandingTemplate
    countryFlag="🇵🇪"
    badge="Hecho en Perú · Empresa formal registrada"
    headlineTop="CRECE EN REDES"
    headlineHighlight="DESDE PERÚ"
    subheadline="La plataforma de automatización creada por peruanos, para toda Latinoamérica. Crece en Instagram, TikTok, YouTube y Spotify con granjas de bots inteligentes."
    ctaText="Agenda tu llamada gratis"
    ctaSubtext="Empresa peruana · Soporte local en Lima · Facturación formal"
    stats={[
      { value: "3,800+", label: "Usuarios en Perú" },
      { value: "20M+", label: "Seguidores entregados" },
      { value: "Lima", label: "Oficina principal" },
      { value: "5,000+", label: "Servicios disponibles" },
    ]}
    featuresTitle="Hecho en Perú, para"
    featuresHighlight="toda Latam"
    features={[
      { icon: Smartphone, title: "Redes completas", description: "Instagram, TikTok, YouTube, Facebook, Twitter y más. Seguidores, likes, views y engagement para todas las plataformas." },
      { icon: MapPin, title: "Soporte peruano", description: "Nuestro equipo está en Lima. Atención por WhatsApp, soporte en español y conocemos el mercado local a la perfección." },
      { icon: Bot, title: "Bots inteligentes", description: "Scaling te asesora sobre estrategias, configuración de bots, proxies y optimización. Resultados garantizados." },
      { icon: CreditCard, title: "Múltiples pagos", description: "Crypto, tarjeta de crédito/débito, transferencia. Precios en USD accesibles para el mercado peruano." },
      { icon: BarChart3, title: "Dashboard profesional", description: "+5,000 servicios en un solo panel. Monitorea pedidos, historial completo y estadísticas en tiempo real." },
      { icon: Building2, title: "Empresa formal", description: "OLIVEROS MKT EIRL — RUC: 20605576550. Empresa registrada en Perú. Factura y todo en regla." },
    ]}
    useCasesTitle="Para quién es Scaling en"
    useCasesHighlight="Perú"
    useCases={[
      { icon: Store, title: "Negocios locales", description: "Restaurantes en Miraflores, tiendas en Gamarra, servicios en todo Lima — crece tu presencia digital con seguidores reales." },
      { icon: Music, title: "Artistas y músicos", description: "Cumbia, salsa, reggaetón peruano — promociona tu música con streams y views. Llega a más oyentes." },
      { icon: Users, title: "Agencias y resellers", description: "Panel de reventa con marca blanca. Precios mayoristas para ofrecer servicios SMM a tus clientes. Soporte en Lima." },
    ]}
    testimonials={[
      { name: "Andrea C.", role: "Restaurante · Miraflores", text: "Mi Instagram pasó de 3K a 20K seguidores. Ahora tenemos reservas todos los días. El soporte por WhatsApp es increíble.", country: "🇵🇪" },
      { name: "Diego V.", role: "Músico · Barranco", text: "Mis canciones llegaron a 100K streams en Spotify en un mes. Me recomendaron la mejor estrategia para mi género.", country: "🇵🇪" },
      { name: "Lucía R.", role: "Agencia de marketing · San Isidro", text: "Llevo 6 meses revendiendo servicios y la ganancia es excelente. El panel es súper fácil y el soporte responde al toque.", country: "🇵🇪" },
    ]}
    finalCtaTitle="¿Listo para crecer en"
    finalCtaHighlight="Perú?"
    finalCtaSubtitle="Empresa peruana con soporte local · Únete a miles de usuarios que ya automatizan su crecimiento"
  />
);

export default LandingPeru;
