import { Link } from "react-router-dom";
import { Globe, TrendingUp, Zap, ArrowRight, Target, Sparkles, CheckCircle2, TrendingUp as TrendingUpIcon, Shield, ShoppingCart } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import USPCard from "@/components/USPCard";
import WhyCard from "@/components/WhyCard";
import FeatureBlock from "@/components/FeatureBlock";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-32 px-4 overflow-hidden min-h-[85vh] flex items-center">
        {/* Background gradient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-primary/20 to-transparent blur-3xl" />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-10 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-glow">
                Solar AI
              </span>
            </h1>
            
            <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
              <p className="text-xl sm:text-2xl md:text-3xl text-foreground/90 leading-relaxed font-light">
                Digitale oplossingen met luxe en precisie.
              </p>
              
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed px-4">
                Transformeer uw bedrijf met exclusieve websites, geavanceerde AI-integraties en resultaatgerichte marketingstrategieën die uw concurrentie ver achter zich laten.
              </p>
              
              <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 font-medium">
                Van kleine websites tot grote maatwerkprojecten.
              </p>
            </div>
            
            <div className="pt-8 md:pt-10">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-base sm:text-lg md:text-xl px-8 sm:px-10 md:px-12 py-6 md:py-8 rounded-xl shadow-glow group transition-all duration-300"
                >
                  Start uw project
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Blocks Section */}
      <section className="py-16 md:py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <FeatureBlock
              icon={<CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 text-primary" />}
              title="Gratis Analyse"
              description="Uw huidige situatie en kansen analyseren."
              delay={0}
            />
            <FeatureBlock
              icon={<TrendingUpIcon className="w-6 h-6 md:w-8 md:h-8 text-primary" />}
              title="Strategisch Advies"
              description="Persoonlijk actieplan op maat."
              delay={200}
            />
            <FeatureBlock
              icon={<Zap className="w-6 h-6 md:w-8 md:h-8 text-primary" />}
              title="Direct Resultaat"
              description="Concrete eerste stappen naar succes."
              delay={400}
            />
          </div>
        </div>
      </section>

      {/* Website Types Section */}
      <section className="py-16 md:py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-fade-in max-w-5xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Welke type website past bij jouw doel?
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed">
              Geen standaardpakketten, maar drie duidelijke types. Elk met een helder doel. Zo kies je altijd de oplossing die past bij de fase waarin je zit. Welk type website is voor jouw bedrijf het beste vertrekpunt?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto px-4">
            <WhyCard
              icon={<Globe className="w-6 h-6 md:w-8 md:h-8 text-primary" />}
              title="Basiswebsite"
              description="Snel professioneel online met een solide website. Bewezen structuur, geschikt voor bijna elke branche. Snel online dankzij efficiënte werkwijze. Professionele uitstraling zonder ingewikkeld traject."
              highlight="vanaf €599"
              delay={0}
            />
            <WhyCard
              icon={<Target className="w-6 h-6 md:w-8 md:h-8 text-primary" />}
              title="Premiumwebsite"
              description="Meer invloed op structuur en inhoud, zonder complex traject. Persoonlijk advies over opbouw en design. Flexibele indeling binnen betrouwbaar framework. Slimme keuzes die aansluiten bij het bedrijf."
              highlight="vanaf €999"
              delay={200}
            />
            <WhyCard
              icon={<Sparkles className="w-6 h-6 md:w-8 md:h-8 text-primary" />}
              title="Op-maatwebsite"
              description="Strategische intake voor helder plan en richting. Design en structuur afgestemd op doelen. Gebouwd voor conversie, inhoud en online impact."
              highlight="vanaf €1999"
              delay={400}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-fade-in max-w-4xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Onze Diensten
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed">
              Van strategische websiteontwikkeling tot geavanceerde AI-integratie. Wij bieden alles wat u nodig heeft voor een succesvolle digitale transformatie. Elk project wordt op maat gemaakt voor uw specifieke doel en doelgroep.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto px-4">
            <ServiceCard
              icon={<Globe className="w-10 h-10 md:w-12 md:h-12" />}
              title="Websiteontwikkeling"
              description="Moderne, responsieve websites die perfect aansluiten bij uw bedrijf."
              price="vanaf €599"
              linkTo="/diensten#websiteontwikkeling"
              delay={0}
              smallTitle
            />
            <ServiceCard
              icon={<ShoppingCart className="w-10 h-10 md:w-12 md:h-12" />}
              title="Webshopontwikkeling"
              description="Professionele webshops die uw producten optimaal presenteren en verkopen."
              price="vanaf €599"
              linkTo="/diensten#webshopontwikkeling"
              delay={100}
              smallTitle
            />
            <ServiceCard
              icon={<Zap className="w-10 h-10 md:w-12 md:h-12" />}
              title="AI-integratie"
              description="Slimme AI-tools en automatiseringen die uw bedrijf efficiënter maken."
              price="vanaf €499"
              linkTo="/diensten#ai-integraties"
              delay={200}
              smallTitle
            />
            <ServiceCard
              icon={<TrendingUp className="w-10 h-10 md:w-12 md:h-12" />}
              title="Advertentiebeheer"
              description="Op maat gemaakte campagnes voor maximaal rendement."
              price="op aanvraag"
              linkTo="/diensten#advertentiebeheer"
              delay={300}
              smallTitle
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
