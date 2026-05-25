import { Bot, Music, Store, ShieldCheck, DollarSign, MessageCircle, Mic, Coffee, Camera, Building2 } from "lucide-react";
import LandingTemplate from "@/components/LandingTemplate";

const LandingRD = () => (
  <LandingTemplate
    countryFlag="🇩🇴"
    badge="Hub Caribe · Mercado #1 de Scaling LATAM"
    headlineTop="TU CUENTA CRECE"
    headlineHighlight="DESDE REPÚBLICA DOMINICANA"
    subheadline="Somos la primera IA que comanda 1,000 granjas de bots reales para hacer crecer tu cuenta. RD es nuestro mercado más fuerte — operamos directo en el Caribe, con soporte y entrega local."
    ctaText="Empezar gratis ahora"
    ctaSubtext="Demo gratis · Sin tarjeta · Soporte local en español"
    stats={[
      { value: "19.2%", label: "De nuestra audiencia es RD" },
      { value: "3,597", label: "Dominicanos activos este mes" },
      { value: "1,000+", label: "Granjas comandadas por IA" },
      { value: "67h", label: "Watch time semanal en RD" },
    ]}
    featuresTitle="Operamos en el"
    featuresHighlight="Caribe, no desde afuera"
    features={[
      { icon: Bot, title: "IA que comanda granjas reales", description: "No compras seguidores fake. La IA activa granjas de bots físicas en RD, Caribe y LATAM. Engagement real, no números muertos." },
      { icon: Music, title: "Dembow, bachata, urbano latino", description: "Promociona tu música en Spotify, YouTube Music y TikTok. La IA activa granjas dominicanas que escuchan en loop tu canción." },
      { icon: Store, title: "Negocios locales SD y Santiago", description: "Restaurantes, salones, tiendas, colmados. Crece tu Instagram con audiencia dominicana real que se convierte en cliente que paga." },
      { icon: ShieldCheck, title: "La IA rota granjas anti-baneo", description: "Tu cuenta nunca usa la misma granja dos veces seguidas. La IA distribuye el trabajo entre 1,000 granjas. Cero baneos." },
      { icon: DollarSign, title: "Pago en USD desde RD", description: "Stripe, crypto, transferencia. Operación legal a través de Scaling Tech Farm LLC en USA. Facturas formales." },
      { icon: MessageCircle, title: "Soporte local 24/7", description: "Equipo dominicano atiende por WhatsApp en horario RD. Entendemos el mercado, hablamos como local." },
    ]}
    useCasesTitle="¿Para quién es Scaling LATAM en"
    useCasesHighlight="RD?"
    useCases={[
      { icon: Mic, title: "Artistas urbanos dominicanos", description: "Dembowseros, raperos, traperos, bachateros. La IA activa granjas que escuchan tu música 24/7. Streams reales, regalías reales en Spotify." },
      { icon: Coffee, title: "Negocios en SD y Punta Cana", description: "Barbershops, salones, restaurantes, colmados. Llena tu Instagram con dominicanos reales que viven cerca de ti." },
      { icon: Camera, title: "Influencers y creadores RD", description: "Sube tu autoridad para cobrar mejor a marcas. La IA te da seguidores, likes y comentarios en español dominicano." },
      { icon: Building2, title: "Resellers y agencias", description: "Construye tu propio negocio sobre nuestra infraestructura. Margen 60-70%, sin armar nada físico." },
    ]}
    testimonials={[
      { name: "Carlos M.", role: "Artista urbano · Santo Domingo", text: "Subí mi último tema y la IA activó granjas que lo escucharon en loop. 47K streams en 2 semanas. Cobré $312 en regalías. Esto es real.", country: "🇩🇴" },
      { name: "María P.", role: "Dueña de salón · Santiago", text: "Mi Instagram pasó de 2,400 a 18,000 seguidores reales en 30 días. Ahora tengo lista de espera para citas. Vale cada centavo.", country: "🇩🇴" },
      { name: "Junior R.", role: "Influencer · Punta Cana", text: "Antes me pagaban $50 por post. Ahora $400. La IA me dio la autoridad que necesitaba para subir el ticket. Brutal.", country: "🇩🇴" },
    ]}
    finalCtaTitle="¿Listo para crecer en"
    finalCtaHighlight="República Dominicana?"
    finalCtaSubtitle="Empresa formal · Soporte 100% en español caribeño · Únete a 3,500+ dominicanos que ya usan la IA"
  />
);

export default LandingRD;
