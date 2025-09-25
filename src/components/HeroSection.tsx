import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/snap-plus-hero.jpg";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-secondary">
      <div className="absolute inset-0 bg-gradient-accent opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Snap+
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl">
              Débloquez toutes les fonctionnalités premium de Snapchat. 
              Accès illimité, sans publicités, et bien plus encore.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-glow text-lg px-8 py-6"
                onClick={() => navigate("/purchase")}
              >
                Acheter maintenant - 2€
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-6"
                onClick={() => navigate("/about")}
              >
                En savoir plus
              </Button>
            </div>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Activation instantanée
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Support 24/7
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                100% sécurisé
              </div>
            </div>
          </div>
          
          <div className="flex-1 max-w-lg">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Snap+ Premium Features" 
                className="w-full h-auto rounded-2xl shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;