import { ref } from 'vue'
import { defineStore } from 'pinia'

interface Project {
  info: string,
  patent?: string,
  addit?: string,
  result: string,
}

export interface AboutMe {
  title: string,
  main: string,
  projects: Project[],
}

export interface MainInfo {
	name: string,
	position: string
	date: string,
	locate: string,
	email: string,
	titleLang: string,
	lang1: string,
	lang2: string,
	linkdin: string,
	github: string
}

interface Responsibility {
	name: string,
	description: string[]
}

interface Experience {
	start_date: string,
	end_date: string,
	company: string,
	site?: string,
	location: string,
	position: string,
	responsibility_name: string,
	responsibility: Responsibility[],
	team: string,
	tools: string
}

export interface Experiences {
	name: string,
	exp: Experience[]
}

interface Study {
	start_date: string,
	end_date: string,
	name: string,
	location: string,
	profession: string,
	lvl?: string
}

export interface Studys {
	name: string,
	study: Study[]
}

interface MyProject {
  name: string,
  link: string,
  description: string[],
  screen: string[],
}

export interface MyProjects {
  name: string,
  project: MyProject[]
}

export const Store = defineStore('main_store', () => {
  const lang = ref(localStorage.getItem('lang') ? localStorage.getItem('lang') : 'eng')

  // main info
  const mainInfoEng : MainInfo = {
    name: 'Mansur Kakushkin',
    position: 'Frontend developer',
    date: 'April 1st, 1994 (29 y.o.)',
    locate: 'Yerevan, Armenia',
    email: 'Email: Kakushkin.mansur@gmail.com',
    titleLang: 'Languages:',
    lang1: 'Russian (native)',
    lang2: 'English (B1)',
    linkdin: 'https://www.linkedin.com/in/mansur-kakushkin-00a399235',
    github: 'https://github.com/mansur0987-del',
  }

  const mainInfoRus : MainInfo = {
    name: 'Какушкин Мансур Наилевич',
    position: 'Фронтенд разработчик',
    date: '01.04.1994 (29 лет)',
    locate: 'Ереван, Армения',
    email: 'Эл. почта: Kakushkin.mansur@gmail.com',
    titleLang: 'Языки:',
    lang1: 'Русский (родной)',
    lang2: 'Английский (B1)',
    linkdin: 'https://www.linkedin.com/in/mansur-kakushkin-00a399235/',
    github: 'https://github.com/mansur0987-del/',
  }


  //about me
  const aboutMeRus: AboutMe = {
    title: "Обо мне",
    main: "Имею пятилетний опыт работы на позиции системного аналитика. \
    Разрабатывал с командой сервисы по автоматизации юридических и финансовых процессов",
    projects:
    [
      {
        info: "Создание системы автоматизированного формирования юридического заключения.",
        patent: "Патент: RU2732071C1",
        addit: "Зарегистрирован в реестре отечественного ПО 17.06.2022 №2022661214",
        result: "Оптимизация временных и человеческих ресурсов более чем в 5 раз. \
        Исключение ошибок из-за человеческого фактора.",
      },{
        info: "Создание системы по автоматизированному взаимодействие между внутренними \
        сервисами брокера с внешними системами банков и Национального расчетного депозитария (НРД).",
        result: "Оптимизация временных и человеческих ресурсов более чем в 2 раза."
      },
      {
        info: "Внедрение системы по полуавтоматизированному формированию документов в \
        внутренние системные контуры крупного бизнеса. ",
        result: "Оптимизация временных и человеческих ресурсов более чем в 3 раза. \
        Минимизация ошибок из-за человеческого фактора."
      }
    ]
  }

  const aboutMeEng: AboutMe = {
    title: "About me",
    main: "I have five years of experience as a systems analyst. \
    Developed services for automating legal and financial processes with my team",
    projects: [
      {
        info: "Creation of a system for automated formation of a legal opinion.",
        patent: "Patent: RU2732071C1",
        addit: "Registered in the register of domestic software on 17.06.2022 №2022661214.",
        result: "Optimization of time and human resources more than 5 times. Elimination of \
        errors due to human factor."
      },
      {
        info: "Creation of a system for automated interaction between the broker's internal \
        services and external systems of banks and the National Settlement Depository (NSD).",
        result: "Optimization of time and human resources by more than 2 times."
      },
      {
        info: "Implementation of a system for semi-automated document generation into the \
        internal system circuits of a large business.",
        result: "Optimization of time and human resources more than 3 times. Minimization \
        of errors due to human factor."
      }
    ]
  }

  //experience
  const ExperiencesRus: Experiences = {
    name: 'Опыт работы',
    exp:
    [
      {
        start_date: 'Декабрь 2018',
        end_date: 'Октябрь 2022',
        company: 'Сбер',
        site: 'http://www.sberbank.ru/',
        location: 'Москва',
        position: 'Системный аналитик',
        responsibility_name: 'Функциональные обязанности:',
        responsibility: [{
          name: 'Аналитика:',
          description: [
            'Поддержка интеграционного взаимодействия (схемы интеграции запрос-ответ, \
            оптимизация межсистемного взаимодействия и т.д.), согласование проектной документации.',
            'Участие в разработке языка DSL на базе Python как инструмента due diligence \
            в корпоративном кредитовании.',
            'Создание руководства пользователя и администратора для внутреннего сервиса.',
            'Создание внутренней аналитического сервиса для команды аудиторов для хранения \
            данных и загрузки необходимой информации.',
            'Выявление технических/логических ошибок и формирование предложений по улучшению \
            работы сервиса Робот юрист с последующей фиксацией.',
            'Разработка и техническая поддержка проектов LegalTech, дальнейшее развитие \
            автоматизированного процесса due diligence (исследование AS IS, разработка TO BE процессов).',
            'При взаимодействии с командой DS участвовал в создании и улучшении до 90% \
            F-меры сервиса для формирования объединенного документа на основе машинного обучения.'
          ]
          },{
            name: 'Управление проектом:',
            description: [
              'Формирование бэклога, координация ресурсов команды во время спринта, \
              подготовка к развертыванию релизов и т.д.'
            ]
          }
        ],
        team: 'Команда: 10 сотрудников',
        tools: 'Инструменты: PyCharm, Confluence, Jira, XMLSpy, Jenkins, Grafana, MS Excel и Word.'
      },
      {
        start_date: 'Ноябрь 2022',
        end_date: 'Апрель 2023',
        company: 'ООО Умная Автоматизация',
        site: 'turbocontract.ru',
        location: 'Москва, удаленно',
        position: 'Системный аналитик',
        responsibility_name: 'Функциональные обязанности:',
        responsibility: [{
          name: 'Аналитика:',
          description: [
            'Создание и согласование проектной документации по внедрению сервиса в контур Заказчика.\
            Сервис успешно внедрен и интегрирован с внутренними сервисами у всех Заказчиков.',
            'Формирование выгрузок из БД сервиса для последующей аналитики и фиксации в отчеты по работе системы.',
            'Выявление дефектов сервиса (описание сценария и гипотезы возникновения с последующей \
            приоритезацией и фиксацией задачи). Выявлено 15 критических дефектов блокирующих работу, \
            которые впоследствии были устранены.',
            'Подготовка технической документации по расширению функционала сервиса и тестирование результатов работ. \
            Добавлены 4 фичи, которые упростили работу пользователю и администратору сервиса.',
            'Самостоятельно производил новые релизы сервиса в внутреннем контуре Заказчиков.'
          ]
          },{
            name: 'Управление проектом:',
            description: [
              'Согласование задач и этапов внедрения с Заказчиками и командой \
              разработки (приоритеты, сроки).'
            ]
          }
        ],
        team: 'Команда: 15 сотрудников',
        tools: 'Инструменты: Redmine, MS Excel и Word, Draw.io, Archi, VS Code, DBeaver, PuTTY, Postman, Docker, Docker-compose'
      },
      {
        start_date: 'Ноябрь 2022',
        end_date: 'н.в.',
        company: 'Extrum Technologies',
        location: 'Астана, удаленно',
        position: 'Системный аналитик',
        responsibility_name: 'Функциональные обязанности:',
        responsibility: [{
          name: 'Аналитика:',
          description: [
            'Формирование и согласование проектной документации с Заказчиками.',
            'Проработка и последующее согласованием с заказчиком и командой \
            разработки внутренней архитектуры сервиса, сроков и стоимости реализации, \
            интеграционных взаимодействий и дизайна.',
            'Тестирование готового функционала, заведение задач на доработку и т.д.',
            'Создание технической документации для небольших программ, \
            контроль за разработкой и тестирование. \
            Данные программы реализованы в кратчайшие сроки и оптимизировали \
            работу бизнес подразделений Заказчиков в несколько раз.']
          },{
            name: 'Управление проектом:',
            description: [
              'Формирование команды разработчиков и дизайнера.',
              'Формирование беклога, определение приоритета, сроков и контроль исполнения задач в срок.'
            ]
          }
        ],
        team: 'Команда: 8 сотрудников',
        tools: 'Инструменты: ClickUp, MS Excel и Word, Draw.io, Google Таблицы, VS Code, Figma, DBeaver, Postman, Docker, Docker-compose'
      },
    ]
  }

  const ExperiencesEng: Experiences = {
    name: 'Work Experience',
    exp:
    [
      {
        start_date: 'December 2018',
        end_date: 'October 2022',
        company: 'Sber',
        site: 'http://www.sberbank.ru',
        location: 'Moscow',
        position: 'System Analyst',
        responsibility_name: 'Functional Responsibilities:',
        responsibility: [{
          name: 'Analytics:',
          description: [
            'Integrated various systems and optimized their interactions using \
            request-response schemes and project documentation.',
            'Developed a DSL language in Python for due diligence in corporate lending.',
            'Produced user and administrator manuals for an internal service.',
            'Built an internal analytics service for the audit team to store and upload data.',
            'Detected and corrected technical/logical errors and suggested \
            improvements for the Robot Lawyer service.',
            'Developed and supported LegalTech projects and automated due diligence processes \
            (researched AS IS and developed TO BE processes).',
            'Collaborated with the DS team to create and enhance a service \
            that generates a merged document based on machine learning with up to 90% F-measure.'
          ]
          },{
            name: 'Project Management:',
            description: [
              'Generated backlog, coordinated team resources during sprints, prepared for release deployments, etc.'
            ]
          }
        ],
        team: 'Team: 10 employees',
        tools: 'Tools: PyCharm, Confluence, Jira, XMLSpy, Jenkins, Grafana, MS Excel и Word.'
      },
      {
        start_date: 'November 2022',
        end_date: 'April 2023',
        company: 'ООО Умная Автоматизация (Smart Automation Ltd.)',
        site: 'turbocontract.ru',
        location: 'Moscow, remotely',
        position: 'System analyst',
        responsibility_name: 'Functional responsibilities:',
        responsibility: [{
          name: 'Analytics:',
          description: [
            "Created and coordinated project documentation for the service implementation into the Customer’s circuit.\
            Successfully implemented and integrated the service with internal services of all Customers.",
            'Generated data exports from the service database for further analytics and reporting on the system operation.',
            'Identified service defects (described the scenario and hypothesis of occurrence with subsequent prioritization and task assignment). \
            Identified and resolved 15 critical defects that blocked the work.',
            'Prepared technical documentation to extend the service functionality and tested the work results.\
            Added 4 features that simplified the work for the service user and administrator.',
            "Coordinated implementation tasks and milestones with Customers and development team (priorities, deadlines)."
          ]
          },{
            name: 'Project Management:',
            description: [
              'Coordinated implementation tasks and milestones with Customers and development team (priorities, deadlines).'
            ]
          }
        ],
        team: 'Team: 15 employees',
        tools: 'Tools: Redmine, MS Excel and Word, Draw.io, Archi, VS Code, DBeaver, PuTTY, Postman, Docker, Docker-compose'
      },
      {
        start_date: 'November 2022',
        end_date: 'present',
        company: 'Extrum Technologies',
        location: 'Astana, remotely',
        position: 'System Analyst',
        responsibility_name: 'Functional Responsibilities:',
        responsibility: [{
          name: 'Analytics:',
          description: [
            'Created and coordinated project documentation with Customers.',
            'Designed and coordinated with the customer and the development team the \
            internal architecture of the service, implementation terms and costs, integration interactions and design.',
            'Tested the ready functionality, assigned tasks for improvement, etc.',
            "Created technical documentation for small programs, controlled development and testing.\
            These programs were implemented in the shortest time and optimized the work of the Customer’s business units several times."]
          },{
            name: 'Project management:',
            description: [
              'Formed a team of developers and designer.',
              'Formed backlog, prioritized, set deadlines and monitored tasks execution in time.'
            ]
          }
        ],
        team: 'Team: 10 employees',
        tools: 'Tools: ClickUp, MS Excel и Word, Draw.io, Google Таблицы, VS Code, Figma, DBeaver, Postman, Docker, Docker-compose'
      },
    ]
  }

  //study
  const studysRus: Studys = {
    name: 'Образование',
    study:
    [
      {
        start_date: '2012',
        end_date: '2016',
        name: 'Московская государственная юридическая академия им. О.Е. Кутафина',
        location: 'Москва',
        profession: 'Юриспруденция',
        lvl: 'Бакалавр'
      },
      {
        start_date: '2016',
        end_date: '2019',
        name: 'Московская государственная юридическая академия им. О.Е. Кутафина',
        location: 'Москва',
        profession: 'Юриспруденция',
        lvl: 'Магистр'
      },
      {
        start_date: '2021',
        end_date: 'н.в.',
        name: '42 (École 42)',
        location: 'Москва, Ереван',
        profession: 'Архитектор по цифровым технологиям, Общее компьютерное программирование | программист'
      }
    ]
  }

  const studysEng: Studys = {
    name: 'Education',
    study:
    [
      {
        start_date: '2012',
        end_date: '2016',
        name: 'Kutafin Moscow State Law University (MSAL)',
        location: 'Moscow',
        profession: 'Lawyer',
        lvl: 'Bachelor of Science'
      },
      {
        start_date: '2016',
        end_date: '2019',
        name: 'Kutafin Moscow State Law University (MSAL)',
        location: 'Moscow',
        profession: 'Lawyer',
        lvl: 'Master of Science'
      },
      {
        start_date: '2021',
        end_date: 'present',
        name: '42 (École 42)',
        location: 'Moscow, Yerevan',
        profession: 'Digital Technology Architect, General Computer Programming | Programmer'
      }
    ]
  }

  //My projects
  const myProjectRus : MyProjects = {
    name: 'Проекты',
    project: [
      {
        name: 'ft_trancendence',
        link: 'https://github.com/mansur0987-del/ft_transcendence',
        description: [
          'Сайт для игры в pong с другим игроком на 3 разных уровнях сложности, \
          с чатом, достижениями, френд-листом и историей матчей.',
          "Используется классическая клиент-серверная архитектура: Клиент взаимодействует с frontend'ом. \
          Frontend взаимодействует с backend'ом через http-запросы и web-сокеты. Backend \
          взаимодействует с базой данных через TypeORM.",
          'База данных: PostgreSQL.',
          'Backend: NestJS.',
          'Frontend: Vue.js.',
        ],
        screen: [
          './ft_tr1.png',
          './ft_tr1.1.png',
          './ft_tr2.png',
          './ft_tr3.png',
          './ft_tr4.png',
          './ft_tr5.png'
        ]
      },
      {
        name: 'web_CV',
        link: 'https://github.com/mansur0987-del/CV',
        description: [
          'Веб-сайт с резюме.',
          'Легко настраивается и модифицируется под определенного пользователя.',
          'Возможно динамически изменять язык текста и изменять фон.',
          'Frontend: Vue.js (TypeScript, pinia, element-plus)',
          'Развернуто: AWS Amplify'
        ],
        screen: []
      }
    ]
  }

  const myProjectEng : MyProjects = {
    name: 'Projects',
    project: [
      {
        name: 'ft_trancendence',
        link: 'https://github.com/mansur0987-del/ft_transcendence',
        description: [
          'A website that allows users to play pong with another player at three levels of \
          difficulty, with features such as chat, achievements, friend list and match history.',
          "The website uses a classic client-server architecture: The client interacts with the \
          frontend. The frontend interacts with the backend via HTTP requests and web-sockets. \
          The backend interacts with the database via TypeORM.",
          'Database: PostgreSQL.',
          'Backend: NestJS.',
          'Frontend: Vue.js.',
        ],
        screen: [
          './ft_tr1.png',
          './ft_tr1.1.png',
          './ft_tr2.png',
          './ft_tr3.png',
          './ft_tr4.png',
          './ft_tr5.png'
        ]
      },
      {
        name: 'web_CV',
        link: 'https://github.com/mansur0987-del/CV',
        description: [
          'A website that showcases a CV.',
          'The website is easy to customize and modify for a specific user.',
          'The website allows the user to dynamically change the text language and the background.',
          'Frontend: Vue.js (TypeScript, pinia, element-plus)',
          'Deployment: AWS Amplify'
        ],
        screen: []
      }
    ]
  }


  return {
    lang,
    aboutMeRus,
    aboutMeEng,
    mainInfoRus,
    mainInfoEng,
    ExperiencesRus,
    ExperiencesEng,
    studysRus,
    studysEng,
    myProjectRus,
    myProjectEng
  }
})
