import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Stories illimitées",
    description: "Publiez autant de stories que vous voulez sans restriction de temps ou de quantité.",
    icon: "📱"
  },
  {
    title: "Sans publicités",
    description: "Profitez d'une expérience Snapchat pure, sans interruptions publicitaires.",
    icon: "🚫"
  },
  {
    title: "Filtres premium",
    description: "Accédez à tous les filtres exclusifs et effets spéciaux réservés aux abonnés premium.",
    icon: "✨"
  },
  {
    title: "Sauvegarde automatique",
    description: "Vos snaps et conversations sont automatiquement sauvegardés dans le cloud.",
    icon: "☁️"
  },
  {
    title: "Mode invisible",
    description: "Consultez les stories et messages sans que personne ne le sache.",
    icon: "👻"
  },
  {
    title: "Support prioritaire",
    description: "Bénéficiez d'un support client premium avec réponse garantie sous 24h.",
    icon: "🎯"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Pourquoi choisir{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Snap+
            </span>
            ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez toutes les fonctionnalités exclusives qui transformeront votre expérience Snapchat
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-gradient-accent transition-all duration-300 transform hover:scale-105 hover:shadow-glow group"
            >
              <CardHeader className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;