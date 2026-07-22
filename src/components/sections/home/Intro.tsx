import SectionTitle from "@/components/ui/SectionTitle";

export default function Intro() {
  return (
    <section className="container-studio py-24 md:py-32">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <SectionTitle
            eyebrow="The Studio"
            title="Fourteen years of considered, site-specific design."
          />
        </div>
        <div className="md:col-span-6 md:col-start-7 flex flex-col gap-6">
          <p className="text-lg leading-relaxed text-charcoal/80 md:text-xl">
            Aravind &amp; Larsen is an architecture practice working across
            residential, commercial, and institutional projects. We believe
            good buildings are drawn from their site — its climate, material
            history, and the people who will use it.
          </p>
          <p className="text-base leading-relaxed text-charcoal/70">
            Every project moves through the same disciplined process, from
            first site visit to final handover, led by one of our two
            founding principals throughout.
          </p>
          <div className="mt-4 grid grid-cols-3 gap-6 border-t border-hairline pt-6">
            <div>
              <p className="font-display text-3xl font-medium text-ink">120+</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-widest2 text-stone">
                Projects
              </p>
            </div>
            <div>
              <p className="font-display text-3xl font-medium text-ink">14</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-widest2 text-stone">
                Years
              </p>
            </div>
            <div>
              <p className="font-display text-3xl font-medium text-ink">18</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-widest2 text-stone">
                Awards
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
