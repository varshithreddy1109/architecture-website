import type { Metadata } from "next";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import ServicesTable from "@/components/admin/ServicesTable";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services Management | Admin",
};

export default function AdminServicesPage() {
  return (
    <div className="flex flex-col gap-10">
      <AdminPageHeader
        eyebrow="Services"
        title="Services Management"
        description="Add, edit, and reorder the services listed on the Home page."
        actionLabel="Add Service"
        actionHref="/admin/services/new"
      />
      <ServicesTable initial={services} />
    </div>
  );
}
