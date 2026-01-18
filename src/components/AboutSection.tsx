import { useInView } from '@/hooks/useInView';

interface AboutSectionProps {
  id: string;
}

const AboutSection = ({ id }: AboutSectionProps) => {
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.3 });
  const { ref: contentRef, isInView: contentInView } = useInView({ threshold: 0.2 });
  const { ref: philosophyRef, isInView: philosophyInView } = useInView({ threshold: 0.3 });

  return (
    <section id={id} className="py-24 lg:py-40 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={headerRef} className="mb-20 lg:mb-32">
          <span 
            className={`font-body text-xs tracking-[0.3em] uppercase text-gold block mb-6 opacity-0 ${
              headerInView ? 'animate-fade-in-up' : ''
            }`}
          >
            O nama
          </span>
          <h2 
            className={`font-display text-4xl sm:text-5xl lg:text-6xl text-primary max-w-4xl opacity-0 ${
              headerInView ? 'animate-fade-in-up animation-delay-200' : ''
            }`}
          >
            Umjetnost Vizuelnog Identiteta
          </h2>
        </div>

        {/* Main Content Grid */}
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24 lg:mb-40">
          {/* Left Column - Introduction */}
          <div 
            className={`opacity-0 ${contentInView ? 'animate-fade-in-up' : ''}`}
          >
            <p className="font-display text-2xl lg:text-3xl text-foreground leading-relaxed mb-8">
              AURELIS je nastao iz jednostavnog uvjerenja: svaki brend zaslužuje biti 
              viđen, shvaćen i upamćen.
            </p>
            <p className="font-body text-base lg:text-lg text-muted-foreground leading-relaxed">
              Mi smo premium studio vizuelnog identiteta sa sjedištem u Bosni i Hercegovini, 
              specijaliziran za kreiranje prepoznatljivih brendovnih iskustava koja 
              nadilaze trendove i odolijevaju zubu vremena.
            </p>
          </div>

          {/* Right Column - Philosophy */}
          <div 
            className={`space-y-8 opacity-0 ${contentInView ? 'animate-fade-in-up animation-delay-200' : ''}`}
          >
            <p className="font-body text-base lg:text-lg text-muted-foreground leading-relaxed">
              Naš pristup isprepliće psihologiju, estetiku i strateško razmišljanje. 
              Razumijemo da brend nije samo skup vizuelnih elemenata..brend je iskustvo, 
              osjećaj i obećanje.
            </p>
            <p className="font-body text-base lg:text-lg text-muted-foreground leading-relaxed">
              Od kompletnih sistema vizuelnog identiteta do prilagođenog web dizajna i 
              profesionalne fotografije, svakom projektu pristupamo s pedantnom pažnjom 
              prema detaljima i nepokolebljivom posvećenošću izvrsnosti.
            </p>
          </div>
        </div>

        {/* Philosophy Cards */}
        <div ref={philosophyRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {[
            {
              title: 'Namjera',
              description: 'Svaka odluka ima svrhu. Ništa nije prepušteno slučaju u potrazi za stvaranjem smislenih brendovnih iskustava.',
            },
            {
              title: 'Profinjenost',
              description: 'Vjerujemo u snagu umjerenosti. Elegancija proizlazi iz jasnoće, ne složenosti.',
            },
            {
              title: 'Trajnost',
              description: 'Kreiramo identitete građene da traju. Bezvremeni dizajn koji s godinama postaje sve vredniji.',
            },
          ].map((item, index) => (
            <div
              key={item.title}
              className={`group p-8 lg:p-12 border border-border/50 hover:border-gold/50 transition-all duration-700 opacity-0 ${
                philosophyInView ? 'animate-fade-in-up' : ''
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <h3 className="font-display text-xl lg:text-2xl text-primary mb-4 group-hover:text-gold transition-colors duration-500">
                {item.title}
              </h3>
              <p className="font-body text-sm lg:text-base text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
