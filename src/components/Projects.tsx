import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp, Users, DollarSign, Calendar } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Expansion Internationale - TechCorp",
      description: "Développement de la stratégie d'expansion sur 5 nouveaux marchés européens avec mise en place des équipes locales et partenariats stratégiques.",
      results: [
        { icon: DollarSign, metric: "+2.5M€", label: "CA généré" },
        { icon: Users, metric: "15", label: "Nouveaux collaborateurs" },
        { icon: TrendingUp, metric: "+180%", label: "Croissance" }
      ],
      duration: "18 mois",
      technologies: ["Market Research", "Business Intelligence", "CRM", "Partnership Management"],
      status: "Complété"
    },
    {
      title: "Transformation Digitale - InnovateBiz",
      description: "Accompagnement dans la digitalisation complète des processus commerciaux et mise en place d'outils de pilotage avancés.",
      results: [
        { icon: TrendingUp, metric: "+65%", label: "Efficacité commerciale" },
        { icon: Users, metric: "50+", label: "Utilisateurs formés" },
        { icon: DollarSign, metric: "300K€", label: "Économies réalisées" }
      ],
      duration: "12 mois",
      technologies: ["Salesforce", "Power BI", "Automation", "Change Management"],
      status: "Complété"
    },
    {
      title: "Lancement Produit Innovant - StartupHub",
      description: "Stratégie de lancement d'un produit SaaS B2B avec développement du go-to-market et acquisition des premiers clients.",
      results: [
        { icon: Users, metric: "100+", label: "Clients acquis" },
        { icon: DollarSign, metric: "500K€", label: "ARR atteint" },
        { icon: TrendingUp, metric: "40%", label: "Part de marché" }
      ],
      duration: "24 mois",
      technologies: ["Product Marketing", "Sales Funnel", "Content Strategy", "Lead Generation"],
      status: "En cours"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Projets marquants
            </h2>
            <p className="text-lg text-muted-foreground">
              Des réalisations concrètes qui illustrent mon impact sur la croissance des entreprises
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl text-foreground mb-2">{project.title}</CardTitle>
                      <p className="text-muted-foreground">{project.description}</p>
                    </div>
                    <div className="flex flex-col items-start lg:items-end gap-2">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="mr-2" size={16} />
                        {project.duration}
                      </div>
                      <Badge 
                        variant={project.status === "Complété" ? "default" : "secondary"}
                        className="w-fit"
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Results */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-foreground">Résultats obtenus</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      {project.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="bg-gradient-to-br from-primary/5 to-accent/5 p-4 rounded-lg text-center">
                          <div className="w-12 h-12 mx-auto mb-2 bg-gradient-primary rounded-full flex items-center justify-center">
                            <result.icon className="text-primary-foreground" size={24} />
                          </div>
                          <div className="text-2xl font-bold text-primary">{result.metric}</div>
                          <div className="text-sm text-muted-foreground">{result.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies & Methods */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-foreground">Méthodes & Outils utilisés</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="hover:bg-accent hover:text-accent-foreground transition-colors">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-4">
                    <Button variant="ghost" className="group">
                      En savoir plus
                      <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg">
              Discutons de votre prochain projet
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;