import type { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Aravind & Larsen Architecture Studio",
  description: "Get in touch with Aravind & Larsen to start a project.",
};

export default function ContactPage() {
  return (
    <section className="container-studio pb-24 pt-32 md:pb-32 md:pt-40">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <span className="label-tag">Start a Project</span>
          <h1 className="mt-5 font-display text-4xl font-medium leading-[1.1] text-ink md:text-5xl">
            Tell us about your site.
          </h1>
          <p className="mt-8 max-w-md text-base leading-relaxed text-charcoal/75">
            Share a few details about your project and we&apos;ll respond
            within two business days to schedule an initial call.
          </p>

          <div className="mt-12 flex flex-col gap-6 border-t border-hairline pt-8">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest2 text-stone">Studio</p>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/80">
                Level 4, Fenwick House<br />
                14 Residency Road, Bengaluru 560025, India
              </p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest2 text-stone">Email</p>
              <p className="mt-2 text-sm text-charcoal/80">studio@aravindlarsen.com</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest2 text-stone">Phone</p>
              <p className="mt-2 text-sm text-charcoal/80">+91 80 4123 4567</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
