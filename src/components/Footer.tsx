import { Phone, MapPin, Building2, FileText } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-background/95 backdrop-blur-xl border-t border-primary/20 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <h2 
              className="text-3xl font-bold tracking-[0.3em] text-foreground"
              style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}
            >
              SCALING
            </h2>
            <p className="text-muted-foreground text-sm max-w-sm">
              Automatiza tu crecimiento, multiplica tu alcance y conquista la atención digital con granjas de bots inteligentes.
            </p>
          </div>

          {/* Información de contacto */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground uppercase tracking-wider">
              Contacto
            </h3>
            <div className="space-y-3">
              <a 
                href="tel:+51931119176"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>+51 931 119 176</span>
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Jr Carhuaz 1462, Breña</span>
              </div>
            </div>
          </div>

          {/* Información legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground uppercase tracking-wider">
              Información Legal
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-muted-foreground">
                <Building2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>OLIVEROS MKT EIRL</span>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <FileText className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>RUC: 20605576550</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-primary/10">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} SCALING - Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
