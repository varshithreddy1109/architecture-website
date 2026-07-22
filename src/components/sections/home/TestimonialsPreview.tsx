import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsPreview() {
  const preview = testimonials.slice(0, 2);

  return (
    <section className="container-studio py-24 md:py-32">
      <SectionTitle
        eyebrow="Client Notes"
        title="What it's like to build with us."
        align="center"
      />

      <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">
        {preview.map((t) => (
          <figure
            key={t.id}
            className="flex flex-col gap-6 border border-hairline p-8 md:p-10"
          >
            <blockquote className="font-display text-xl font-medium leading-snug text-ink md:text-2xl">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="flex items-center gap-4">
              <div className="relative h-11 w-11 overflow-hidden rounded-full bg-charcoal/10">
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

      <div className="mt-12 flex justify-center">
        <Button href="/testimonials" variant="secondary">
          Read All Testimonials
        </Button>
      </div>
    </section>
  );
}
