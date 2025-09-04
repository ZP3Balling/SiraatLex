export default function Footer() {
  return (
    <footer className="border-t mt-12" style={{ borderColor: "var(--border)", background: "var(--bg)" }}>
      <div className="mx-auto max-w-5xl px-4 py-6 text-sm flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
        <p style={{ color: "var(--muted)" }}>© {new Date().getFullYear()} Siraat Lex</p>
        <div className="flex gap-4">
        <a
         href="https://instagram.com/siraatlex"
         target="_blank"
         rel="noopener noreferrer"
         className="underline"
         style={{ color: "var(--brand)" }}
        >
            Instagram</a>
        </div>
      </div>
    </footer>
  );
}