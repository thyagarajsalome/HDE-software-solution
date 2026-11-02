export type ProjectCategory = 'all' | 'ai' | 'desktop' | 'saas' | 'backend' | 'cli';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  categoryLabel: string;
  iconLetter: string;
  iconGradient: string;
  description: string;
  highlights: string[];
  tags: string[];
  image: string;
  gallery?: string[];
  appLogo?: string;
  webLink?: string | null;
  playStoreLink?: string | null;
  orderType: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  color: string;
  iconBg: string;
  description: string;
  capabilities: string[];
}

export interface LifecycleStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
}

export interface TeamMemberRole {
  role: string;
  focus: string;
  description: string;
}
