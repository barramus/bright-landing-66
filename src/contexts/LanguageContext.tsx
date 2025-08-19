import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type Language = 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Определяем все переводы
const translations = {
  ru: {
    // Header
    'header.title': 'Системный Аналитик 3.0',
    'header.features': 'Программа',
    'header.modes': 'Режимы',
    'header.quickstart': 'Для кого',
    'header.integrations': 'Условия',
    'header.contacts': 'Контакты',
    'header.community': 'FAQ',
    'header.github': 'GitHub',
    'header.tryNow': 'Попасть на курс',
    
    // Hero
    'hero.badge': 'Революция в аналитике',
    'hero.title': 'Создайте AI-агента\nза 12 недель',
    'hero.description': 'Освойте навыки бизнес и системного анализа, научитесь работать с AI-агентами, соберите портфолио и подготовьтесь к трудоустройству.',
    'hero.startFree': 'Присоединиться к курсу',
    'hero.watchDemo': 'Скачать шаблон',
    'hero.tryModes': 'В процессе обучения вы освоите ↓',
    'hero.tryMode': 'Попробовать режим',
    
    // Hero Demo Modes  
    'hero.mode.ba.title': 'Бизнес требования',
    'hero.mode.ba.description': 'User Stories, Use Cases, прототипирование интерфейсов, BPMN, Activity diagram',
    'hero.mode.sa.title': 'Системные требования', 
    'hero.mode.sa.description': 'Архитектура, модель данных, ERD, диаграмма последовательности, документирование API, Swagger, критерии приемки, нефункциональные требования',
    'hero.mode.reviewer.title': 'Реализация AI-агента',
    'hero.mode.reviewer.description': 'Готовый работающий pet-проект в вашем портфолио',
    
    // Mode Cards
    'modes.badge': 'Программа курса',
    'modes.title': 'Программа курса',
    'modes.description': 'Каждый режим специализируется на определенной области разработки требований, обеспечивая экспертный уровень помощи на каждом этапе проекта',
    'modes.ba.title': 'Модуль 1 — Бизнес-требования (4 недели)',
    'modes.ba.description': 'Цель: Научиться переводить идеи бизнеса в чёткие и понятные требования для команды разработки.',
    'modes.ba.features.0': 'Определение целей и границ проекта',
    'modes.ba.features.1': 'Сбор и анализ требований',
    'modes.ba.features.2': 'Создание User Stories и Use Cases',
    'modes.ba.features.3': 'Прототипирование интерфейсов (от скетчей до интерактивных макетов)',
    'modes.ba.features.4': 'Построение BPMN-схем и Activity Diagram для моделирования процессов',
    'modes.ba.practice.title': 'Практика:',
    'modes.ba.practice.0': 'Разработка требований для своего пет-проекта',
    'modes.ba.practice.1': 'Подготовка полного пакета бизнес-требований',
    'modes.ba.practice.2': 'Создание интерактивного прототипа интерфейса',
    'modes.ba.result': 'Результат: готовый набор бизнес-артефактов, который можно добавить в портфолио.',
    'modes.sa.title': 'Модуль 2 — Системные требования (6 недель)',
    'modes.sa.description': 'Цель: Научиться описывать, как именно будет работать система на техническом уровне.',
    'modes.sa.features.0': 'Проектирование архитектуры системы',
    'modes.sa.features.1': 'Создание логической и физической модели данных',
    'modes.sa.features.2': 'Построение ERD (Entity Relationship Diagram)',
    'modes.sa.features.3': 'Диаграммы последовательности (Sequence Diagrams)',
    'modes.sa.features.4': 'Документирование API с использованием Swagger',
    'modes.sa.features.5': 'Определение критериев приёмки (Acceptance Criteria)',
    'modes.sa.features.6': 'Формулировка нефункциональных требований (скорость, безопасность, масштабируемость)',
    'modes.sa.practice.title': 'Практика:',
    'modes.sa.practice.0': 'Разработка архитектурной схемы проекта',
    'modes.sa.practice.1': 'Описание моделей данных и API',
    'modes.sa.practice.2': 'Подготовка документации для передачи разработчикам',
    'modes.sa.result': 'Результат: полный набор системной документации, соответствующий стандартам индустрии.',
    'modes.architect.title': 'Модуль 3 — AI-агент (2 недели)',
    'modes.architect.description': 'Цель: Реализовать и задеплоить работающего AI-ассистента, интегрированного в проект.',
    'modes.architect.features.0': 'Выбор и подключение LLM (Large Language Models)',
    'modes.architect.features.1': 'Разработка логики работы агента',
    'modes.architect.features.2': 'Интеграция с внешними сервисами и базами данных',
    'modes.architect.features.3': 'Тестирование и оптимизация ответов',
    'modes.architect.features.4': 'Деплой агента в продакшн-среду',
    'modes.architect.practice.title': 'Практика:',
    'modes.architect.practice.0': 'Настройка AI-агента под ваш пет-проект',
    'modes.architect.practice.1': 'Реализация ключевых сценариев взаимодействия',
    'modes.architect.practice.2': 'Запуск работающего продукта в реальной среде',
    'modes.architect.result': 'Результат: готовый AI-агент в портфолио — доказательство навыков в аналитике и AI-разработке.',
    'modes.designer.title': 'Designer',
    'modes.designer.description': 'Создает макеты интерфейсов и UI компоненты',
    'modes.designer.features.0': 'Макеты интерфейсов',
    'modes.designer.features.1': 'UI компоненты',
    'modes.designer.features.2': 'Прототипирование',
    'modes.designer.features.3': 'Design системы',
    'modes.reviewer.title': 'Формат обучения',
    'modes.reviewer.description': 'Комплексная программа с практическим подходом и поддержкой сообщества в течение 12 недель',
    'modes.reviewer.features.0': 'Онлайн-занятия с доступом к записям — учитесь в удобное время, пересматривайте материалы',
    'modes.reviewer.features.1': 'Домашние задания каждую неделю — практические задачи, приближённые к реальным проектам, с проверкой и обратной связью',
    'modes.reviewer.features.2': 'Пет-проект с первого модуля — разрабатываете собственный кейс от бизнес-идеи до готового AI-агента',
    'modes.reviewer.features.3': 'Создание артефактов требований — бизнес- и системные документы по всем стандартам индустрии',
    'modes.reviewer.features.4': 'Еженедельные встречи — разбор кейсов, ответы на вопросы, обмен опытом',
    'modes.reviewer.features.5': 'Общий чат p2p — общение с однокурсниками, совместное решение задач, помощь в проектах',
    'modes.reviewer.features.6': 'Комьюнити и карьерная поддержка — рекомендации по портфолио, подготовка к собеседованиям, советы по трудоустройству',
    'modes.reviewer.features.7': 'AI-агент как итог курса — рабочий продукт в портфолио, подтверждающий навыки работы с LLM',
    'modes.reviewer.features.8': 'Комплексный подход — бизнес-анализ + системный анализ в одном курсе',
    'modes.cta.title': 'Готовы попробовать все режимы?',
    'modes.cta.description': 'Скачайте расширение AI IDE BAS и получите доступ ко всем режимам работ',
    'modes.cta.button': 'Установить AI IDE BAS',
    
    // Features
    'features.badge': 'Возможности платформы',
    'features.title': 'Почему выбирают AI IDE BAS',
    'features.description': 'Современные AI технологии для автоматизации документирования, визуализации требований и упрощения рутинных процессов прямо в VS Code.',
    'features.ai.title': 'Выбор любой LLM',
    'features.ai.description': 'Интеграция с LLM по вашему API-ключу',
    'features.speed.title': 'Экономия времени',
    'features.speed.description': 'Сократите затраты на рутинные операции более чем в два раза',
    'features.integration.title': 'Интеграция VS Code',
    'features.integration.description': 'Полная интеграция с VS Code, Git, терминалом и другими инструментами',
    'features.validation.title': 'Валидация а не генерация',
    'features.validation.description': 'Забудьте про проблему чистого листа',
    'features.templates.title': 'Качественные шаблоны',
    'features.templates.description': 'AI IDE BAS включает шаблоны артефактов разработанные признанными экспертами отрасли',
    'features.customization.title': 'Гибкая настройка',
    'features.customization.description': 'Доработайте режимы с учетом потребностей вашего проекта',
    // In Development Features
    'features.indev.badge': 'В разработке',
    'features.indev.title': 'Скоро в AI IDE BAS',
    'features.indev.description': 'Функции, которые мы активно разрабатываем для улучшения вашего опыта',
    'features.team.title': 'Командная работа',
    'features.team.description': 'Совместная работа над проектами с общим контекстом',
    'features.versioning.title': 'Версионирование',
    'features.versioning.description': 'Полная история изменений и возможность откатов',
    'features.stats.developers': 'Разработчиков',
    'features.stats.projects': 'Проектов',
    'features.stats.uptime': 'Uptime',
    'features.stats.support': 'Поддержка',
    
    // Quick Start
    'quickstart.badge': 'Быстрый старт',
    'quickstart.title': 'Начните за 5 простых шагов',
    'quickstart.description': 'До первых результатов осталось меньше 5 минут',
    'quickstart.step1.title': 'Установите VS Code',
    'quickstart.step1.description': 'Используйте официальный сайт для загрузки и установки',
    'quickstart.step2.title': 'Установите AI IDE BAS',
    'quickstart.step2.description': 'AI IDE BAS доступен в маркетплейсе расширений VS Code',
    'quickstart.step3.title': 'Вставьте API ключ',
    'quickstart.step3.description': 'Используйте личный ключ для подключения LLM',
    'quickstart.step4.title': 'Выберите режим',
    'quickstart.step4.description': 'Выберите режим для вашей задачи или воспользуйтесь встроенным режимом помощника',
    'quickstart.step5.title': 'Начните работу',
    'quickstart.step5.description': 'Опишите задачу и получите сформированный артефакт',
    'quickstart.button': 'Установить AI IDE BAS',
    'quickstart.copy': 'Копировать',
    'quickstart.features.0': 'Нативная интеграция с VS Code',
    'quickstart.features.1': 'Работа с Git из коробки',
    'quickstart.features.2': 'Синхронизация с командой',
    'quickstart.features.3': 'Поддержка всех языков VS Code',
    'quickstart.help.title': 'Нужна помощь с настройкой?',
    'quickstart.help.description': 'Вы можете связаться с нами через наши социальные сети.',
    'quickstart.help.docs': 'Посмотреть документацию',
    'quickstart.help.contact': 'Связаться с нами',
    
    // Footer
    'footer.description': 'Освойте навыки бизнес и системного анализа, научитесь работать с AI-агентами, соберите портфолио и подготовьтесь к трудоустройству.',
    'footer.product': 'Продукт',
    'footer.support': 'Поддержка',
    'footer.company': 'Компания',
    'footer.product.features': 'Возможности',
    'footer.product.modes': 'Режимы работы',
    'footer.product.integrations': 'Интеграции',
    'footer.product.pricing': 'Цены',
    'footer.support.docs': 'Документация',
    'footer.support.api': 'API Reference',
    'footer.support.community': 'Сообщество',
    'footer.support.help': 'Поддержка',
    'footer.company.about': 'О нас',
    'footer.company.blog': 'Блог',
    'footer.company.careers': 'Карьера',
    'footer.company.press': 'Пресса',
    'footer.legal.privacy': 'Политика конфиденциальности',
    'footer.legal.terms': 'Условия использования',
    'footer.legal.cookies': 'Cookies',
    'footer.legal.security': 'Безопасность',
    'footer.newsletter.title': 'Будьте в курсе новостей',
    'footer.newsletter.description': 'Получайте обновления о новых функциях и режимах работы',
    'footer.newsletter.placeholder': 'Ваш email',
    'footer.newsletter.subscribe': 'Подписаться',
    'footer.copyright': '© 2025 AI IDE BAS. Все права защищены.',
    'footer.madeWith': 'Сделано с',
    'footer.forDevelopers': 'для разработчиков',
  },
  en: {
    // Header
    'header.title': 'System Analyst 3.0',
    'header.features': 'Program',
    'header.modes': 'Modes',
    'header.quickstart': 'For Whom',
    'header.integrations': 'Conditions',
    'header.contacts': 'Contacts',
    'header.community': 'FAQ',
    'header.github': 'GitHub',
    'header.tryNow': 'Get to the course',
    
    // Hero
    'hero.badge': 'Analytics Revolution',
    'hero.title': 'Create an AI agent\nin 12 weeks',
    'hero.description': 'Master business and system analysis skills, learn to work with AI agents, build a portfolio and prepare for employment.',
    'hero.startFree': 'Join the course',
    'hero.watchDemo': 'Download template',
    'hero.tryModes': 'In the learning process you will master ↓',
    'hero.tryMode': 'Try Mode',
    
    // Hero Demo Modes  
    'hero.mode.ba.title': 'Business Requirements',
    'hero.mode.ba.description': 'User Stories, Use Cases, interface prototyping, BPMN, Activity diagram',
    'hero.mode.sa.title': 'System Requirements',
    'hero.mode.sa.description': 'Architecture, data model, ERD, sequence diagram, API documentation, Swagger, acceptance criteria, non-functional requirements',
    'hero.mode.reviewer.title': 'AI Agent Implementation',
    'hero.mode.reviewer.description': 'Ready working pet-project in your portfolio',
    
    // Mode Cards
    'modes.badge': 'Course Program',
    'modes.title': 'Course Program',
    'modes.description': 'Each mode specializes in a specific area of requirements development, providing expert-level assistance at every stage of the project',
    'modes.ba.title': 'Module 1 — Business Requirements (4 weeks)',
    'modes.ba.description': 'Goal: Learn to translate business ideas into clear and understandable requirements for the development team.',
    'modes.ba.features.0': 'Defining project goals and boundaries',
    'modes.ba.features.1': 'Requirements gathering and analysis',
    'modes.ba.features.2': 'Creating User Stories and Use Cases',
    'modes.ba.features.3': 'Interface prototyping (from sketches to interactive mockups)',
    'modes.ba.features.4': 'Building BPMN schemes and Activity Diagrams for process modeling',
    'modes.ba.practice.title': 'Practice:',
    'modes.ba.practice.0': 'Developing requirements for your pet project',
    'modes.ba.practice.1': 'Preparing a complete business requirements package',
    'modes.ba.practice.2': 'Creating an interactive interface prototype',
    'modes.ba.result': 'Result: a ready set of business artifacts that can be added to your portfolio.',
    'modes.sa.title': 'Module 2 — System Requirements (6 weeks)',
    'modes.sa.description': 'Goal: Learn to describe how exactly the system will work at the technical level.',
    'modes.sa.features.0': 'System architecture design',
    'modes.sa.features.1': 'Creating logical and physical data models',
    'modes.sa.features.2': 'Building ERD (Entity Relationship Diagram)',
    'modes.sa.features.3': 'Sequence Diagrams',
    'modes.sa.features.4': 'API documentation using Swagger',
    'modes.sa.features.5': 'Defining Acceptance Criteria',
    'modes.sa.features.6': 'Formulating non-functional requirements (speed, security, scalability)',
    'modes.sa.practice.title': 'Practice:',
    'modes.sa.practice.0': 'Developing project architectural scheme',
    'modes.sa.practice.1': 'Describing data models and API',
    'modes.sa.practice.2': 'Preparing documentation for developers',
    'modes.sa.result': 'Result: a complete set of system documentation that meets industry standards.',
    'modes.architect.title': 'Module 3 — AI-agent (2 weeks)',
    'modes.architect.description': 'Goal: Implement and deploy a working AI assistant integrated into the project.',
    'modes.architect.features.0': 'Selecting and connecting LLM (Large Language Models)',
    'modes.architect.features.1': 'Developing agent logic',
    'modes.architect.features.2': 'Integration with external services and databases',
    'modes.architect.features.3': 'Testing and optimizing responses',
    'modes.architect.features.4': 'Deploying agent to production environment',
    'modes.architect.practice.title': 'Practice:',
    'modes.architect.practice.0': 'Setting up AI agent for your pet project',
    'modes.architect.practice.1': 'Implementing key interaction scenarios',
    'modes.architect.practice.2': 'Launching working product in real environment',
    'modes.architect.result': 'Result: ready AI agent in portfolio — proof of skills in analytics and AI development.',
    'modes.designer.title': 'Designer',
    'modes.designer.description': 'Creates interface mockups and UI components',
    'modes.designer.features.0': 'Interface mockups',
    'modes.designer.features.1': 'UI components',
    'modes.designer.features.2': 'Prototyping',
    'modes.designer.features.3': 'Design systems',
    'modes.reviewer.title': 'Learning Format',
    'modes.reviewer.description': 'Comprehensive program with practical approach and community support for 12 weeks',
    'modes.reviewer.features.0': 'Online classes with access to recordings — learn at your convenience, review materials',
    'modes.reviewer.features.1': 'Weekly homework assignments — practical tasks close to real projects, with review and feedback',
    'modes.reviewer.features.2': 'Pet project from the first module — develop your own case from business idea to ready AI agent',
    'modes.reviewer.features.3': 'Creating requirement artifacts — business and system documents according to industry standards',
    'modes.reviewer.features.4': 'Weekly meetings — case studies, Q&A sessions, experience sharing',
    'modes.reviewer.features.5': 'General p2p chat — communication with classmates, collaborative problem solving, project assistance',
    'modes.reviewer.features.6': 'Community and career support — portfolio recommendations, interview preparation, employment advice',
    'modes.reviewer.features.7': 'AI agent as course outcome — working product in portfolio, confirming LLM skills',
    'modes.reviewer.features.8': 'Comprehensive approach — business analysis + system analysis in one course',
    'modes.cta.title': 'Ready to try all modes?',
    'modes.cta.description': 'Download AI IDE BAS extension and get access to all work modes',
    'modes.cta.button': 'Install AI IDE BAS',
    
    // Features
    'features.badge': 'Platform Features',
    'features.title': 'Why Choose AI IDE BAS',
    'features.description': 'Modern AI technologies for automating documentation, visualizing requirements and simplifying routine processes right in VS Code.',
    'features.ai.title': 'Any LLM Choice',
    'features.ai.description': 'Integration with LLM via your API key',
    'features.speed.title': 'Time Savings',
    'features.speed.description': 'Reduce costs on routine operations by more than half',
    'features.integration.title': 'VS Code Integration',
    'features.integration.description': 'Full integration with VS Code, Git, terminal and other tools',
    'features.validation.title': 'Validation not Generation',
    'features.validation.description': 'Forget about the blank page problem',
    'features.templates.title': 'Quality Templates',
    'features.templates.description': 'AI IDE BAS includes artifact templates developed by recognized industry experts',
    'features.customization.title': 'Flexible Configuration',
    'features.customization.description': 'Refine modes according to your project needs',
    // In Development Features
    'features.indev.badge': 'In Development',
    'features.indev.title': 'Coming Soon to AI IDE BAS',
    'features.indev.description': 'Features we are actively developing to improve your experience',
    'features.team.title': 'Team Collaboration',
    'features.team.description': 'Collaborative work on projects with shared context',
    'features.versioning.title': 'Versioning',
    'features.versioning.description': 'Complete change history and rollback capabilities',
    'features.stats.developers': 'Developers',
    'features.stats.projects': 'Projects',
    'features.stats.uptime': 'Uptime',
    'features.stats.support': 'Support',
    
    // Quick Start
    'quickstart.badge': 'Quick Start',
    'quickstart.title': 'Get Started in 5 Simple Steps',
    'quickstart.description': 'Less than 5 minutes to first results',
    'quickstart.step1.title': 'Install VS Code',
    'quickstart.step1.description': 'Use the official website to download and install',
    'quickstart.step2.title': 'Install AI IDE BAS',
    'quickstart.step2.description': 'AI IDE BAS is available in the VS Code extensions marketplace',
    'quickstart.step3.title': 'Insert API Key',
    'quickstart.step3.description': 'Use your personal key to connect LLM',
    'quickstart.step4.title': 'Choose Mode',
    'quickstart.step4.description': 'Select mode for your task or use the built-in assistant mode',
    'quickstart.step5.title': 'Start Working',
    'quickstart.step5.description': 'Describe your task and get the formed artifact',
    'quickstart.button': 'Install AI IDE BAS',
    'quickstart.copy': 'Copy',
    'quickstart.features.0': 'Native VS Code integration',
    'quickstart.features.1': 'Git support out of the box',
    'quickstart.features.2': 'Team synchronization',
    'quickstart.features.3': 'Support for all VS Code languages',
    'quickstart.help.title': 'Need help with setup?',
    'quickstart.help.description': 'You can contact us through our social networks.',
    'quickstart.help.docs': 'View Documentation',
    'quickstart.help.contact': 'Contact Us',
    
    // Footer
    'footer.description': 'Revolutionary AI tool for development teams. Five expert modes in one platform to accelerate the entire development cycle.',
    'footer.product': 'Product',
    'footer.support': 'Support',
    'footer.company': 'Company',
    'footer.product.features': 'Features',
    'footer.product.modes': 'Work Modes',
    'footer.product.integrations': 'Integrations',
    'footer.product.pricing': 'Pricing',
    'footer.support.docs': 'Documentation',
    'footer.support.api': 'API Reference',
    'footer.support.community': 'Community',
    'footer.support.help': 'Support',
    'footer.company.about': 'About',
    'footer.company.blog': 'Blog',
    'footer.company.careers': 'Careers',
    'footer.company.press': 'Press',
    'footer.legal.privacy': 'Privacy Policy',
    'footer.legal.terms': 'Terms of Service',
    'footer.legal.cookies': 'Cookies',
    'footer.legal.security': 'Security',
    'footer.newsletter.title': 'Stay Updated',
    'footer.newsletter.description': 'Get updates about new features and work modes',
    'footer.newsletter.placeholder': 'Your email',
    'footer.newsletter.subscribe': 'Subscribe',
    'footer.copyright': '© 2025 AI IDE BAS. All rights reserved.',
    'footer.madeWith': 'Made with',
    'footer.forDevelopers': 'for developers',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Получаем язык из localStorage или используем системный
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && ['ru', 'en'].includes(savedLang)) {
      return savedLang;
    }
    // Определяем язык браузера
    const browserLang = navigator.language.toLowerCase();
    return browserLang.startsWith('ru') ? 'ru' : 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};