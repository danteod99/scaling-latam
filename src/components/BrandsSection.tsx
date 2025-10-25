const BrandsSection = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-2xl font-bold tracking-wider uppercase mb-8" style={{ color: '#4169E1' }}>
            GENERA DINERO AUTOMÁTICO CON
          </h2>
          
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="text-6xl md:text-8xl font-black tracking-tighter" style={{ color: '#39FF14' }}>
              KICK
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full" style={{ backgroundColor: '#1DB954' }} />
              <span className="text-3xl md:text-5xl font-bold" style={{ color: '#1DB954' }}>
                Spotify
              </span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg" style={{ backgroundColor: '#FF0000' }} />
              <span className="text-3xl md:text-5xl font-bold">
                YouTube
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
