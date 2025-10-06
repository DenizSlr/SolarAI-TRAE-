import { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    interest: "",
    serviceInterest: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Vul alle verplichte velden in",
        description: "Naam, e-mail en bericht zijn verplicht.",
        variant: "destructive"
      });
      return;
    }

    // Here you would normally send the form data to a backend
    toast({
      title: "Bericht verzonden!",
      description: "Wij nemen zo snel mogelijk contact met u op.",
    });

    // Reset form
    setFormData({ name: "", email: "", phone: "", budget: "", interest: "", serviceInterest: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-16 px-4">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-accent/20 to-transparent blur-3xl" />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent px-4">
              Neem Contact Op
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed px-4">
              Klaar om uw digitale aanwezigheid naar een hoger niveau te tillen? 
              Laten we in gesprek gaan over uw project.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Info */}
            <div className="space-y-6 md:space-y-8 animate-fade-in">
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-4 md:space-y-6 hover:border-primary/50 transition-all duration-300">
                <h2 className="text-xl md:text-2xl font-bold text-foreground">Contactgegevens</h2>
                
                <div className="space-y-3 md:space-y-4">
                  <a 
                    href="mailto:info@solarai.nl"
                    className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-muted/50 hover:bg-muted hover:scale-105 transition-all duration-300 group"
                  >
                    <div className="p-2 md:p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs md:text-sm text-muted-foreground">E-mail</p>
                      <p className="text-sm md:text-base text-foreground font-medium break-all">info@solarai.nl</p>
                    </div>
                  </a>

                  <a 
                    href="tel:+31616076519"
                    className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-muted/50 hover:bg-muted hover:scale-105 transition-all duration-300 group"
                  >
                    <div className="p-2 md:p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs md:text-sm text-muted-foreground">Telefoon</p>
                      <p className="text-sm md:text-base text-foreground font-medium">+31 6 16076519</p>
                    </div>
                  </a>
                </div>
              </div>

            </div>

            {/* Contact Form */}
            <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-4 md:space-y-6 hover:border-primary/50 transition-all duration-300">
                <h2 className="text-xl md:text-2xl font-bold text-foreground">Stuur een bericht</h2>
                
                <div className="space-y-3 md:space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Naam *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-muted/50 border-border focus:border-primary"
                      placeholder="Uw naam"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      E-mail *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-muted/50 border-border focus:border-primary"
                      placeholder="uw.email@voorbeeld.nl"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Telefoon
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-muted/50 border-border focus:border-primary"
                      placeholder="+31 6 12345678"
                    />
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                      Budget *
                    </label>
                    <Select name="budget" value={formData.budget} onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}>
                      <SelectTrigger className="bg-muted/50 border-border focus:border-primary">
                        <SelectValue placeholder="Selecteer uw budget" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="€250 - €1.000">€250 - €1.000</SelectItem>
                        <SelectItem value="€1.000 - €5.000">€1.000 - €5.000</SelectItem>
                        <SelectItem value="€5.000 - €10.000">€5.000 - €10.000</SelectItem>
                        <SelectItem value="€10.000 - €25.000">€10.000 - €25.000</SelectItem>
                        <SelectItem value="€25.000+">€25.000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>


                  <div>
                    <label htmlFor="serviceInterest" className="block text-sm font-medium text-foreground mb-2">
                      Geïnteresseerd in *
                    </label>
                    <Select name="serviceInterest" value={formData.serviceInterest} onValueChange={(value) => setFormData(prev => ({ ...prev, serviceInterest: value }))}>
                      <SelectTrigger className="bg-muted/50 border-border focus:border-primary">
                        <SelectValue placeholder="Selecteer dienst" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Website">Website</SelectItem>
                        <SelectItem value="Webshop">Webshop</SelectItem>
                        <SelectItem value="AI-integratie">AI-integratie</SelectItem>
                        <SelectItem value="Advertentiebeheer">Advertentiebeheer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Bericht *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-muted/50 border-border focus:border-primary min-h-[150px]"
                      placeholder="Vertel ons over uw project..."
                      required
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-base md:text-lg py-5 md:py-6 rounded-xl shadow-glow group transition-all duration-300"
                >
                  Verstuur bericht
                  <Send className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
