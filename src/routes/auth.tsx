import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useAuth, type AppRole } from "@/lib/auth";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Sign in — Brandora" },
      { name: "description", content: "Sign in or create your Brandora account to apply, hire, or manage your pipeline." },
    ],
  }),
  component: AuthPage,
});

type Mode = "signin" | "signup";

function AuthPage() {
  const { signIn, signUp, signInWithGoogle, session, loading } = useAuth();
  const navigate = useNavigate();
  const [mode, setMode] = useState<Mode>("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState<AppRole>("learner");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && session) {
      navigate({ to: "/dashboard" });
    }
  }, [loading, session, navigate]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const { error } = mode === "signin"
      ? await signIn({ email, password })
      : await signUp({ email, password, fullName, role });
    setSubmitting(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success(mode === "signin" ? "Welcome back" : "Account created");
    navigate({ to: "/dashboard" });
  };

  const onGoogle = async () => {
    const { error } = await signInWithGoogle();
    if (error) toast.error(error.message);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <section className="flex-1 px-6 py-24">
        <div className="max-w-md mx-auto">
          <div className="font-mono text-primary text-xs uppercase tracking-[0.3em] mb-6">
            {mode === "signin" ? "Welcome back" : "Join Brandora"}
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-[0.95] mb-10">
            {mode === "signin" ? "Sign in." : "Create your account."}
          </h1>

          <button
            type="button"
            onClick={onGoogle}
            className="w-full border border-border hover:border-foreground py-3 text-sm font-medium flex items-center justify-center gap-3 transition-colors mb-6"
          >
            <GoogleIcon /> Continue with Google
          </button>

          <div className="flex items-center gap-3 mb-6 text-xs uppercase tracking-widest text-muted-foreground">
            <div className="flex-1 h-px bg-border" /> or <div className="flex-1 h-px bg-border" />
          </div>

          <form onSubmit={onSubmit} className="space-y-5">
            {mode === "signup" && (
              <>
                <Field label="Full name" value={fullName} onChange={setFullName} required />
                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    I am a
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {(["learner", "employer"] as const).map((r) => (
                      <button
                        type="button"
                        key={r}
                        onClick={() => setRole(r)}
                        className={`py-3 text-xs uppercase tracking-widest border transition-colors ${
                          role === r ? "bg-foreground text-background border-foreground" : "border-border hover:border-foreground"
                        }`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
            <Field label="Email" type="email" value={email} onChange={setEmail} required />
            <Field label="Password" type="password" value={password} onChange={setPassword} required minLength={6} />

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-primary text-primary-foreground py-4 text-sm font-bold uppercase tracking-widest hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {submitting ? "Please wait…" : mode === "signin" ? "Sign in" : "Create account"}
            </button>
          </form>

          <button
            type="button"
            onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
            className="mt-8 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {mode === "signin" ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
          </button>

          <p className="mt-6 text-xs text-muted-foreground">
            By continuing you agree to Brandora's terms. Need help? <Link to="/contact" className="underline">Contact us</Link>.
          </p>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

function Field({ label, type = "text", value, onChange, required, minLength }: {
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  minLength?: number;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        minLength={minLength}
        className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-base"
      />
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
      <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"/>
      <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.583-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"/>
      <path fill="#FBBC05" d="M3.964 10.707A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.707V4.961H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.039l3.007-2.332z"/>
      <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.961L3.964 7.293C4.672 5.165 6.656 3.58 9 3.58z"/>
    </svg>
  );
}
