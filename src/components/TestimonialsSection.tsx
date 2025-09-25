import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Marie L.",
    username: "@marie_snap",
    content: "Snap+ a complètement changé ma façon d'utiliser Snapchat ! Plus de pubs et plein de nouvelles fonctionnalités.",
    rating: 5
  },
  {
    name: "Thomas K.",
    username: "@thomas_k",
    content: "Le mode invisible est génial, je peux enfin regarder les stories sans me faire remarquer 😄",
    rating: 5
  },
  {
    name: "Léa M.",
    username: "@lea_stories",
    content: "Pour 2€, c'est vraiment donné ! J'ai récupéré mon investissement en une semaine.",
    rating: 5
  },
  {
    name: "Alex R.",
    username: "@alex_filters",
    content: "Les filtres premium sont incroyables, mes snaps ont un niveau professionnel maintenant !",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ce que disent nos{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              utilisateurs
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Plus de 10 000 utilisateurs satisfaits font déjà confiance à Snap+
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-card/80 backdrop-blur-sm border-border/50 hover:bg-gradient-accent transition-all duration-300 transform hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-primary text-lg">⭐</span>
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.username}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;