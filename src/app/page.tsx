import Hero from "@/components/sections/home/Hero";
import Intro from "@/components/sections/home/Intro";
import FeaturedServices from "@/components/sections/home/FeaturedServices";
import FeaturedProjects from "@/components/sections/home/FeaturedProjects";
import WhyChooseUs from "@/components/sections/home/WhyChooseUs";
import TestimonialsPreview from "@/components/sections/home/TestimonialsPreview";
import ContactCTA from "@/components/sections/home/ContactCTA";
import { createClient } from "@/lib/supabase/server";
import { fetchFeaturedProjects } from "@/lib/supabase/projects";

// Always fetch fresh project data so admin changes (add/edit/delete/feature)
// are reflected on the homepage immediately, with no stale cache.
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const supabase = createClient();
  const featuredProjects = await fetchFeaturedProjects(supabase, 3);

  return (
    <>
      <Hero />
      <Intro />
      <FeaturedServices />
      <FeaturedProjects projects={featuredProjects} />
      <WhyChooseUs />
      <TestimonialsPreview />
      <ContactCTA />
    </>
  );
}
