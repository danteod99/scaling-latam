const VideoSection = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <p className="text-sm md:text-base font-bold tracking-wider uppercase mb-4" style={{ color: '#4169E1' }}>
              EL #1 SOFTWARE PARA ESTE NICHO
            </p>
            <h2 className="text-3xl md:text-6xl font-bold mb-6">
              Mientras todos te venden flujos con N8N o bots de escritorio, nosotros usamos Granjas de Bots reales que ejecutan tareas, visualizaciones y ventas de forma física y automática.
            </h2>
            <div className="inline-block px-8 py-4 rounded-lg" style={{ backgroundColor: '#FFEB3B' }}>
              <p className="text-lg md:text-2xl font-medium" style={{ color: '#000' }}>
                Con esta tecnología logramos 30–50% más ingresos y filtramos 70% de los curiosos sin dinero, reduciendo a la mitad el costo por venta.
              </p>
            </div>
          </div>

          {/* Video */}
          <div className="relative mb-8" style={{ paddingBottom: '56.25%', height: 0 }}>
            <iframe 
              src="https://www.loom.com/embed/da32896d665e49e997e4a1a5eb1c55c0" 
              frameBorder="0" 
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-2xl"
              style={{ border: '2px solid rgba(0,191,255,0.2)' }}
            />
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a 
              href="https://calendly.com/d/3tr-69b-hqj/asesoria-1-a-1-granja-de-bots"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-lg transition-all hover:scale-105"
              style={{ backgroundColor: '#4169E1', color: '#fff' }}
            >
              Agenda tu Llamada Ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
