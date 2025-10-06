import { ReactNode } from "react";

interface USPCardProps {
  icon: ReactNode;
  text: string;
  delay?: number;
}

const USPCard = ({ icon, text, delay = 0 }: USPCardProps) => {
  return (
    <div 
      className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-500 hover:shadow-glow animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 flex items-center gap-4">
        <div className="flex-shrink-0 p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg group-hover:scale-110 transition-transform duration-500">
          {icon}
        </div>
        
        <p className="text-foreground/90 font-medium leading-snug">
          {text}
        </p>
      </div>
    </div>
  );
};

export default USPCard;
