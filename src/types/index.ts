export type ProjectCategory =
  | "Residential"
  | "Commercial"
  | "Institutional"
  | "Interior"
  | "Urban Planning";

export type ProjectType =
  | "New Construction"
  | "Renovation"
  | "Interior Fit-out"
  | "Masterplanning";

export type ProjectStatus = "Completed" | "Ongoing" | "Concept";

export interface Project {
  id: string;
  slug: string;
  title: string;
  location: string;
  category: ProjectCategory;
  year: string;
  area: string;
  description: string;
  image: string;
  featured?: boolean;
  // CMS fields (admin prototype) — optional so existing public-site
  // components that only use the fields above continue to work unchanged.
  projectType?: ProjectType;
  status?: ProjectStatus;
  clientName?: string;
  architectName?: string;
  completionDate?: string; // ISO date string, e.g. "2024-03-15"
  displayOrder?: number;
  detailedDescription?: string;
  gallery?: string[];
  youtubeUrl?: string;
  metaTitle?: string;
  metaDescription?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  quote: string;
  avatar: string;
  // CMS fields (admin prototype) — optional, see note above.
  rating?: number; // 1–5
  displayOrder?: number;
  showOnHomepage?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  index: string; // drafting-style reference code, e.g. "S-01"
  // CMS fields (admin prototype) — optional, see note above.
  detailedDescription?: string;
  icon?: string;
  featured?: boolean;
  displayOrder?: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface ProcessStep {
  id: string;
  code: string; // e.g. "01"
  title: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}
