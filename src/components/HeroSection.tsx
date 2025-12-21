import { useInView } from '@/hooks/useInView';

interface HeroSectionProps {
  id: string;
}

const HeroSection = ({ id }: HeroSectionProps) => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section
      id={id}
      ref={ref}
      className="min-h-screen flex flex-col justify-center items-center px-6 lg:px-12 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Corner accents */}
        <div className="absolute top-20 left-20 w-32 h-px bg-gradient-to-r from-gold/40 to-transparent" />
        <div className="absolute top-20 left-20 w-px h-32 bg-gradient-to-b from-gold/40 to-transparent" />
        <div className="absolute bottom-20 right-20 w-32 h-px bg-gradient-to-l from-gold/40 to-transparent" />
        <div className="absolute bottom-20 right-20 w-px h-32 bg-gradient-to-t from-gold/40 to-transparent" />
        
        {/* Vertical lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      </div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Pre-title with decorative lines */}
        <div 
          className={`flex items-center justify-center gap-6 mb-12 lg:mb-16 opacity-0 ${
            isInView ? 'animate-fade-in-up' : ''
          }`}
        >
          <div className="w-16 lg:w-24 h-px bg-gold/50" />
          <p className="font-body text-xs lg:text-sm tracking-[0.4em] uppercase text-gold">
            Studio Vizuelnog Identiteta
          </p>
          <div className="w-16 lg:w-24 h-px bg-gold/50" />
        </div>

        {/* Main Title - Dramatic */}
        <h1 
          className={`font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-[0.15em] text-primary mb-6 lg:mb-8 opacity-0 leading-none ${
            isInView ? 'animate-fade-in-up animation-delay-200' : ''
          }`}
        >
          AURELIS
        </h1>

        {/* Decorative divider */}
        <div 
          className={`flex items-center justify-center gap-4 mb-8 lg:mb-12 opacity-0 ${
            isInView ? 'animate-fade-in-up animation-delay-300' : ''
          }`}
        >
          <div className="w-8 h-px bg-primary/30" />
          <div className="w-2 h-2 border border-gold rotate-45" />
          <div className="w-8 h-px bg-primary/30" />
        </div>

        {/* Tagline */}
        <p 
          className={`font-display text-xl sm:text-2xl lg:text-3xl italic text-foreground/80 mb-12 lg:mb-16 opacity-0 ${
            isInView ? 'animate-fade-in-up animation-delay-400' : ''
          }`}
        >
          Gdje se strategija susreće s ljepotom
        </p>

        {/* Description */}
        <p 
          className={`font-body text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-14 lg:mb-20 opacity-0 ${
            isInView ? 'animate-fade-in-up animation-delay-600' : ''
          }`}
        >
          Kreiramo bezvremenske vizuelne identitete kroz harmoničan spoj psihologije, 
          estetike i strateškog razmišljanja. Svaki detalj je namjeran. Svaki brend, nezaboravan.
        </p>

        {/* CTA */}
        <div 
          className={`opacity-0 ${isInView ? 'animate-fade-in-up animation-delay-800' : ''}`}
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-4 font-body text-sm tracking-[0.2em] uppercase bg-primary border border-primary px-12 py-4 text-primary-foreground hover:bg-primary/90 transition-all duration-500"
          >
            <span>Radite s Aurelisom</span>
            <svg 
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator - only line */}
      <div 
        className={`absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 ${
          isInView ? 'animate-fade-in animation-delay-1000' : ''
        }`}
      >
        <div className="w-px h-16 bg-gradient-to-b from-gold/60 to-transparent animate-subtle-float" />
      </div>
    </section>
  );
};

export default HeroSection;
