import { Button } from "@/components/ui/button";
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail,
  ArrowUpRight,
  Heart
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  const navigation = {
    product: [
      { name: t('footer.product.features'), href: "#features" },
      { name: t('footer.product.modes'), href: "#modes" },
      { name: t('footer.product.integrations'), href: "#integrations" },
      { name: t('footer.product.pricing'), href: "#pricing" },
    ],
    support: [
      { name: t('footer.support.docs'), href: "#" },
      { name: t('footer.support.api'), href: "#" },
      { name: t('footer.support.community'), href: "#community" },
      { name: t('footer.support.help'), href: "#" },
    ],
    company: [
      { name: t('footer.company.about'), href: "#" },
      { name: t('footer.company.blog'), href: "#" },
      { name: t('footer.company.careers'), href: "#" },
      { name: t('footer.company.press'), href: "#" },
    ],
    legal: [
      { name: t('footer.legal.privacy'), href: "#" },
      { name: t('footer.legal.terms'), href: "#" },
      { name: t('footer.legal.cookies'), href: "#" },
      { name: t('footer.legal.security'), href: "#" },
    ]
  };

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Email", icon: Mail, href: "mailto:hello@devmode.ai" },
  ];

  return (
    <footer className="bg-muted/30 border-t border-glass-border relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-2">
                <img 
                  src="/lovable-uploads/cfc79ad7-a059-4cab-a04c-293a54663f7c.png" 
                  alt="Analyst 3.0 Logo" 
                  className="w-11 h-10 rounded-full"
                />
                <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                  Системный Аналитик 3.0
                </span>
              </div>
              
              <p className="text-muted-foreground max-w-md leading-relaxed">
                {t('footer.description')}
              </p>

              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <Button
                      key={social.name}
                      variant="ghost"
                      size="sm"
                      className="hover:scale-110 transition-transform duration-300"
                      asChild
                    >
                      <a href={social.href} aria-label={social.name}>
                        <IconComponent className="w-4 h-4" />
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Navigation Links */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 lg:col-span-3">
              <div>
                <h3 className="font-semibold mb-4">{t('footer.product')}</h3>
                <ul className="space-y-3">
                  {navigation.product.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm hover:translate-x-1 inline-block"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4">{t('footer.support')}</h3>
                <ul className="space-y-3">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm hover:translate-x-1 inline-block flex items-center"
                      >
                        {item.name}
                        {item.name === "API Reference" && (
                          <ArrowUpRight className="w-3 h-3 ml-1" />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4">{t('footer.company')}</h3>
                <ul className="space-y-3">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm hover:translate-x-1 inline-block"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="py-8 border-t border-glass-border">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div>
              <h3 className="font-semibold mb-2">{t('footer.newsletter.title')}</h3>
              <p className="text-muted-foreground text-sm">
                {t('footer.newsletter.description')}
              </p>
            </div>
            <div className="flex space-x-2 w-full md:w-auto">
              <input
                type="email"
                placeholder={t('footer.newsletter.placeholder')}
                className="flex-1 md:w-64 px-3 py-2 text-sm border border-glass-border rounded-lg bg-glass/30 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button variant="default" size="sm">
                {t('footer.newsletter.subscribe')}
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-glass-border">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>{t('footer.copyright')}</span>
              <div className="hidden md:flex items-center space-x-4">
                {navigation.legal.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="hover:text-foreground transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;