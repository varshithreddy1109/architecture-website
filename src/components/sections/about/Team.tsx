import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import { team } from "@/data/about";

export default function Team() {
  return (
    <section className="bg-charcoal/[0.03] py-20 md:py-28">
      <div className="container-studio">
        <SectionTitle eyebrow="The Team" title="Twenty-two people, four disciplines." />

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
          {team.map((member) => (
            <div key={member.id} className="flex flex-col gap-4">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-charcoal/10 grayscale transition-all duration-500 hover:grayscale-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-display text-base font-medium text-ink">
                  {member.name}
                </p>
                <p className="font-mono text-[11px] uppercase tracking-widest2 text-stone">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
