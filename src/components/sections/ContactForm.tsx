"use client";

import { FormEvent, useState } from "react";
import Button from "@/components/ui/Button";

const projectTypes = [
  "Residential",
  "Commercial",
  "Institutional",
  "Interior",
  "Urban Planning",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO (Supabase): insert form values into a `contact_submissions` table
    // once the backend is implemented. No data is sent anywhere in this
    // prototype — this only demonstrates the UI/UX of submission.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col gap-4 border border-hairline p-10 text-center">
        <span className="label-tag mx-auto">Message Received</span>
        <h3 className="font-display text-2xl font-medium text-ink">
          Thank you — we&apos;ll be in touch shortly.
        </h3>
        <p className="text-sm text-charcoal/70">
          This prototype form does not send data yet; it will connect to our
          backend in the next stage.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="Full Name" name="name" type="text" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="Phone" name="phone" type="tel" />
        <div className="flex flex-col gap-2">
          <label htmlFor="projectType" className="font-mono text-[11px] uppercase tracking-widest2 text-stone">
            Project Type
          </label>
          <select
            id="projectType"
            name="projectType"
            className="border-b border-hairline bg-transparent py-3 text-sm text-ink outline-none transition-colors duration-300 focus:border-ink"
            defaultValue=""
          >
            <option value="" disabled>
              Select a category
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-mono text-[11px] uppercase tracking-widest2 text-stone">
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="resize-none border-b border-hairline bg-transparent py-3 text-sm text-ink outline-none transition-colors duration-300 focus:border-ink"
          placeholder="Location, scale, timeline, and anything else that helps us understand the brief."
        />
      </div>

      <Button type="submit" variant="primary" className="mt-2 self-start">
        Send Message
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="font-mono text-[11px] uppercase tracking-widest2 text-stone">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="border-b border-hairline bg-transparent py-3 text-sm text-ink outline-none transition-colors duration-300 focus:border-ink"
      />
    </div>
  );
}
