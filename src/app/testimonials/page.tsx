import type { Metadata } from "next";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import ContactCTA from "@/components/sections/home/ContactCTA";

export const metadata: Metadata = {
  title: "Testimonials | Aravind & Larsen Architecture Studio",
  description: "What clients say about working with Aravind & Larsen.",
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="container-studio pb-16 pt-32 md:pb-20 md:pt-40">
        <span className="label-tag">Client Notes</span>
        <h1 className="mt-5 max-w-3xl font-display text-4xl font-medium leading-[1.1] text-ink md:text-6xl">
          Told in the words of the people we&apos;ve built with.
        </h1>
      </section>

      <section className="container-studio pb-24 md:pb-32">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="flex flex-col gap-6 border border-hairline p-8 md:p-10"
            >
              <span className="font-mono text-3xl leading-none text-brass">
                &ldquo;
              </span>
              <blockquote className="font-display text-xl font-medium leading-snug text-ink md:text-2xl">
                {t.quote}
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-4 border-t border-hairline pt-6">
                <div className="relative h-12 w-12 overflow-hidden rounded-full bg-charcoal/10">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-sm font-medium text-ink">{t.name}</p>
                  <p className="font-mono text-[11px] uppercase tracking-widest2 text-stone">
                    {t.role}
                    {t.company ? ` — ${t.company}` : ""}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
