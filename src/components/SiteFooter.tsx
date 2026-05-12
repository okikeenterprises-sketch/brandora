import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-background pt-24 pb-12 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div>
            <div className="font-extrabold text-2xl tracking-tighter mb-6">BRANDORA</div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              The digital workforce pipeline for the next generation of African excellence.
            </p>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-6">
              Programs
            </h4>
            <ul className="space-y-4 text-[13px] font-medium">
              <li><Link to="/academy" className="hover:text-primary transition-colors">Academy</Link></li>
              <li><Link to="/community" className="hover:text-primary transition-colors">Bootcamps</Link></li>
              <li><Link to="/job-hub" className="hover:text-primary transition-colors">Job Placement</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-6">
              Enterprise
            </h4>
            <ul className="space-y-4 text-[13px] font-medium">
              <li><Link to="/job-hub" className="hover:text-primary transition-colors">Hire Talent</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Partnerships</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-6">
              Connect
            </h4>
            <ul className="space-y-4 text-[13px] font-medium">
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><a href="mailto:hello@brandora.africa" className="hover:text-primary transition-colors">hello@brandora.africa</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border gap-4">
          <p className="font-mono text-[10px] text-muted-foreground uppercase">
            © {new Date().getFullYear()} Brandora Digital Ltd. Built for Africa.
          </p>
          <div className="flex gap-8 font-mono text-[10px] text-muted-foreground uppercase">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
