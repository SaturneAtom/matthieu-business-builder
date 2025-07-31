import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BarChart3, Users, Target, Zap, Brain, Handshake } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: BarChart3,
      title: "Business Development",
      skills: [
        { name: "Stratégie commerciale", level: 95 },
        { name: "Analyse de marché", level: 90 },
        { name: "Négociation", level: 92 },
        { name: "Développement partenariats", level: 88 }
      ]
    },
    {
      icon: Users,
      title: "Management & Leadership",
      skills: [
        { name: "Management d'équipe", level: 93 },
        { name: "Coaching", level: 87 },
        { name: "Formation", level: 85 },
        { name: "Motivation", level: 91 }
      ]
    },
    {
      icon: Target,
      title: "Performance & Résultats",
      skills: [
        { name: "Gestion de projets", level: 89 },
        { name: "KPI & Analytics", level: 86 },
        { name: "ROI Optimization", level: 88 },
        { name: "Process Improvement", level: 84 }
      ]
    }
  ];

  const softSkills = [
    { icon: Brain, skill: "Pensée stratégique", description: "Capacité à analyser et anticiper les tendances du marché" },
    { icon: Handshake, skill: "Relationnel", description: "Excellence dans la création et le maintien de relations durables" },
    { icon: Zap, skill: "Adaptabilité", description: "Agilité face aux changements et nouvelles situations" },
    { icon: Target, skill: "Orientation résultats", description: "Focus constant sur l'atteinte et le dépassement des objectifs" }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Compétences & Expertise
            </h2>
            <p className="text-lg text-muted-foreground">
              Une combinaison unique de compétences techniques et humaines pour des résultats exceptionnels
            </p>
          </div>

          {/* Technical Skills */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="text-primary-foreground" size={32} />
                  </div>
                  <CardTitle className="text-xl text-foreground">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
              Qualités humaines
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {softSkills.map((item, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-card to-muted/20">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 mx-auto mb-4 bg-gradient-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="text-accent-foreground" size={28} />
                    </div>
                    <h4 className="text-lg font-semibold mb-3 text-foreground">
                      {item.skill}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;