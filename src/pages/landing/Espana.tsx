import { Brain, Globe, ShieldCheck, CreditCard, BarChart3, Headphones, Palette, Music, Briefcase, Tv } from "lucide-react";
import LandingTemplate from "@/components/LandingTemplate";

const LandingEspana = () => (
  <LandingTemplate
    countryFlag="🇪🇸"
    badge="La primera IA que comanda 1.000 granjas de bots"
    headlineTop="POSICIONA TU MARCA"
    headlineHighlight="EN REDES CON IA"
    subheadline="Una nueva categoría de inteligencia artificial: en lugar de generar contenido, comanda 1.000 granjas de bots reales para hacer crecer tu cuenta. Pensada para creators, marcas y agencias en España."
    ctaText="Solicitar acceso anticipado"
    ctaSubtext="Demo gratuita · Sin tarjeta · Cumplimiento GDPR · Soporte en horario CET"
    stats={[
      { value: "1.000+", label: "Granjas comandadas por IA" },
      { value: "47M", label: "Usuarios España objetivo" },
      { value: "GDPR", label: "Cumplimiento total" },
      { value: "CET", label: "Soporte horario europeo" },
    ]}
    featuresTitle="Una nueva categoría de IA,"
    featuresHighlight="pensada para creators serios"
    features={[
      { icon: Brain, title: "IA que ejecuta, no que genera", description: "Mientras ChatGPT escribe y Midjourney dibuja, TrustMind comanda granjas reales para que tu contenido lo vea quien tiene que verlo. Una nueva categoría." },
      { icon: Globe, title: "Granjas distribuidas globalmente", description: "1.000 granjas físicas en LATAM, Caribe, China y Vietnam. La IA decide automáticamente qué granja usar según tu nicho y geografía objetivo." },
      { icon: ShieldCheck, title: "Cumplimiento GDPR y RGPD", description: "Política de privacidad clara, opt-in explícito, datos cifrados, procesador certificado en UE. Sin trucos, sin riesgo legal para tu marca." },
      { icon: CreditCard, title: "Facturación en EUR", description: "Pagos en euros mediante Stripe, SEPA o transferencia bancaria. Facturación con IVA correspondiente. IRPF si eres autónomo." },
      { icon: BarChart3, title: "Métricas de calidad, no de vanity", description: "Engagement real, retención de audiencia, conversión a venta. La IA optimiza KPIs que importan, no solo seguidores muertos." },
      { icon: Headphones, title: "Soporte profesional CET", description: "Equipo en horario europeo (9.00-18.00 CET). Atención por WhatsApp, email y videollamada. Acuerdo de servicio firmado." },
    ]}
    useCasesTitle="¿Para quién es TrustMind en"
    useCasesHighlight="España?"
    useCases={[
      { icon: Palette, title: "Marcas DTC y e-commerce", description: "Moda, belleza, hogar, food. La IA construye la autoridad social que necesitas para que el algoritmo de Instagram y TikTok te muestre a más personas." },
      { icon: Music, title: "Artistas y productores musicales", description: "Indie, urbano, electrónica, flamenco urbano. La IA activa granjas que escuchan tu música en Spotify. Stripe Europa paga regalías en euros." },
      { icon: Briefcase, title: "Coaches, consultores y agencias", description: "Si vives de tu marca personal, la autoridad social cierra ventas. La IA te posiciona como referente sin años de trabajo orgánico." },
      { icon: Tv, title: "Creators de contenido emergentes", description: "Llega al tier verificado, consigue colaboraciones con marcas, multiplica tu ticket medio. La IA acelera lo que el algoritmo te haría esperar años." },
    ]}
    testimonials={[
      { name: "Marta L.", role: "Marca de moda · Barcelona", text: "Pasé de 1.500 a 23.000 seguidores en dos meses. Mis ventas en Shopify subieron un 340 por ciento. La IA está optimizada de verdad para mi nicho.", country: "🇪🇸" },
      { name: "Javier R.", role: "Productor musical · Madrid", text: "Subí un EP electrónico y la IA activó granjas que lo escucharon en bucle. 89.000 streams en 30 días. Recibí 612 euros en regalías. Negocio real.", country: "🇪🇸" },
      { name: "Laia M.", role: "Coach financiera · Valencia", text: "Antes nadie me conocía. Hoy lleno mis cursos a 600 euros la plaza. La IA me dio autoridad en menos tiempo del que esperaba. Recomendable.", country: "🇪🇸" },
    ]}
    finalCtaTitle="¿Listo para activar la IA en"
    finalCtaHighlight="España?"
    finalCtaSubtitle="Cumplimiento GDPR · Soporte CET · Empresa registrada · Solicita acceso anticipado al programa europeo"
  />
);

export default LandingEspana;
