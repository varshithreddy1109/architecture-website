// PLACEHOLDER DATA — to be replaced by a Supabase `company_details` /
// `site_settings` table in production. Not currently consumed by the public
// site (Footer/Navbar still use static copy) — this powers the Admin CMS
// prototype so the client can preview the editing experience.

export interface CompanyDetails {
  companyName: string;
  logo: string;
  favicon: string;
  about: string;
  vision: string;
  mission: string;
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  googleMapsLink: string;
  workingHours: string;
  instagram: string;
  facebook: string;
  linkedin: string;
  youtube: string;
}

export const companyDetails: CompanyDetails = {
  companyName: "Aravind & Larsen Architecture Studio",
  logo:
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=300&q=80",
  favicon:
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=64&q=80",
  about:
    "Aravind & Larsen is an architecture practice working across residential, commercial, and institutional projects, grounded in site, material, and climate.",
  vision: "Buildings that outlast trend.",
  mission: "Design led by listening — every brief starts with time spent on-site and with the client before design begins.",
  email: "studio@aravindlarsen.com",
  phone: "+91 80 4123 4567",
  whatsapp: "+91 98450 12345",
  address: "Level 4, Fenwick House, 14 Residency Road, Bengaluru 560025, India",
  googleMapsLink: "https://maps.google.com/?q=Residency+Road+Bengaluru",
  workingHours: "Monday – Saturday, 9:30 AM – 6:30 PM IST",
  instagram: "https://instagram.com/aravindlarsen",
  facebook: "https://facebook.com/aravindlarsen",
  linkedin: "https://linkedin.com/company/aravindlarsen",
  youtube: "https://youtube.com/@aravindlarsen",
};

export interface SiteSettings {
  primaryColor: string;
  accentColor: string;
  backgroundColor: string;
  footerText: string;
  seoTitle: string;
  seoDescription: string;
  contactEmail: string;
  contactPhone: string;
}

export const siteSettings: SiteSettings = {
  primaryColor: "#0A0A0A",
  accentColor: "#A98554",
  backgroundColor: "#F7F6F3",
  footerText: "© 2026 Aravind & Larsen Architecture Studio. All rights reserved.",
  seoTitle: "Aravind & Larsen | Premium Architecture Studio, Bengaluru",
  seoDescription:
    "A premium architecture practice designing considered, enduring spaces — residential, commercial, and institutional work grounded in place and material.",
  contactEmail: "studio@aravindlarsen.com",
  contactPhone: "+91 80 4123 4567",
};
