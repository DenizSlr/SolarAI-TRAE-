import { Globe, Zap, TrendingUp, Target, Lightbulb, Award, ShoppingCart } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const expertise = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Website Ontwikkeling",
      description: "Moderne, responsieve websites die perfect aansluiten bij uw bedrijf"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI-Integratie",
      description: "Chatbots en AI-tools die uw website intelligenter maken"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Online Marketing",
      description: "Effectief advertentiebeheer voor maximaal rendement"
    }
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-16 px-4">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-secondary/20 to-transparent blur-3xl" />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent px-4">
              Over Ons
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed px-4 max-w-3xl mx-auto">
              Bij Solar AI verbinden we design, AI en marketing tot slimme groei voor moderne bedrijven.
            </p>

          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8 md:space-y-12 animate-fade-in">
            {/* Description */}
            <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 md:p-12 hover:border-primary/50 transition-all duration-300">
              <p className="text-lg sm:text-xl font-semibold text-foreground mb-6 md:mb-8">
                Digitale oplossingen die resultaat leveren met luxe en precisie. Van strategische websiteontwikkeling tot geavanceerde AI-integraties.
              </p>
              
              <p className="text-base sm:text-lg text-foreground/90 leading-relaxed mb-4 md:mb-6">
                Maar online succes stopt niet bij een website. Met effectieve online marketing zorgen we dat je ook écht zichtbaar wordt. 
                Van zoekmachine-optimalisatie tot advertentiecampagnes: alles is erop gericht om jouw doelgroep te bereiken en jouw omzet te vergroten.
              </p>
              <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
                Het resultaat is geen losse website of campagne, maar een compleet online fundament dat dag en nacht voor je werkt en jouw bedrijf helpt groeien.
              </p>
            </div>

            {/* Our Approach */}
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <Target className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Onze Benadering
                </h2>
              </div>
              
              <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 md:p-12 relative overflow-hidden group hover:border-primary/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 space-y-4 md:space-y-6">
                  <div className="flex items-start gap-3 md:gap-4">
                    <Lightbulb className="w-5 h-5 md:w-6 md:h-6 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-sm sm:text-base md:text-lg text-foreground/90 leading-relaxed">
                      Resultaatgericht werken staat centraal in alles wat wij doen. Elke website die wij ontwikkelen heeft één hoofddoel: 
                      uw bedrijf laten groeien door meer conversies, betere zichtbaarheid en verhoogde klantbetrokkenheid.
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3 md:gap-4">
                    <Award className="w-5 h-5 md:w-6 md:h-6 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-sm sm:text-base md:text-lg text-foreground/90 leading-relaxed">
                      Wij combineren strategisch denken met technische expertise om oplossingen te creëren die niet alleen mooi zijn, 
                      maar ook daadwerkelijk bijdragen aan uw bedrijfsdoelstellingen.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Expertise */}
            <div className="space-y-6 md:space-y-8">
              <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Onze Expertise
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {expertise.map((item, index) => (
                  <div 
                    key={index}
                    className="bg-card border border-border rounded-xl p-5 md:p-6 hover:border-primary/50 hover:scale-105 transition-all duration-300 hover:shadow-glow group animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="mb-3 md:mb-4 inline-flex p-2 md:p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg text-primary group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-base md:text-lg font-semibold mb-2 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
                
                {/* Webshops integrated into expertise */}
                <div 
                  className="bg-card border border-border rounded-xl p-5 md:p-6 hover:border-primary/50 hover:scale-105 transition-all duration-300 hover:shadow-glow group animate-fade-in"
                  style={{ animationDelay: `${expertise.length * 100}ms` }}
                >
                  <div className="mb-3 md:mb-4 inline-flex p-2 md:p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg text-primary group-hover:scale-110 transition-transform duration-300">
                    <ShoppingCart className="w-6 h-6" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold mb-2 text-foreground">
                    Webshops
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Professionele webshops die uw producten optimaal presenteren en verkopen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
