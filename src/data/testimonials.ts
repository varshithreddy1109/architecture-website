import { Testimonial } from "@/types";

// PLACEHOLDER DATA — to be replaced by Supabase `testimonials` table in production.
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Ritika Sharma",
    role: "Homeowner",
    company: "Meridian House",
    quote:
      "They listened before they designed. Every room in our home earns its place — nothing feels decorative or forced.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    displayOrder: 1,
    showOnHomepage: true,
  },
  {
    id: "2",
    name: "Arvind Menon",
    role: "Managing Director",
    company: "Linear Atelier",
    quote:
      "The studio managed a genuinely complex commercial brief with total clarity — on budget, and ahead of schedule.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    displayOrder: 2,
    showOnHomepage: true,
  },
  {
    id: "3",
    name: "Neha Kapoor",
    role: "Cultural Trust Director",
    company: "The Quarry Pavilion",
    quote:
      "A rare team that treats context and material history as seriously as the architecture itself.",
    avatar:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    displayOrder: 3,
    showOnHomepage: false,
  },
  {
    id: "4",
    name: "Sameer Iyer",
    role: "Developer",
    company: "Harbourline Offices",
    quote:
      "Precise drawings, precise communication. Our contractor said it was the cleanest documentation set they'd built from.",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
    rating: 4,
    displayOrder: 4,
    showOnHomepage: false,
  },
];
