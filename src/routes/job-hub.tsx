import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/job-hub")({
  head: () => ({
    meta: [
      { title: "Job Hub — Brandora" },
      { name: "description", content: "Real-time placements, internships and freelance projects connecting Brandora talent to startups, SMEs and corporate teams." },
      { property: "og:title", content: "Brandora Job Hub" },
      { property: "og:description", content: "Hire pre-vetted African digital talent or get placed into your next role." },
    ],
  }),
  component: JobHubPage,
});

const learnerOffers = [
  { t: "Internship Placements", d: "Structured 3–6 month internships with vetted partner companies." },
  { t: "Apprenticeship Matching", d: "Long-term roles with senior mentorship inside operating teams." },
  { t: "Freelance Allocation", d: "Paid project work routed through the Brandora hub." },
  { t: "Direct Job Postings", d: "Employer-listed roles with priority access for graduates." },
];

const employerOffers = [
  { t: "Pre-Vetted Pipeline", d: "Hire from a continuously trained pool — not a cold résumé pile." },
  { t: "Project Trial Hires", d: "Run a paid project with a candidate before you commit." },
  { t: "Custom Corporate Training", d: "Upskill your existing team using Brandora curriculum and mentors." },
  { t: "Placement Success Manager", d: "A dedicated point of contact for every partner organisation." },
];

function JobHubPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="px-6 pt-24 pb-24 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="font-mono text-primary text-xs uppercase tracking-[0.3em] mb-6">Real-Time Job Hub</div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] text-balance max-w-5xl mb-10">
            Where trained talent meets real opportunity.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Brandora's job hub is the live connective tissue between graduates, internal projects and external employers.
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-px bg-border">
          <div className="bg-background p-12">
            <div className="font-mono text-primary text-xs uppercase tracking-[0.3em] mb-4">For Learners</div>
            <h2 className="text-3xl font-extrabold tracking-tight mb-8">From cohort to career.</h2>
            <ul className="space-y-6 mb-10">
              {learnerOffers.map((o) => (
                <li key={o.t}>
                  <div className="font-bold mb-1">{o.t}</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">{o.d}</div>
                </li>
              ))}
            </ul>
            <Link to="/academy" className="inline-block border border-foreground/20 px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors">
              Join a Program
            </Link>
          </div>
          <div className="bg-foreground text-background p-12">
            <div className="font-mono text-primary text-xs uppercase tracking-[0.3em] mb-4">For Employers</div>
            <h2 className="text-3xl font-extrabold tracking-tight mb-8">Hire smarter, not slower.</h2>
            <ul className="space-y-6 mb-10">
              {employerOffers.map((o) => (
                <li key={o.t}>
                  <div className="font-bold mb-1">{o.t}</div>
                  <div className="text-sm text-background/70 leading-relaxed">{o.d}</div>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="inline-block bg-primary text-primary-foreground px-6 py-3 text-xs font-bold uppercase tracking-widest">
              Become a Partner
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 bg-secondary/40">
        <div className="max-w-5xl mx-auto">
          <div className="font-mono text-primary text-xs uppercase tracking-[0.3em] mb-4">The Pipeline</div>
          <h2 className="text-4xl font-extrabold tracking-tighter mb-12">How a learner becomes a hire.</h2>
          <ol className="space-y-8">
            {[
              "Application & specialisation selection",
              "Structured training and project-based learning",
              "Performance evaluation and portfolio review",
              "Brandora WorkLab — supervised live projects",
              "Employer matching, shortlisting and interviews",
              "Job deployment and ongoing alumni support",
            ].map((step, i) => (
              <li key={step} className="grid grid-cols-[60px_1fr] gap-6 items-baseline border-b border-border pb-6">
                <span className="font-mono text-xs text-primary">STEP {String(i + 1).padStart(2, "0")}</span>
                <span className="text-xl font-medium">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
