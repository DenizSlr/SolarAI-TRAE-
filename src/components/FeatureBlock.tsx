import { ReactNode } from "react";

interface FeatureBlockProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureBlock = ({ icon, title, description, delay = 0 }: FeatureBlockProps) => {
  return (
    <div 
      className="group relative bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-6 md:p-8 hover:border-primary/40 hover:scale-105 transition-all duration-500 hover:shadow-glow animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 text-center space-y-3 md:space-y-4">
        <div className="inline-flex p-3 md:p-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl group-hover:scale-110 transition-transform duration-500">
          {icon}
        </div>
        
        <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {title}
        </h3>
        
        <p className="text-sm md:text-base text-foreground/90 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureBlock;
