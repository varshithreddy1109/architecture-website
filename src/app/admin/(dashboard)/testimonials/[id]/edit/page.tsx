import type { Metadata } from "next";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import TestimonialForm from "@/components/admin/TestimonialForm";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Edit Testimonial | Admin",
};

export function generateStaticParams() {
  return testimonials.map((t) => ({ id: t.id }));
}

export default function EditTestimonialPage({ params }: { params: { id: string } }) {
  const testimonial = testimonials.find((t) => t.id === params.id);

  if (!testimonial) {
    return (
      <div className="flex flex-col gap-4">
        <AdminPageHeader eyebrow="Testimonials" title="Testimonial Not Found" />
        <p className="text-sm text-charcoal/70">
          No testimonial matches this ID in the current placeholder data.
        </p>
      </div>
    );
  }

  return (
    <div className="flex max-w-2xl flex-col gap-10">
      <AdminPageHeader
        eyebrow="Testimonials"
        title={`Edit — ${testimonial.name}`}
        description="This prototype form is pre-filled with placeholder data and does not save changes anywhere yet."
      />
      <TestimonialForm mode="edit" testimonial={testimonial} />
    </div>
  );
}
