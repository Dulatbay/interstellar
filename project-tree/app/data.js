const hackathonFlow = {stroke: '#9e43e4', strokeWidth: 3};
const commerceFlow = {stroke: '#3de14c', strokeWidth: 3};

export const initialNodes = [{
    id: '1', position: {x: 0, y: 0}, data: {
        label: 'X and 0',
        tools: ['C++'],
        images: ['/1.png', '/2.png'],
        description: 'Самые обычные крестики и нолики :)',
    }, className: 'rounded-node'
}, {
    id: '2', position: {x: 0, y: 240}, data: {
        label: 'Snake', tools: ['C++'], description: 'Самая обычная змейка :)', images: ['/1.png'],
    }, className: 'rounded-node'
}, {
    id: '3', position: {x: 0, y: 490}, data: {
        label: 'Steam Rep',
        tools: ['C++'],
        description: 'Консольная игра на С++, которая соединила в себя 4 игры. Живое воплащение фразы \'Неидеальное действие лучше идеального бездействия.\'',
        images: ['/1.png'],
    }, className: 'rounded-node gold'
}, {
    id: '4', position: {x: 0, y: 740}, data: {
        label: 'Labyrinth',
        tools: ['C++', 'SFML', 'Command Work'],
        description: 'Консольная игра на фреймворке SFML и языком программирования C++. Игра про лабиринт, где главный герой должен найти выход, по пути сражаясь с монстрами и собирая все необходимые ресурсы для выживания. Проект содержит сохранения статистики, а также элементы музыки в зависимости от контекста игры.',
        images: ['/1.png', '/2.png', '/3.png', '/4.png'],
    }, className: 'rounded-node'
}, {
    id: '5', position: {x: 0, y: 980}, data: {
        label: 'Password store', tools: ['C#', 'WPF'], description: "Десктопное приложение для сохранения паролей."
    }, className: 'rounded-node'
}, {
    id: '6', position: {x: 200, y: 1200}, data: {
        label: 'FTP Server',
        tools: ['C#', 'WPF', 'MaterialDesign UI Kit', 'Network Programming'],
        description: 'Десктопное приложения для работы с файлами удаленно по протоколу FTP.',
        images: ['/1.jpg']
    }, className: 'rounded-node'
}, {
    id: '7', position: {x: 0, y: 1200}, data: {
        label: 'Weather App',
        images: ['/1.jpg'],
        tools: ['C#', 'WPF', 'MaterialDesign UI Kit'],
        description: 'Десктопное приложение для для отслеживания погоды на разных городах.',
    }, className: 'rounded-node'
}, {
    id: '8', position: {x: -200, y: 1200}, data: {
        label: 'Delivery Tracker',
        tools: ['C#', 'WPF', 'Command Word', 'MaterialDesign UI Kit'],
        description: 'Astana Hub 2022 Hackathon. В этом проекте хакатона я впервые попробовал JSON. Проект для отслеживания статуса курьеров для бизнес проекта. Исходный код и скрины полностью потерялись. Хакатон проиграли, так как сдались.'
    }, className: 'rounded-node hackathon-app'
}, {
    id: '9', position: {x: 0, y: 1450}, data: {
        label: 'To-Do App', tools: ['React'], description: 'Первое веб-приложение на реакте.'
    }, className: 'rounded-node'
}, {
    id: '10', position: {x: -200, y: 1800}, data: {
        label: 'Shop',
        tools: ['React', 'API'],
        description: 'Обычное веб-приложение с использованием FakeStoreApi. Впервые попробывал API на вкус.'
    }, className: 'rounded-node'
}, {
    id: '11', position: {x: 200, y: 1800}, data: {
        label: 'React-Pizza Application', tools: ['React', 'SCSS'], description: 'Туториал с ютуба.'
    }, className: 'rounded-node'
}, {
    id: '12', position: {x: 0, y: 2100}, data: {
        label: 'VK Replica',
        tools: ['Django', 'React', 'MS SQL Server'],
        images: ['/1.jpg', '/2.jpg'],
        description: 'Первое полноценное фулл-стак приложение. Обычная копия VK, только стиль сайта пользователь может менять на лету и подстраивать под себя.'
    }, className: 'rounded-node'
}, {
    id: '13', position: {x: 0, y: 2400}, data: {
        label: 'Mining calculator',
        tools: ['C#', 'WPF', 'MaterialDesign UI Kit', 'XML'],
        description: 'Первый хакатон на котором я занял 1 место. Хакатон среди учеников академии Шаг по всем Казахстану. Нужно было написать майнинг калькулятор, но я сверху написал код который парсит сайт TechnoDom, и находит информацию подробнее про девайс. Получил 36/36 по оценкам и занял 1 место.'
    }, className: 'rounded-node hackathon-app'
}, {
    id: '14', position: {x: 0, y: 2700}, data: {
        label: 'Kundelik Kz Replica',
        tools: ['C#', 'WPF', 'MaterialDesign UI Kit', 'MS SQL Server', 'DLL Libs', 'Design Patterns'],
        images: ['/1.png', '/2.png', '/3.png', '/4.jpg'],
        description: 'Первый проект за который мне заплатили. Дипломная работа выпускника IT университета. Платформа позволяет помогать учителям и ученикам в учебе, беря на себя всю рутинную работу. Оценка домашек, заметки, дедлайны, отзывы о учениках, статистика о успеваемости, группы и предметы, а также классификация учителей, которые могут брать те или инные группы. Помимо кода, был написан антиплагиат на 40 страниц.'
    }, className: 'rounded-node commerce-app gold'
}, {
    id: '15', position: {x: 400, y: 3000}, data: {
        label: 'Xamarin App',
        tools: ['C#', 'Xamarin'],
        description: 'Первый и на сегодняшний день последний проект на мобилке',
    }, className: 'rounded-node'
}, {
    id: '16', position: {x: -400, y: 3000}, data: {
        label: 'Unity Game',
        tools: ['C#', 'Unity'],
        description: 'Первый и на сегодняшний день последний проект на game dev',

    }, className: 'rounded-node'
}, {
    id: '17', position: {x: 0, y: 3000}, data: {
        label: 'KinoPoisk replica',
        tools: ['C#', 'ASP.NET', 'MS SQL Server', 'MVC'],
        images: ['/1.jpg', '/2.jpg', '/3.jpg'],
        description: 'Обычная копия кинопоиска который использует внешний апи для заполнения фильмов в бд и с возможностью просмотра трейлера, и сохранения в избранное.',
    }, className: 'rounded-node'
}, {
    id: '18', position: {x: -200, y: 3300}, data: {
        label: 'Nasa App',
        tools: ['PHP', 'Symphony', 'PostgreSql', 'NASA API', '3D Modeling'],
        description: 'Научное приложение для отслеживания действия и новостей в космосе. Используется апи наса и поддерживается система постов, что позволяет пользователю выкладывать научные посты касательно космоса.'
    }, className: 'rounded-node'
}, {
    id: '19', position: {x: 0, y: 3300}, data: {
        label: 'KZH1',
        description: 'Первая версия проекта KZH.',
        tools: ['Java', 'Spring', 'React'],
        images: ['/1.png', '/2.png', '/3.png', '/4.png']
    }, className: 'rounded-node'
}, {
    id: '20', position: {x: 200, y: 3300}, data: {
        label: 'Site about ecology',
        tools: ["React", 'Express JS', 'MongoDB'],
        description: 'Проект с хакатона среди школьников в 2023.'
    }, className: 'rounded-node hackathon-app'
}, {
    id: '21', position: {x: 100, y: 3600}, data: {
        label: 'KZH2',
        tools: ['C#', 'ASP.NET', 'PostgreSql', 'React', 'SFD arch'],
        description: 'Димломная работа для выпуска в академии Шаг.'
    }, className: 'rounded-node hackathon-app'
}, {
    id: '22', position: {x: 0, y: 3800},
    data: {
        label: 'Instagram Replica',
        description: 'Первый проект на микросервисах. Нужно было сделать полноценную копию инстраграмма.',
        tools: ['Java', 'Spring', 'Spring Cloud', 'API Gateway', 'Eureka server', 'Keycloak', 'React', 'SFD Arch'],
        images: []
    }, className: 'rounded-node'
}, {
    id: '23',
    position: {x: -100, y: 4000},
    data: {
        label: 'Kanteen site',
        description: 'WE Hackathon среди первокурсников. Благодаря тому, что научился писать микросервисы на предыдущем проекте, я быстро написал код для этого хакатона, который выполняет роль сервис онлайн заказа еды. ',
        tools: ['Java', 'Spring', 'Spring Cloud', 'API Gateway', 'Eureka server', 'Keycloak', 'React'],
        images: []
    },
    className: 'rounded-node hackathon-app'
}, {
    id: '24',
    position: {x: 0, y: 4200},
    data: {
        label: 'TechnoPark Site',
        description: 'Сайт для технопарка, с описанием локации технопарка, его целей и его состава. Также возможность создавать новости для техно комьюнити',
        tools: ['Java', 'Spring', 'Keycloak', 'React', 'SFD Arch'],
        images: []
    },
    className: 'rounded-node commerce-app'
}, {
    id: '25',
    position: {x: 200, y: 4200},
    data: {
        label: 'MiniLand',
        description: 'Бизнес приложения для бизнеса в Павлодаре, позволяющий трекать сотрудников и ввести отчет о бизнесе.',
        tools: ['Java', 'Spring', 'Keycloak', 'React', 'SFD Arch', 'Tailwind CSS', 'GCP'],
    },
    className: 'rounded-node commerce-app gold'
}, {
    id: '26',
    position: {x: 400, y: 4200},
    data: {
        label: 'Lawyer Chat AI',
        description: '',
        tools: ['ExpressJs', 'React', 'OpenAI API'],
    },
    className: 'rounded-node hackathon-app'
}, {
    id: '27',
    position: {x: 500, y: 4350},
    data: {
        label: 'KinoKz TG Bot',
        description: '',
        tools: ['Python', 'TG Bot', 'OpenAI API'],
    },
    className: 'rounded-node hackathon-app'
}, {
    id: '28',
    position: {x: 600, y: 4500},
    data: {
        label: 'ID Card Tracker',
        description: '',
        tools: [],
    },
    className: 'rounded-node hackathon-app'
}, {
    id: '29',
    position: {x: 700, y: 4650},
    data: {
        label: 'Education App',
        description: '',
        tools: [],
    },
    className: 'rounded-node hackathon-app'
}, {
    id: '30',
    position: {x: 800, y: 4800},
    data: {
        label: 'AI Adviser Bot Of SDU',
        description: '',
        tools: [],
    },
    className: 'rounded-node hackathon-app'
}, {
    id: '31',
    position: {x: 300, y: 5000},
    data: {
        label: 'Wonder project',
        description: '',
        tools: [],
    },
    className: 'rounded-node commerce-app gold'
}, {
    id: '32',
    position: {x: 100, y: 5200},
    data: {
        label: 'Smart home',
        description: '',
        tools: [],
    },
    className: 'rounded-node commerce-app'
}, {
    id: '33',
    position: {x: 300, y: 5600},
    data: {
        label: 'KZH3',
        description: '',
        tools: [],
    },
    className: 'rounded-node commerce-app gold'
},];



export const initialEdges = [{id: 'e1-2', source: '1', target: '2', type: 'bezier'}, {
    id: 'e2-3',
    source: '2',
    target: '3',
    type: 'bezier'
}, {id: 'e3-4', source: '3', target: '4', type: 'bezier'}, {
    id: 'e4-5',
    source: '4',
    target: '5',
    type: 'bezier'
}, {id: 'e5-6', source: '5', target: '6', type: 'bezier'}, {
    id: 'e5-7',
    source: '5',
    target: '7',
    type: 'bezier'
}, {id: 'e5-8', source: '5', target: '8', type: 'bezier', style: hackathonFlow}, {
    id: 'e6-9',
    source: '6',
    target: '9',
    type: 'bezier'
}, {id: 'e7-9', source: '7', target: '9', type: 'bezier'}, {
    id: 'e8-9',
    source: '8',
    target: '9',
    type: 'bezier',
    style: hackathonFlow
}, {id: 'e9-10', source: '9', target: '10', type: 'bezier'}, {
    id: 'e9-11',
    source: '9',
    target: '11',
    type: 'bezier'
}, {id: 'e11-12', source: '11', target: '12', type: 'bezier'}, {
    id: 'e10-12',
    source: '10',
    target: '12',
    type: 'bezier'
}, {id: 'e12-13', source: '12', target: '13', type: 'bezier', style: hackathonFlow}, {
    id: 'e13-14',
    source: '13',
    target: '14',
    type: 'bezier',
    style: hackathonFlow
}, {id: 'e14-15', source: '14', target: '15', type: 'bezier'}, {
    id: 'e14-16',
    source: '14',
    target: '16',
    type: 'bezier'
}, {id: 'e14-17', source: '14', target: '17', type: 'bezier', style: commerceFlow}, {
    id: 'e17-18',
    source: '17',
    target: '18',
    type: 'bezier'
}, {id: 'e17-19', source: '17', target: '19', type: 'bezier'}, {
    id: 'e17-20',
    source: '17',
    target: '20',
    type: 'bezier'
}, {id: 'e20-21', source: '20', target: '21', type: 'bezier', style: hackathonFlow}, {
    id: 'e19-21',
    source: '19',
    target: '21',
    type: 'bezier'
}, {id: 'e21-22', source: '21', target: '22', type: 'bezier', style: hackathonFlow}, {
    id: 'e22-23',
    source: '22',
    target: '23',
    type: 'bezier',
    style: hackathonFlow
}, {id: 'e21-24', source: '21', target: '24', type: 'bezier', style: commerceFlow}, {
    id: 'e21-25',
    source: '21',
    target: '25',
    type: 'bezier',
    style: commerceFlow
}, {id: 'e21-26', source: '21', target: '26', type: 'bezier', style: hackathonFlow}, {
    id: 'e26-27',
    source: '26',
    target: '27',
    type: 'bezier',
    style: hackathonFlow
}, {id: 'e27-28', source: '27', target: '28', type: 'bezier', style: hackathonFlow}, {
    id: 'e28-29',
    source: '28',
    target: '29',
    type: 'bezier',
    style: hackathonFlow
}, {id: 'e29-30', source: '29', target: '30', type: 'bezier', style: hackathonFlow}, {
    id: 'e24-31',
    source: '24',
    target: '31',
    type: 'bezier',
    style: commerceFlow
}, {id: 'e25-31', source: '25', target: '31', type: 'bezier', style: commerceFlow}, {
    id: 'e30-31',
    source: '30',
    target: '31',
    type: 'bezier',
    style: hackathonFlow
}, {id: 'e31-32', source: '31', target: '32', type: 'bezier', style: commerceFlow}, {
    id: 'e31-33',
    source: '31',
    target: '33',
    type: 'bezier',
    style: commerceFlow
},];