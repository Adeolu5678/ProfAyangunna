import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prof. James Ayangunna — Academic Portfolio",
  description:
    "Academic portfolio of Professor James Ayanrinde Ayangunna, Department of Social Work, University of Ibadan.",
  keywords: [
    "James Ayangunna",
    "Social Welfare",
    "Social Work",
    "Health Promotion",
    "University of Ibadan",
    "Academic Portfolio",
  ],
  openGraph: {
    title: "Prof. James Ayangunna",
    description: "Professor of Social Work and Social Welfare — University of Ibadan",
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
