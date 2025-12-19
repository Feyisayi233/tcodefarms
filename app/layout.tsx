import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tcode Farms | Layer Farm Lagos | Buy Eggs Lagos | Point of Lay Birds Imota",
  description:
    "Tcode Farms - One of the largest layer farms in Lagos State. We supply 200 crates of fresh eggs daily to Lagos. Located in Oriokuta, Imota. Buy table eggs, point-of-lay birds, and farm consulting services.",
  keywords: [
    "layer farm Lagos",
    "buy eggs Lagos",
    "point of lay birds Imota",
    "Tcode Farms",
    "poultry farm Lagos",
    "fresh eggs Nigeria",
    "layer birds Lagos",
    "farm consulting Lagos",
  ],
  openGraph: {
    title: "Tcode Farms | From Hatch to Harvest – We Deliver Excellence",
    description:
      "One of the largest layer farms in Lagos State. Supplying 200 crates daily to Lagos. 15 years in business.",
    type: "website",
    locale: "en_NG",
    siteName: "Tcode Farms",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tcode Farms | Layer Farm Lagos",
    description:
      "One of the largest layer farms in Lagos State. Supplying fresh eggs daily.",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.variable}>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}

