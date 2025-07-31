import { Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
                Matthieu
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Business Developer & Manager passionné par la transformation 
                des défis en opportunités de croissance.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2">
                {[
                  { href: "#about", label: "À propos" },
                  { href: "#experience", label: "Expérience" },
                  { href: "#skills", label: "Compétences" },
                  { href: "#projects", label: "Projets" },
                  { href: "#contact", label: "Contact" }
                ].map((link) => (
                  <li key={link.href}>
                    <a 
                      href={link.href} 
                      className="text-primary-foreground/80 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Quick */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-3">
                <a 
                  href="mailto:matthieu@businessdev.fr" 
                  className="flex items-center text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Mail className="mr-2" size={16} />
                  matthieu@businessdev.fr
                </a>
                <a 
                  href="tel:+33612345678" 
                  className="flex items-center text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Phone className="mr-2" size={16} />
                  +33 6 12 34 56 78
                </a>
                <a 
                  href="https://linkedin.com/in/matthieu" 
                  className="flex items-center text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Linkedin className="mr-2" size={16} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Matthieu. Tous droits réservés.
            </p>
            <p className="text-primary-foreground/60 text-sm mt-4 md:mt-0">
              Développé avec passion pour l'excellence
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;