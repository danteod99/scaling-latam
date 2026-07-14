import { MessageSquare, Bot, Zap, Clock, Filter, Send, Store, BarChart3, ShieldCheck, ShoppingBag, Users, TrendingUp } from "lucide-react";
import LandingTemplate from "@/components/LandingTemplate";

const LandingTrustFace = () => (
  <LandingTemplate
    badge="TrustFace · Automatización de Facebook Marketplace"
    headlineTop="AUTOMATIZA TUS RESPUESTAS EN"
    headlineHighlight="MARKETPLACE"
    subheadline="TrustFace responde automáticamente cada mensaje de tus publicaciones en Facebook Marketplace — en segundos, 24/7. Deja de perder compradores por no contestar a tiempo y cierra más ventas en piloto automático."
    ctaText="Agenda tu demo gratis"
    ctaSubtext="Demo personalizada de TrustFace · Sin compromiso"
    finalCtaButtonText="Quiero automatizar mis ventas"
    stats={[
      { value: "24/7", label: "Respondiendo por ti" },
      { value: "<10s", label: "Tiempo de respuesta" },
      { value: "+300%", label: "Más conversaciones" },
      { value: "100%", label: "Mensajes atendidos" },
    ]}
    featuresTitle="Todo lo que hace"
    featuresHighlight="TrustFace"
    features={[
      { icon: Zap, title: "Respuesta instantánea", description: "Cada persona que escribe a tu publicación recibe respuesta en segundos, incluso de madrugada. El comprador nunca se enfría esperando." },
      { icon: Bot, title: "IA que vende como humano", description: "Respuestas naturales y personalizadas según el producto y la pregunta. Precio, stock, envío, ubicación — todo contestado sin que muevas un dedo." },
      { icon: Store, title: "Multi-publicación y multi-cuenta", description: "Gestiona todas tus publicaciones y varias cuentas de Facebook desde un solo lugar. Escala tu operación sin contratar más personas." },
      { icon: Filter, title: "Filtra compradores reales", description: "TrustFace califica a cada interesado y separa a los compradores serios de los curiosos. Tú solo hablas con quien de verdad quiere comprar." },
      { icon: Send, title: "Deriva al cierre en WhatsApp", description: "Cuando el comprador está listo, TrustFace lo pasa a tu WhatsApp con toda la conversación lista para cerrar la venta." },
      { icon: BarChart3, title: "Métricas y control total", description: "Dashboard con mensajes recibidos, respuestas, leads calificados y ventas derivadas. Sabes exactamente qué publicaciones venden." },
    ]}
    useCasesTitle="Para quién es"
    useCasesHighlight="TrustFace"
    useCases={[
      { icon: ShoppingBag, title: "Revendedores", description: "Vendes celulares, ropa, tecnología o cualquier producto por Marketplace. Recibes decenas de mensajes al día y no alcanzas a responderlos todos." },
      { icon: Users, title: "Tiendas y negocios", description: "Tu negocio depende de las ventas por Facebook. TrustFace atiende a cada cliente al instante y multiplica tus cierres sin ampliar tu equipo." },
      { icon: TrendingUp, title: "Emprendedores", description: "Estás empezando y no puedes estar pegado al celular todo el día. Automatiza la atención y enfócate en despachar y crecer." },
    ]}
    testimonials={[
      { name: "Kevin R.", role: "Revendedor de tecnología · Perú", text: "Antes se me escapaban clientes porque respondía tarde. Con TrustFace contesto al toque a todos y dupliqué mis ventas en un mes.", country: "🇵🇪" },
      { name: "Daniela M.", role: "Tienda de ropa · Colombia", text: "Recibo más de 60 mensajes diarios en Marketplace. TrustFace los responde todos y solo me pasa a WhatsApp a los que ya quieren comprar.", country: "🇨🇴" },
      { name: "Andrés G.", role: "Emprendedor · México", text: "Es como tener un vendedor trabajando 24 horas. Ni de madrugada pierdo una venta. La mejor inversión para mi negocio.", country: "🇲🇽" },
    ]}
    finalCtaTitle="Deja de perder ventas"
    finalCtaHighlight="por no responder"
    finalCtaSubtitle="TrustFace atiende cada mensaje de Marketplace por ti, 24/7 — agenda tu demo gratuita y velo funcionando"
  />
);

export default LandingTrustFace;
