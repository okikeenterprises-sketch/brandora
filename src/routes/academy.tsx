import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/academy")({
  head: () => ({
    meta: [
      { title: "Academy — BrandoraX" },
      { name: "description", content: "Intensive 3, 6 and 12-month tracks in UI/UX, Web Development, Data Analysis, Cybersecurity and Digital Marketing." },
      { property: "og:title", content: "BrandoraX Academy" },
      { property: "og:description", content: "Project-based tracks designed to take you from beginner to job-ready professional." },
    ],
  }),
  component: AcademyPage,
});

const programs = [
  { code: "01", title: "UI/UX Design", desc: "User research, wireframing, prototyping in Figma, and a portfolio of shipped product work." },
  { code: "02", title: "Web Development", desc: "Full-stack with React, Node.js, databases and cloud deployment patterns." },
  { code: "03", title: "Data Analysis", desc: "SQL, Python, dashboards, business analytics, and end-to-end data storytelling." },
  { code: "04", title: "Cybersecurity", desc: "Security fundamentals, network defence, penetration testing basics and SOC workflows." },
  { code: "05", title: "Digital Marketing", desc: "Performance marketing, SEO, content systems, analytics and campaign execution." },
];

const tracks = [
  { dur: "3 Months", title: "Intensive", desc: "Fast-track entry into a single specialisation. Designed for committed beginners." },
  { dur: "6 Months", title: "Professional", desc: "Deeper specialisation with team projects and an employer-matching capstone." },
  { dur: "12 Months", title: "Advanced", desc: "Full pipeline experience: training, live agency work, internship and placement." },
];

const includes = [
  "Project-based learning with weekly reviews",
  "Portfolio development and case studies",
  "Career readiness training (CV, interview, communication)",
  "Live employer matching support",
  "Lifetime access to the BrandoraX job board",
];

function AcademyPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>

      <section className="px-6 pt-24 pb-24 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="font-mono text-primary text-xs uppercase tracking-[0.3em] mb-6">The Academy</div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] mb-10 text-balance max-w-5xl">
            Train on what employers are actually hiring for.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Five specialisations across three intensities. Every cohort ends with employer-facing projects, not just certificates.
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="font-mono text-primary text-xs uppercase tracking-[0.3em] mb-4">Specialisations</div>
          <h2 className="text-4xl font-extrabold tracking-tighter mb-12">Five tracks. One promise: employability.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {programs.map((p) => (
              <div key={p.code} className="bg-background p-10 hover:bg-secondary/40 transition-colors">
                <div className="font-mono text-xs text-primary mb-6">({p.code})</div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 bg-secondary/40">
        <div className="max-w-7xl mx-auto">
          <div className="font-mono text-primary text-xs uppercase tracking-[0.3em] mb-4">Tracks</div>
          <h2 className="text-4xl font-extrabold tracking-tighter mb-12">Pick your intensity.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {tracks.map((t, i) => (
              <div key={t.title} className={`p-10 border ${i === 1 ? "border-primary bg-background" : "border-border bg-background"}`}>
                <div className="font-mono text-xs text-primary mb-6">{t.dur.toUpperCase()}</div>
                <h3 className="text-3xl font-extrabold tracking-tight mb-4">{t.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">{t.desc}</p>
                {i === 1 && (
                  <span className="font-mono text-[10px] uppercase tracking-widest bg-primary text-primary-foreground px-3 py-1">Most popular</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <div className="font-mono text-primary text-xs uppercase tracking-[0.3em] mb-4">What's Included</div>
            <h2 className="text-4xl font-extrabold tracking-tighter">Every program comes with the full pipeline.</h2>
          </div>
          <ul className="space-y-6">
            {includes.map((it, i) => (
              <li key={it} className="flex gap-6 border-b border-border pb-6">
                <span className="font-mono text-xs text-primary mt-1">0{i + 1}</span>
                <span className="text-lg">{it}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 py-24 bg-foreground text-background text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-8">
            Applications open for the next cohort.
          </h2>
          <Link to="/contact" className="inline-block bg-primary text-primary-foreground px-10 py-5 text-sm font-bold uppercase tracking-widest">
            Apply now
          </Link>
        </div>
      </section>

      </main>
      <SiteFooter />
    </div>
  );
}
