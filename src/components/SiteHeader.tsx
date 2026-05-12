import { Link } from "@tanstack/react-router";

const navLinks = [
  { to: "/academy", label: "Academy" },
  { to: "/job-hub", label: "Job Hub" },
  { to: "/services", label: "Services" },
  { to: "/community", label: "Community" },
  { to: "/about", label: "About" },
] as const;

export function SiteHeader() {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link to="/" className="font-extrabold text-2xl tracking-tighter">
            BRANDORA
          </Link>
          <div className="hidden md:flex gap-8 text-[13px] font-medium uppercase tracking-widest text-muted-foreground">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="hover:text-foreground transition-colors"
                activeProps={{ className: "text-foreground" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Link
            to="/contact"
            className="hidden sm:inline text-[13px] font-medium uppercase tracking-widest"
          >
            Hire Talent
          </Link>
          <Link
            to="/contact"
            className="bg-foreground text-background px-6 py-3 text-[13px] font-medium uppercase tracking-widest hover:bg-primary transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
