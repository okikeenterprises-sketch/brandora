import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useId, useState } from "react";
import { toast } from "sonner";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useAuth, type AppRole } from "@/lib/auth";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/_authenticated/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — Brandora" },
      { name: "description", content: "Your Brandora dashboard." },
    ],
  }),
  component: DashboardPage,
});

function DashboardPage() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState<AppRole | null>(null);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    let cancelled = false;
    (async () => {
      const [{ data: profile }, { data: roles }] = await Promise.all([
        supabase.from("profiles").select("full_name").eq("id", user.id).maybeSingle(),
        supabase.from("user_roles").select("role").eq("user_id", user.id).limit(1).maybeSingle(),
      ]);
      if (cancelled) return;
      setFullName(profile?.full_name ?? "");
      setRole((roles?.role as AppRole) ?? null);
      setLoading(false);
    })();
    return () => { cancelled = true; };
  }, [user]);

  const onSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setSaving(true);
    const { error } = await supabase
      .from("profiles")
      .update({ full_name: fullName })
      .eq("id", user.id);
    setSaving(false);
    if (error) toast.error(error.message);
    else toast.success("Profile updated");
  };

  const onSignOut = async () => {
    await signOut();
    navigate({ to: "/" });
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>

      <section className="px-6 pt-24 pb-12 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <div className="font-mono text-primary text-xs uppercase tracking-[0.3em] mb-6">Dashboard</div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter leading-[0.95]">
            {loading ? "…" : `Hi${fullName ? `, ${fullName.split(" ")[0]}` : ""}.`}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            {role === "employer"
              ? "Manage your hiring pipeline and shortlist Brandora-trained talent."
              : role === "admin"
              ? "Admin workspace. Manage cohorts, employers and partners."
              : "Track your cohort, applications and placement journey."}
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_2fr] gap-16">
          <div>
            <div className="font-mono text-primary text-xs uppercase tracking-[0.3em] mb-6">Account</div>
            <ul className="space-y-6 text-sm">
              <li>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Email</div>
                <div className="text-base font-medium break-all">{user?.email}</div>
              </li>
              <li>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Role</div>
                <div className="text-base font-medium uppercase">{role ?? "—"}</div>
              </li>
            </ul>
            <button
              onClick={onSignOut}
              className="mt-10 border border-border hover:border-foreground px-5 py-3 text-xs font-bold uppercase tracking-widest transition-colors"
            >
              Sign out
            </button>
          </div>

          <form onSubmit={onSave} className="space-y-6">
            <div className="font-mono text-primary text-xs uppercase tracking-[0.3em] mb-2">Profile</div>
            <FullNameField value={fullName} onChange={setFullName} />
            <button
              type="submit"
              disabled={saving}
              className="bg-primary text-primary-foreground px-8 py-4 text-sm font-bold uppercase tracking-widest hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {saving ? "Saving…" : "Save changes"}
            </button>
          </form>
        </div>
      </section>

      </main>
      <SiteFooter />
    </div>
  );
}

function FullNameField({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Full name</label>
      <input
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-base"
      />
    </div>
  );
}
