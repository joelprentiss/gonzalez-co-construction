import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gonzalez&Co Construction/Roofing | Belton & Temple General Contractor",
  description:
    "Gonzalez&Co Construction/Roofing provides roofing, renovations, fencing, siding, and general construction services in Belton, Temple, and nearby Central Texas.",
  keywords: [
    "Belton general contractor",
    "Temple general contractor",
    "Belton roofing",
    "Temple roofing",
    "Belton renovations",
    "fencing repair Belton TX",
    "siding replacement Belton TX",
    "Latino-owned contractor Belton",
  ],
  openGraph: {
    title: "Gonzalez&Co Construction/Roofing",
    description:
      "Local roofing, renovations, fencing, siding, and general construction help for Belton, Temple, and nearby Central Texas.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
