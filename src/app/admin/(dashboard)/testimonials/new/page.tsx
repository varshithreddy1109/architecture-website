import type { Metadata } from "next";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import TestimonialForm from "@/components/admin/TestimonialForm";

export const metadata: Metadata = {
  title: "Add Testimonial | Admin",
};

export default function AddTestimonialPage() {
  return (
    <div className="flex max-w-2xl flex-col gap-10">
      <AdminPageHeader
        eyebrow="Testimonials"
        title="Add Testimonial"
        description="Publish a new client quote. This prototype form does not save data anywhere yet."
      />
      <TestimonialForm mode="add" />
    </div>
  );
}
