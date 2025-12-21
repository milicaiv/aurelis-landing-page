import { useState } from 'react';
import { useInView } from '@/hooks/useInView';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface ContactSectionProps {
  id: string;
}

const ContactSection = ({ id }: ContactSectionProps) => {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Poruka poslana",
      description: "Hvala vam na poruci. Javit ćemo vam se uskoro.",
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id={id} ref={ref} className="py-24 lg:py-40 px-6 lg:px-12 bg-champagne">
      <div className="max-w-4xl mx-auto">
        {/* Decorative top divider */}
        <div 
          className={`flex items-center justify-center gap-4 mb-16 lg:mb-20 opacity-0 ${
            isInView ? 'animate-fade-in-up' : ''
          }`}
        >
          <div className="w-16 h-px bg-burgundy/20" />
          <div className="w-1.5 h-1.5 bg-burgundy/30 rotate-45" />
          <div className="w-16 h-px bg-burgundy/20" />
        </div>

        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span 
            className={`font-body text-xs tracking-[0.3em] uppercase text-burgundy/60 block mb-8 opacity-0 ${
              isInView ? 'animate-fade-in-up' : ''
            }`}
          >
            Započnite Vaše Putovanje
          </span>

          <h2 
            className={`font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-burgundy mb-8 lg:mb-12 opacity-0 ${
              isInView ? 'animate-fade-in-up animation-delay-200' : ''
            }`}
          >
            Kreirajmo Nešto<br />
            <span className="italic">Izvanredno</span>
          </h2>

          <p 
            className={`font-body text-base lg:text-lg text-burgundy/70 max-w-2xl mx-auto leading-relaxed opacity-0 ${
              isInView ? 'animate-fade-in-up animation-delay-400' : ''
            }`}
          >
            Spremni uzdići vaš brend? Radimo s klijentima koji cijene izvrsnost, 
            estetiku i dugoročnu viziju.
          </p>
        </div>

        {/* Contact Form */}
        <form 
          onSubmit={handleSubmit}
          className={`space-y-8 opacity-0 ${isInView ? 'animate-fade-in-up animation-delay-600' : ''}`}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label htmlFor="name" className="font-body text-xs tracking-[0.2em] uppercase text-burgundy/50">
                Ime i Prezime
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-transparent border-burgundy/20 text-burgundy placeholder:text-burgundy/40 focus-visible:ring-burgundy/50 focus-visible:border-burgundy/50 h-14 rounded-none font-body"
                placeholder="Vaše ime"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="font-body text-xs tracking-[0.2em] uppercase text-burgundy/50">
                Email Adresa
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-transparent border-burgundy/20 text-burgundy placeholder:text-burgundy/40 focus-visible:ring-burgundy/50 focus-visible:border-burgundy/50 h-14 rounded-none font-body"
                placeholder="vas@email.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="font-body text-xs tracking-[0.2em] uppercase text-burgundy/50">
              Vaša Poruka
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="bg-transparent border-burgundy/20 text-burgundy placeholder:text-burgundy/40 focus-visible:ring-burgundy/50 focus-visible:border-burgundy/50 rounded-none font-body resize-none"
              placeholder="Opišite vaš projekt ili ideju..."
            />
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-block font-body text-sm tracking-[0.2em] uppercase bg-burgundy border border-burgundy px-12 py-4 text-cream hover:bg-burgundy/90 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Šaljem...' : 'Pošaljite Poruku'}
            </button>
          </div>
        </form>

        {/* Email */}
        <p 
          className={`font-body text-sm text-burgundy/50 mt-12 text-center opacity-0 ${
            isInView ? 'animate-fade-in-up animation-delay-800' : ''
          }`}
        >
          ili nas kontaktirajte direktno na{' '}
          <a href="mailto:hello@aurelis.studio" className="text-burgundy hover:text-burgundy/70 transition-colors underline underline-offset-4">
            hello@aurelis.studio
          </a>
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
