import { Link } from "@tanstack/react-router";
import { useAuth } from "@/lib/auth";

const navLinks = [
  { to: "/academy", label: "Academy" },
  { to: "/job-hub", label: "Job Hub" },
  { to: "/services", label: "Services" },
  { to: "/community", label: "Community" },
  { to: "/about", label: "About" },
] as const;

export function SiteHeader() {
  const { session } = useAuth();
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link to="/" className="font-extrabold text-2xl tracking-tighter">
            BRANDORAX
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
          {session ? (
            <Link
              to="/dashboard"
              className="bg-foreground text-background px-6 py-3 text-[13px] font-medium uppercase tracking-widest hover:bg-primary transition-colors"
            >
              Dashboard
            </Link>
          ) : (
            <>
              <Link
                to="/auth"
                className="hidden sm:inline text-[13px] font-medium uppercase tracking-widest hover:text-primary transition-colors"
              >
                Sign in
              </Link>
              <Link
                to="/auth"
                className="bg-foreground text-background px-6 py-3 text-[13px] font-medium uppercase tracking-widest hover:bg-primary transition-colors"
              >
                Apply Now
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
