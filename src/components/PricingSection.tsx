import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PricingSection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Un prix{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              imbattable
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Accédez à toutes les fonctionnalités premium pour seulement 2€
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <Card className="bg-gradient-accent border-primary/20 shadow-glow relative overflow-hidden">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-primary text-primary-foreground px-4 py-1 rounded-b-lg text-sm font-semibold">
              OFFRE LIMITÉE
            </div>
            
            <CardHeader className="text-center pt-12">
              <CardTitle className="text-3xl font-bold">Snap+ Premium</CardTitle>
              <CardDescription className="text-lg">Accès complet et illimité</CardDescription>
              
              <div className="py-8">
                <div className="flex items-baseline justify-center">
                  <span className="text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">2€</span>
                  <span className="text-muted-foreground ml-2">paiement unique</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Aucun abonnement, aucune surprise</p>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {[
                  "✓ Toutes les fonctionnalités premium",
                  "✓ Suppression des publicités", 
                  "✓ Filtres et effets exclusifs",
                  "✓ Mode invisible",
                  "✓ Sauvegarde cloud illimitée",
                  "✓ Support prioritaire 24/7",
                  "✓ Mises à jour gratuites à vie"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-primary font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                size="lg" 
                className="w-full bg-gradient-primary hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-glow text-lg py-6 mt-8"
                onClick={() => navigate("/purchase")}
              >
                Acheter Snap+ - 2€
              </Button>
              
              <div className="text-center pt-4">
                <p className="text-sm text-muted-foreground">
                  🔒 Paiement 100% sécurisé • Activation instantanée • Garantie satisfait ou remboursé
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;