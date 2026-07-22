import { ProcessStep, TeamMember } from "@/types";

// PLACEHOLDER DATA — to be replaced by Supabase `team_members` table in production.
export const team: TeamMember[] = [
  {
    id: "1",
    name: "Aravind Rao",
    role: "Founding Principal",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "2",
    name: "Elena Larsen",
    role: "Founding Principal",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "3",
    name: "Devika Nair",
    role: "Director of Interiors",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "4",
    name: "Marcus Bell",
    role: "Head of Construction",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: "1",
    code: "01",
    title: "Site & Brief",
    description:
      "We study the site, climate, and your brief in detail before a single line is drawn.",
  },
  {
    id: "2",
    code: "02",
    title: "Concept Design",
    description:
      "Massing, material, and spatial strategy are developed and tested against the brief.",
  },
  {
    id: "3",
    code: "03",
    title: "Design Development",
    description:
      "Concepts are resolved into detailed drawings, specifications, and coordinated engineering.",
  },
  {
    id: "4",
    code: "04",
    title: "Construction",
    description:
      "Our team stays on-site through construction to protect the integrity of the design.",
  },
  {
    id: "5",
    code: "05",
    title: "Handover",
    description:
      "A final walkthrough, documentation set, and maintenance guidance are delivered at close.",
  },
];
