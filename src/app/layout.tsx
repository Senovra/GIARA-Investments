import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MaintenancePage from "@/components/MaintenancePage";
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
    "GIARA is an investment firm specializing in hospitality investments, headquartered in Dubai with projects in Colombo and the Maldives.",
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

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#F5F2EC",
};

// Flip to true, commit, push to take the whole site down for
// maintenance on GitHub Pages (requires a rebuild — see the Railway
// middleware approach for an instant-toggle alternative once deployed
// there instead).
const MAINTENANCE_MODE = false;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        {MAINTENANCE_MODE ? (
          // No Navbar/Footer at all in maintenance mode — the page is
          // fully self-contained, per standard practice.
          <MaintenancePage />
        ) : (
          <>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}