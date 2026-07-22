"use client";

import { useState } from "react";
import Link from "next/link";
import { Service } from "@/types";
import Button from "@/components/ui/Button";
import Toast, { useToast } from "@/components/admin/Toast";

export default function ServicesTable({ initial }: { initial: Service[] }) {
  const [items, setItems] = useState(initial);
  const { message, showToast } = useToast();

  function handleDelete(item: Service) {
    const confirmed = window.confirm(`Delete the "${item.title}" service?`);
    if (!confirmed) return;
    setItems((prev) => prev.filter((s) => s.id !== item.id));
    showToast(`"${item.title}" deleted (prototype only).`);
  }

  return (
    <div className="flex flex-col gap-6">
      <p className="font-mono text-xs text-stone">
        {items.length} service{items.length === 1 ? "" : "s"}
      </p>

      {/* Desktop table */}
      <div className="hidden overflow-x-auto border border-hairline md:block">
        <table className="w-full min-w-[820px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-hairline bg-charcoal/[0.03]">
              {["Icon", "Service", "Short Description", "Featured", "Order", "Actions"].map((h) => (
                <th key={h} className="whitespace-nowrap px-4 py-3 font-mono text-[11px] uppercase tracking-widest2 text-stone">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-b border-hairline last:border-b-0 hover:bg-charcoal/[0.02]">
                <td className="px-4 py-3">
                  {item.icon ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={item.icon} alt={item.title} className="h-10 w-10 object-cover" />
                  ) : (
                    <span className="font-mono text-xs text-stone">{item.index}</span>
                  )}
                </td>
                <td className="px-4 py-3">
                  <p className="font-medium text-ink">{item.title}</p>
                  <p className="font-mono text-xs text-stone">{item.index}</p>
                </td>
                <td className="max-w-sm px-4 py-3 text-charcoal/70">
                  <p className="line-clamp-2">{item.description}</p>
                </td>
                <td className="px-4 py-3">{item.featured ? "★" : "—"}</td>
                <td className="px-4 py-3 text-charcoal/80">{item.displayOrder ?? "—"}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3 whitespace-nowrap">
                    <Link
                      href={`/admin/services/${item.id}/edit`}
                      className="text-xs text-charcoal/70 underline decoration-hairline underline-offset-4 hover:text-ink hover:decoration-brass"
                    >
                      Edit
                    </Link>
                    <button
                      type="button"
                      onClick={() => handleDelete(item)}
                      className="text-xs text-charcoal/70 underline decoration-hairline underline-offset-4 hover:text-ink hover:decoration-brass"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="flex flex-col gap-4 md:hidden">
        {items.map((item) => (
          <div key={item.id} className="flex gap-4 border border-hairline p-4">
            {item.icon ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={item.icon} alt={item.title} className="h-14 w-14 shrink-0 object-cover" />
            ) : (
              <span className="font-mono text-xs text-stone">{item.index}</span>
            )}
            <div className="flex flex-1 flex-col gap-1.5">
              <p className="font-medium text-ink">{item.title}</p>
              <p className="line-clamp-2 text-xs text-charcoal/60">{item.description}</p>
              <p className="text-xs text-charcoal/50">
                Order {item.displayOrder ?? "—"} {item.featured ? "· ★ Featured" : ""}
              </p>
              <div className="mt-2 flex items-center gap-4">
                <Link
                  href={`/admin/services/${item.id}/edit`}
                  className="text-xs text-charcoal/70 underline decoration-hairline underline-offset-4"
                >
                  Edit
                </Link>
                <button
                  type="button"
                  onClick={() => handleDelete(item)}
                  className="text-xs text-charcoal/70 underline decoration-hairline underline-offset-4"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {items.length === 0 && (
        <div className="flex flex-col items-center gap-4 border border-dashed border-hairline py-16 text-center">
          <p className="text-sm text-charcoal/60">No services yet.</p>
          <Button href="/admin/services/new" variant="secondary">
            Add Service
          </Button>
        </div>
      )}

      <Toast message={message} />
    </div>
  );
}
