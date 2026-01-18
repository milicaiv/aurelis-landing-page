const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 lg:py-16 px-6 lg:px-12 border-t border-border/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div className="font-display text-lg tracking-[0.2em] text-primary">
            AURELIS
          </div>

          {/* Tagline */}
          <p className="font-display text-sm italic text-muted-foreground">
            Studio Vizuelnog Identiteta
          </p>

          {/* Copyright */}
          <p className="font-body text-xs tracking-[0.1em] uppercase text-muted-foreground">
            © {currentYear} AURELIS. Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
