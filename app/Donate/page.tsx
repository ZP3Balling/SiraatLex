import Container from "@/components/Container";

export const metadata = { title: "Donate — Siraat Lex" };

export default function DonatePage() {
  return (
    <Container className="py-10 grid gap-4 max-w-2xl">
      <h1 className="text-2xl font-semibold" style={{ color: "var(--brand-ink)" }}>
        Support Siraat Lex
      </h1>
      <p style={{ color: "var(--muted)" }}>
        This is a demo donations page. We’ll add Stripe here (one-time and monthly) after we finish the basics.
      </p>

      <div className="grid gap-2 text-sm" style={{ color: "var(--ink)" }}>
        <p>• One-time donation — coming soon</p>
        <p>• Monthly donation — coming soon</p>
      </div>
    </Container>
  );
}