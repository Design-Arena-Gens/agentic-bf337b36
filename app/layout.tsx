import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neuro-Symbolic CARS Blueprint",
  description:
    "Simplified implementation blueprint for compositional generalization in neuro-symbolic contextual recommender systems."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
