import Container from "@/components/Container";

export const metadata = { title: "Events — Siraat Lex" };

export default function EventsPage() {
  return (
    <Container className="py-10 grid gap-4">
      <h1 className="text-2xl font-semibold" style={{ color: "var(--brand-ink)" }}>
        Upcoming Events
      </h1>
      <p style={{ color: "var(--muted)" }}>
        Demo view. We’ll add a calendar or event cards later.
      </p>
      <ul className="list-disc pl-5" style={{ color: "var(--ink)" }}>
        <li>Community Night — Coming Soon</li>
        <li>Youth Halaqah — Coming Soon</li>
        <li>Guest Speaker — Coming Soon</li>
      </ul>
    </Container>
  );
}