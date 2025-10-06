import { Globe, TrendingUp, Zap, Check, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { scrollToTop } from "@/lib/scrollUtils";

const Services = () => {
  // Handle anchor scrolling on component mount
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Small delay to ensure the page is fully rendered
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          const navHeight = 96; // Height of fixed navigation (6rem = 96px)
          const elementPosition = element.offsetTop - navHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, []);

  const services = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Websiteontwikkeling",
      price: "vanaf €599",
      description: "Wij ontwikkelen moderne, responsieve en luxe websites die perfect aansluiten bij de identiteit van uw bedrijf.",
      features: [
        "Responsive design voor alle apparaten",
        "Moderne en luxe uitstraling",
        "Snelle laadtijden en optimale prestaties",
        "SEO-geoptimaliseerd",
        "Van eenvoudige landing pages tot complexe webapplicaties",
        "Maatwerkoplossingen op basis van uw wensen"
      ],
      gradient: "from-primary to-secondary"
    },
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: "Webshopontwikkeling",
      price: "vanaf €599",
      description: "Complete e-commerce oplossingen voor een professionele online winkel die klanten overtuigt en conversies maximaliseert.",
      features: [
        "Volledig geïntegreerde betaalsystemen",
        "Intuïtief productbeheer",
        "Geavanceerd voorraadbeheer",
        "Verzendopties en tracking",
        "Conversie-geoptimaliseerde design",
        "Klantaccounts en bestelgeschiedenis"
      ],
      gradient: "from-primary to-accent"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Advertentiebeheer",
      price: "op aanvraag",
      description: "Wij beheren campagnes op Google Ads, Facebook, Instagram en TikTok voor maximale zichtbaarheid en rendement.",
      features: [
        "Google Ads campagne beheer",
        "Social media advertising (Facebook, Instagram, TikTok)",
        "SEO optimalisatie",
        "Landingspagina optimalisatie",
        "A/B testing en conversie optimalisatie",
        "Uitgebreide rapportage en analyse"
      ],
      gradient: "from-secondary to-accent"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "AI-integraties",
      price: "vanaf €499",
      description: "Wij implementeren slimme AI-tools en automatiseringen die uw bedrijf efficiënter en toekomstbestendig maken.",
      features: [
        "Intelligente chatbots voor klantenservice",
        "Proces automatisering",
        "Maatwerkoplossingen met AI",
        "Machine learning implementaties",
        "Integratie met bestaande systemen",
        "Continue optimalisatie en ondersteuning"
      ],
      gradient: "from-accent to-primary"
    }
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-16 px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/20 to-transparent blur-3xl" />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent px-4">
              Onze Diensten
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed px-4">
              Complete digitale oplossingen die uw bedrijf naar een hoger niveau tillen. 
              Van strategie tot uitvoering, wij staan voor u klaar.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-8 md:space-y-16">
            {services.map((service, index) => (
              <div key={index} className="relative">
                {/* Anchor target for JavaScript scrolling */}
                <div 
                  id={service.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}
                  className="absolute top-0"
                />
                <div 
                  className="bg-card border border-border rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 relative overflow-hidden group animate-fade-in hover:border-primary/50 md:hover:scale-[1.02] transition-all duration-500"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Price Sticker */}
                  <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20">
                    <div className="relative">
                      <div className="bg-gradient-to-br from-amber-400 to-yellow-500 text-gray-900 font-bold px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl shadow-lg transform rotate-3 hover:rotate-6 transition-transform duration-300">
                        <span className="text-xs sm:text-sm whitespace-nowrap">{service.price}</span>
                      </div>
                    </div>
                  </div>

                  {/* Gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                      {/* Icon */}
                      <div className={`inline-flex p-4 md:p-6 bg-gradient-to-br ${service.gradient} bg-opacity-10 rounded-xl md:rounded-2xl text-primary group-hover:scale-110 transition-transform duration-500`}>
                        {service.icon}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 space-y-4 md:space-y-6 w-full pr-16 sm:pr-20 md:pr-0">
                        <div>
                          <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                            {service.title}
                          </h2>
                          <p className="text-sm sm:text-base md:text-lg text-foreground/90 leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                        
                        {/* Features */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                          {service.features.map((feature, featureIndex) => (
                            <div 
                              key={featureIndex}
                              className="flex items-start gap-2 md:gap-3 group/feature"
                            >
                              <Check className="w-4 h-4 md:w-5 md:h-5 text-primary mt-0.5 flex-shrink-0 group-hover/feature:scale-110 transition-transform duration-300" />
                              <span className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* More Info Button */}
                        <div className="pt-2 md:pt-4">
                          <Link to="/contact" onClick={scrollToTop}>
                            <Button className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 text-sm md:text-base">
                              Meer informatie
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
