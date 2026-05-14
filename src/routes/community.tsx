import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community — Brandora" },
      { name: "description", content: "Free webinars, youth bootcamps, NGO partnerships and skill-orientation programs expanding digital opportunity across Africa." },
      { property: "og:title", content: "Brandora Community" },
      { property: "og:description", content: "Educate. Engage. Convert. Transform." },
    ],
  }),
  component: CommunityPage,
});

const programs = [
  { t: "Free Tech Webinars", d: "Weekly live sessions on tech career paths, beginner guides and industry insights." },
  { t: "Youth Bootcamps", d: "Short-form intensive bootcamps designed to introduce tech to underserved young people." },
  { t: "NGO Partnerships", d: "Collaborations with NGOs and government agencies to deliver community-scale training." },
  { t: "Skill Orientation", d: "Entry programs that help newcomers find the right specialisation before committing." },
];

const stages = [
  { t: "Awareness", d: "Reach people with content, social media and outreach." },
  { t: "Education", d: "Teach foundational knowledge and clear direction through free content." },
  { t: "Engagement", d: "Build relationships with the audience inside community channels." },
  { t: "Conversion", d: "Move motivated learners into structured Academy programs." },
];

function CommunityPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>

      <section className="px-6 pt-24 pb-24 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="font-mono text-primary text-xs uppercase tracking-[0.3em] mb-6">Community Empowerment</div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] text-balance max-w-5xl mb-10">
            Educate. Engage. Convert. Transform.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            The community arm is how Brandora reaches people long before they apply — and stays with them long after they're placed.
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="font-mono text-primary text-xs uppercase tracking-[0.3em] mb-4">Programs</div>
          <h2 className="text-4xl font-extrabold tracking-tighter mb-12">What we run.</h2>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {programs.map((p, i) => (
              <div key={p.t} className="bg-background p-10">
                <div className="font-mono text-xs text-primary mb-6">0{i + 1}</div>
                <h3 className="text-2xl font-bold tracking-tight mb-4">{p.t}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 bg-secondary/40">
        <div className="max-w-7xl mx-auto">
          <div className="font-mono text-primary text-xs uppercase tracking-[0.3em] mb-4">The Funnel</div>
          <h2 className="text-4xl font-extrabold tracking-tighter mb-12">From audience to alumni.</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {stages.map((s, i) => (
              <div key={s.t}>
                <div className="font-mono text-xs text-primary mb-4">STAGE 0{i + 1}</div>
                <h3 className="text-2xl font-extrabold tracking-tight mb-3">{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 bg-foreground text-background text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-8">
            Run an NGO, school or community?
          </h2>
          <p className="text-lg text-background/70 mb-10">
            Partner with us to deliver tech opportunity at scale.
          </p>
          <Link to="/contact" className="inline-block bg-primary text-primary-foreground px-10 py-5 text-sm font-bold uppercase tracking-widest">
            Start a Partnership
          </Link>
        </div>
      </section>

      </main>
      <SiteFooter />
    </div>
  );
}
