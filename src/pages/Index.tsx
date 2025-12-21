import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onNavigate={scrollToSection} />
      
      <main>
        <HeroSection id="hero" />
        <ServicesSection id="services" />
        <AboutSection id="about" />
        <TestimonialsSection id="testimonials" />
        <ContactSection id="contact" />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
