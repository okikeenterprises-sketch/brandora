import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import heroImg from "@/assets/hero.jpg";
import uiuxImg from "@/assets/program-uiux.jpg";
import webImg from "@/assets/program-web.jpg";
import dataImg from "@/assets/program-data.jpg";
import employerImg from "@/assets/employer.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Brandora — Africa's Talent Engine" },
      { name: "description", content: "An outcome-driven digital workforce pipeline. Train, get placed, build with leading employers across Africa." },
      { property: "og:title", content: "Brandora — Africa's Talent Engine" },
      { property: "og:description", content: "Outcome-driven training and direct placement into startups, SMEs and enterprise teams." },
    ],
  }),
  component: Index,
});

const stats = [
  { n: "01", value: "500+", label: "Learners in Year 1–2" },
  { n: "02", value: "60–65%", label: "Target Placement Rate" },
  { n: "03", value: "50+", label: "Employer Partners" },
  { n: "04", value: "4", label: "Operational Pillars" },
];

const programs = [
  { img: uiuxImg, dur: "3 MONTHS", level: "LEVEL 01", title: "UI/UX Design", desc: "User research, wireframing and high-fidelity prototyping for production-ready products." },
  { img: webImg, dur: "6 MONTHS", level: "LEVEL 02", title: "Web Development", desc: "Full-stack engineering with modern React, Node and cloud-native deployment." },
  { img: dataImg, dur: "12 MONTHS", level: "LEVEL 03", title: "Data Analysis", desc: "SQL, Python, business analytics and dashboarding for real organisational decisions." },
];

const pillars = [
  { n: "I", title: "Academy", desc: "Structured 3, 6 and 12-month tracks across UI/UX, Web Dev, Data, Cybersecurity and Digital Marketing." },
  { n: "II", title: "Real-Time Job Hub", desc: "Internships, apprenticeships, freelance project allocation and direct employer placements." },
  { n: "III", title: "Production Services", desc: "A live agency arm — branding, web and corporate design — delivered by supervised top graduates." },
  { n: "IV", title: "Community Empowerment", desc: "Free webinars, youth bootcamps, NGO partnerships and skill orientation programs." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <SiteHeader />
      <main>

      {/* Hero */}
      <section className="relative pt-20 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7 z-10">
            <div className="font-mono text-primary text-xs font-medium uppercase tracking-[0.3em] mb-6 animate-reveal">
              Developing Tomorrow's Workforce
            </div>
            <h1 className="text-6xl lg:text-8xl font-extrabold tracking-tighter leading-[0.9] text-balance mb-8 animate-reveal [animation-delay:100ms]">
              AFRICA'S PREMIER<br />TALENT ENGINE.
            </h1>
            <p className="text-xl text-muted-foreground max-w-[50ch] mb-10 animate-reveal [animation-delay:200ms]">
              We bridge the gap between potential and placement. High-impact tech training paired with direct access to real employers.
            </p>
            <div className="flex flex-wrap gap-4 animate-reveal [animation-delay:300ms]">
              <Link to="/academy" className="bg-primary text-primary-foreground px-8 py-4 text-sm font-bold uppercase tracking-widest ring-1 ring-primary/20 shadow-xl shadow-primary/10 hover:opacity-90 transition-opacity">
                Start Your Career
              </Link>
              <Link to="/job-hub" className="border border-foreground/20 px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-all">
                Hire Talent
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <img
              src={heroImg}
              alt="A young African tech professional in a modern workspace"
              width={1024}
              height={1280}
              className="w-full aspect-[4/5] object-cover outline-1 -outline-offset-1 outline-black/5 rounded-sm animate-scale"
            />
            <div className="absolute -bottom-6 -left-6 bg-background p-8 border border-border shadow-2xl max-w-[240px] animate-reveal [animation-delay:500ms]">
              <div className="font-mono text-3xl font-bold mb-1">65%</div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground leading-tight">
                Target placement rate within 6 months of graduation
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-16 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03] select-none">
          <div className="text-[24vw] font-extrabold tracking-tighter leading-none whitespace-nowrap">BRANDORA</div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.n} className={`p-12 ${i < stats.length - 1 ? "md:border-r" : ""} ${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b md:border-b-0" : ""} border-border`}>
              <div className="font-mono text-primary text-xs mb-4">({s.n})</div>
              <div className="text-4xl font-extrabold tracking-tighter mb-2">{s.value}</div>
              <div className="text-xs uppercase tracking-widest font-bold text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-2xl">
            <div className="font-mono text-primary text-xs uppercase tracking-[0.3em] mb-4">The Ecosystem</div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter">FOUR PILLARS. ONE PIPELINE.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {pillars.map((p) => (
              <div key={p.title} className="bg-background p-10 group">
                <div className="font-mono text-xs text-primary mb-6">{p.n}</div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-32 px-6 bg-secondary/40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between items-end mb-16 gap-8">
            <div>
              <div className="font-mono text-primary text-xs uppercase tracking-[0.3em] mb-4">The Academy</div>
              <h2 className="text-4xl font-extrabold tracking-tighter">Tracks built for placement.</h2>
            </div>
            <Link to="/academy" className="text-xs font-bold uppercase tracking-widest border-b-2 border-primary pb-1">
              View All Tracks →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((p) => (
              <Link to="/academy" key={p.title} className="group bg-background border border-border hover:border-foreground transition-colors">
                <img src={p.img} alt={p.title} loading="lazy" width={1024} height={640} className="w-full aspect-[16/10] object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <span className="font-mono text-[10px] bg-primary/10 text-primary px-2 py-1">{p.dur}</span>
                    <span className="font-mono text-[10px] text-muted-foreground">{p.level}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{p.desc}</p>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider group-hover:text-primary transition-colors">
                    Explore Curriculum
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Employer CTA */}
      <section className="bg-foreground text-background py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="font-mono text-primary text-xs uppercase tracking-[0.3em] mb-6">For Employers</div>
            <h2 className="text-5xl font-extrabold tracking-tighter mb-8 leading-tight">
              HIRE THE FUTURE OF AFRICAN TECH.
            </h2>
            <p className="text-lg text-background/70 mb-10 max-w-lg">
              Skip the recruitment headache. Access a pre-vetted pipeline of graduates trained on real projects for the demands of the modern workforce.
            </p>
            <ul className="space-y-4 mb-10">
              {["Pre-vetted Talent Pipelines", "Internship & Apprenticeship Matching", "Custom Corporate Training"].map((f) => (
                <li key={f} className="flex items-center gap-4 text-sm font-medium tracking-wide uppercase">
                  <div className="size-2 bg-primary rounded-full" /> {f}
                </li>
              ))}
            </ul>
            <Link to="/job-hub" className="inline-block bg-background text-foreground px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-colors">
              Become a Partner
            </Link>
          </div>
          <div className="relative">
            <img src={employerImg} alt="Brandora team collaborating" loading="lazy" width={1280} height={800} className="w-full aspect-video object-cover outline-1 -outline-offset-1 outline-white/10" />
            <div className="absolute -top-4 -right-4 size-32 border border-white/20 flex items-center justify-center p-4 text-center bg-foreground">
              <span className="text-[10px] uppercase font-bold tracking-widest leading-none">Vetted by Industry Standards</span>
            </div>
          </div>
        </div>
      </section>

      {/* Community teaser */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-end">
          <div>
            <div className="font-mono text-primary text-xs uppercase tracking-[0.3em] mb-4">Community</div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6">
              Beyond the classroom.
            </h2>
          </div>
          <div>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Free webinars, youth bootcamps and NGO partnerships expand digital opportunity across the continent. Brandora is a movement, not just an academy.
            </p>
            <Link to="/community" className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest border-b-2 border-foreground pb-1">
              Explore the community →
            </Link>
          </div>
        </div>
      </section>

      </main>
      <SiteFooter />
    </div>
  );
}
