import { X, Check } from "lucide-react";

const ComparisonSection = () => {
  const oldWay = [
    "Trabajas como un esclavo.",
    "Tu personal falla todo el tiempo y te hace perder dinero.",
    "Dependes de la Economía de tu país.",
    "Tienes muchas veces sobrestock de productos."
  ];

  const newWay = [
    "Más tiempo para ti y tu familia.",
    "Menos dolores de cabeza.",
    "Tienes robots trabajando para tí.",
    "No necesitas grandes cantidades de stock.",
    "No necesitas importar ni hacer una gran inversión inicial."
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm md:text-base font-medium tracking-wider uppercase mb-4" style={{ color: '#4169E1' }}>
            DIFERENCIAS EN MODELOS DE NEGOCIO ANTIGUOS VS AHORA
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            No tiene por que tomarte mucho tiempo
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Old Way */}
          <div className="glass-card p-8 rounded-2xl" style={{ backgroundColor: 'rgba(240, 248, 255, 0.5)' }}>
            <div className="space-y-6">
              {oldWay.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FF4444' }}>
                      <X className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <p className="text-base md:text-lg">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* New Way */}
          <div className="glass-card p-8 rounded-2xl relative overflow-hidden" style={{ backgroundColor: 'rgba(240, 248, 255, 0.5)' }}>
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="40" fill="currentColor" className="text-primary" />
              </svg>
            </div>
            
            <div className="space-y-6 relative z-10">
              {newWay.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#00C853' }}>
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <p className="text-base md:text-lg">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
