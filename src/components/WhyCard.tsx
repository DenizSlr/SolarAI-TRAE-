import { ReactNode } from "react";

interface WhyCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  highlight: string;
  delay?: number;
}

const WhyCard = ({ icon, title, description, highlight, delay = 0 }: WhyCardProps) => {
  return (
    <div 
      className="group relative bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary/50 hover:scale-105 transition-all duration-500 hover:shadow-glow animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Price Sticker */}
      <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20">
        <div className="relative">
          <div className="bg-gradient-to-br from-amber-400 to-yellow-500 text-gray-900 font-bold px-4 py-2 md:px-6 md:py-3 rounded-xl shadow-lg transform rotate-3 hover:rotate-6 transition-transform duration-300">
            <span className="text-xs md:text-sm">{highlight}</span>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="mb-6 inline-flex p-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl group-hover:scale-110 transition-transform duration-500">
          {icon}
        </div>
        
        <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground pr-16 md:pr-20">
          {title}
        </h3>
        
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
          {description}
        </p>
      </div>
    </div>
  );
};

export default WhyCard;
