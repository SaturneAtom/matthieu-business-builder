import { Card, CardContent } from "@/components/ui/card";
import { Target, TrendingUp, Users, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Orienté résultats",
      description: "Chaque action vise un objectif mesurable et concret"
    },
    {
      icon: TrendingUp,
      title: "Innovation continue",
      description: "Toujours en quête de nouvelles opportunités de croissance"
    },
    {
      icon: Users,
      title: "Leadership collaboratif",
      description: "L'excellence naît de la synergie des équipes"
    },
    {
      icon: Lightbulb,
      title: "Vision stratégique",
      description: "Anticiper les tendances pour créer l'avantage concurrentiel"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            À propos de moi
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Fort de plus de 8 ans d'expérience dans le développement commercial et le management, 
            je me spécialise dans la transformation des défis business en opportunités de croissance. 
            Ma passion : créer des stratégies qui génèrent des résultats durables et mesurables.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="text-primary-foreground" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-accent p-6 rounded-2xl shadow-glow">
            <p className="text-xl font-semibold text-accent-foreground">
              "Le succès n'est pas un accident. C'est le résultat d'une stratégie bien pensée, 
              d'une exécution rigoureuse et d'une amélioration continue."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;