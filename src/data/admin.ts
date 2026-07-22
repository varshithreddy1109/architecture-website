import { testimonials } from "@/data/testimonials";
import { services } from "@/data/services";

export interface AdminNavLink {
  label: string;
  href: string;
  icon: "dashboard" | "projects" | "testimonials" | "services" | "company" | "settings" | "logout";
}

export const adminNavLinks: AdminNavLink[] = [
  { label: "Dashboard", href: "/admin", icon: "dashboard" },
  { label: "Projects", href: "/admin/projects", icon: "projects" },
  { label: "Testimonials", href: "/admin/testimonials", icon: "testimonials" },
  { label: "Services", href: "/admin/services", icon: "services" },
  { label: "Company Details", href: "/admin/company-details", icon: "company" },
  { label: "Settings", href: "/admin/settings", icon: "settings" },
];

export const adminLogoutLink: AdminNavLink = {
  label: "Logout",
  href: "/admin/login",
  icon: "logout",
};

export interface DashboardStat {
  id: string;
  label: string;
  value: string;
  hint: string;
}

// Total Projects is now live (passed in from a Supabase count query on the
// Dashboard page); Total Testimonials / Total Services remain placeholder
// counts since those modules are unchanged. "Last Updated" is still static.
export function getDashboardStats(projectCount: number): DashboardStat[] {
  return [
    {
      id: "1",
      label: "Total Projects",
      value: String(projectCount),
      hint: "Across all categories",
    },
    {
      id: "2",
      label: "Total Testimonials",
      value: String(testimonials.length),
      hint: "Published client notes",
    },
    {
      id: "3",
      label: "Total Services",
      value: String(services.length),
      hint: "Listed on the site",
    },
    {
      id: "4",
      label: "Last Updated",
      value: "2h ago",
      hint: "Jul 19, 2026 — 10:42 AM",
    },
  ];
}

export interface ActivityItem {
  id: string;
  action: string;
  detail: string;
  timestamp: string;
  type: "project" | "testimonial" | "company" | "settings";
}

// PLACEHOLDER DATA — to be replaced by a Supabase `activity_log` table.
export const recentActivity: ActivityItem[] = [
  {
    id: "1",
    action: "Project added",
    detail: "“Stonebridge Residence” was added to Projects",
    timestamp: "2 hours ago",
    type: "project",
  },
  {
    id: "2",
    action: "Testimonial edited",
    detail: "Quote from Ritika Sharma was updated",
    timestamp: "Yesterday",
    type: "testimonial",
  },
  {
    id: "3",
    action: "Company details updated",
    detail: "Studio contact email and phone number changed",
    timestamp: "3 days ago",
    type: "company",
  },
  {
    id: "4",
    action: "Project added",
    detail: "“Civic Archive” was added to Projects",
    timestamp: "5 days ago",
    type: "project",
  },
  {
    id: "5",
    action: "Settings updated",
    detail: "Site metadata and SEO description changed",
    timestamp: "1 week ago",
    type: "settings",
  },
];

export interface QuickAction {
  id: string;
  index: string;
  title: string;
  description: string;
  href: string;
  cta: string;
}

export const quickActions: QuickAction[] = [
  {
    id: "1",
    index: "Q-01",
    title: "Add New Project",
    description: "Create a new project entry with images, category, and description.",
    href: "/admin/projects/new",
    cta: "Add Project",
  },
  {
    id: "2",
    index: "Q-02",
    title: "Add Testimonial",
    description: "Publish a new client quote with name, role, and photo.",
    href: "/admin/testimonials/new",
    cta: "Add Testimonial",
  },
  {
    id: "3",
    index: "Q-03",
    title: "Edit Company Details",
    description: "Update studio address, contact info, and social links.",
    href: "/admin/company-details",
    cta: "Edit Details",
  },
  {
    id: "4",
    index: "Q-04",
    title: "Manage Services",
    description: "Add, edit, or reorder the services listed on the site.",
    href: "/admin/services",
    cta: "Manage Services",
  },
];
