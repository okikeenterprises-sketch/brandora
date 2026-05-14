import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Brandora" },
      { name: "description", content: "Branding, web development, UI/UX consulting and corporate design — delivered by Brandora's top graduates under senior supervision." },
      { property: "og:title", content: "Brandora Production Services" },
      { property: "og:description", content: "A live agency arm powered by our top academy talent." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { code: "01", t: "Branding", d: "Identity systems, logo design, brand voice and full visual guidelines." },
  { code: "02", t: "Website Development", d: "Marketing sites, web platforms and product front-ends, shipped fast." },
  { code: "03", t: "UI/UX Consulting", d: "Product audits, user research and high-fidelity design systems." },
  { code: "04", t: "Corporate Design", d: "Decks, reports, internal comms and event collateral at agency quality." },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>

      <section className="px-6 pt-24 pb-24 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="font-mono text-primary text-xs uppercase tracking-[0.3em] mb-6">Production Services</div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] text-balance max-w-5xl mb-10">
            Agency-grade work, powered by our pipeline.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Brandora's production arm delivers real client work — supervised by senior leads and built by our top graduates. Revenue funds the academy. Students gain live experience. Clients get sharper, faster delivery.
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {services.map((s) => (
              <div key={s.code} className="bg-background p-12">
                <div className="font-mono text-xs text-primary mb-6">({s.code})</div>
                <h3 className="text-3xl font-extrabold tracking-tighter mb-4">{s.t}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 bg-foreground text-background">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-8">
            Have a project that needs to move?
          </h2>
          <p className="text-lg text-background/70 mb-10 max-w-xl mx-auto">
            Tell us what you're building. We'll come back with a scoped proposal within 48 hours.
          </p>
          <Link to="/contact" className="inline-block bg-primary text-primary-foreground px-10 py-5 text-sm font-bold uppercase tracking-widest">
            Start a Project
          </Link>
        </div>
      </section>

      </main>
      <SiteFooter />
    </div>
  );
}
