import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PoliticaPrivacidad = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
          Política de Privacidad
        </h1>
        
        <div className="space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              1. Información que Recopilamos
            </h2>
            <p>
              En SCALING, recopilamos información que nos proporcionas directamente cuando te pones en contacto con nosotros, 
              incluyendo tu nombre, correo electrónico, número de teléfono y cualquier otra información que decidas compartir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              2. Uso de la Información
            </h2>
            <p>
              Utilizamos la información recopilada para:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
              <li>Responder a tus consultas y solicitudes</li>
              <li>Proporcionar nuestros servicios de automatización y marketing digital</li>
              <li>Mejorar nuestros servicios y experiencia del usuario</li>
              <li>Enviar información relevante sobre nuestros servicios</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              3. Protección de Datos
            </h2>
            <p>
              Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tu información personal 
              contra acceso no autorizado, alteración, divulgación o destrucción.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              4. Compartir Información
            </h2>
            <p>
              No vendemos, intercambiamos ni transferimos tu información personal a terceros sin tu consentimiento, 
              excepto cuando sea necesario para proporcionar nuestros servicios o cuando la ley lo requiera.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              5. Cookies y Tecnologías Similares
            </h2>
            <p>
              Utilizamos cookies y tecnologías similares (como Facebook Pixel) para mejorar tu experiencia, 
              analizar el tráfico del sitio y personalizar el contenido. Puedes configurar tu navegador para rechazar 
              cookies, aunque esto puede afectar la funcionalidad del sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              6. Tus Derechos
            </h2>
            <p>
              Tienes derecho a:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
              <li>Acceder a tu información personal</li>
              <li>Solicitar la corrección de datos inexactos</li>
              <li>Solicitar la eliminación de tu información</li>
              <li>Oponerte al procesamiento de tus datos</li>
              <li>Solicitar la portabilidad de tus datos</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              7. Cambios a Esta Política
            </h2>
            <p>
              Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. 
              Te notificaremos sobre cambios significativos publicando la nueva política en esta página.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              8. Contacto
            </h2>
            <p>
              Si tienes preguntas sobre esta política de privacidad, puedes contactarnos:
            </p>
            <ul className="list-none ml-4 space-y-2 mt-2">
              <li>Teléfono: +51 931 119 176</li>
              <li>Dirección: Jr Carhuaz 1462, Breña, Lima, Perú</li>
              <li>Empresa: OLIVEROS MKT EIRL</li>
              <li>RUC: 20605576550</li>
            </ul>
          </section>

          <p className="text-sm mt-8 pt-8 border-t border-border">
            Última actualización: {new Date().toLocaleDateString('es-PE', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PoliticaPrivacidad;
