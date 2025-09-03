import "./globals.css";
import type { Metadata } from "next";
import  Header  from "../components/Header";
import  Footer  from "../components/Footer";

export const metadata: Metadata = {
  title: "Siraat Lex",
  description: "Islamic community programs and events across Lexington, KY.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh flex flex-col" style={{ background: "var(--bg)", color: "var(--ink)" }}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}