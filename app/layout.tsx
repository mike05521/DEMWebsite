import type { Metadata } from "next";
import { Big_Shoulders, IBM_Plex_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import "./globals.css";

const display = Big_Shoulders({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800", "900"],
  adjustFontFallback: false,
});

const ibm = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Precision Laser Cutting & Metal Fabrication | David Engineering",
    template: "%s | David Engineering",
  },
  description:
    "David Engineering & Manufacturing, Inc. — precision metal manufacturing in Corona, CA since 1972. Fiber laser, tube laser, CNC, forming, stamping, welding. ISO 9001:2015.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.legalName,
  },
  icons: {
    icon: "/images/logo/d-mark.jpg",
    apple: "/images/logo/d-mark.jpg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${ibm.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-ink font-sans antialiased">
        <JsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
