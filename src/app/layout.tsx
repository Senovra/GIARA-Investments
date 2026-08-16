import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { basePath } from "@/lib/basePath";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
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
    default: "GIARA",
    template: "%s | GIARA",
  },
  description:
    "GIARA is a global investment holding company operating hospitality properties in Colombo and the Maldives.",
  icons: {
    icon: `${basePath}/Logo3.png`,
    shortcut: `${basePath}/Logo3.png`,
    apple: `${basePath}/Logo3.png`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

// The dedicated viewport export is Next.js's supported way to emit the
// <meta name="color-scheme"> and <meta name="theme-color"> tags — this
// is the browser-facing signal (in addition to the CSS property in
// globals.css) that tells Samsung Internet and similar browsers not to
// force-repaint the page in dark mode.
export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#F5F2EC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}