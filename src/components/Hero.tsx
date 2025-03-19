
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-20"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(120,119,198,0.05),transparent_50%)]"></div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full border border-border bg-secondary/50 backdrop-blur-sm">
              <span className="text-xs font-medium text-muted-foreground">
                Welcome to my portfolio
              </span>
            </div>
            
            <h1 className="animate-fade-in text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight mb-6">
              Crafting digital experiences with precision and purpose
            </h1>
            
            <p className="animate-slide-up animation-delay-300 text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              I'm a passionate designer and developer focused on creating elegant, functional digital experiences that connect with users.
            </p>
            
            <div className="animate-slide-up animation-delay-600 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#projects"
                className={cn(
                  "px-6 py-3 rounded-md bg-primary text-white font-medium",
                  "transition-all duration-300 ease-in-out",
                  "hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
                )}
              >
                View My Work
              </a>
              <a
                href="#contact"
                className={cn(
                  "px-6 py-3 rounded-md border border-border bg-secondary",
                  "transition-all duration-300 ease-in-out",
                  "hover:bg-secondary/70 hover:-translate-y-1"
                )}
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <a
        href="#projects"
        className={cn(
          "absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center",
          "text-muted-foreground hover:text-foreground transition-colors duration-300"
        )}
      >
        <span className="text-sm font-medium mb-2">Scroll Down</span>
        <ArrowDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
