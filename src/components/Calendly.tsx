const Calendly = () => {
  return (
    <section id="agendar" className="py-20 md:py-32 relative bg-[#0A0A0A]">
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[200px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 
            className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-wider glow-text"
            style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}
          >
            Agenda tu asesoría 1 a 1
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Elige tu horario y confirma en 30 segundos.
          </p>
        </div>

        {/* Calendly Widget */}
        <div className="max-w-4xl mx-auto glass-card-3d p-6 rounded-2xl border border-primary/20">
          {/* Principio del widget integrado de Calendly */}
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/d/3tr-69b-hqj/asesoria-1-a-1-granja-de-bots" 
            style={{ minWidth: '320px', height: '700px' }}
          />
          <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
          {/* Final del widget integrado de Calendly */}
        </div>

        {/* Privacy note */}
        <p className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">
          Tu información está protegida. Solo la usamos para coordinar tu asesoría personalizada.
        </p>
      </div>
    </section>
  );
};

export default Calendly;
