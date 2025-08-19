import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Sparkles, Zap, Brain, Code2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const [activeDemo, setActiveDemo] = useState("ba");
  const { t } = useLanguage();

  const demoModes = {
    ba: {
      title: t('hero.mode.ba.title'),
      description: t('hero.mode.ba.description'),
      code: `User Stories – ожидания пользователя 
в формате «Как [роль], хочу [цель], 
чтобы [ценность]».

Use Cases – пошаговые сценарии 
взаимодействия с системой.

Прототипирование – визуализация 
интерфейсов для ранней проверки идей.

BPMN – стандартизированная схема 
бизнес-процессов.

Activity Diagram – последовательность 
действий и логика процессов.`,
      icon: Sparkles,
    },
    sa: {
      title: t('hero.mode.sa.title'),
      description: t('hero.mode.sa.description'),
      code: `Архитектура – структура модулей 
и их взаимодействие.

Модель данных – логическая схема 
хранения информации.

ERD – диаграмма сущностей 
и связей между ними.

Диаграмма последовательности – порядок 
обмена сообщениями между компонентами.

Документирование API / Swagger – описание 
интерфейсов и их параметров.

Критерии приемки – условия, при которых 
работа считается завершённой.

Нефункциональные требования – скорость, 
безопасность, масштабируемость системы.`,
      icon: Brain,
    },
    reviewer: {
      title: t('hero.mode.reviewer.title'),
      description: t('hero.mode.reviewer.description'),
      code: `Концепция – цель, задачи 
и сценарии использования агента.

Выбор модели – подбор ИИ по качеству, 
скорости и стоимости.

Интеграция – соединение модели 
с приложением или сервисом.

Логика агента – обработка запросов, 
принятие решений, ответы.

Обучение и настройка – улучшение качества 
через данные и тесты.

Тестирование – проверка стабильности 
и корректности работы.

Деплой – запуск агента в реальной среде.

Работающий продукт – готовое решение 
как демонстрация ваших навыков.`,
      icon: Zap,
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-glow" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-glow" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
            <Sparkles className="w-4 h-4 mr-2" />
            {t('hero.badge')}
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent leading-tight">
            {t('hero.title').split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index === 0 && <br />}
              </React.Fragment>
            ))}
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button variant="hero" size="hero" className="animate-scale-in" asChild>
              <a href="https://t.me/+QM76lGLpwlM0ZmNi" target="_blank" rel="noopener noreferrer">
                {t('hero.startFree')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button variant="glass" size="hero" className="animate-scale-in">
              <Download className="w-5 h-5 mr-2" />
              {t('hero.watchDemo')}
            </Button>
          </div>
        </div>

        {/* Demo Section */}
        <div className="max-w-6xl mx-auto animate-slide-up">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-4">{t('hero.tryModes')}</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {Object.entries(demoModes).map(([key, mode]) => {
                const IconComponent = mode.icon;
                return (
                  <Button
                    key={key}
                    variant={activeDemo === key ? "default" : "glass"}
                    size="sm"
                    onClick={() => setActiveDemo(key)}
                    className="transition-all duration-300"
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    {mode.title}
                  </Button>
                );
              })}
            </div>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-5 gap-6 items-center">
                <div className="md:col-span-2">
                  <div className="flex items-center mb-4">
                    {React.createElement(demoModes[activeDemo].icon, {
                      className: "w-6 h-6 mr-3 text-primary"
                    })}
                    <h4 className="text-xl font-semibold">
                      {demoModes[activeDemo].title}
                    </h4>
                  </div>
                  <p className="text-muted-foreground">
                    {demoModes[activeDemo].description}
                  </p>
                </div>
                <div className="md:col-span-3 bg-muted/50 rounded-lg p-4 border border-glass-border">
                  <pre className="text-sm font-mono text-muted-foreground overflow-x-auto">
                    <code>{demoModes[activeDemo].code}</code>
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;