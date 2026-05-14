import { createFileRoute } from "@tanstack/react-router";
import { useId, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Brandora" },
      { name: "description", content: "Apply to a Brandora cohort, hire from our talent pipeline, or start a partnership conversation." },
      { property: "og:title", content: "Contact Brandora" },
      { property: "og:description", content: "Reach out — apply, hire or partner with Brandora." },
    ],
  }),
  component: ContactPage,
});

type Intent = "apply" | "hire" | "partner";

function ContactPage() {
  const [intent, setIntent] = useState<Intent>("apply");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>

      <section className="px-6 pt-24 pb-16 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <div className="font-mono text-primary text-xs uppercase tracking-[0.3em] mb-6">Contact</div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] mb-10 text-balance">
            Tell us what you're trying to build.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Whether you're a learner, an employer or a partner — start the conversation here.
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_2fr] gap-16">
          <div>
            <div className="font-mono text-primary text-xs uppercase tracking-[0.3em] mb-6">Direct</div>
            <ul className="space-y-6 text-sm">
              <li>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Email</div>
                <a href="mailto:hello@brandora.africa" className="text-lg font-medium hover:text-primary transition-colors">
                  hello@brandora.africa
                </a>
              </li>
              <li>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Hiring partners</div>
                <a href="mailto:partners@brandora.africa" className="text-lg font-medium hover:text-primary transition-colors">
                  partners@brandora.africa
                </a>
              </li>
              <li>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Based in</div>
                <span className="text-lg font-medium">Online-first · Africa</span>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex flex-wrap gap-3 mb-10">
              {(["apply", "hire", "partner"] as const).map((i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => { setIntent(i); setSubmitted(false); }}
                  className={`px-5 py-2 text-xs font-bold uppercase tracking-widest border transition-colors ${
                    intent === i
                      ? "bg-foreground text-background border-foreground"
                      : "border-border hover:border-foreground"
                  }`}
                >
                  {i === "apply" ? "Apply to Academy" : i === "hire" ? "Hire Talent" : "Partner With Us"}
                </button>
              ))}
            </div>

            {submitted ? (
              <div className="border border-primary p-10">
                <div className="font-mono text-xs text-primary mb-4">RECEIVED</div>
                <h2 className="text-2xl font-bold mb-3">Thanks — we'll be in touch.</h2>
                <p className="text-muted-foreground">A Brandora team member will respond within 48 hours.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="space-y-6"
              >
                <Field label="Full name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                {intent !== "apply" && <Field label="Company / Organisation" name="company" />}
                {intent === "apply" && <SpecialisationField />}
                <MessageField />
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground px-8 py-4 text-sm font-bold uppercase tracking-widest hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      </main>
      <SiteFooter />
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
        {label}{required && " *"}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-base"
      />
    </div>
  );
}

function SpecialisationField() {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
        Specialisation of interest
      </label>
      <select
        id={id}
        name="specialisation"
        className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-base"
        defaultValue=""
      >
        <option value="" disabled>Select one…</option>
        <option>UI/UX Design</option>
        <option>Web Development</option>
        <option>Data Analysis</option>
        <option>Cybersecurity</option>
        <option>Digital Marketing</option>
      </select>
    </div>
  );
}

function MessageField() {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
        Message
      </label>
      <textarea
        id={id}
        name="message"
        rows={5}
        required
        className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-base resize-none"
      />
    </div>
  );
}
