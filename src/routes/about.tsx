import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — BrandoraX" },
      { name: "description", content: "BrandoraX is a demand-driven talent pipeline that aligns training with real industry needs across Africa." },
      { property: "og:title", content: "About BrandoraX" },
      { property: "og:description", content: "Vision, mission and the four-pillar talent ecosystem behind BrandoraX." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { t: "Practical Impact", d: "We measure ourselves by careers built, not certificates issued." },
  { t: "Excellence", d: "Production-grade work is the floor. Mentorship gets every learner above it." },
  { t: "Integrity", d: "Honest assessments, transparent placements, no inflated promises." },
  { t: "Innovation", d: "Curriculum, tooling and partnerships evolve with the market every quarter." },
  { t: "Community", d: "Talent rises faster when peers, mentors and employers move together." },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>

      <section className="px-6 pt-24 pb-32 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <div className="font-mono text-primary text-xs uppercase tracking-[0.3em] mb-6">About BrandoraX</div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] mb-10 text-balance">
            A demand-driven pipeline, not another tech academy.
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Many people acquire skills but struggle to secure employment due to a lack of practical experience and employer access. BrandoraX exists to close that gap — through market-aligned training, project-based learning and an employer-integrated placement system.
          </p>
        </div>
      </section>

      <section className="px-6 py-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <div className="font-mono text-primary text-xs uppercase tracking-[0.3em] mb-4">Vision</div>
            <h2 className="text-3xl font-extrabold tracking-tight mb-6">
              To become Africa's most practical and employment-driven digital talent pipeline.
            </h2>
          </div>
          <div>
            <div className="font-mono text-primary text-xs uppercase tracking-[0.3em] mb-4">Mission</div>
            <h2 className="text-3xl font-extrabold tracking-tight mb-6">
              Equip individuals with in-demand skills and connect them to real-world opportunities through structured systems.
            </h2>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 bg-foreground text-background">
        <div className="max-w-7xl mx-auto">
          <div className="font-mono text-primary text-xs uppercase tracking-[0.3em] mb-4">Core Values</div>
          <h2 className="text-4xl font-extrabold tracking-tighter mb-16">What we stand for.</h2>
          <div className="grid md:grid-cols-3 gap-px bg-white/10">
            {values.map((v, i) => (
              <div key={v.t} className="bg-foreground p-10">
                <div className="font-mono text-xs text-primary mb-4">0{i + 1}</div>
                <h3 className="text-xl font-bold mb-3">{v.t}</h3>
                <p className="text-sm text-background/70 leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-32">
        <div className="max-w-5xl mx-auto">
          <div className="font-mono text-primary text-xs uppercase tracking-[0.3em] mb-4">The Approach</div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-12">
            We build internal workforce systems — not just hiring boards.
          </h2>
          <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
            <p>BrandoraX begins online-first to keep operations lean and scale efficiently. Once revenue and placement success stabilise, we'll establish a physical innovation centre.</p>
            <p>Our four operational pillars — Academy, Real-Time Job Hub, Production Services and Community Empowerment — work as one system. Trainees move from learning to live projects to placements without leaving the ecosystem.</p>
            <p>Within our first two years we aim to train 500+ learners, hit a 60–65% placement rate, and partner with at least 50 employer organisations.</p>
          </div>
          <div className="mt-12">
            <Link to="/academy" className="inline-block bg-primary text-primary-foreground px-8 py-4 text-sm font-bold uppercase tracking-widest">
              See the Programs
            </Link>
          </div>
        </div>
      </section>

      </main>
      <SiteFooter />
    </div>
  );
}
