import EditorNavbar from "@/components/editor/editor-navbar";

export default function EditorPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <EditorNavbar />
      <main className="pt-14">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <h1 className="text-3xl font-semibold text-foreground">Editor</h1>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              This workspace is protected by Clerk. Use the menu in the top-right to manage your profile and sign out.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
