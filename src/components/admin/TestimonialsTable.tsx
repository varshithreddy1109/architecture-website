"use client";

import { useState } from "react";
import Link from "next/link";
import { Testimonial } from "@/types";
import Button from "@/components/ui/Button";
import Toast, { useToast } from "@/components/admin/Toast";

function Stars({ rating = 0 }: { rating?: number }) {
  return (
    <span className="text-brass">
      {"★".repeat(rating)}
      <span className="text-hairline">{"★".repeat(5 - rating)}</span>
    </span>
  );
}

export default function TestimonialsTable({ initial }: { initial: Testimonial[] }) {
  const [items, setItems] = useState(initial);
  const { message, showToast } = useToast();

  function handleDelete(item: Testimonial) {
    const confirmed = window.confirm(`Delete the testimonial from "${item.name}"?`);
    if (!confirmed) return;
    setItems((prev) => prev.filter((t) => t.id !== item.id));
    showToast(`Testimonial from "${item.name}" deleted (prototype only).`);
  }

  return (
    <div className="flex flex-col gap-6">
      <p className="font-mono text-xs text-stone">
        {items.length} testimonial{items.length === 1 ? "" : "s"}
      </p>

      {/* Desktop table */}
      <div className="hidden overflow-x-auto border border-hairline md:block">
        <table className="w-full min-w-[900px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-hairline bg-charcoal/[0.03]">
              {["Photo", "Client", "Designation / Company", "Rating", "Testimonial", "Order", "Homepage", "Actions"].map((h) => (
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
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.avatar} alt={item.name} className="h-10 w-10 rounded-full object-cover" />
                </td>
                <td className="px-4 py-3 font-medium text-ink">{item.name}</td>
                <td className="px-4 py-3 text-charcoal/80">
                  <p>{item.role}</p>
                  <p className="text-xs text-charcoal/50">{item.company ?? "—"}</p>
                </td>
                <td className="px-4 py-3">
                  <Stars rating={item.rating} />
                </td>
                <td className="max-w-xs px-4 py-3 text-charcoal/70">
                  <p className="line-clamp-2">{item.quote}</p>
                </td>
                <td className="px-4 py-3 text-charcoal/80">{item.displayOrder ?? "—"}</td>
                <td className="px-4 py-3">{item.showOnHomepage ? "Yes" : "No"}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3 whitespace-nowrap">
                    <Link
                      href={`/admin/testimonials/${item.id}/edit`}
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.avatar} alt={item.name} className="h-12 w-12 shrink-0 rounded-full object-cover" />
            <div className="flex flex-1 flex-col gap-1.5">
              <div className="flex items-start justify-between gap-2">
                <p className="font-medium text-ink">{item.name}</p>
                <Stars rating={item.rating} />
              </div>
              <p className="text-xs text-charcoal/60">
                {item.role} {item.company ? `— ${item.company}` : ""}
              </p>
              <p className="line-clamp-2 text-xs text-charcoal/60">{item.quote}</p>
              <p className="text-xs text-charcoal/50">
                Order {item.displayOrder ?? "—"} · {item.showOnHomepage ? "On Homepage" : "Not on Homepage"}
              </p>
              <div className="mt-2 flex items-center gap-4">
                <Link
                  href={`/admin/testimonials/${item.id}/edit`}
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
          <p className="text-sm text-charcoal/60">No testimonials yet.</p>
          <Button href="/admin/testimonials/new" variant="secondary">
            Add Testimonial
          </Button>
        </div>
      )}

      <Toast message={message} />
    </div>
  );
}
