import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Rocket, 
  Cpu, 
  Bot,
  ClipboardCheck,
  FileText,
  Settings,
  GitBranch,
  Puzzle,
  Clock,
  GraduationCap,
  Code,
  BriefcaseBusiness
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Features = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Bot,
      title: t('features.ai.title'),
      description: t('features.ai.description')
    },
    {
      icon: Rocket,
      title: t('features.speed.title'),
      description: t('features.speed.description')
    },
    {
      icon: Cpu,
      title: t('features.integration.title'),
      description: t('features.integration.description')
    },
    {
      icon: ClipboardCheck,
      title: t('features.validation.title'),
      description: t('features.validation.description')
    },
    {
      icon: FileText,
      title: t('features.templates.title'),
      description: t('features.templates.description')
    },
    {
      icon: Settings,
      title: t('features.customization.title'),
      description: t('features.customization.description')
    }
  ];

  const inDevFeatures = [
    {
      icon: Puzzle,
      title: t('features.team.title'),
      description: t('features.team.description')
    },
    {
      icon: GitBranch,
      title: t('features.versioning.title'),
      description: t('features.versioning.description')
    },
    {
      icon: Settings,
      title: t('features.customization.title'),
      description: t('features.customization.description')
    }
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-background to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4">
            <Rocket className="w-4 h-4 mr-2" />
            Быстрый старт
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Кому подойдет курс?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* First Column - Джунам */}
          <Card className="group relative overflow-hidden animate-scale-in hover:scale-105 transition-all duration-300">
            <CardContent className="p-6 relative z-10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-white shadow-lg group-hover:shadow-glow transition-shadow duration-300">
                  <GraduationCap className="w-6 h-6" />
                </div>
              </div>
              
              <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                Студентам
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                Быстрый старт в профессии аналитика с реальным проектом в портфолио
              </p>
            </CardContent>
          </Card>

          {/* Second Column */}
          <Card className="group relative overflow-hidden animate-scale-in hover:scale-105 transition-all duration-300" style={{ animationDelay: "100ms" }}>
            <CardContent className="p-6 relative z-10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-white shadow-lg group-hover:shadow-glow transition-shadow duration-300">
                  <Code className="w-6 h-6" />
                </div>
              </div>
              
              <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                Junior-аналитикам
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                Систематизация знаний и освоение работы с AI-инструментами
              </p>
            </CardContent>
          </Card>

          {/* Third Column */}
          <Card className="group relative overflow-hidden animate-scale-in hover:scale-105 transition-all duration-300" style={{ animationDelay: "200ms" }}>
            <CardContent className="p-6 relative z-10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-white shadow-lg group-hover:shadow-glow transition-shadow duration-300">
                  <BriefcaseBusiness className="w-6 h-6" />
                </div>
              </div>
              
              <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                Специалистам
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                Расширение компетенций за счёт навыков работы с LLM и AI-агентами
              </p>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default Features;