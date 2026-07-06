import type { Metadata } from "next";
import "./globals.css"

export const metadata: Metadata = {
  title: "Suneel | UI Portfolio Developer",
  description: "Professional portfolio showcasing skills, certifications, articles, and book recommendations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className="bg-gradient-to-br from-slate-900 via-slate-950 to-black text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
