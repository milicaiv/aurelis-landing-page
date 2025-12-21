import { useInView } from '@/hooks/useInView';

interface ServicesSectionProps {
  id: string;
}

const services = [
  {
    number: '01',
    title: 'Vizuelni Identitet Brenda',
    description: 'Kompletni brendovni sistemi kreirani s namjerom. Dizajn logotipa, palete boja, tipografija i smjernice brenda koje pričaju vašu jedinstvenu priču.',
  },
  {
    number: '02',
    title: 'Web Dizajn',
    description: 'Elegantna digitalna iskustva. Korporativne web stranice, landing stranice i prilagođena web rješenja dizajnirana da očaraju i konvertuju.',
  },
  {
    number: '03',
    title: 'E-commerce Razvoj',
    description: 'Luksuzna online shopping iskustva. Promišljeno dizajnirane prodavnice koje uzdižu vaše proizvode i oduševljavaju vaše kupce.',
  },
  {
    number: '04',
    title: 'Predlošci za Društvene Mreže',
    description: 'Koherentni vizuelni sistemi za vašu digitalnu prisutnost. Predlošci koji održavaju konzistentnost brenda na svakoj platformi.',
  },
  {
    number: '05',
    title: 'Profesionalna Fotografija',
    description: 'Fotografija proizvoda, usluga i ličnog brendinga. Vizualno pripovijedanje koje podiže percepciju i gradi povjerenje.',
  },
];

const ServicesSection = ({ id }: ServicesSectionProps) => {
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.3 });
  const { ref: servicesRef, isInView: servicesInView } = useInView({ threshold: 0.1 });

  return (
    <section id={id} className="py-24 lg:py-40 px-6 lg:px-12 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={headerRef} className="max-w-3xl mb-20 lg:mb-32">
          <span 
            className={`font-body text-xs tracking-[0.3em] uppercase text-gold block mb-6 opacity-0 ${
              headerInView ? 'animate-fade-in-up' : ''
            }`}
          >
            Naše Usluge
          </span>
          <h2 
            className={`font-display text-4xl sm:text-5xl lg:text-6xl text-primary mb-8 opacity-0 ${
              headerInView ? 'animate-fade-in-up animation-delay-200' : ''
            }`}
          >
            Kreiranje Izvrsnosti
          </h2>
          <p 
            className={`font-body text-lg text-muted-foreground leading-relaxed opacity-0 ${
              headerInView ? 'animate-fade-in-up animation-delay-400' : ''
            }`}
          >
            Svaki projekat započinje razumijevanjem. Duboko ulazimo u vašu viziju, 
            vašu publiku i vaše težnje kako bismo kreirali vizualne identitete koji 
            rezoniraju i traju.
          </p>
        </div>

        {/* Services List */}
        <div ref={servicesRef} className="space-y-0">
          {services.map((service, index) => (
            <div
              key={service.number}
              className={`group border-t border-border/50 py-10 lg:py-16 opacity-0 ${
                servicesInView ? 'animate-fade-in-up' : ''
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
                {/* Number */}
                <div className="lg:col-span-1">
                  <span className="font-display text-sm text-gold">
                    {service.number}
                  </span>
                </div>

                {/* Title */}
                <div className="lg:col-span-4">
                  <h3 className="font-display text-2xl lg:text-3xl text-primary group-hover:text-burgundy-light transition-colors duration-500">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="lg:col-span-7">
                  <p className="font-body text-base lg:text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
          
          {/* Bottom border */}
          <div className="border-t border-border/50" />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
