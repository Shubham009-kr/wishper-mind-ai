import { dark } from "@clerk/ui/themes";
import { SignUp } from "@clerk/nextjs";

const clerkAppearance = {
  theme: dark,
  variables: {
    colorBackground: "var(--background)",
    colorText: "var(--foreground)",
    colorPrimary: "var(--primary)",
    colorPrimaryText: "var(--primary-foreground)",
    colorTextSecondary: "var(--muted-foreground)",
    colorInputBackground: "var(--input)",
    colorInputText: "var(--foreground)",
    colorInputBorder: "var(--border)",
    colorInputPlaceholder: "var(--muted-foreground)",
    colorPanel: "var(--card)",
    colorPanelText: "var(--card-foreground)",
    colorButtonPrimaryBackground: "var(--primary)",
    colorButtonPrimaryText: "var(--primary-foreground)",
    colorLink: "var(--secondary)",
  },
};

export default function SignUpPage() {
  return (
    <main className="auth-page">
      <div className="auth-container">
        <aside className="auth-left">
          <div className="auth-left-inner">
            
            <div className="text-3xl font-semibold uppercase tracking-[0.01em] text-3xl text-muted-foreground">
              Wishper Mind AI
            </div>
            <h1 className="mt-6 text-2xl font-semibold">
              Join your secure architecture workspace
            </h1>
            <p className="mt-4 max-w-xs text-sm leading-7 text-muted-foreground">
              Create an account and start building architecture projects with protected access and Clerk-managed user profiles.
            </p>

            <div className="mt-8 emblem" aria-hidden>
              <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <rect x="10" y="10" width="100" height="100" rx="18" fill="url(#g)" />
                <defs>
                  <radialGradient id="g" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60 50) scale(60)">
                    <stop offset="0" stopColor="rgba(124,77,255,0.95)" />
                    <stop offset="1" stopColor="rgba(59,23,153,0.85)" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
        </aside>

        <section className="auth-right">
          <div className="auth-form-wrap items-center justify-center">
            <SignUp appearance={clerkAppearance} forceRedirectUrl="/editor" />
          </div>
        </section>
      </div>
    </main>
  );
}
