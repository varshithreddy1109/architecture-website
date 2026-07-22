"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Service } from "@/types";
import {
  TextField,
  TextAreaField,
  ToggleField,
  FileUploadField,
  FormActions,
} from "@/components/admin/FormControls";
import Toast, { useToast } from "@/components/admin/Toast";

interface ServiceFormProps {
  mode: "add" | "edit";
  service?: Service;
}

export default function ServiceForm({ mode, service }: ServiceFormProps) {
  const router = useRouter();
  const { message, showToast } = useToast();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO (Supabase): upsert into a `services` table once the backend is
    // implemented. This prototype only simulates the save.
    showToast(
      mode === "add"
        ? "Service created (prototype only — no data was saved)."
        : "Service updated (prototype only — no data was saved)."
    );
    setTimeout(() => router.push("/admin/services"), 900);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-14">
      <fieldset className="flex flex-col gap-6">
        <legend className="label-tag mb-2 text-brass">Service Details</legend>
        <TextField
          label="Service Name"
          name="title"
          defaultValue={service?.title}
          placeholder="e.g. Architectural Design"
          required
        />
        <TextAreaField
          label="Short Description"
          name="description"
          rows={3}
          defaultValue={service?.description}
          placeholder="Shown on the Home page services grid."
          required
        />
        <TextAreaField
          label="Detailed Description"
          name="detailedDescription"
          rows={5}
          defaultValue={service?.detailedDescription}
          placeholder="A longer explanation for a future services detail page."
        />
      </fieldset>

      <fieldset className="flex flex-col gap-6">
        <legend className="label-tag mb-2 text-brass">Icon / Image</legend>
        <FileUploadField
          label="Icon / Image"
          hint="A square icon or representative photo for this service."
          initialPreviewUrl={service?.icon}
        />
      </fieldset>

      <fieldset className="flex flex-col gap-6">
        <legend className="label-tag mb-2 text-brass">Display</legend>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <TextField
            label="Display Order"
            name="displayOrder"
            type="number"
            defaultValue={service?.displayOrder ? String(service.displayOrder) : "1"}
            hint="Lower numbers appear first."
          />
          <ToggleField
            label="Featured Service"
            hint="Highlight this service on the Home page."
            defaultChecked={service?.featured}
          />
        </div>
      </fieldset>

      <FormActions cancelHref="/admin/services" saveLabel={mode === "add" ? "Save Service" : "Save Changes"} />

      <Toast message={message} />
    </form>
  );
}
