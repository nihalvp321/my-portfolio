import { Project, EducationItem, CertificationItem } from '../types';

export const PERSONAL_INFO = {
  name: "MOHAMMED NIHAL VP",
  firstName: "MOHAMMED NIHAL",
  lastName: "VP",
  shortName: "NIHAL",
  role: "AI Engineer | Generative AI, RAG & AI Agents",
  tagline: "Building autonomous AI agents, enterprise RAG pipelines, and automated intelligence systems.",
  email: "nihalvp321@gmail.com",
  phone: "+91 8113871435",
  location: "Kerala, India",
  linkedin: "https://linkedin.com/in/mohammed-nihal",
  github: "https://github.com/nihalvp321",
  portfolio: "https://nihalvp-portfolio.netlify.app",
  resumePdfUrl: "/Mohammed_Nihal_VP_Resume.pdf",
  summary: "AI Engineer with industry experience building and deploying Generative AI applications, RAG systems, and AI agents using OpenAI APIs, LangChain, LangGraph, TypeScript, FastAPI, Supabase/PostgreSQL, and AWS. Experienced in enterprise software, backend development, workflow automation (n8n), and CI/CD. Focused on improving LLM response quality, latency, and token cost through prompt engineering and retrieval optimization. MCA with a specialization in AI, Machine Learning, and Data Science."
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "ekarbot",
    title: "EKARBOT",
    subtitle: "AI Real Estate Assistant",
    category: "rag",
    categoryLabel: "Generative AI & RAG",
    projectType: "company",
    projectTypeLabel: "Company Project",
    company: "Mite Technology",
    description: "Designed and built an enterprise RAG-based AI assistant for property sales teams, delivering contextual recommendations and real-time knowledge matching.",
    longDescription: "EKARBOT connects CRM systems, external property APIs (including Bayut listings), and internal knowledge bases into a unified semantic retrieval layer. Built at Mite Technology using OpenAI LLMs, LangChain, TypeScript, Supabase vector embeddings, and n8n orchestration deployed on AWS EC2.",
    imageUrl: "/images/ekarbot-showcase.svg",
    technologies: ["TypeScript", "OpenAI", "n8n", "RAG", "Supabase", "AWS EC2", "Vector Search"],
    keyHighlights: [
      "Unified CRM data, internal databases, and external property APIs into an embedded semantic knowledge layer.",
      "Implemented embedding-based semantic retrieval to enhance property matching accuracy by over 40%.",
      "Created automated data ingestion pipelines keeping listings continuously synchronized with zero manual effort.",
      "Architected and deployed production n8n automation infrastructure on AWS EC2."
    ]
  },
  {
    id: "biztrackpro",
    title: "BiztrackPro",
    subtitle: "Enterprise ERP SaaS Platform",
    category: "enterprise",
    categoryLabel: "Enterprise SaaS",
    projectType: "company",
    projectTypeLabel: "Company Project",
    company: "Mite Technology",
    description: "Multi-entity ERP platform covering finance, HR, CRM, sales, inventory, project management, POS, and AI business intelligence dashboards.",
    longDescription: "Contributed at Mite Technology to a full-scale multi-tenant enterprise ERP platform. Developed backend APIs, core business modules, AI-driven business assistant workflows, automated approvals, and production CI/CD deployments.",
    imageUrl: "/images/biztrack-showcase.svg",
    technologies: ["TypeScript", "Supabase", "OpenAI", "PostgreSQL", "React", "CI/CD", "AWS"],
    keyHighlights: [
      "Engineered high-throughput backend APIs for enterprise modules spanning Finance, HR, and CRM.",
      "Built an AI-driven copilot assistant assisting team leads in generating summaries and approval workflows.",
      "Implemented automated CI/CD release pipelines with GitHub Actions for reliable zero-downtime deployments."
    ]
  },
  {
    id: "salonpro",
    title: "SalonPro",
    subtitle: "Enterprise Salon Management Platform",
    category: "enterprise",
    categoryLabel: "Enterprise SaaS",
    projectType: "company",
    projectTypeLabel: "Company Project",
    company: "Mite Technology",
    description: "Complete management suite covering customer bookings, loyalty programs, CRM, inventory, POS, and AI conversational booking.",
    longDescription: "Enterprise SaaS solution developed at Mite Technology for salon chains to automate operations. Integrated AI assistant capabilities for intelligent customer inquiries, automated booking flows, and inventory threshold notifications.",
    imageUrl: "/images/salonpro-showcase.svg",
    technologies: ["TypeScript", "Supabase", "OpenAI", "React", "REST APIs", "CI/CD"],
    keyHighlights: [
      "Developed end-to-end customer booking and loyalty rewards logic with real-time slot synchronization.",
      "Engineered AI assistant capabilities for smart conversational booking and client management.",
      "Automated appointment reminders and staff scheduling workflows via webhooks."
    ]
  },
  {
    id: "neurotrack",
    title: "NeuroTrack",
    subtitle: "Parkinson’s Disease Screening System",
    category: "ml",
    categoryLabel: "Healthcare & ML",
    projectType: "personal",
    projectTypeLabel: "Personal Project",
    description: "Healthcare screening platform leveraging ML models on gait, voice, tremor, and spiral-drawing assessments with a conversational health assistant.",
    longDescription: "Personal healthcare AI project: Early-stage multi-modal screening system utilizing Scikit-learn machine learning classifiers trained on spiral drawing tests, voice acoustic features, and tremor sensors. Paired with a Flutter cross-platform mobile application, FastAPI backend, and an integrated GPT-4o Mini conversational assistant to guide patients.",
    imageUrl: "/images/neurotrack-showcase.svg",
    githubUrl: "https://github.com/nihalvp321/Neurotrack-Frontend",
    githubFrontendUrl: "https://github.com/nihalvp321/Neurotrack-Frontend",
    githubBackendUrl: "https://github.com/nihalvp321/Neurotrack-AI",
    technologies: ["Flutter", "FastAPI", "Supabase", "Scikit-learn", "OpenAI GPT-4o Mini", "Python"],
    keyHighlights: [
      "Trained classification models on gait patterns, vocal acoustic jitter/shimmer, and spiral drawing tremors.",
      "Created resilient FastAPI REST endpoints handling audio and image feature extraction in real-time.",
      "Integrated GPT-4o Mini conversational assistant to clearly explain results and provide supportive guidance."
    ]
  },
  {
    id: "evalai",
    title: "EvalAI",
    subtitle: "Intelligent Answer Sheet Evaluation",
    category: "ml",
    categoryLabel: "Healthcare & ML",
    projectType: "personal",
    projectTypeLabel: "Personal Project",
    description: "NLP-driven evaluation system grading student answers against teacher-provided answer keys using semantic similarity analysis.",
    longDescription: "Personal AI engineering project: Automated exam paper evaluation platform for academic institutions. Evaluates conceptual understanding, keyword presence, and semantic similarity using NLP and sentence transformers.",
    imageUrl: "/images/evalai-showcase.svg",
    githubUrl: "https://github.com/nihalvp321/evalai",
    technologies: ["FastAPI", "React.js", "PostgreSQL", "NLP", "Python", "Scikit-learn"],
    keyHighlights: [
      "Developed semantic scoring engine using natural language embeddings and contextual similarity.",
      "Designed role-based access control for administrators, teachers, and students with audit trails.",
      "Architected PostgreSQL relational schemas for exam papers, rubrics, and automated grade reports."
    ]
  }
];

export const EXPERIENCE_DATA = {
  company: "Mite Technology",
  role: "Junior AI Engineer",
  period: "May 2025 – Present",
  type: "Full-time",
  location: "Kerala, India",
  pillars: [
    {
      title: "Generative AI & Autonomous Agents",
      points: [
        "Build and deploy AI-powered enterprise applications using OpenAI APIs, FastAPI, LangChain, LangGraph, Supabase, PostgreSQL, and AWS.",
        "Design and implement RAG systems using chunking strategies, embeddings, vector search, and semantic retrieval.",
        "Develop AI agents with contextual memory, tool integrations, and multi-step reasoning workflows.",
        "Optimize LLM response quality, latency, and token usage through prompt engineering and retrieval tuning.",
        "Evaluate and benchmark multiple LLMs across business use cases to balance performance and cost."
      ]
    },
    {
      title: "Automation & Enterprise Integration",
      points: [
        "Develop AI workflow automation using n8n, OpenAI APIs, REST APIs, and webhooks.",
        "Build custom OpenAI integration nodes for n8n to support enterprise AI workflows.",
        "Build automated data ingestion pipelines connecting CRM systems, external APIs, and business databases."
      ]
    },
    {
      title: "Deployment & DevOps",
      points: [
        "Deploy and manage applications on AWS, including production n8n infrastructure on EC2.",
        "Build and maintain CI/CD pipelines with GitHub Actions for web, cloud, and AI backend services.",
        "Manage release pipelines, production environments, and deployment monitoring."
      ]
    }
  ]
};

export const SKILLS_DATA = [
  {
    category: "Generative AI & LLMs",
    description: "Production LLM systems, autonomous reasoning & semantic search",
    skills: ["LLMs", "RAG Pipelines", "AI Agents", "Prompt Engineering", "Embeddings", "Vector Search", "Vector Databases", "OpenAI API", "Claude API", "LangChain", "LangGraph"]
  },
  {
    category: "Languages & Frameworks",
    description: "Modern full-stack and API development",
    skills: ["TypeScript", "Python", "JavaScript", "SQL", "Dart", "FastAPI", "REST APIs", "React", "Flutter"]
  },
  {
    category: "Databases & Cloud Infrastructure",
    description: "Scalable data stores, containerization and cloud servers",
    skills: ["Supabase", "PostgreSQL", "AWS (EC2)", "GitHub Actions", "CI/CD", "Git"]
  },
  {
    category: "Automation & Machine Learning",
    description: "No-code orchestration, data science and classical ML",
    skills: ["n8n Automation", "Webhooks", "Postman", "Scikit-learn", "Pandas", "NumPy", "NLP"]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Yenepoya University",
    specialization: "Specialization in Artificial Intelligence, Machine Learning and Data Science",
    period: "2023 – 2025",
    details: "Focus on advanced neural architectures, statistical learning, vector embeddings, and large-scale data engineering."
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Calicut University",
    period: "2020 – 2023",
    details: "Foundational computer science, algorithms, relational database theory, and software engineering practices."
  }
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: "ibm-aiml-graduate",
    title: "Artificial Intelligence & Machine Learning Graduate",
    issuer: "IBM (Innovation Centre for Education)",
    issuedDate: "Jun 30, 2025",
    verifyUrl: "https://www.credly.com/badges/c69791fc-ca3b-4185-aa19-fe45a1eb9578",
    imageUrl: "/images/ibm-aiml-certificate.png",
    description: "Awarded in recognition of commitment to achieve professional excellence in Artificial Intelligence & Machine Learning. Verified by IBM Innovation Centre for Education on Credly.",
    skills: ["Artificial Intelligence", "Machine Learning", "Neural Networks", "Data Science", "Python"]
  }
];

