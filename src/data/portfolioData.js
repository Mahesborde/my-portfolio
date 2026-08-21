export const portfolioData = {
  personal: {
    name: "Mahesh Borde",
    role: "AI & ML Frontend Developer",
    secondaryRole: "Full Stack & Advanced SQL Engineer",
    tagline: "Architecting Intelligent AI Applications, High-Performance React UIs & Advanced SQL Architectures.",
    shortBio: "Passionate IT Engineer specializing in AI/ML model integration, modern React frontend interfaces, and high-performance database engineering. Dedicated to building scalable, intelligent digital experiences.",
    location: "Shivrai, Vaijapur, Chhatrapati Sambhajinagar, Maharashtra, India",
    college: "Sanjivani College of Engineering, Kopargaon",
    degree: "B.Tech in Information Technology Engineering",
    email: "maheshborde4@gmail.com",
    linkedin: "https://www.linkedin.com/in/-borde-a71a86380",
    github: "https://github.com/",
    stats: [
      { label: "Core Focus", value: "AI/ML & Web" },
      { label: "Database Expertise", value: "Advanced SQL" },
      { label: "Engineering College", value: "Sanjivani COE" },
      { label: "Projects Completed", value: "8+" }
    ]
  },

  skills: {
    categories: [
      { id: "all", label: "All Skills" },
      { id: "aiml", label: "AI & Machine Learning" },
      { id: "frontend", label: "Frontend Engineering" },
      { id: "backend", label: "Backend & Databases" },
      { id: "tools", label: "Tools & Environment" }
    ],
    items: [
      // AI & ML
      { name: "Python Programming", category: "aiml", level: 92, icon: "Code2", highlight: true },
      { name: "Machine Learning (ML)", category: "aiml", level: 88, icon: "BrainCircuit", highlight: true },
      { name: "Data Analytics & NLP", category: "aiml", level: 85, icon: "BarChart3" },
      { name: "Scikit-Learn & Pandas", category: "aiml", level: 86, icon: "Cpu" },

      // Frontend
      { name: "React.js & Vite", category: "frontend", level: 92, icon: "Atom", highlight: true },
      { name: "JavaScript (ES6+)", category: "frontend", level: 90, icon: "FileCode", highlight: true },
      { name: "HTML5 & CSS3", category: "frontend", level: 95, icon: "Layout" },
      { name: "Tailwind CSS", category: "frontend", level: 90, icon: "Palette" },

      // Backend & Database
      { name: "Node.js & Express.js", category: "backend", level: 85, icon: "Server", highlight: true },
      { name: "Advanced MySQL / SQL", category: "backend", level: 94, icon: "Database", highlight: true },
      { name: "MongoDB & NoSQL", category: "backend", level: 84, icon: "Layers" },
      { name: "Java & C Programming", category: "backend", level: 88, icon: "Code2" },
      { name: "RESTful API Integration", category: "backend", level: 88, icon: "Webhook" },

      // Tools
      { name: "Git & GitHub", category: "tools", level: 90, icon: "GitBranch", highlight: true },
      { name: "VS Code", category: "tools", level: 95, icon: "Terminal" },
      { name: "Jupyter & Colab", category: "tools", level: 88, icon: "BookOpen" },
      { name: "Vercel / Web Hosting", category: "tools", level: 85, icon: "Cloud" }
    ]
  },

  projects: [
    {
      id: "ai-movie-rec",
      title: "AI Movie Recommendation Engine",
      subtitle: "Machine Learning & Content-Based Filtering",
      description: "An intelligent recommendation system powered by Machine Learning and Cosine Similarity. It analyzes user preferences and movie metadata to deliver hyper-personalized movie suggestions with a responsive React dashboard.",
      category: "AI / ML & Web",
      tech: ["Python", "Machine Learning", "Scikit-Learn", "React.js", "FastAPI", "Tailwind CSS"],
      features: [
        "Content-based filtering using Cosine Similarity metrics",
        "Interactive React search interface with instant live previews",
        "FastAPI backend delivering sub-100ms model inference",
        "Dynamic genre breakdown and similarity score charts"
      ],
      github: "https://github.com/",
      demo: "#",
      featured: true,
      badge: "Featured AI Project"
    },
    {
      id: "sentiment-analytics",
      title: "E-Commerce Sentiment & Product Analytics",
      subtitle: "Natural Language Processing & Advanced MySQL",
      description: "Advanced analytics platform for analyzing customer product reviews using Natural Language Processing (NLP). Features custom MySQL queries for multi-dimensional aggregation and instant sentiment scoring.",
      category: "NLP & Database",
      tech: ["Python", "NLP", "Advanced MySQL", "Node.js", "React.js", "Chart.js"],
      features: [
        "Automated sentiment classification (Positive, Neutral, Negative)",
        "Complex SQL stored procedures for fast analytical aggregation",
        "Real-time review visualization dashboard with dark glassmorphism",
        "Exportable data insights and sentiment trend charts"
      ],
      github: "https://github.com/",
      demo: "#",
      featured: true,
      badge: "Database & AI"
    },
    {
      id: "customer-insights-platform",
      title: "Smart AI Customer Insights Platform",
      subtitle: "Predictive Analytics & Full-Stack Architecture",
      description: "End-to-end full stack platform designed to predict customer engagement and churn probability using AI regression models paired with an optimized MySQL relational schema.",
      category: "Full Stack AI",
      tech: ["React.js", "Node.js", "Advanced SQL", "Python", "Tailwind CSS"],
      features: [
        "Predictive machine learning pipeline embedded into Web API",
        "High-performance SQL schema optimized with indexing & joins",
        "Interactive metrics, custom filter controls, and status monitoring",
        "Role-based mock authentication and export capabilities"
      ],
      github: "https://github.com/",
      demo: "#",
      featured: true,
      badge: "Full-Stack AI"
    }
  ],

  education: [
    {
      degree: "B.Tech in Information Technology Engineering",
      institution: "Sanjivani College of Engineering, Kopargaon",
      period: "Pursuing / Current",
      description: "Specializing in Artificial Intelligence, Machine Learning algorithms, Advanced Database Management Systems (SQL), Data Structures, and Modern Web Engineering.",
      highlights: [
        "Deep focus on Artificial Intelligence & Machine Learning",
        "Advanced Mastery in SQL Database Design & Querying",
        "Active member of Technical & Coding Student Communities"
      ]
    }
  ],

  experience: [
    {
      role: "AI & ML Frontend Developer",
      type: "Projects & Freelance",
      period: "2023 - Present",
      description: "Designing end-to-end Machine Learning web applications, integrating AI inference models into React frontends, and crafting high-efficiency SQL query structures.",
      achievements: [
        "Built custom Machine Learning recommendation & analytics platforms",
        "Architected optimized MySQL database schemas for data applications",
        "Engineered responsive glassmorphism UIs using React & Tailwind"
      ]
    }
  ]
};
