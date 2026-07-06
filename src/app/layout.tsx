import type { Metadata } from "next";
import "./global.css"

export const metadata: Metadata = {
  title: "Suneel Havapnor | DevSecOps Engineer",
  description: "Cloud, DevSecOps, security, platform engineering, projects, notes, and articles.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}