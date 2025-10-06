import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import { scrollToTop } from "@/lib/scrollUtils";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border overflow-x-hidden">
      <div className="container mx-auto px-4 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <img src={logo} alt="Solar AI" className="h-10 md:h-12 w-auto mb-4 md:mb-6 hover:scale-110 transition-transform duration-300" />
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 md:mb-6">
              Wij versterken de groei van bedrijven met op maat gemaakte websites, doelgerichte online marketing. 
              Van strategie en design tot conversie en resultaat: wij creëren een digitale aanwezigheid die indruk maakt en rendeert.
            </p>
            <div className="space-y-3">
              <a href="mailto:info@solarai.nl" className="flex items-center gap-3 text-sm md:text-base text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 group">
                <Mail size={18} className="text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="break-all">info@solarai.nl</span>
              </a>
              <a href="tel:+31616076519" className="flex items-center gap-3 text-sm md:text-base text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 group">
                <Phone size={18} className="text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span>+31 6 16076519</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base md:text-lg text-foreground font-semibold mb-3 md:mb-4">Snelle Links</h3>
            <ul className="space-y-2 md:space-y-3">
              <li><Link to="/" onClick={scrollToTop} className="text-sm md:text-base text-muted-foreground hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">Home</Link></li>
              <li><Link to="/over-ons" onClick={scrollToTop} className="text-sm md:text-base text-muted-foreground hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">Over Ons</Link></li>
              <li><Link to="/diensten" onClick={scrollToTop} className="text-sm md:text-base text-muted-foreground hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">Diensten</Link></li>
              <li><Link to="/contact" onClick={scrollToTop} className="text-sm md:text-base text-muted-foreground hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base md:text-lg text-foreground font-semibold mb-3 md:mb-4">Diensten</h3>
            <ul className="space-y-2 md:space-y-3">
              <li className="text-sm md:text-base text-muted-foreground">Website Ontwikkeling</li>
              <li className="text-sm md:text-base text-muted-foreground">Webshops</li>
              <li className="text-sm md:text-base text-muted-foreground">Advertentiebeheer</li>
              <li className="text-sm md:text-base text-muted-foreground">AI-Integraties</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 md:mt-12 pt-6 md:pt-8 text-center text-xs md:text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Solar AI. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
