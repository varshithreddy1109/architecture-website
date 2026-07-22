import Image from "next/image";

export default function Story() {
  return (
    <section className="container-studio py-20 md:py-28">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
        <div className="relative aspect-[4/5] w-full overflow-hidden md:col-span-5">
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80"
            alt="Studio founders reviewing drawings"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-6 md:col-span-6 md:col-start-7">
          <span className="label-tag">Our Story</span>
          <h2 className="font-display text-3xl font-medium text-ink md:text-4xl">
            Started on a kitchen table, still working the same way.
          </h2>
          <p className="text-base leading-relaxed text-charcoal/75 md:text-lg">
            Aravind and Elena met while working on a housing project in
            Bengaluru and opened the studio a year later, with one shared
            rule: every project gets a founder&apos;s full attention, not a
            rotating team.
          </p>
          <p className="text-base leading-relaxed text-charcoal/75">
            Fourteen years on, that rule hasn&apos;t changed. We&apos;ve
            grown carefully — taking on the projects that let us do our best
            work, rather than the most work.
          </p>
        </div>
      </div>
    </section>
  );
}
