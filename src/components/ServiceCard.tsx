import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { scrollToTop } from "@/lib/scrollUtils";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  price: string;
  linkTo?: string;
  delay?: number;
  smallTitle?: boolean;
}

const ServiceCard = ({ icon, title, description, price, linkTo = "/contact", delay = 0, smallTitle = false }: ServiceCardProps) => {
  return (
    <div 
      className="group relative bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary/50 hover:scale-105 transition-all duration-500 hover:shadow-glow animate-fade-in flex flex-col"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Price Sticker */}
      <div className="absolute top-2 right-2 md:top-3 md:right-3 z-20">
        <div className="relative">
          <div className="bg-gradient-to-br from-amber-400 to-yellow-500 text-gray-900 font-bold px-4 py-2 md:px-6 md:py-3 rounded-xl shadow-lg transform rotate-3 hover:rotate-6 transition-transform duration-300">
            <span className="text-xs md:text-sm whitespace-nowrap">{price}</span>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 flex flex-col flex-grow">
        <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-500">
          {icon}
        </div>
        
        <h3 className={`font-bold mb-4 text-foreground pr-16 md:pr-20 leading-tight whitespace-nowrap ${smallTitle ? 'text-base md:text-lg' : 'text-xl md:text-2xl'}`}>
          {title}
        </h3>
        
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 flex-grow">
          {description}
        </p>
        
        <div className="mt-auto space-y-4">
          <Link to={linkTo} onClick={scrollToTop}>
            <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 hover:scale-105 transition-all duration-300">
              Meer informatie
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
