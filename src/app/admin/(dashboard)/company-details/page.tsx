"use client";

import { FormEvent } from "react";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import {
  TextField,
  TextAreaField,
  FileUploadField,
  FormActions,
} from "@/components/admin/FormControls";
import Toast, { useToast } from "@/components/admin/Toast";
import { companyDetails } from "@/data/company";

export default function AdminCompanyDetailsPage() {
  const { message, showToast } = useToast();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO (Supabase): upsert into a `company_details` table once the
    // backend is implemented. This prototype only simulates the save.
    showToast("Company details saved (prototype only — no data was saved).");
  }

  return (
    <div className="flex max-w-3xl flex-col gap-10">
      <AdminPageHeader
        eyebrow="Company Details"
        title="Company Details"
        description="Edit the studio's identity, contact information, and social links shown across the site."
      />

      <form onSubmit={handleSubmit} className="flex flex-col gap-14">
        <fieldset className="flex flex-col gap-6">
          <legend className="label-tag mb-2 text-brass">Identity</legend>
          <TextField label="Company Name" name="companyName" defaultValue={companyDetails.companyName} required />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <FileUploadField label="Logo" hint="Transparent PNG or SVG recommended." initialPreviewUrl={companyDetails.logo} />
            <FileUploadField label="Favicon" hint="Square image, minimum 64×64px." initialPreviewUrl={companyDetails.favicon} />
          </div>
        </fieldset>

        <fieldset className="flex flex-col gap-6">
          <legend className="label-tag mb-2 text-brass">About</legend>
          <TextAreaField label="About" name="about" rows={4} defaultValue={companyDetails.about} />
          <TextAreaField label="Vision" name="vision" rows={2} defaultValue={companyDetails.vision} />
          <TextAreaField label="Mission" name="mission" rows={2} defaultValue={companyDetails.mission} />
        </fieldset>

        <fieldset className="flex flex-col gap-6">
          <legend className="label-tag mb-2 text-brass">Contact</legend>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <TextField label="Email" name="email" type="email" defaultValue={companyDetails.email} />
            <TextField label="Phone" name="phone" type="tel" defaultValue={companyDetails.phone} />
            <TextField label="WhatsApp" name="whatsapp" type="tel" defaultValue={companyDetails.whatsapp} />
            <TextField label="Working Hours" name="workingHours" defaultValue={companyDetails.workingHours} />
          </div>
          <TextAreaField label="Address" name="address" rows={2} defaultValue={companyDetails.address} />
          <TextField label="Google Maps Link" name="googleMapsLink" defaultValue={companyDetails.googleMapsLink} />
        </fieldset>

        <fieldset className="flex flex-col gap-6">
          <legend className="label-tag mb-2 text-brass">Social Links</legend>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <TextField label="Instagram" name="instagram" defaultValue={companyDetails.instagram} />
            <TextField label="Facebook" name="facebook" defaultValue={companyDetails.facebook} />
            <TextField label="LinkedIn" name="linkedin" defaultValue={companyDetails.linkedin} />
            <TextField label="YouTube" name="youtube" defaultValue={companyDetails.youtube} />
          </div>
        </fieldset>

        <FormActions cancelHref="/admin" saveLabel="Save Company Details" />
      </form>

      <Toast message={message} />
    </div>
  );
}
