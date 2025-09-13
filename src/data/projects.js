// 项目数据
export const projects = [
  {
    title: 'Enterprise Management System',
    description: 'A comprehensive management system built with ASP.NET MVC and MSSQL, featuring user management, reporting, and dashboard functionality.',
    stack: ['C#', 'ASP.NET MVC', 'MSSQL', 'JavaScript', 'HTML/CSS'],
    links: {
      repo: 'https://github.com/TanChengYi'
    },
    cover: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=280&fit=crop'
  },
  {
    title: 'Vue.js Portfolio Website',
    description: 'Modern portfolio website built with Vue 3, featuring multi-language support, theme switching, and responsive design.',
    stack: ['Vue.js', 'JavaScript', 'TailwindCSS', 'Vite'],
    links: {
      demo: 'https://tanchengyi.github.io/vue-portfolio/',
      repo: 'https://github.com/TanChengYi/vue-portfolio'
    },
    cover: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=280&fit=crop'
  },
  {
    title: 'Web API Integration Project',
    description: 'RESTful API development using ASP.NET Web API with Entity Framework, providing secure endpoints for mobile and web applications.',
    stack: ['C#', 'ASP.NET Web API', 'Entity Framework', 'MSSQL'],
    links: {
      repo: 'https://github.com/TanChengYi'
    },
    cover: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=280&fit=crop'
  },
  {
    title: 'E-commerce Platform (Coming Soon)',
    description: 'Full-stack e-commerce solution with Vue.js frontend and .NET Core backend. Features include product catalog, shopping cart, and payment integration.',
    stack: ['Vue.js', 'C#', 'ASP.NET Core', 'MSSQL', 'TailwindCSS'],
    links: {},
    cover: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=280&fit=crop'
  },
  {
    title: 'Mobile App Backend (Coming Soon)',
    description: 'Scalable backend API for mobile applications using ASP.NET Web API with JWT authentication and real-time features.',
    stack: ['C#', 'ASP.NET Web API', 'JWT', 'SignalR', 'MSSQL'],
    links: {},
    cover: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=280&fit=crop'
  },
  {
    title: 'Data Analytics Dashboard (Coming Soon)',
    description: 'Interactive dashboard for data visualization and analytics, built with Vue.js and Chart.js for comprehensive business insights.',
    stack: ['Vue.js', 'Chart.js', 'JavaScript', 'Bootstrap'],
    links: {},
    cover: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=280&fit=crop'
  }
]

// 技能数据
export const skills = [
  {
    category: '前端开发',
    items: [
      { name: 'HTML/CSS', icon: '🎨' },
      { name: 'JavaScript', icon: '🟨' },
      { name: 'Vue.js', icon: '💚' },
      { name: 'jQuery', icon: '💙' },
      { name: 'Bootstrap', icon: '🟣' },
      { name: 'TailwindCSS', icon: '💨' }
    ]
  },
  {
    category: '后端开发',
    items: [
      { name: 'C#', icon: '🟦' },
      { name: '.NET Framework', icon: '🔷' },
      { name: 'ASP.NET MVC', icon: '⚡' },
      { name: 'ASP.NET Core', icon: '🔥' },
      { name: 'Node.js', icon: '🟢' },
      { name: 'Java', icon: '☕' }
    ]
  },
  {
    category: '数据库',
    items: [
      { name: 'MSSQL', icon: '🗄️' },
      { name: 'MySQL', icon: '🐬' },
      { name: 'SQL', icon: '📊' },
      { name: 'Entity Framework', icon: '🔗' }
    ]
  },
  {
    category: '开发工具',
    items: [
      { name: 'Visual Studio', icon: '🛠️' },
      { name: 'Git', icon: '📚' },
      { name: 'ASP.NET Web API', icon: '🌐' }
    ]
  }
]

// 工作经历数据
export const experiences = [
  {
    company: 'Microlive Vision Technology Sdn Bhd',
    position: 'Software Engineer',
    duration: 'Apr 2024 - Present',
    location: 'Kuala Lumpur',
    description: 'Currently working as a software engineer, developing enterprise applications using modern web technologies and APIs.',
    achievements: [
      'Developing scalable web applications using ASP.NET Web API and Vue.js',
      'Implementing efficient database solutions with Entity Framework and MSSQL',
      'Contributing to application architecture and technical decision-making',
      'Collaborating with cross-functional teams to deliver high-quality software solutions'
    ],
    tech: ['C#', 'JavaScript', 'ASP.NET Web API', 'MSSQL', 'Vue.js', 'Entity Framework']
  },
  {
    company: 'Prologic Marketing Sdn Bhd',
    position: 'Web Developer',
    duration: 'Jan 2023 - Apr 2024',
    location: 'Kuala Lumpur',
    description: 'Worked as a web developer creating and maintaining web applications for various clients and internal projects.',
    achievements: [
      'Developed responsive web applications using ASP.NET MVC framework',
      'Implemented frontend interfaces with HTML, CSS, and jQuery for enhanced user experience',
      'Optimized database queries and improved application performance',
      'Maintained and updated existing web applications with new features and bug fixes'
    ],
    tech: ['C#', 'JavaScript', 'ASP.NET MVC', 'MSSQL', 'HTML', 'CSS', 'jQuery']
  },
  {
    company: 'Alpha Red Solutions Sdn Bhd',
    position: 'Application Developer',
    duration: 'Oct 2020 - Dec 2022',
    location: 'Kuala Lumpur',
    description: 'Started my professional journey as an application developer, gaining experience in full-stack development and enterprise applications.',
    achievements: [
      'Built enterprise applications using C# and ASP.NET MVC framework',
      'Developed and maintained database schemas in MSSQL and MySQL',
      'Created interactive user interfaces using JavaScript and jQuery',
      'Participated in code reviews and followed best practices for software development',
      'Collaborated with senior developers to learn industry standards and methodologies'
    ],
    tech: ['C#', 'JavaScript', 'ASP.NET MVC', 'MSSQL', 'MySQL', 'HTML', 'CSS', 'jQuery', 'ASP.NET Core']
  }
]