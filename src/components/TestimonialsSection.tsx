import { useInView } from '@/hooks/useInView';

interface TestimonialsSectionProps {
  id: string;
}

const testimonials = [
  {
    quote: 'Proces je bio tih, jasan i potpuno promišljen. Ništa nije bilo suvišno, ni u komunikaciji, ni u dizajnu.',
    author: 'Una',
    brand: 'Studio Una'
  },
  {
    quote: 'Konačno neko ko razumije da dobar dizajn znači znati kada stati. Rezultat govori sam za sebe.',
    author: 'Marija',
    brand: 'Atelier Marija'
  },
  {
    quote: 'Osjećao sam se shvaćen od prvog razgovora. To je rijetko.',
    author: 'Kan',
    brand: 'Kan & Co.'
  }
];

const TestimonialsSection = ({ id }: TestimonialsSectionProps) => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      id={id}
      ref={ref}
      className="py-24 lg:py-32 px-6 lg:px-12 bg-burgundy"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div 
          className={`text-center mb-20 lg:mb-24 opacity-0 ${
            isInView ? 'animate-fade-in-up' : ''
          }`}
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold/70 mb-6">
            Riječi naših klijenata
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-gold/30" />
            <div className="w-1.5 h-1.5 bg-gold/50 rotate-45" />
            <div className="w-12 h-px bg-gold/30" />
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`text-center opacity-0 ${
                isInView ? 'animate-fade-in-up' : ''
              }`}
              style={{ animationDelay: `${200 + index * 150}ms` }}
            >
              {/* Quote mark */}
              <span className="font-display text-5xl text-gold/30 leading-none block mb-6">
                "
              </span>
              
              {/* Quote text */}
              <p className="font-display text-lg lg:text-xl italic text-cream/90 leading-relaxed mb-8">
                {testimonial.quote}
              </p>
              
              {/* Separator */}
              <div className="w-8 h-px bg-gold/40 mx-auto mb-6" />
              
              {/* Author */}
              <p className="font-body text-sm tracking-[0.15em] uppercase text-cream/70">
                {testimonial.author}
              </p>
              <p className="font-body text-xs tracking-[0.1em] text-cream/40 mt-1">
                {testimonial.brand}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
