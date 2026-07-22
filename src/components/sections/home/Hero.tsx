import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-ink text-paper">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
          alt="Contemporary concrete residence framed by trees"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
      </div>

      {/* Blueprint corner coordinates — signature motif */}
      <span className="blueprint-corner left-6 top-24 hidden md:block">A1</span>
      <span className="blueprint-corner right-6 top-24 hidden md:block">B1</span>
      <span className="blueprint-corner left-6 bottom-10 hidden md:block">A2</span>
      <span className="blueprint-corner right-6 bottom-10 hidden md:block">B2</span>

      <div className="container-studio relative z-10 flex min-h-[92vh] flex-col justify-end pb-16 pt-40 md:pb-24">
        <span className="label-tag mb-6 text-brass-light animate-fadeIn">
          Est. 2011 — Bengaluru, India
        </span>
        <h1 className="max-w-4xl font-display text-[2.6rem] leading-[1.05] font-medium tracking-tight md:text-6xl lg:text-7xl animate-fadeUp">
          Architecture built on light, material, and place.
        </h1>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-stone md:text-lg animate-fadeUp [animation-delay:150ms] opacity-0">
          We design residential, commercial, and institutional buildings for
          clients who care as much about how a space feels as how it
          functions.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row animate-fadeUp [animation-delay:300ms] opacity-0">
          <Button href="/projects" variant="primary" className="!bg-paper !text-ink !border-paper hover:!bg-brass hover:!border-brass hover:!text-ink">
            View Our Work
          </Button>
          <Button href="/contact" variant="secondary" className="!border-white/30 !text-paper hover:!bg-paper hover:!text-ink">
            Start a Project
          </Button>
        </div>
      </div>
    </section>
  );
}
