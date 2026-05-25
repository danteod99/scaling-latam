import { Bot, Landmark, DollarSign, MapPin, Music, TrendingUp, UtensilsCrossed, Mic, Briefcase, Home } from "lucide-react";
import LandingTemplate from "@/components/LandingTemplate";

const LandingMiami = () => (
  <LandingTemplate
    countryFlag="🇺🇸"
    badge="Made for Latinos in USA · Pago en USD"
    headlineTop="LA IA QUE HACE CRECER"
    headlineHighlight="TU MARCA EN USA"
    subheadline="Eres latino en USA y necesitas autoridad real en redes. Te conectamos con una IA que comanda 1,000 granjas de bots reales. Operación legal vía Scaling Tech Farm LLC (Wyoming). Cobras y pagas en dólares."
    ctaText="Empezar gratis ahora"
    ctaSubtext="Demo gratis · Sin tarjeta · Pago en USD · LLC USA"
    stats={[
      { value: "$50K-80K", label: "Ingreso promedio latino USA" },
      { value: "60M+", label: "Latinos en USA con tu español" },
      { value: "1,000+", label: "Granjas comandadas por IA" },
      { value: "LLC USA", label: "Empresa formal Wyoming" },
    ]}
    featuresTitle="Hecho para latinos"
    featuresHighlight="profesionales en USA"
    features={[
      { icon: Bot, title: "IA que comanda granjas reales", description: "Detrás de TrustMind hay 1,000 granjas de bots físicas. La IA decide cuál usar para tu nicho. Cero fake followers, todo dispositivos reales." },
      { icon: Landmark, title: "Operación legal en USA", description: "Scaling Tech Farm LLC en Wyoming, EIN aprobado por el IRS, cuenta Mercury Bank, Stripe activado. Empresa formal, no proyecto improvisado." },
      { icon: DollarSign, title: "Pagas en dólares, recibes valor", description: "Stripe USA, tarjetas internacionales, transferencias ACH. Facturas formales que te sirven para impuestos y deducciones." },
      { icon: MapPin, title: "Audiencia geo-segmentada", description: "La IA activa granjas en tu ciudad: Miami, Houston, NY, LA, Chicago, Orlando. Tu cuenta crece con audiencia local que sí puede ir a tu negocio." },
      { icon: Music, title: "Música y creators latinos", description: "Reggaeton, urban, salsa, regional mexicano. La IA activa granjas que escuchan tu música. Stripe USA paga regalías en dólares." },
      { icon: TrendingUp, title: "Ticket premium = ROI premium", description: "El latino en USA paga 3-5x más que el de LATAM. La IA está optimizada para nichos premium: bienes raíces, salud, finance, food." },
    ]}
    useCasesTitle="¿Para quién es Scaling LATAM en"
    useCasesHighlight="USA?"
    useCases={[
      { icon: UtensilsCrossed, title: "Negocios latinos en USA", description: "Restaurantes, food trucks, salones, talleres, contratistas. La IA llena tu Instagram con audiencia local que paga en dólares y deja review en Google." },
      { icon: Mic, title: "Artistas latinos en USA", description: "Bachateros, reggaetoneros, salseros, urban latino. Streams en Spotify USA, views en YouTube USA. Regalías cobradas en dólares directo a tu cuenta." },
      { icon: Briefcase, title: "Coaches y consultores latinos", description: "Tienes conocimiento que vale, pero nadie te conoce. La IA te posiciona como referente. Cobras consultorías en dólares premium." },
      { icon: Home, title: "Realtors, brokers, agentes", description: "Mercado inmobiliario latino USA cierra con confianza social. La IA construye tu autoridad para que el cliente te elija sobre la competencia." },
    ]}
    testimonials={[
      { name: "Ana V.", role: "Realtor · Miami", text: "Cerré 3 propiedades en mes 1 después de activar la IA. Mi Instagram pasó de 800 a 14K seguidores latinos en Miami. Mi comisión: $42,000. ROI brutal.", country: "🇺🇸" },
      { name: "Pedro G.", role: "Food truck · Houston", text: "Mi food truck siempre vacío entre semana. Después de TrustMind, fila de 30 personas hasta los martes. El local empezó a llenarse solo.", country: "🇺🇸" },
      { name: "Luz F.", role: "Coach financiera · NYC", text: "Cobraba $200/sesión y nadie me conocía. Hoy cobro $1,500/sesión, agenda llena 3 meses. La IA me dio la autoridad que necesitaba.", country: "🇺🇸" },
    ]}
    finalCtaTitle="¿Listo para crecer en el"
    finalCtaHighlight="mercado USA?"
    finalCtaSubtitle="Empresa formal en Wyoming · Pago en USD · 60M latinos esperándote · Tu primera consulta es gratis"
  />
);

export default LandingMiami;
