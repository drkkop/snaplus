import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Shield, Zap, Star, Users, Clock, CheckCircle } from "lucide-react";

const About = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Fonctionnalités Premium",
      description: "Accédez à toutes les fonctionnalités premium de Snapchat normalement payantes"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "100% Sécurisé",
      description: "Votre compte reste totalement sécurisé avec notre méthode d'activation"
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Activation Instantanée",
      description: "Recevez vos accès en moins de 5 minutes après votre commande"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Support 24/7",
      description: "Notre équipe est disponible 24h/24 pour vous aider"
    }
  ];

  const benefits = [
    "Snapchat+ gratuit à vie",
    "Aucune limite de temps",
    "Toutes les fonctionnalités premium",
    "Stories illimitées",
    "Filtres exclusifs",
    "Localisation des amis",
    "Rewatch Indicator",
    "Story Rewatch Count",
    "Plus de 50 fonctionnalités premium"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate("/")}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour
            </Button>
            <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Snap+ - En savoir plus
            </h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Tout sur Snap+
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez comment Snap+ révolutionne votre expérience Snapchat avec 
            toutes les fonctionnalités premium à un prix imbattable.
          </p>
        </div>

        {/* What is Snap+ */}
        <section className="mb-16">
          <Card className="bg-gradient-subtle border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Qu'est-ce que Snap+ ?</CardTitle>
            </CardHeader>
            <CardContent className="text-lg text-muted-foreground">
              <p className="mb-4">
                Snap+ est la solution ultime pour débloquer toutes les fonctionnalités premium 
                de Snapchat sans avoir à payer l'abonnement mensuel officiel.
              </p>
              <p>
                Pour seulement 2€, obtenez un accès permanent à toutes les fonctionnalités 
                Snapchat+ qui coûtent normalement 3,99€/mois soit 47,88€/an !
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Pourquoi choisir Snap+ ?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    {feature.icon}
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Benefits List */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Ce que vous obtenez</h2>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="bg-gradient-secondary p-8">
              <div className="text-center">
                <Star className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Économisez 95%</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Au lieu de payer 47,88€/an, payez seulement 2€ une seule fois !
                </p>
                <div className="text-3xl font-bold text-primary">
                  2€ <span className="text-lg line-through text-muted-foreground">47,88€</span>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* How it works */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Comment ça marche ?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold text-xl">1</span>
                </div>
                <CardTitle>Commandez</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Entrez votre nom d'utilisateur Snapchat et payez 2€
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold text-xl">2</span>
                </div>
                <CardTitle>Activation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Nous activons les fonctionnalités premium sur votre compte
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold text-xl">3</span>
                </div>
                <CardTitle>Profitez</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Accédez immédiatement à toutes les fonctionnalités premium
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="bg-gradient-primary p-8 text-primary-foreground">
            <h2 className="text-3xl font-bold mb-4">Prêt à débloquer Snap+ ?</h2>
            <p className="text-lg mb-6 opacity-90">
              Rejoignez des milliers d'utilisateurs qui profitent déjà de Snapchat+ gratuitement
            </p>
            <Button 
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
              onClick={() => navigate("/purchase")}
            >
              Acheter maintenant - 2€
            </Button>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;