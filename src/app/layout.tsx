import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Look for games",
  description: "Gamer's backlog managing app",
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
