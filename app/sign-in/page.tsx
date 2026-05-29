import { dark } from "@clerk/ui/themes";
import { SignIn } from "@clerk/nextjs";

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

export default function SignInPage() {
  return (
    <main className="auth-page">
      <div className="auth-container">
        <aside className="auth-left">
          <div className="auth-left-inner">
            <div className="text-sm font-semibold uppercase tracking-[0.15em] text-sm text-muted-foreground">
              Wishper Mind AI
            </div>
            <h1 className="mt-6 text-3xl font-semibold">
              Secure architecture collaboration
            </h1>
            <p className="mt-4 max-w-xs text-sm leading-7 text-muted-foreground">
              Sign in to access your project workspace, manage files, and keep your architecture data protected.
            </p>

            <div className="mt-8 emblem" aria-hidden>
              <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <circle cx="60" cy="60" r="50" fill="url(#g)" />
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
          <div className="auth-form-wrap">
            <SignIn appearance={clerkAppearance} forceRedirectUrl="/editor" />
          </div>
        </section>
      </div>
    </main>
  );
}
