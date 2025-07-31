import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, TrendingUp } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Business Developer",
      company: "TechCorp Solutions",
      period: "2021 - Présent",
      location: "Paris, France",
      achievements: [
        "Augmentation du CA de 150% en 2 ans",
        "Développement de 25+ partenariats stratégiques",
        "Lancement de 3 nouvelles lignes de produits",
        "Management d'une équipe de 8 commerciaux"
      ],
      skills: ["Stratégie commerciale", "Négociation", "Management", "Business Intelligence"]
    },
    {
      title: "Manager Commercial",
      company: "InnovateBiz",
      period: "2018 - 2021",
      location: "Lyon, France",
      achievements: [
        "Restructuration de l'équipe commerciale",
        "Mise en place de processus CRM optimisés",
        "Croissance de 80% du portefeuille clients",
        "Formation et mentorat de 12 collaborateurs"
      ],
      skills: ["CRM", "Formation", "Analyse de marché", "Développement client"]
    },
    {
      title: "Business Developer",
      company: "StartupHub",
      period: "2016 - 2018",
      location: "Bordeaux, France",
      achievements: [
        "Création de la stratégie go-to-market",
        "Développement de 50+ comptes clients",
        "Participation à 3 levées de fonds",
        "Expansion sur 5 nouveaux marchés"
      ],
      skills: ["Go-to-market", "Prospection", "Levée de fonds", "Expansion"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Expérience professionnelle
            </h2>
            <p className="text-lg text-muted-foreground">
              Un parcours marqué par des résultats concrets et une croissance continue
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl text-foreground">{exp.title}</CardTitle>
                      <p className="text-xl text-primary font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end gap-2">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="mr-2" size={16} />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="mr-2" size={16} />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-foreground flex items-center">
                      <TrendingUp className="mr-2 text-accent" size={20} />
                      Réalisations clés
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-foreground">Compétences clés</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="hover:bg-accent hover:text-accent-foreground transition-colors">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;