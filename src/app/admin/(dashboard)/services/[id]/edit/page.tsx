import type { Metadata } from "next";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import ServiceForm from "@/components/admin/ServiceForm";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Edit Service | Admin",
};

export function generateStaticParams() {
  return services.map((s) => ({ id: s.id }));
}

export default function EditServicePage({ params }: { params: { id: string } }) {
  const service = services.find((s) => s.id === params.id);

  if (!service) {
    return (
      <div className="flex flex-col gap-4">
        <AdminPageHeader eyebrow="Services" title="Service Not Found" />
        <p className="text-sm text-charcoal/70">
          No service matches this ID in the current placeholder data.
        </p>
      </div>
    );
  }

  return (
    <div className="flex max-w-2xl flex-col gap-10">
      <AdminPageHeader
        eyebrow="Services"
        title={`Edit — ${service.title}`}
        description="This prototype form is pre-filled with placeholder data and does not save changes anywhere yet."
      />
      <ServiceForm mode="edit" service={service} />
    </div>
  );
}
