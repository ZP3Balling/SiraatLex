import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b" style={{ borderColor: "var(--border)", background: "var(--bg)" }}>
      <div className="mx-auto max-w-5xl px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold" style={{ color: "var(--brand-ink)" }}>
          Siraat Lex
        </Link>
        <nav className="flex gap-6 text-sm">
          <Link href="/events" className="hover:underline" style={{ color: "var(--ink)" }}>Events</Link>
          <Link href="/donate" className="font-medium hover:underline" style={{ color: "var(--brand)" }}>Donate</Link>
          <Link href="/contact" className="hover:underline" style={{ color: "var(--ink)" }}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}