"use client";

import { FormEvent } from "react";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import {
  TextField,
  TextAreaField,
  ColorField,
  FormActions,
} from "@/components/admin/FormControls";
import Toast, { useToast } from "@/components/admin/Toast";
import { siteSettings } from "@/data/company";

export default function AdminSettingsPage() {
  const { message, showToast } = useToast();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO (Supabase): upsert into a `site_settings` table once the backend
    // is implemented. This prototype only simulates the save.
    showToast("Settings saved (prototype only — no data was saved).");
  }

  return (
    <div className="flex max-w-3xl flex-col gap-10">
      <AdminPageHeader
        eyebrow="Settings"
        title="Website Settings"
        description="Manage site-wide theme colors, footer text, and SEO defaults."
      />

      <form onSubmit={handleSubmit} className="flex flex-col gap-14">
        <fieldset className="flex flex-col gap-6">
          <legend className="label-tag mb-2 text-brass">Theme Colors</legend>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <ColorField label="Primary (Ink)" defaultValue={siteSettings.primaryColor} />
            <ColorField label="Accent (Brass)" defaultValue={siteSettings.accentColor} />
            <ColorField label="Background (Paper)" defaultValue={siteSettings.backgroundColor} />
          </div>
        </fieldset>

        <fieldset className="flex flex-col gap-6">
          <legend className="label-tag mb-2 text-brass">Footer</legend>
          <TextAreaField label="Footer Text" name="footerText" rows={2} defaultValue={siteSettings.footerText} />
        </fieldset>

        <fieldset className="flex flex-col gap-6">
          <legend className="label-tag mb-2 text-brass">SEO Defaults</legend>
          <TextField label="SEO Title" name="seoTitle" defaultValue={siteSettings.seoTitle} />
          <TextAreaField label="SEO Description" name="seoDescription" rows={3} defaultValue={siteSettings.seoDescription} />
        </fieldset>

        <fieldset className="flex flex-col gap-6">
          <legend className="label-tag mb-2 text-brass">Contact</legend>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <TextField label="Contact Email" name="contactEmail" type="email" defaultValue={siteSettings.contactEmail} />
            <TextField label="Contact Phone" name="contactPhone" type="tel" defaultValue={siteSettings.contactPhone} />
          </div>
        </fieldset>

        <FormActions cancelHref="/admin" saveLabel="Save Settings" />
      </form>

      <Toast message={message} />
    </div>
  );
}
