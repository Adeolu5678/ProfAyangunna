import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prof. James Ayangunna — Academic Portfolio",
  description:
    "Academic portfolio of Professor James Ayangunna, Department of Social Sciences, University of Ibadan.",
  keywords: [
    "James Ayangunna",
    "Social Sciences",
    "University of Ibadan",
    "Academic Portfolio",
  ],
  openGraph: {
    title: "Prof. James Ayangunna",
    description: "Professor of Social Sciences — University of Ibadan",
    type: "website",
  },
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
