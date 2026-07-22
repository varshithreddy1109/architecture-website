import type { Metadata } from "next";
import SectionTitle from "@/components/ui/SectionTitle";
import StatCard from "@/components/admin/StatCard";
import QuickActionCard from "@/components/admin/QuickActionCard";
import RecentActivity from "@/components/admin/RecentActivity";
import { getDashboardStats, quickActions, recentActivity } from "@/data/admin";
import { createClient } from "@/lib/supabase/server";
import { countProjects } from "@/lib/supabase/projects";

export const metadata: Metadata = {
  title: "Dashboard | Admin",
};

// Always fetch a fresh project count so "Total Projects" reflects the
// latest add/delete the moment the admin lands on the dashboard.
export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const supabase = createClient();
  const projectCount = await countProjects(supabase);
  const dashboardStats = getDashboardStats(projectCount);

  return (
    <div className="flex flex-col gap-14">
      <div>
        <span className="label-tag">Admin</span>
        <h1 className="mt-4 font-display text-3xl font-medium text-ink md:text-4xl">
          Welcome back, Aravind.
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-charcoal/70 md:text-base">
          Here&apos;s a snapshot of the site. Projects reflect live data —
          Testimonials, Services, and Company Details remain prototype
          placeholders for now.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {dashboardStats.map((stat) => (
          <StatCard key={stat.id} {...stat} />
        ))}
      </div>

      {/* Quick actions */}
      <div>
        <SectionTitle eyebrow="Quick Actions" title="Jump back into common tasks." />
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {quickActions.map((action) => (
            <QuickActionCard key={action.id} action={action} />
          ))}
        </div>
      </div>

      {/* Recent activity */}
      <div>
        <SectionTitle eyebrow="Recent Activity" title="What's changed recently." />
        <div className="mt-8">
          <RecentActivity items={recentActivity} />
        </div>
      </div>
    </div>
  );
}
