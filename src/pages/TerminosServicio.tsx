import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TerminosServicio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
          Términos de Servicio
        </h1>
        
        <div className="space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              1. Aceptación de Términos
            </h2>
            <p>
              Al acceder y utilizar los servicios de SCALING, aceptas estar sujeto a estos términos de servicio. 
              Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestros servicios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              2. Descripción del Servicio
            </h2>
            <p>
              SCALING ofrece servicios de automatización de marketing digital, incluyendo pero no limitado a:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
              <li>Gestión de granjas de bots para redes sociales</li>
              <li>Automatización de estrategias de crecimiento digital</li>
              <li>Servicios de consultoría en marketing digital</li>
              <li>Implementación de sistemas de automatización personalizados</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              3. Uso Responsable
            </h2>
            <p>
              Te comprometes a utilizar nuestros servicios de manera ética y legal. No debes:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
              <li>Utilizar los servicios para actividades ilegales o fraudulentas</li>
              <li>Violar los términos de servicio de plataformas de terceros</li>
              <li>Distribuir spam o contenido malicioso</li>
              <li>Intentar acceder sin autorización a sistemas o datos</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              4. Propiedad Intelectual
            </h2>
            <p>
              Todo el contenido, software, diseños y materiales proporcionados por SCALING son propiedad de 
              OLIVEROS MKT EIRL y están protegidos por leyes de propiedad intelectual. No puedes copiar, 
              modificar o distribuir nuestro contenido sin autorización expresa.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              5. Tarifas y Pagos
            </h2>
            <p>
              Las tarifas por nuestros servicios se acordarán individualmente con cada cliente. 
              Los pagos deben realizarse según los términos especificados en el contrato de servicio. 
              Nos reservamos el derecho de suspender servicios por falta de pago.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              6. Limitación de Responsabilidad
            </h2>
            <p>
              SCALING proporciona sus servicios "tal cual" y no garantiza resultados específicos. 
              No seremos responsables por daños indirectos, incidentales o consecuentes derivados del uso 
              de nuestros servicios. Nuestra responsabilidad máxima se limitará al monto pagado por los servicios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              7. Confidencialidad
            </h2>
            <p>
              Ambas partes se comprometen a mantener la confidencialidad de cualquier información sensible 
              compartida durante la prestación de servicios. Esta obligación permanecerá vigente incluso después 
              de la terminación del contrato.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              8. Terminación
            </h2>
            <p>
              Cualquiera de las partes puede terminar el servicio con un aviso previo según lo especificado 
              en el contrato. Nos reservamos el derecho de terminar inmediatamente el servicio en caso de 
              violación de estos términos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              9. Modificaciones
            </h2>
            <p>
              Nos reservamos el derecho de modificar estos términos en cualquier momento. 
              Los cambios entrarán en vigencia al ser publicados en nuestro sitio web. 
              Es tu responsabilidad revisar periódicamente estos términos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              10. Ley Aplicable
            </h2>
            <p>
              Estos términos se regirán e interpretarán de acuerdo con las leyes de la República del Perú. 
              Cualquier disputa se resolverá en los tribunales competentes de Lima, Perú.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              11. Contacto
            </h2>
            <p>
              Para preguntas sobre estos términos de servicio, contáctanos:
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

export default TerminosServicio;
