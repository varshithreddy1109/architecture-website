import { Service } from "@/types";

// PLACEHOLDER DATA — to be replaced by Supabase `services` table in production.
export const services: Service[] = [
  {
    id: "1",
    index: "S-01",
    title: "Architectural Design",
    description:
      "End-to-end design for residential, commercial, and institutional buildings — from concept through construction drawings.",
    detailedDescription:
      "Our architectural design service covers every stage from first site visit through issued-for-construction drawings. We lead concept massing, material selection, and structural coordination, staying involved through detailed design so the drawings we hand to contractors reflect exactly what was agreed with the client.",
    icon:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=400&q=80",
    featured: true,
    displayOrder: 1,
  },
  {
    id: "2",
    index: "S-02",
    title: "Interior Architecture",
    description:
      "Spatial and material planning that treats interiors as an extension of the building's structural logic.",
    detailedDescription:
      "Interior architecture is handled by the same team that designs the building envelope, so material and spatial decisions stay consistent from facade to fit-out. This includes joinery detailing, lighting design, and furniture layout planning.",
    icon:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=400&q=80",
    featured: true,
    displayOrder: 2,
  },
  {
    id: "3",
    index: "S-03",
    title: "Masterplanning",
    description:
      "Land-use and layout strategy for multi-building sites, campuses, and residential communities.",
    detailedDescription:
      "For multi-building sites, we develop land-use strategy, block planning, and circulation hierarchy before any single building is designed — ensuring the overall site works as a coherent whole rather than a collection of individual buildings.",
    icon:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80",
    featured: false,
    displayOrder: 3,
  },
  {
    id: "4",
    index: "S-04",
    title: "Construction Oversight",
    description:
      "On-site supervision and contractor coordination to ensure design intent survives into the built work.",
    detailedDescription:
      "Our team visits site on a fixed weekly schedule through construction, reviewing work against drawings and coordinating directly with contractors and engineers to resolve issues before they become costly changes.",
    icon:
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=400&q=80",
    featured: false,
    displayOrder: 4,
  },
];
