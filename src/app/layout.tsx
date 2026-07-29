import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/cursor/CustomCursor";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";
import AppShell from "@/components/loading/AppShell";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "GIARA — Global Investment Holding",
    template: "%s | GIARA",
  },
  description:
    "GIARA is a global investment holding company specializing in real estate and strategic investments, shaping enduring value through disciplined capital allocation and architectural excellence.",
  keywords: [
    "GIARA",
    "investment holding",
    "real estate investment",
    "strategic investments",
    "luxury real estate",
  ],
  openGraph: {
    title: "GIARA — Investments",
    description:
      "Shaping enduring value through disciplined capital allocation and architectural excellence.",
    type: "website",
  },
  icons: {
    icon: "/Logo3.png",
    shortcut: "/Logo3.png",
    apple: "/Logo3.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <AppShell>
          <SmoothScrollProvider>
            <CustomCursor />
            <Navbar />
            <main>{children}</main>
            <Footer />
          </SmoothScrollProvider>
        </AppShell>
      </body>
    </html>
  );
}