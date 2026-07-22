import { ActivityItem } from "@/data/admin";

const typeLabel: Record<ActivityItem["type"], string> = {
  project: "Projects",
  testimonial: "Testimonials",
  company: "Company",
  settings: "Settings",
};

export default function RecentActivity({ items }: { items: ActivityItem[] }) {
  return (
    <div className="flex flex-col divide-y divide-hairline border-t border-hairline">
      {items.map((item) => (
        <div key={item.id} className="flex flex-col gap-1.5 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium text-ink">{item.action}</p>
            <p className="text-sm text-charcoal/65">{item.detail}</p>
          </div>
          <div className="flex shrink-0 items-center gap-3 sm:flex-col sm:items-end sm:gap-1">
            <span className="font-mono text-[11px] uppercase tracking-widest2 text-brass">
              {typeLabel[item.type]}
            </span>
            <span className="font-mono text-[11px] text-stone">{item.timestamp}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
