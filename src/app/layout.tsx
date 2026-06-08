import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pay Later | AquaFunded - Pass First, Pay After",
  description:
    "Take a prop firm challenge but only pay after you pass. Start with just $5. Up to $400,000 funded accounts with up to 100% profit split.",
  keywords: [
    "prop trading",
    "funded account",
    "pay later",
    "forex",
    "trading challenge",
  ],
  openGraph: {
    title: "Pay Later | AquaFunded",
    description:
      "Take a prop firm challenge but only pay after you pass. Start with just $5.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} ${inter.variable} antialiased`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
