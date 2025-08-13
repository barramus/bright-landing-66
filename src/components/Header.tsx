import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, ArrowUpRight, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  const navigation = [
    { name: t('header.features'), href: "#features" },
    { name: t('header.modes'), href: "#modes" },
    { name: t('header.quickstart'), href: "#quickstart" },
    { name: t('header.integrations'), href: "#integrations" },
    { name: t('header.community'), href: "#community" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-glass/70 backdrop-blur-md border-b border-glass-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              AI IDE BAS
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 hover:scale-105"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setLanguage(language === 'ru' ? 'en' : 'ru')}
            >
              <Globe className="w-4 h-4 mr-2" />
              {language === 'ru' ? 'EN' : 'RU'}
            </Button>
            <Button variant="ghost" size="sm">
              <Github className="w-4 h-4 mr-2" />
              {t('header.github')}
            </Button>
            <Button variant="hero" size="sm">
              {t('header.tryNow')}
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-glass/95 backdrop-blur-md border-b border-glass-border animate-fade-in">
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-muted-foreground hover:text-foreground transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-glass-border space-y-2">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full justify-start"
                  onClick={() => setLanguage(language === 'ru' ? 'en' : 'ru')}
                >
                  <Globe className="w-4 h-4 mr-2" />
                  {language === 'ru' ? 'EN' : 'RU'}
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  <Github className="w-4 h-4 mr-2" />
                  {t('header.github')}
                </Button>
                <Button variant="hero" size="sm" className="w-full">
                  {t('header.tryNow')}
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;