import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MaintenancePage from "@/components/MaintenancePage";

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
  icon: "https://res.cloudinary.com/v1bpvtww/image/upload/v1788330875/GIARAnewlogo3.png",
  shortcut: "https://res.cloudinary.com/v1bpvtww/image/upload/v1788330875/GIARAnewlogo3.png",
  apple: "https://res.cloudinary.com/v1bpvtww/image/upload/v1788330875/GIARAnewlogo3.png",
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