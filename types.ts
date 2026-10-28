export interface Project {
  id: string;
  title: string;
  category: 'rag' | 'enterprise' | 'ml';
  categoryLabel: string;
  subtitle: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  githubUrl?: string;
  githubFrontendUrl?: string;
  githubBackendUrl?: string;
  liveUrl?: string;
  technologies: string[];
  keyHighlights: string[];
}

export interface ExperiencePillar {
  title: string;
  points: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  specialization?: string;
  period: string;
  details?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issuedDate: string;
  verifyUrl: string;
  badgeUrl?: string;
  imageUrl?: string;
  credentialId?: string;
  description: string;
  skills?: string[];
}

