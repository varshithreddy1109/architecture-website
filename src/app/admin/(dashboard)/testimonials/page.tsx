import type { Metadata } from "next";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import TestimonialsTable from "@/components/admin/TestimonialsTable";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Testimonials Management | Admin",
};

export default function AdminTestimonialsPage() {
  return (
    <div className="flex flex-col gap-10">
      <AdminPageHeader
        eyebrow="Testimonials"
        title="Testimonials Management"
        description="Add, edit, and manage the client quotes shown on the Home and Testimonials pages."
        actionLabel="Add Testimonial"
        actionHref="/admin/testimonials/new"
      />
      <TestimonialsTable initial={testimonials} />
    </div>
  );
}
