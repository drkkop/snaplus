import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, User, Shield, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Purchase = () => {
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) return;
    
    setIsLoading(true);
    // Simulation d'une validation/traitement
    setTimeout(() => {
      setIsLoading(false);
      // Ici on pourrait rediriger vers une page de paiement
      console.log("Nom d'utilisateur:", username);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-secondary flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour
        </Button>

        <Card className="bg-card/90 backdrop-blur-sm border-border/50 shadow-elegant">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl">
              Finaliser votre achat
            </CardTitle>
            <CardDescription>
              Entrez votre nom d'utilisateur Snapchat pour activer Snap+ Premium
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-foreground">
                  Nom d'utilisateur Snapchat
                </Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Votre nom d'utilisateur"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-input/50 border-border/50 focus:border-primary transition-colors"
                  required
                />
                <p className="text-sm text-muted-foreground">
                  Entrez exactement le même nom que dans votre profil Snapchat
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-accent">
                  <Shield className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">100% Sécurisé</p>
                    <p className="text-xs text-muted-foreground">
                      Vos données sont protégées et chiffrées
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-accent">
                  <Zap className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Activation instantanée</p>
                    <p className="text-xs text-muted-foreground">
                      Vos fonctionnalités premium seront activées immédiatement
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-accent rounded-lg p-4 border border-primary/20">
                <h3 className="font-semibold text-primary mb-2">Récapitulatif de commande</h3>
                <div className="flex justify-between items-center">
                  <span>Snap+ Premium</span>
                  <span className="font-bold text-lg">2,00€</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Paiement unique • Pas d'abonnement
                </p>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-primary hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-glow text-lg py-6"
                disabled={!username.trim() || isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                    Traitement...
                  </>
                ) : (
                  "Procéder au paiement - 2€"
                )}
              </Button>
            </form>

            <div className="text-center">
              <p className="text-xs text-muted-foreground">
                En continuant, vous acceptez nos{" "}
                <a href="#" className="text-primary hover:underline">
                  conditions d'utilisation
                </a>{" "}
                et notre{" "}
                <a href="#" className="text-primary hover:underline">
                  politique de confidentialité
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Purchase;