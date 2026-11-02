import type { Metadata } from "next";
import { Sora, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-sora-var",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-hanken-var",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-jetbrains-var",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lets Pickleball India - Professional Coaching & Events",
  description:
    "Elevate your pickleball game with Lets Pickleball India. Professional coaching, tournaments, and community events at R&K Thakur Complex, Kandivali East, Mumbai.",
  keywords: [
    "pickleball",
    "India",
    "coaching",
    "Kandivali",
    "Mumbai",
    "pickleball coaching",
    "pickleball events",
    "Lets Pickleball India",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${hanken.variable} ${jetbrains.variable} antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-on-background overflow-x-hidden">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
