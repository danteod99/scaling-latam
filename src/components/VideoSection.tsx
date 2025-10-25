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
              Cómo Genero más de $9,700 con este simple sistema con BoxPhoneFarms
            </h2>
            <div className="inline-block px-8 py-4 rounded-lg" style={{ backgroundColor: '#FFEB3B' }}>
              <p className="text-lg md:text-2xl font-medium" style={{ color: '#000' }}>
                Hay un Simple Bug que Las Plataformas no quieren que sepas
              </p>
            </div>
          </div>

          {/* Video */}
          <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
            <iframe 
              src="https://www.loom.com/embed/da32896d665e49e997e4a1a5eb1c55c0" 
              frameBorder="0" 
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-2xl"
              style={{ border: '2px solid rgba(0,191,255,0.2)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
