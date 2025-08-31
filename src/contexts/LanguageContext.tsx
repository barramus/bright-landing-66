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
    'header.integrations': 'Структура обучения',
    'header.contacts': 'Контакты',
    'header.community': 'FAQ',
    'header.github': 'GitHub',
    'header.tryNow': 'Попасть на курс',
    
    // Hero
    'hero.badge': 'Революция в аналитике',
    'hero.title': 'От бизнес-идей',
    'hero.subtitle': 'к AI-решениям',
    'hero.course.description': 'Станьте аналитиком 3.0 — архитектором будущего на стыке бизнес-анализа и AI',
    'hero.practice.text': '12 недель бесплатного обучения, где вы научитесь создавать AI агента с нуля — с практикой и поддержкой комьюнити',
    'hero.homework.text': 'Попробуйте выполнить первое домашнее задание прямо сейчас',
    'hero.start.button': 'Начать первый урок',
    'hero.video.description': 'Как работает AI-агент',
    'hero.description': 'Бесплатный курс: бизнес- и системный анализ с AI',
    'hero.startFree': 'Присоединиться к курсу',
    'hero.watchDemo': 'Скачать шаблон',
    'hero.tryModes': 'В процессе обучения вы узнаете, что такое ↓',
    'hero.tryMode': 'Попробовать режим',
    'hero.video.error': 'Ваш браузер не поддерживает воспроизведение видео.',
    
    // Hero Demo Modes  
    'hero.mode.ba.title': 'Бизнес требования',
    'hero.mode.ba.description': 'User Stories, Use Cases, прототипирование интерфейсов, BPMN, Activity diagram',
    'hero.mode.ba.code': `User Stories – ожидания пользователя 
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
    'hero.mode.sa.title': 'Системные требования', 
    'hero.mode.sa.description': 'Архитектура, модель данных, ERD, диаграмма последовательности, документирование API, Swagger, критерии приемки, нефункциональные требования',
    'hero.mode.sa.code': `Архитектура – структура модулей 
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
    'hero.mode.reviewer.title': 'Реализация AI-агента',
    'hero.mode.reviewer.description': 'Готовый работающий AI-агент в вашем портфолио',
    'hero.mode.reviewer.code': `Концепция – цель, задачи 
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
    
    // Mode Cards
    'modes.badge': 'Программа курса',
    'modes.title': 'Программа курса',
    'modes.description': 'Каждый режим специализируется на определенной области разработки требований, обеспечивая экспертный уровень помощи на каждом этапе проекта',
    'modes.ba.title': 'Модуль 1 — Бизнес-требования (4 недели)',
    'modes.ba.description': 'Цель: Научиться переводить идеи бизнеса в чёткие и понятные требования.',
    'modes.ba.features.0': 'Определение целей и границ проекта',
    'modes.ba.features.1': 'Создание User Stories и Use Cases',
    'modes.ba.features.2': 'Прототипирование интерфейсов',
    'modes.ba.features.3': 'Построение BPMN-схем и Activity Diagram для моделирования процессов',
    'modes.ba.practice.title': 'Практика:',
    'modes.ba.practice.0': 'Разработка требований для своего пет-проекта',
    'modes.ba.practice.1': 'Подготовка полного пакета бизнес-требований',
    'modes.ba.practice.2': 'Создание интерактивного прототипа интерфейса',
    'modes.ba.result': 'Результат: готовый набор бизнес-требований для AI-агента',
    'modes.sa.title': 'Модуль 2 — Системные требования (4 недели)',
    'modes.sa.description': 'Цель: Научиться описывать, как именно будет работать система.',
    'modes.sa.features.0': 'Проектирование архитектуры системы',
    'modes.sa.features.1': 'Создание модели данных',
    'modes.sa.features.2': 'Построение ERD',
    'modes.sa.features.3': 'Диаграммы последовательности',
    'modes.sa.features.4': 'Документирование API с использованием Swagger',
    'modes.sa.features.5': 'Определение критериев приемки',
    'modes.sa.features.6': 'Формулировка нефункциональных требований',
    'modes.sa.practice.title': 'Практика:',
    'modes.sa.practice.0': 'Разработка архитектурной схемы проекта',
    'modes.sa.practice.1': 'Описание моделей данных и API',
    'modes.sa.practice.2': 'Подготовка документации для передачи разработчикам',
    'modes.sa.result': 'Результат: полный набор системных требований для AI-агента',
    'modes.architect.title': 'Модуль 3 — AI-агент (4 недели)',
    'modes.architect.description': 'Цель: Реализовать работающего AI-ассистента.',
    'modes.architect.features.0': 'Выбор и подключение LLM',
    'modes.architect.features.1': 'Разработка логики работы агента',
    'modes.architect.features.2': 'Тестирование и оптимизация ответов',
    'modes.architect.features.3': 'Деплой агента',
    'modes.architect.practice.title': 'Практика:',
    'modes.architect.practice.0': 'Настройка AI-агента под ваш пет-проект',
    'modes.architect.practice.1': 'Реализация ключевых сценариев взаимодействия',
    'modes.architect.practice.2': 'Запуск работающего продукта в реальной среде',
    'modes.architect.result': 'Результат: готовый AI-агент в портфолио — доказательство навыков в аналитике и AI-разработке',
    'modes.designer.title': 'Designer',
    'modes.designer.description': 'Создает макеты интерфейсов и UI компоненты',
    'modes.designer.features.0': 'Макеты интерфейсов',
    'modes.designer.features.1': 'UI компоненты',
    'modes.designer.features.2': 'Прототипирование',
    'modes.designer.features.3': 'Design системы',
    'modes.reviewer.title': 'Формат обучения',
    'modes.reviewer.description': 'Комплексная программа с практическим подходом и поддержкой сообщества в течение 12 недель',
    'modes.reviewer.features.0': 'Обучение онлайн — учитесь в удобное время, пересматривайте материалы',
    'modes.reviewer.features.1': 'Домашние задания каждую неделю — практические задачи, приближённые к реальным проектам',
    'modes.reviewer.features.2': 'Пет-проект с первого модуля — разрабатываете собственный кейс от бизнес-идеи до готового AI-агента',
    'modes.reviewer.features.3': 'Создание артефактов требований — бизнес- и системные требования',
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
    'footer.copyright': '© 2025 Системный Аналитик 3.0. Все права защищены.',
    'footer.madeWith': 'Сделано с',
    // Hero Additional
    'hero.main.title': 'Вы научитесь создавать AI-агентов',
    'hero.agent.subtitle': 'Реальный кейс: агент, разработанный нашим студентом, в рамках обучения на бесплатном курсе\n"Системный Аналитик 3.0"',
    'hero.agent.features': 'Все функции приложения полностью настроены и готовы к работе: персонализированные ответы, база знаний, история диалогов и автоматические уведомления.',
    
    // Learning Structure
    'learning.title': 'Структура обучения',
    'learning.description': 'Интерактивный курс, где вы можете последовательно изучать материал, переходя от этапа к этапу. Каждый этап содержит описание задания, инструкции, ссылки на ресурсы.',
    'learning.try.button': 'Попробуйте первое задание',
    
    // Course Steps  
    'steps.1.title': 'Этап 1: Выбор AI-агента для проекта',
    'steps.2.title': 'Этап 2: Создание макетов интерфейса',
    'steps.3.title': 'Этап 3: Моделирование бизнес-процессов',
    'steps.4.title': 'Этап 4: Проектирование архитектуры',
    'steps.5.title': 'Этап 5: Проектирование базы данных',
    'steps.6.title': 'Этап 6: Создание системных требований',
    'steps.7.title': 'Этап 7: Разработка технических спецификаций',
    'steps.8.title': 'Этап 8: Настройка и тестирование агента',
    'steps.9.title': 'Этап 9: Интеграция с внешними сервисами',
    'steps.10.title': 'Этап 10: Деплой и запуск продукта',
    
    // Format Details
    'format.practical.title': 'Практический подход',
    'format.practical.duration': '12 недель интенсивного обучения',
    'format.practical.description': 'Комплексная программа с еженедельными заданиями',
    'format.practical.details': 'Создание AI-агента с нуля, реализация артефактов требований',
    'format.community.title': 'Поддержка сообщества',
    'format.community.subtitle': 'Как мы поможем вам погрузиться в аналитику 3.0?',
    'format.community.description': 'Еженедельные встречи и общий чат участников',
    'format.community.details': 'Карьерная поддержка, подготовка к собеседованиям',
    
    // Format Features
    'format.flexible': 'Гибкий график',
    'format.flexible.desc': 'Обучение онлайн в удобное время',
    'format.project': 'Готовый проект',
    'format.project.desc': 'AI-агент в портфолио как результат',
    'format.communication': 'Живое общение',
    'format.communication.desc': 'P2P чат и еженедельные встречи',
    'format.career': 'Карьерный рост',
    'format.career.desc': 'Поддержка в трудоустройстве',
    
    // Target Audience
    'audience.title': 'Кому подойдет курс',
    'audience.students.title': 'Студентам',
    'audience.students.desc': 'Быстрый старт в профессии аналитика с реальным проектом в портфолио',
    'audience.junior.title': 'Junior-аналитикам',
    'audience.junior.desc': 'Систематизация знаний и освоение работы с AI-инструментами',
    'audience.specialists.title': 'Специалистам',
    'audience.specialists.desc': 'Расширение компетенций за счет навыков работы с LLM и AI-агентами',
    'audience.experienced.title': 'Опытным аналитикам',
    'audience.experienced.desc': 'Откройте для себя современные подходы и инструменты работы с LLM и AI-агентами',
    
    // Not For You
    'notforyou.title': 'Вам сюда не надо, если',
    'notforyou.programming': 'Вы не любите/не хотите/не умеете программировать',
    'notforyou.programming.desc': '(не можете написать вложенный цикл на Python)',
    'notforyou.communication': 'Общение с людьми - не ваше',
    'notforyou.time': 'У вас нет 80 часов в течение двух месяцев',
    
    // Why Important
    'why.title': 'Почему это важно',
    'why.subtitle': 'И почему сейчас самое время изучать AI?',
    'why.revolution.title': 'AI-революция уже началась',
    'why.revolution.subtitle': 'Внедрение AI в бизнес',
    'why.revolution.desc1': 'Искусственный интеллект меняет бизнес-процессы',
    'why.revolution.desc2': 'Компании интегрируют AI-решения в свои процессы',
    'why.demand.title': 'Рост спроса на специалистов',
    'why.demand.subtitle': 'Преимущество при трудоустройстве',
    'why.demand.desc1': 'Потребность в аналитиках со знанием AI-технологий растет',
    'why.demand.desc2': 'Навыки работы с AI становятся важным фактором при отборе',
    
    // Why Features
    'why.salary.title': 'Высокие зарплаты',
    'why.salary.desc': 'AI-специалисты получают на 30-50% больше',
    'why.growth.title': 'Карьерный рост',
    'why.growth.desc': 'Быстрое продвижение в tech-компаниях',
    'why.automation.title': 'Автоматизация',
    'why.automation.desc': 'Освободите время для творческих задач',
    'why.future.title': 'Будущее',
    'why.future.desc': 'Навыки, которые будут востребованы всегда',
    
    // CTA Community
    'cta.community.title': 'Общение, поддержка и обмен опытом с участниками курса',
    'cta.community.button': 'Присоединиться к комьюнити',
    
    // Course Structure UI
    'course.open': 'открыть',
    'course.checklist': 'Чек-лист выполнения:',
    'course.template.button': 'Шаблон требований к домашнему заданию',
    'course.template.description': 'Проверьте правильность выполнения этапа, сверившись с условиями и примерами из шаблона требований и видеолекций команды',
    'course.examples': 'Примеры AI-агентов:',
    'course.resources': 'Полезные ресурсы:',
    'course.tools': 'Инструменты:',
    'course.video.lecture': 'Видеолекция:',
    
    // Module 1 Content
    'module.1.description': 'Вам предстоит выбрать тему для вашего AI-агента и создать базовые документы: User Story и Use Case. Это фундамент всего проекта. Перед началом урока обязательно посмотрите видеолекции от команды создателей курса. Ссылки на youtube-канал находятся внизу каждого раздела.',
    'module.1.task.1': 'Выбрать AI-агента из предложенных вариантов',
    'module.1.task.2': 'Написать User Story по формуле: "Я, как [роль], хочу [действие], чтобы [результат]"',
    'module.1.task.3': 'Создать Use Case с описанием взаимодействия пользователя с системой',
    'module.1.example.1': 'HR AI ассистент для отбора кандидатов',
    'module.1.example.2': 'Маркетинг AI агент для создания постов',
    'module.1.example.3': 'CustDev AI агент для опросов пользователей',
    'module.1.example.4': 'Аналитик-консультант для создания артефактов',
    'module.1.example.5': 'Pitch-Deck AI Reviewer для проверки презентаций',
    'module.1.video.1': 'Видеолекция: "Создание и работа с User Stories"',
    'module.1.video.2': 'Видеолекция: "Описание сценариев использования"',
    
    // Module 2 Content
    'module.2.description': 'Создайте визуальные макеты для вашего AI-агента. Это поможет понять, как будет выглядеть интерфейс и как пользователь будет взаимодействовать с системой. Перед началом урока обязательно посмотрите видеолекции от команды создателей курса. Ссылки на youtube-канал находятся внизу каждого раздела.',
    'module.2.task.1': 'Создать макеты для выбранного AI-агента',
    'module.2.task.2': 'Показать основные экраны приложения',
    'module.2.task.3': 'Отобразить пользовательские сценарии',
    'module.2.tool.1': '🎨 Draw.io - для создания схем и макетов',
    'module.2.video.1': 'Видеолекция: "Создание макетов интерфейсов"',

    // Module 3 Content
    'module.3.description': 'Создайте BPMN диаграмму или Activity diagram для вашего AI-агента. Это поможет понять логику работы системы и последовательность действий. Перед началом урока обязательно посмотрите видеолекции от команды создателей курса. Ссылки на youtube-канал находятся внизу каждого раздела.',
    'module.3.task.1': 'Создать BPMN диаграмму или Activity diagram',
    'module.3.task.2': 'Отобразить основные процессы работы AI-агента',
    'module.3.tool.1': '🔄 StormBPMN - для создания BPMN диаграмм',
    'module.3.tool.2': '📊 PlantUML - для Activity diagram',
    'module.3.tool.3': '🎨 Draw.io - универсальный инструмент',
    'module.3.video.1': 'Видеолекция: BPMN',

    // Module 4 Content
    'module.4.description': 'Спроектируйте архитектуру вашего AI-агента. Определите, как будут взаимодействовать фронтенд, бэкенд и база данных. Перед началом урока обязательно посмотрите видеолекции от команды создателей курса. Ссылки на youtube-канал находятся внизу каждого раздела.',
    'module.4.task.1': 'Создать схему архитектуры системы',
    'module.4.task.2': 'Описать компоненты (фронтенд, бэкенд, БД)',
    'module.4.task.3': 'Показать связи между компонентами',
    'module.4.example.1': 'Фронтенд: веб-интерфейс или Telegram бот',
    'module.4.example.2': 'Бэкенд: Python сервер',
    'module.4.example.3': 'База данных: PostgreSQL',
    'module.4.example.4': 'AI компонент: интеграция с LLM',
    'module.4.example.5': 'RAG система: для работы с базой знаний',
    'module.4.tool.1': '🏗️ Draw.io - для создания схем',
    'module.4.video.1': 'Видеолекция: "Архитектура систем"',

    // Module 5 Content
    'module.5.description': 'Создайте ERD-диаграмму для вашего AI-агента. Определите, какие данные будут храниться и как они связаны между собой. Перед началом урока обязательно посмотрите видеолекции от команды создателей курса. Ссылки на youtube-канал находятся внизу каждого раздела.',
    'module.5.task.1': 'Создать ERD-диаграмму с основными сущностями',
    'module.5.task.2': 'Определить атрибуты каждой сущности',
    'module.5.task.3': 'Показать связи между сущностями',
    'module.5.tool.1': '🗄️ DBeaver - для работы с базами данных',
    'module.5.tool.2': '🎨 Draw.io - для создания ERD',
    'module.5.tool.3': '📊 dbdiagram.io - специализированный инструмент',
    'module.5.video.1': 'Видеолекция: "Data modeling"',
    'module.5.video.2': 'Видеолекция: "ERD диаграммы"',
    'module.5.video.3': 'Видеолекция: "ДЗ по ERD"',

    // Module 6 Content
    'module.6.description': 'Создайте UML диаграмму последовательности для вашего AI-агента. Покажите, как различные компоненты системы взаимодействуют во времени. Перед началом урока обязательно посмотрите видеолекции от команды создателей курса. Ссылки на youtube-канал находятся внизу каждого раздела.',
    'module.6.task.1': 'Создать диаграмму последовательности для основных сценариев',
    'module.6.task.2': 'Показать временную последовательность действий',
    'module.6.task.3': 'Отобразить взаимодействие между компонентами',
    'module.6.example.1': 'Обработка запроса пользователя',
    'module.6.example.2': 'Взаимодействие с LLM',
    'module.6.example.3': 'Работа с базой данных',
    'module.6.example.4': 'Формирование ответа',
    'module.6.tool.1': '📊 PlantUML - для UML диаграмм',
    'module.6.video.1': 'Видеолекция: "Диаграмма последовательности"',
    'module.6.video.2': 'Видеолекция: "Разбор ДЗ"',

    // Module 7 Content
    'module.7.description': 'Опишите REST API для вашего AI-агента в табличном виде. Определите эндпоинты, методы и параметры. Перед началом урока обязательно посмотрите видеолекции от команды создателей курса. Ссылки на youtube-канал находятся внизу каждого раздела.',
    'module.7.task.1': 'Создать таблицу с описанием API',
    'module.7.task.2': 'Определить HTTP-методы для каждого эндпоинта',
    'module.7.task.3': 'Описать параметры и ответы',
    'module.7.video.1': 'Видеолекция: "API в табличном виде"',
    'module.7.video.2': 'Видеолекция: "REST API"',
    'module.7.video.3': 'Видеолекция: "Разбор ДЗ"',

    // Module 8 Content
    'module.8.description': 'Создайте Swagger документацию для вашего API. Это поможет другим разработчикам понять, как использовать вашу систему. Перед началом урока обязательно посмотрите видеолекции от команды создателей курса. Ссылки на youtube-канал находятся внизу каждого раздела.',
    'module.8.task.1': 'Создать Swagger спецификацию в формате YAML/JSON',
    'module.8.task.2': 'Описать все эндпоинты с примерами',
    'module.8.tool.1': '📝 Swagger Editor - онлайн редактор',
    'module.8.video.1': 'Видеолекция: "Swagger документация"',

    // Module 9 Content
    'module.9.description': 'Сформулируйте критерии приемки и нефункциональные требования для вашего AI-агента. Это поможет понять, когда проект можно считать завершенным. Перед началом урока обязательно посмотрите видеолекции от команды создателей курса. Ссылки на youtube-канал находятся внизу каждого раздела.',
    'module.9.task.1': 'Создать критерии приемки в формате "Дано-Когда-Тогда"',
    'module.9.task.2': 'Определить нефункциональные требования',
    'module.9.example.1': 'Дано: пользователь отправляет запрос',
    'module.9.example.2': 'Когда: система обрабатывает запрос',
    'module.9.example.3': 'Тогда: пользователь получает ответ в течение 5 секунд',
    'module.9.example.4': 'Производительность: время ответа < 5 сек',
    'module.9.example.5': 'Надежность: доступность 99.9%',
    'module.9.example.6': 'Безопасность: шифрование данных',
    'module.9.example.7': 'Масштабируемость: поддержка 1000+ пользователей',
    'module.9.video.1': 'Видеолекция: "Критерии приемки и требования"',

    // Module 10 Content
    'module.10.description': 'Создайте работающий AI-агент и разверните его. Это финальный этап, где вы применяете все полученные знания. Перед началом урока обязательно посмотрите видеолекции от команды создателей курса. Ссылки на youtube-канал находятся внизу каждого раздела.',
    'module.10.task.1': 'Разработать AI-агента согласно техническому заданию',
    'module.10.task.2': 'Протестировать все функции',
    'module.10.task.3': 'Развернуть систему в облаке',
    'module.10.example.1': '✅ Фронтенд (web или Telegram mini app)',
    'module.10.example.2': '✅ Бэкенд на Python',
    'module.10.example.3': '✅ Интеграция с LLM',
    'module.10.example.4': '✅ PostgreSQL база данных',
    'module.10.example.5': '✅ RAG система для работы с базой знаний (при необходимости)',
    'module.10.video.1': 'Видеолекция: "Создание AI-агента"',
    'module.10.video.2': 'Пример',

    // Footer Sections
    'footer.about.title': 'О курсе',
    'footer.about.program': 'Программа',
    'footer.about.audience': 'Для кого',
    'footer.about.structure': 'Структура',
    'footer.materials.title': 'Полезные материалы',
    'footer.materials.agent': 'Как работает AI-агент',
    'footer.materials.template': 'Скачать шаблон требований',
    'footer.telegram': 'Комьюнити курса в Telegram',
    'footer.forDevelopers': 'для разработчиков',
  },
  en: {
    // Header
    'header.title': 'System Analyst 3.0',
    'header.features': 'Program',
    'header.modes': 'Modes',
    'header.quickstart': 'For Whom',
    'header.integrations': 'Learning Structure',
    'header.contacts': 'Contacts',
    'header.community': 'FAQ',
    'header.github': 'GitHub',
    'header.tryNow': 'Join the Course',
    
    // Hero
    'hero.badge': 'Analytics Revolution',
    'hero.title': 'From Business Ideas\nto AI Solutions',
    'hero.subtitle': 'to AI Solutions',
    'hero.course.description': 'Become an Analyst 3.0 — architect of the future at the intersection of business analysis and AI',
    'hero.practice.text': '12 weeks of free training where you will learn to create an AI agent from scratch — with practice and community support',
    'hero.homework.text': 'Try doing the first homework assignment right now',
    'hero.start.button': 'Start First Lesson',
    'hero.video.description': 'How AI Agent Works',
    'hero.description': 'Free course: business and system analysis with AI',
    'hero.startFree': 'Join the Course',
    'hero.watchDemo': 'Download Template',
    'hero.tryModes': 'In the learning process you will learn what is ↓',
    'hero.tryMode': 'Try Mode',
    'hero.video.error': 'Your browser does not support video playback.',
    
    // Hero Demo Modes  
    'hero.mode.ba.title': 'Business Requirements',
    'hero.mode.ba.description': 'User Stories, Use Cases, interface prototyping, BPMN, Activity diagram',
    'hero.mode.ba.code': `User Stories – user expectations 
in format "As [role], I want [goal], 
so that [value]".

Use Cases – step-by-step scenarios 
of system interaction.

Prototyping – interface visualization 
for early idea validation.

BPMN – standardized business 
process schemes.

Activity Diagram – sequence 
of actions and process logic.`,
    'hero.mode.sa.title': 'System Requirements',
    'hero.mode.sa.description': 'Architecture, data model, ERD, sequence diagram, API documentation, Swagger, acceptance criteria, non-functional requirements',
    'hero.mode.sa.code': `Architecture – module structure 
and their interactions.

Data Model – logical scheme 
of information storage.

ERD – entity relationship 
diagram.

Sequence Diagram – order 
of message exchange between components.

API Documentation / Swagger – description 
of interfaces and their parameters.

Acceptance Criteria – conditions where 
work is considered complete.

Non-functional Requirements – speed, 
security, system scalability.`,
    'hero.mode.reviewer.title': 'AI Agent Implementation',
    'hero.mode.reviewer.description': 'Ready working AI agent in your portfolio',
    'hero.mode.reviewer.code': `Concept – goals, tasks 
and agent usage scenarios.

Model Selection – AI selection by quality, 
speed and cost.

Integration – connecting model 
with application or service.

Agent Logic – request processing, 
decision making, responses.

Training and Setup – quality improvement 
through data and tests.

Testing – checking stability 
and correctness of operation.

Deploy – launching agent in real environment.

Working Product – ready solution 
as demonstration of your skills.`,
    
    // Mode Cards
    'modes.badge': 'Course Program',
    'modes.title': 'Course Program',
    'modes.description': 'Each mode specializes in a specific area of requirements development, providing expert-level assistance at every stage of the project',
    'modes.ba.title': 'Module 1 — Business Requirements (4 weeks)',
    'modes.ba.description': 'Goal: Learn to translate business ideas into clear and understandable requirements.',
    'modes.ba.features.0': 'Defining project goals and boundaries',
    'modes.ba.features.1': 'Creating User Stories and Use Cases',
    'modes.ba.features.2': 'Interface prototyping',
    'modes.ba.features.3': 'Building BPMN schemes and Activity Diagrams for process modeling',
    'modes.ba.practice.title': 'Practice:',
    'modes.ba.practice.0': 'Developing requirements for your pet project',
    'modes.ba.practice.1': 'Preparing a complete business requirements package',
    'modes.ba.practice.2': 'Creating an interactive interface prototype',
    'modes.ba.result': 'Result: ready set of business requirements for AI agent',
    'modes.sa.title': 'Module 2 — System Requirements (4 weeks)',
    'modes.sa.description': 'Goal: Learn to describe how exactly the system will work.',
    'modes.sa.features.0': 'System architecture design',
    'modes.sa.features.1': 'Creating data models',
    'modes.sa.features.2': 'Building ERD',
    'modes.sa.features.3': 'Sequence Diagrams',
    'modes.sa.features.4': 'API documentation using Swagger',
    'modes.sa.features.5': 'Defining acceptance criteria',
    'modes.sa.features.6': 'Formulating non-functional requirements',
    'modes.sa.practice.title': 'Practice:',
    'modes.sa.practice.0': 'Developing project architectural scheme',
    'modes.sa.practice.1': 'Describing data models and API',
    'modes.sa.practice.2': 'Preparing documentation for developers',
    'modes.sa.result': 'Result: complete set of system requirements for AI agent',
    'modes.architect.title': 'Module 3 — AI Agent (4 weeks)',
    'modes.architect.description': 'Goal: Implement a working AI assistant.',
    'modes.architect.features.0': 'Selecting and connecting LLM',
    'modes.architect.features.1': 'Developing agent logic',
    'modes.architect.features.2': 'Testing and optimizing responses',
    'modes.architect.features.3': 'Deploying agent',
    'modes.architect.practice.title': 'Practice:',
    'modes.architect.practice.0': 'Setting up AI agent for your pet project',
    'modes.architect.practice.1': 'Implementing key interaction scenarios',
    'modes.architect.practice.2': 'Launching working product in real environment',
    'modes.architect.result': 'Result: ready AI agent in portfolio — proof of skills in analytics and AI development',
    'modes.designer.title': 'Designer',
    'modes.designer.description': 'Creates interface mockups and UI components',
    'modes.designer.features.0': 'Interface mockups',
    'modes.designer.features.1': 'UI components',
    'modes.designer.features.2': 'Prototyping',
    'modes.designer.features.3': 'Design systems',
    'modes.reviewer.title': 'Learning Format',
    'modes.reviewer.description': 'Comprehensive program with practical approach and community support for 12 weeks',
    'modes.reviewer.features.0': 'Online learning — study at convenient time, review materials',
    'modes.reviewer.features.1': 'Weekly homework assignments — practical tasks close to real projects',
    'modes.reviewer.features.2': 'Pet project from first module — develop your own case from business idea to ready AI agent',
    'modes.reviewer.features.3': 'Creating requirements artifacts — business and system requirements',
    'modes.reviewer.features.4': 'Weekly meetings — case analysis, Q&A, experience sharing',
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
    'footer.description': 'Master business and system analysis skills, learn to work with AI agents, build portfolio and prepare for employment.',
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
    'footer.copyright': '© 2025 System Analyst 3.0. All rights reserved.',
    'footer.madeWith': 'Made with',
    // Hero Additional
    'hero.main.title': 'You will learn to create AI agents',
    'hero.agent.subtitle': 'Real case: an agent developed by our student during training in the free course "System Analyst 3.0"',
    'hero.agent.features': 'All application functions are fully configured and ready to work: personalized responses, knowledge base, dialogue history and automatic notifications.',
    
    // Learning Structure
    'learning.title': 'Learning Structure',
    'learning.description': 'Interactive course where you can sequentially study material, moving from stage to stage. Each stage contains task description, instructions, resource links.',
    'learning.try.button': 'Try the first assignment',
    
    // Course Steps  
    'steps.1.title': 'Stage 1: Choosing AI agent for project',
    'steps.2.title': 'Stage 2: Creating interface mockups',
    'steps.3.title': 'Stage 3: Business process modeling',
    'steps.4.title': 'Stage 4: Architecture design',
    'steps.5.title': 'Stage 5: Database design',
    'steps.6.title': 'Stage 6: Creating system requirements',
    'steps.7.title': 'Stage 7: Developing technical specifications',
    'steps.8.title': 'Stage 8: Agent setup and testing',
    'steps.9.title': 'Stage 9: Integration with external services',
    'steps.10.title': 'Stage 10: Deploy and product launch',
    
    // Format Details
    'format.practical.title': 'Practical Approach',
    'format.practical.duration': '12 weeks of intensive training',
    'format.practical.description': 'Comprehensive program with weekly assignments',
    'format.practical.details': 'Creating AI agent from scratch, implementing requirement artifacts',
    'format.community.title': 'Community Support',
    'format.community.subtitle': 'How will we help you dive into analytics 3.0?',
    'format.community.description': 'Weekly meetings and general participant chat',
    'format.community.details': 'Career support, interview preparation',
    
    // Format Features
    'format.flexible': 'Flexible Schedule',
    'format.flexible.desc': 'Online learning at convenient time',
    'format.project': 'Ready Project',
    'format.project.desc': 'AI agent in portfolio as result',
    'format.communication': 'Live Communication',
    'format.communication.desc': 'P2P chat and weekly meetings',
    'format.career': 'Career Growth',
    'format.career.desc': 'Employment support',
    
    // Target Audience
    'audience.title': 'Who is this course for',
    'audience.students.title': 'Students',
    'audience.students.desc': 'Quick start in analyst profession with real project in portfolio',
    'audience.junior.title': 'Junior Analysts',
    'audience.junior.desc': 'Systematizing knowledge and mastering work with AI tools',
    'audience.specialists.title': 'Specialists',
    'audience.specialists.desc': 'Expanding competencies through LLM and AI agent skills',
    'audience.experienced.title': 'Experienced Analysts',
    'audience.experienced.desc': 'Discover modern approaches and tools for working with LLM and AI agents',
    
    // Not For You
    'notforyou.title': 'This is not for you if',
    'notforyou.programming': 'You don\'t like/don\'t want/don\'t know how to program',
    'notforyou.programming.desc': '(can\'t write nested loop in Python)',
    'notforyou.communication': 'Communication with people is not your thing',
    'notforyou.time': 'You don\'t have 80 hours over two months',
    
    // Why Important
    'why.title': 'Why this is important',
    'why.subtitle': 'And why now is the best time to learn AI?',
    'why.revolution.title': 'AI revolution has already begun',
    'why.revolution.subtitle': 'AI implementation in business',
    'why.revolution.desc1': 'Artificial intelligence is changing business processes',
    'why.revolution.desc2': 'Companies integrate AI solutions into their processes',
    'why.demand.title': 'Growing demand for specialists',
    'why.demand.subtitle': 'Advantage in employment',
    'why.demand.desc1': 'Need for analysts with AI technology knowledge is growing',
    'why.demand.desc2': 'AI skills become important factor in selection',
    
    // Why Features
    'why.salary.title': 'High Salaries',
    'why.salary.desc': 'AI specialists earn 30-50% more',
    'why.growth.title': 'Career Growth',
    'why.growth.desc': 'Fast advancement in tech companies',
    'why.automation.title': 'Automation',
    'why.automation.desc': 'Free up time for creative tasks',
    'why.future.title': 'Future',
    'why.future.desc': 'Skills that will always be in demand',
    
    // CTA Community
    'cta.community.title': 'Communication, support and experience sharing with course participants',
    'cta.community.button': 'Join the Community',
    
    // Course Structure UI
    'course.open': 'open',
    'course.checklist': 'Completion Checklist:',
    'course.template.button': 'Requirements Template for Homework',
    'course.template.description': 'Check the correctness of the stage completion by comparing with conditions and examples from the requirements template and video lectures',
    'course.examples': 'AI Agent Examples:',
    'course.resources': 'Useful Resources:',
    'course.tools': 'Tools:',
    'course.video.lecture': 'Video Lecture:',
    
    // Module 1 Content
    'module.1.description': 'You need to choose a topic for your AI agent and create basic documents: User Story and Use Case. This is the foundation of the entire project. Before starting the lesson, be sure to watch video lectures from the course creators team. Links to the youtube channel are at the bottom of each section.',
    'module.1.task.1': 'Choose AI agent from suggested options',
    'module.1.task.2': 'Write User Story using formula: "As [role], I want [action], so that [result]"',
    'module.1.task.3': 'Create Use Case describing user interaction with system',
    'module.1.example.1': 'HR AI assistant for candidate selection',
    'module.1.example.2': 'Marketing AI agent for post creation',
    'module.1.example.3': 'CustDev AI agent for user surveys',
    'module.1.example.4': 'Analyst-consultant for artifact creation',
    'module.1.example.5': 'Pitch-Deck AI Reviewer for presentation checking',
    'module.1.video.1': 'Video Lecture: "Creating and Working with User Stories"',
    'module.1.video.2': 'Video Lecture: "Describing Usage Scenarios"',
    
    // Module 2 Content
    'module.2.description': 'Create visual mockups for your AI agent. This will help understand how the interface will look and how the user will interact with the system. Before starting the lesson, be sure to watch video lectures from the course creators team. Links to the youtube channel are at the bottom of each section.',
    'module.2.task.1': 'Create mockups for the selected AI agent',
    'module.2.task.2': 'Show main application screens',
    'module.2.task.3': 'Display user scenarios',
    'module.2.tool.1': '🎨 Draw.io - for creating schemes and mockups',
    'module.2.video.1': 'Video Lecture: "Creating Interface Mockups"',

    // Module 3 Content
    'module.3.description': 'Create a BPMN diagram or Activity diagram for your AI agent. This will help understand the system logic and sequence of actions. Before starting the lesson, be sure to watch video lectures from the course creators team. Links to the youtube channel are at the bottom of each section.',
    'module.3.task.1': 'Create BPMN diagram or Activity diagram',
    'module.3.task.2': 'Display main AI agent work processes',
    'module.3.tool.1': '🔄 StormBPMN - for creating BPMN diagrams',
    'module.3.tool.2': '📊 PlantUML - for Activity diagram',
    'module.3.tool.3': '🎨 Draw.io - universal tool',
    'module.3.video.1': 'Video Lecture: BPMN',

    // Module 4 Content
    'module.4.description': 'Design the architecture of your AI agent. Define how frontend, backend and database will interact. Before starting the lesson, be sure to watch video lectures from the course creators team. Links to the youtube channel are at the bottom of each section.',
    'module.4.task.1': 'Create system architecture scheme',
    'module.4.task.2': 'Describe components (frontend, backend, DB)',
    'module.4.task.3': 'Show connections between components',
    'module.4.example.1': 'Frontend: web interface or Telegram bot',
    'module.4.example.2': 'Backend: Python server',
    'module.4.example.3': 'Database: PostgreSQL',
    'module.4.example.4': 'AI component: LLM integration',
    'module.4.example.5': 'RAG system: for knowledge base work',
    'module.4.tool.1': '🏗️ Draw.io - for creating schemes',
    'module.4.video.1': 'Video Lecture: "System Architecture"',

    // Module 5 Content
    'module.5.description': 'Create an ERD diagram for your AI agent. Define what data will be stored and how it is connected. Before starting the lesson, be sure to watch video lectures from the course creators team. Links to the youtube channel are at the bottom of each section.',
    'module.5.task.1': 'Create ERD diagram with main entities',
    'module.5.task.2': 'Define attributes for each entity',
    'module.5.task.3': 'Show relationships between entities',
    'module.5.tool.1': '🗄️ DBeaver - for working with databases',
    'module.5.tool.2': '🎨 Draw.io - for creating ERD',
    'module.5.tool.3': '📊 dbdiagram.io - specialized tool',
    'module.5.video.1': 'Video Lecture: "Data modeling"',
    'module.5.video.2': 'Video Lecture: "ERD diagrams"',
    'module.5.video.3': 'Video Lecture: "ERD homework"',

    // Module 6 Content
    'module.6.description': 'Create a UML sequence diagram for your AI agent. Show how different system components interact over time. Before starting the lesson, be sure to watch video lectures from the course creators team. Links to the youtube channel are at the bottom of each section.',
    'module.6.task.1': 'Create sequence diagram for main scenarios',
    'module.6.task.2': 'Show temporal sequence of actions',
    'module.6.task.3': 'Display interaction between components',
    'module.6.example.1': 'Processing user request',
    'module.6.example.2': 'LLM interaction',
    'module.6.example.3': 'Database work',
    'module.6.example.4': 'Response formation',
    'module.6.tool.1': '📊 PlantUML - for UML diagrams',
    'module.6.video.1': 'Video Lecture: "Sequence Diagram"',
    'module.6.video.2': 'Video Lecture: "Homework Review"',

    // Module 7 Content
    'module.7.description': 'Describe REST API for your AI agent in tabular format. Define endpoints, methods and parameters. Before starting the lesson, be sure to watch video lectures from the course creators team. Links to the youtube channel are at the bottom of each section.',
    'module.7.task.1': 'Create table with API description',
    'module.7.task.2': 'Define HTTP methods for each endpoint',
    'module.7.task.3': 'Describe parameters and responses',
    'module.7.video.1': 'Video Lecture: "API in tabular format"',
    'module.7.video.2': 'Video Lecture: "REST API"',
    'module.7.video.3': 'Video Lecture: "Homework Review"',

    // Module 8 Content
    'module.8.description': 'Create Swagger documentation for your API. This will help other developers understand how to use your system. Before starting the lesson, be sure to watch video lectures from the course creators team. Links to the youtube channel are at the bottom of each section.',
    'module.8.task.1': 'Create Swagger specification in YAML/JSON format',
    'module.8.task.2': 'Describe all endpoints with examples',
    'module.8.tool.1': '📝 Swagger Editor - online editor',
    'module.8.video.1': 'Video Lecture: "Swagger documentation"',

    // Module 9 Content
    'module.9.description': 'Formulate acceptance criteria and non-functional requirements for your AI agent. This will help understand when the project can be considered complete. Before starting the lesson, be sure to watch video lectures from the course creators team. Links to the youtube channel are at the bottom of each section.',
    'module.9.task.1': 'Create acceptance criteria in "Given-When-Then" format',
    'module.9.task.2': 'Define non-functional requirements',
    'module.9.example.1': 'Given: user sends request',
    'module.9.example.2': 'When: system processes request',
    'module.9.example.3': 'Then: user receives response within 5 seconds',
    'module.9.example.4': 'Performance: response time < 5 sec',
    'module.9.example.5': 'Reliability: 99.9% availability',
    'module.9.example.6': 'Security: data encryption',
    'module.9.example.7': 'Scalability: support for 1000+ users',
    'module.9.video.1': 'Video Lecture: "Acceptance criteria and requirements"',

    // Module 10 Content
    'module.10.description': 'Create a working AI agent and deploy it. This is the final stage where you apply all acquired knowledge. Before starting the lesson, be sure to watch video lectures from the course creators team. Links to the youtube channel are at the bottom of each section.',
    'module.10.task.1': 'Develop AI agent according to technical specification',
    'module.10.task.2': 'Test all functions',
    'module.10.task.3': 'Deploy system in cloud',
    'module.10.example.1': '✅ Frontend (web or Telegram mini app)',
    'module.10.example.2': '✅ Python backend',
    'module.10.example.3': '✅ LLM integration',
    'module.10.example.4': '✅ PostgreSQL database',
    'module.10.example.5': '✅ RAG system for knowledge base work (if needed)',
    'module.10.video.1': 'Video Lecture: "Creating AI agent"',
    'module.10.video.2': 'Example',

    // Footer Sections
    'footer.about.title': 'About Course',
    'footer.about.program': 'Program',
    'footer.about.audience': 'For Whom',
    'footer.about.structure': 'Structure',
    'footer.materials.title': 'Useful Materials',
    'footer.materials.agent': 'How AI Agent Works',
    'footer.materials.template': 'Download Requirements Template',
    'footer.telegram': 'Course Community in Telegram',
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