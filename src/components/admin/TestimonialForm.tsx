"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Testimonial } from "@/types";
import {
  TextField,
  TextAreaField,
  ToggleField,
  FileUploadField,
  RatingField,
  FormActions,
} from "@/components/admin/FormControls";
import Toast, { useToast } from "@/components/admin/Toast";

interface TestimonialFormProps {
  mode: "add" | "edit";
  testimonial?: Testimonial;
}

export default function TestimonialForm({ mode, testimonial }: TestimonialFormProps) {
  const router = useRouter();
  const { message, showToast } = useToast();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO (Supabase): upsert into a `testimonials` table once the backend
    // is implemented. This prototype only simulates the save.
    showToast(
      mode === "add"
        ? "Testimonial created (prototype only — no data was saved)."
        : "Testimonial updated (prototype only — no data was saved)."
    );
    setTimeout(() => router.push("/admin/testimonials"), 900);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-14">
      <fieldset className="flex flex-col gap-6">
        <legend className="label-tag mb-2 text-brass">Client Details</legend>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <TextField
            label="Client Name"
            name="name"
            defaultValue={testimonial?.name}
            placeholder="e.g. Ritika Sharma"
            required
          />
          <TextField
            label="Designation"
            name="role"
            defaultValue={testimonial?.role}
            placeholder="e.g. Homeowner"
            required
          />
          <TextField
            label="Company"
            name="company"
            defaultValue={testimonial?.company}
            placeholder="e.g. Meridian House"
          />
        </div>
        <FileUploadField
          label="Client Photo"
          hint="A square headshot works best."
          initialPreviewUrl={testimonial?.avatar}
        />
      </fieldset>

      <fieldset className="flex flex-col gap-6">
        <legend className="label-tag mb-2 text-brass">Testimonial</legend>
        <RatingField label="Rating" defaultValue={testimonial?.rating ?? 5} />
        <TextAreaField
          label="Testimonial"
          name="quote"
          rows={5}
          defaultValue={testimonial?.quote}
          placeholder="What did the client say about working with the studio?"
          required
        />
      </fieldset>

      <fieldset className="flex flex-col gap-6">
        <legend className="label-tag mb-2 text-brass">Display</legend>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <TextField
            label="Display Order"
            name="displayOrder"
            type="number"
            defaultValue={testimonial?.displayOrder ? String(testimonial.displayOrder) : "1"}
            hint="Lower numbers appear first."
          />
          <ToggleField
            label="Show on Homepage"
            hint="Include this testimonial in the Home page preview."
            defaultChecked={testimonial?.showOnHomepage}
          />
        </div>
      </fieldset>

      <FormActions cancelHref="/admin/testimonials" saveLabel={mode === "add" ? "Save Testimonial" : "Save Changes"} />

      <Toast message={message} />
    </form>
  );
}
