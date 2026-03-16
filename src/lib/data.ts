export interface Project {
  name: string;
  description: string;
  technologies: string[];
  features: string[];
  badge?: string;
  githubUrl?: string;
  externalUrl?: string;
}

export interface Leadership {
  organization: string;
  role: string;
  description: string;
  activities: string[];
  notable_guests: string[];
  interviews: string[];
  social_links: {
    instagram: string;
  };
}

export const portfolioData = {
  owner: {
    name: "Jitesh Kumar Jha",
    title: "Startup Builder | Quant Systems Engineer | AI/ML Student",
    location: "Jamshedpur, India",
    email: "jhajiteshkr@gmail.com",
    phone: "+91 6201149617",
    whatsapp: "916201149617",
  },

  photos: ["/photo1.jpg", "/photo2.jpg"],

  links: {
    github: "https://github.com/Jiteshkumarjha07",
    linkedin: "https://www.linkedin.com/in/jitesh-jha-2b38ab1b4/details/education/",
  },

  branding: {
    positioning: "Technical builder working at the intersection of Artificial Intelligence, Quantitative Finance, and Full-Stack Software Systems.",
    tone: "professional, intelligent, technical, founder-oriented",
    style: "minimalist, modern, clean, developer portfolio",
  },

  education: [
    {
      institution: "Birla Institute of Technology, Mesra",
      degree: "B.Tech",
      field: "Artificial Intelligence & Machine Learning",
      years: "2025-2029",
    },
    {
      institution: "Loyola School, Jamshedpur",
      degree: "ISC",
      year: "2023",
      notes: "100/100 Computer Science",
    },
    {
      institution: "Loyola School, Jamshedpur",
      degree: "ICSE",
      year: "2021",
      notes: "100/100 Computer Science",
    },
  ],

  experience: [
    {
      role: "Technical Advisor",
      company: "The Other Way",
      period: "Oct 2025 - Feb 2026",
      details: [
        "Improved SEO ranking of the company website",
        "Fixed structural navigation issues including dead links and broken paths",
        "Suggested new travel products including Antarctica cruises and Bhutan tours",
        "Improved UI and user navigation",
        "Built AI automation to generate travel brochures from customer feedback",
        "Compensation: ₹3000/month stipend + ₹10000 automation project payment",
      ],
    },
  ],

  projects: [
    {
      name: "Alumnest",
      description: "An active startup — a digital platform enabling alumni networking, collaboration, and marketplace functionality. MVP is live and ready.",
      technologies: ["Next.js", "React", "TypeScript", "Firebase", "TailwindCSS", "Node.js"],
      features: ["Alumni profiles", "Messaging system", "Community groups", "Alumni marketplace"],
      badge: "🚀 Startup · MVP Ready",
      githubUrl: "https://github.com/Jiteshkumarjha07/Alumni-site",
    },
    {
      name: "Monte Carlo Derivatives Simulation Engine",
      description: "Quantitative finance system for option pricing and algorithmic trading signals.",
      technologies: ["Python", "FastAPI", "NumPy", "Pandas", "Plotly", "React"],
      features: [
        "Geometric Brownian Motion simulations",
        "Markov chain regime switching",
        "Monte Carlo option pricing",
        "3D simulation visualization dashboard",
      ],
      githubUrl: "https://github.com/Jiteshkumarjha07/Monte-Carlo-Simulation",
    },
    {
      name: "Global Market Regime Detection System",
      description: "A macro-financial intelligence engine that detects global market regimes and systemic financial risk.",
      technologies: ["Python", "Pandas", "NumPy", "Scikit-Learn", "HMMlearn"],
      features: [
        "Hidden Markov Model regime detection",
        "Multi-market monitoring",
        "Risk scoring system",
        "Volatility and macroeconomic indicators",
      ],
    },
  ] as Project[],

  leadership: [
    {
      organization: "JSRMUN",
      role: "Founder & Organizer",
      description: "Founded a Model United Nations organization focused on diplomacy, debate, and policy discussions.",
      activities: [
        "Organized Model United Nations conferences",
        "Hosted interactive sessions with lawyers and military veterans",
        "Collaborated with Jamshedpur FC for institutional engagement",
        "Collaborated with IIT Bhubaneswar (IIT BBSR)"
      ],
      "notable_guests": [
        "Ambassador of Uruguay to India",
        "High Commissioner of Malaysia to India",
        "Commodore Vijay Pal Singh Rawat",
        "Major Samar Toor"
      ],
      "interviews": [
        "Interview with lawyer Dr Harishankar Jain (Ram Janmabhoomi case)",
        "Interview with Sunil Chhetri (Indian Football Legend)",
        "Interview with CDR Bijay Nair"
      ],
      "social_links": {
        "instagram": "https://www.instagram.com/jsrmun?igsh=czJ1MXJ3dG53cDJz"
      }
    }
  ] as Leadership[],

  skills: {
    programming: ["Python", "Java", "TypeScript", "JavaScript"],
    frameworks: ["React", "Next.js", "FastAPI", "Firebase"],
    dataScience: [
      "Monte Carlo Simulation",
      "Hidden Markov Models",
      "Time Series Analysis",
      "Financial Risk Modeling",
    ],
    tools: ["Git", "Plotly", "TailwindCSS", "Node.js"],
  },

  achievements: [
    "National Level Basketball Player",
    "Captain of State Basketball Team",
    "National Level Debater",
  ],

  interests: [
    "Basketball",
    "Financial Markets",
    "Macroeconomics",
    "Current Affairs",
    "Technology Entrepreneurship",
  ],
};
