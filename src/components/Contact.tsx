import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "matthieu@businessdev.fr",
      href: "mailto:matthieu@businessdev.fr"
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: "+33 6 12 34 56 78",
      href: "tel:+33612345678"
    },
    {
      icon: MapPin,
      label: "Localisation",
      value: "Paris, France",
      href: "#"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/matthieu",
      href: "https://linkedin.com/in/matthieu"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Collaborons ensemble
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Vous avez un projet de développement commercial ou besoin d'accompagnement stratégique ? 
              Discutons de la façon dont nous pouvons créer du succès ensemble.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">Restons en contact</h3>
                <p className="text-muted-foreground mb-8">
                  Je suis toujours ravi d'échanger sur de nouveaux défis et opportunités. 
                  N'hésitez pas à me contacter pour discuter de vos projets.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <a 
                        href={info.href}
                        className="flex items-center space-x-4 text-foreground hover:text-primary transition-colors"
                      >
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <info.icon className="text-primary-foreground" size={24} />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">{info.label}</div>
                          <div className="font-semibold">{info.value}</div>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-gradient-accent text-accent-foreground">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-2">Disponibilité</h4>
                  <p className="text-accent-foreground/90">
                    Actuellement disponible pour de nouveaux projets et collaborations. 
                    Réponse garantie sous 24h.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Envoyez-moi un message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-foreground">
                        Prénom
                      </label>
                      <Input 
                        id="firstName" 
                        placeholder="Votre prénom" 
                        className="transition-all duration-300 focus:shadow-glow"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-foreground">
                        Nom
                      </label>
                      <Input 
                        id="lastName" 
                        placeholder="Votre nom" 
                        className="transition-all duration-300 focus:shadow-glow"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="votre.email@exemple.com" 
                      className="transition-all duration-300 focus:shadow-glow"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-foreground">
                      Entreprise
                    </label>
                    <Input 
                      id="company" 
                      placeholder="Votre entreprise" 
                      className="transition-all duration-300 focus:shadow-glow"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Parlez-moi de votre projet..." 
                      rows={6}
                      className="transition-all duration-300 focus:shadow-glow"
                    />
                  </div>
                  
                  <Button type="submit" variant="hero" size="lg" className="w-full group">
                    <Send className="mr-2 group-hover:translate-x-1 transition-transform" />
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;