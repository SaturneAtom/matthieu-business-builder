import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Linkedin } from "lucide-react";
import matthieuPortrait from "@/assets/matthieu-portrait.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/10 rounded-full animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary-foreground">
              Matthieu
              <span className="block text-accent">Business Developer</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 leading-relaxed">
              Transformateur d'opportunités en succès durables. 
              Expert en développement commercial et management stratégique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button variant="premium" size="lg" className="group">
                <Mail className="mr-2 group-hover:animate-bounce" />
                Me contacter
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Linkedin className="mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>

          {/* Portrait */}
          <div className="flex justify-center md:justify-end animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-elegant border-4 border-white/20">
                <img
                  src={matthieuPortrait}
                  alt="Matthieu - Business Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-full flex items-center justify-center shadow-glow">
                <span className="text-2xl">🚀</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-primary-foreground/70" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;