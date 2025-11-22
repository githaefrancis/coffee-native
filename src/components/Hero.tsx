import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-coffee-farm.jpg";

const Hero = () => {
  return (
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          transform: 'translateZ(0)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-6 flex items-end pb-20">
        <div className="max-w-4xl animate-fade-in-slow">
          <div className="inline-block mb-4 px-4 py-1.5 bg-primary/90 backdrop-blur-sm">
            <span className="text-xs font-sans font-medium tracking-wider uppercase text-primary-foreground">
              Featured Essay
            </span>
          </div>
          
          <h1 className="text-hero md:text-display font-serif font-bold text-paper mb-6 leading-tight">
            The Harvest Timer: What Coffee Cherries Taught Me About Exit Strategies
          </h1>
          
          <p className="text-xl md:text-2xl font-body text-paper-dark mb-8 max-w-2xl leading-relaxed">
            Picking too early leaves value on the branch. Waiting too long spoils the returns. 
            After thirty years, I've learned the signs.
          </p>

          <Link 
            to="/article/harvest-timer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-gold-light text-primary-foreground font-sans font-medium transition-all duration-300 hover:gap-4 group"
          >
            Read Essay
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-paper to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
