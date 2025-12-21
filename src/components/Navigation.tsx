import { useState, useEffect } from 'react';

interface NavigationProps {
  onNavigate: (section: string) => void;
}

const Navigation = ({ onNavigate }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Usluge', id: 'services' },
    { label: 'O nama', id: 'about' },
    { label: 'Kontakt', id: 'contact' },
  ];

  const handleClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-sm border-b border-border/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <button 
            onClick={() => handleClick('hero')}
            className="font-display text-xl lg:text-2xl tracking-[0.2em] text-primary hover:text-gold transition-colors duration-500"
          >
            AURELIS
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className="font-body text-sm tracking-[0.15em] uppercase text-foreground/70 hover:text-primary link-underline transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col space-y-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-px bg-primary transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-px bg-primary transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-px bg-primary transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? 'max-h-64 pb-8' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col space-y-6 pt-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className="font-body text-sm tracking-[0.15em] uppercase text-foreground/70 hover:text-primary transition-colors duration-300 text-left"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
