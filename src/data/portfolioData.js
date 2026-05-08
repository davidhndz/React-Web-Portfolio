// ─── Personal Info ────────────────────────────────────────────────────────────
export const personal = {
  name: 'David Hernandez',
  typedName: ' David Hernandez',
  location: 'Los Angeles, CA',
  email: 'davidhndz1@icloud.com',
  github: 'https://github.com/davidhndz',
  linkedin: 'https://www.linkedin.com/in/davidhndz',
  resume: '/files/resume.pdf',
  description:
    'I am a computer science major with interest in Artificial Intelligence, Machine Learning, and Data Science. My goal is to learn, if I don\'t have the solution I will find it.',
  interests: ['cooking', 'baking', 'soccer', 'skating', 'traveling'],
  education: 'B.S Computer Science - California State University Los Angeles',
  languages: ['python', 'c/c++', 'java'],
};

// ─── Me Cards ─────────────────────────────────────────────────────────────────
export const meCards = [
  {
    id: 1,
    text: "Hello there, it's great to see you. I'm someone who enjoys building things whether that's technology, community, or a really good meal in the kitchen. My background in construction and tech has shaped how I think: I like solving real problems and creating tools that make life a little more efficient and a little more fair. I'm especially interested in how AI and data can improve industries that don't always get the spotlight.",
    img: '/img/me.jpg',
    imgAlt: 'A photo of me (David)',
    animation: 'hidden-left',
  },
  {
    id: 2,
    text: "Outside of work and school, I'm happiest staying active and exploring. I enjoy cooking, traveling to new places, skating when I need to clear my head, and playing soccer whenever I get the chance. I appreciate experiences that challenge me and push me to grow.",
    img: '/img/skate.jpg',
    imgAlt: 'A photo of me skating',
    animation: 'hidden-right',
  },
  {
    id: 3,
    text: "At the core, I value family, commitment, and curiosity. I believe progress happens when people support each other, share what they know, and aren't afraid to try something new. I'm always looking to learn, build, and contribute wherever I can.",
    img: '/img/family.JPG',
    imgAlt: 'A photo of me and my cousins',
    animation: 'hidden-left',
  },
];

// ─── Experience ───────────────────────────────────────────────────────────────
export const experiences = [
  {
    id: 1,
    logo: '/img/HARDLINE-APP-ICON.png',
    logoAlt: 'Hardline AI logo',
    title: 'Software Engineer Intern',
    company: 'Hardline AI — Santa Monica, CA',
    date: 'Oct 2025 – Dec 2025',
    bullets: [
      'Maintained production infrastructure for an AI-powered VoIP platform on AWS (EC2, S3, Lambda), automating secure data workflows and contributing to system reliability.',
      'Built Grafana dashboards to monitor service health and business metrics; profiled Python services and automated reporting pipelines to reduce manual overhead.',
      'Authored SDS and SRS documents alongside senior engineers and leadership, translating strategic goals into actionable engineering tasks within the SDLC.',
      'Supported on-call incident response via Slack, resolving production issues in real time and maintaining technical documentation.',
    ],
    badges: [
      'Python', 'AWS (EC2, S3, Lambda)', 'Grafana',
      'Cloud Infrastructure', 'Monitoring & Observability', 'Production Support',
    ],
    badgeVariant: 'green',
    animation: 'hidden-right',
  },
  {
    id: 2,
    logo: '/img/LAUSD_seal.png',
    logoAlt: 'LAUSD logo',
    title: 'Special Education Paraprofessional',
    company: 'LAUSD — Los Angeles, CA',
    date: 'Sep 2024 – Present',
    bullets: [
      'Collaborated with educators and support staff to implement structured, individualized learning plans for students with diverse needs.',
      'Assisted in developing and executing IEPs, reinforcing documentation practices and cross-functional coordination.',
      'Strengthened communication, adaptability, and ability to operate in structured, process-driven environments.',
    ],
    badges: [
      'Cross-functional Collaboration', 'Documentation',
      'Process Adaptation', 'Structured Planning', 'Communication',
    ],
    badgeVariant: 'teal',
    animation: 'hidden-left',
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: 'FlappyBird DQN',
    img: '/img/flappybird-project.jpg',
    bullets: [
      'Built a DQN agent that learns to play Flappy Bird via reinforcement learning, improving performance over time through reward-based feedback.',
      'Implemented the neural network architecture in Python and PyTorch.',
      'Used Matplotlib to visualize training progress and performance metrics.',
    ],
    skills: ['Python', 'PyTorch', 'Deep Q-Learning', 'Neural Networks', 'Reinforcement Learning', 'Matplotlib', 'Model Optimization'],
    github: 'https://github.com/davidhndz/flappybird-DQN',
    animation: 'hidden-right',
  },
  {
    id: 2,
    title: 'Sudoku-Solver',
    img: '/img/sudoku-project.jpg',
    bullets: [
      'Built a Sudoku solver using a recursive backtracking algorithm to find valid number placements.',
      'Systematically explores solutions, backtracking on constraint violations until a correct answer is found.',
      'Deepened understanding of recursion, constraint satisfaction, and algorithmic efficiency.',
    ],
    skills: ['Python'],
    github: 'https://github.com/davidhndz/Sudoku-Solver',
    animation: 'hidden-left',
  },
  {
    id: 3,
    title: 'BookStore Inventory App',
    img: '/img/bookstore-project.jpg',
    bullets: [
      'Built a console-based inventory system in C++ modeling books, CDs, and DVDs through class hierarchies.',
      'Applied inheritance, polymorphism, and virtual functions for dynamic, reusable object behavior.',
      'Reinforced core OOP principles, memory management, and modular program design.',
    ],
    skills: ['C++', 'OOP', 'Polymorphism', 'Memory Management'],
    github: 'https://github.com/davidhndz/Bookstore_Inventory_App',
    animation: 'hidden-right',
  },
];
