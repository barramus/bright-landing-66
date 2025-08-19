import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Puzzle, TrendingUp, FileText, Users, CheckCircle, Copy, Terminal, ArrowDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
const QuickStart = () => {
  const {
    t
  } = useLanguage();
  const steps = [{
    step: "01",
    title: t('quickstart.step1.title'),
    description: t('quickstart.step1.description'),
    icon: Download,
    time: "1 мин"
  }, {
    step: "02",
    title: t('quickstart.step2.title'),
    description: t('quickstart.step2.description'),
    icon: Puzzle,
    time: "1 мин"
  }, {
    step: "03",
    title: t('quickstart.step3.title'),
    description: t('quickstart.step3.description'),
    icon: TrendingUp,
    time: "30 сек"
  }, {
    step: "04",
    title: t('quickstart.step4.title'),
    description: t('quickstart.step4.description'),
    icon: FileText,
    time: "30 сек"
  }, {
    step: "05",
    title: t('quickstart.step5.title'),
    description: t('quickstart.step5.description'),
    icon: Users,
    time: "2 мин"
  }];
  const codeExample = `# Установка расширения
1. Откройте VS Code
2. Перейдите в Extensions (Ctrl+Shift+X)
3. Найдите "AI IDE BAS"
4. Нажмите Install

# Быстрый старт
Ctrl+Shift+P -> AI IDE BAS: Start
Выберите режим: BA | Architect | SA | Reviewer | Designer

# Анализ текущего файла
Ctrl+Shift+P -> AI IDE BAS: Review Current File`;
  return <section id="quickstart" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/20" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4">
            <Users className="w-4 h-4 mr-2" />
            Статистика
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 flex items-center justify-center gap-4">
            Результаты прошлого курса
            <ArrowDown className="w-8 h-8 text-foreground" />
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Statistics Blocks */}
          <div className="space-y-6">
            {/* Block 1 */}
            <Card className="group animate-slide-up" style={{
            animationDelay: "0ms"
          }}>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-white font-bold shadow-lg group-hover:shadow-glow transition-shadow duration-300">
                      70
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        Участников курса
                      </h3>
                      <Badge variant="secondary" className="text-xs">
                        Online
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Прошли обучение за последние 3 месяца
                    </p>
                  </div>
                  <Users className="w-5 h-5 text-primary flex-shrink-0" />
                </div>
              </CardContent>
            </Card>

            {/* Block 2 */}
            <Card className="group animate-slide-up" style={{
            animationDelay: "200ms"
          }}>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-white font-bold shadow-lg group-hover:shadow-glow transition-shadow duration-300">
                      45
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">Студентов успешно завершили курс</h3>
                      <Badge variant="secondary" className="text-xs">Result</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">Создали работающих AI-агентов</p>
                  </div>
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                </div>
              </CardContent>
            </Card>

            {/* Block 3 */}
            

            {/* Block 4 */}
            <Card className="group animate-slide-up" style={{
            animationDelay: "600ms"
          }}>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-white font-bold shadow-lg group-hover:shadow-glow transition-shadow duration-300">28</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">Резюме для стажировок</h3>
                      <Badge variant="secondary" className="text-xs">Resume</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">Студенты получили от нас рекомендации</p>
                  </div>
                  <FileText className="w-5 h-5 text-primary flex-shrink-0" />
                </div>
              </CardContent>
            </Card>

            {/* Block 5 */}
            <Card className="group animate-slide-up" style={{
            animationDelay: "800ms"
          }}>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-white font-bold shadow-lg group-hover:shadow-glow transition-shadow duration-300">13</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">Джунов аналитиков прошли на стажировку в Сбер</h3>
                      <Badge variant="secondary" className="text-xs">Junior</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">Всего 18 выпускников устроились на стажировку</p>
                  </div>
                  <TrendingUp className="w-5 h-5 text-primary flex-shrink-0" />
                </div>
              </CardContent>
            </Card>

            <div className="pt-4">
              <Button variant="hero" size="lg" className="w-full" asChild>
                <a href="https://t.me/+QM76lGLpwlM0ZmNi" target="_blank" rel="noopener noreferrer">
                  Присоединиться к курсу
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>

          {/* Results Images */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                Готовый pet-проект для портфолио:
              </h3>
              <div className="animate-scale-in" style={{
              animationDelay: "600ms"
            }}>
                <Card className="relative overflow-hidden">
                  <CardContent className="p-0">
                    <img src="/lovable-uploads/c8c377df-4b88-4bab-8f20-a2723714b48c.png" alt="GigaMentor - результаты после курса" className="w-full h-auto rounded-lg" />
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="animate-scale-in" style={{
            animationDelay: "800ms"
          }}>
              <Card className="relative overflow-hidden">
                <CardContent className="p-0">
                  <img src="/lovable-uploads/bb3e35a5-564d-4875-b668-a0af0c1b14a1.png" alt="GigaMentor - специализации" className="w-full h-auto rounded-lg" />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto bg-gradient-glass">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">
                Нужна подробная консультация по обучению?
              </h3>
              <p className="text-muted-foreground mb-6">
                {t('quickstart.help.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Скачать шаблон
                </Button>
                <Button variant="default" asChild>
                  <a href="https://t.me/biryukovaoly" target="_blank" rel="noopener noreferrer">
                    {t('quickstart.help.contact')}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default QuickStart;