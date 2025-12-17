import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daily Farm Reports | Tcode Farms",
  description:
    "Stay updated with daily farm reports, production updates, and insights from Tcode Farms.",
};

export default function ReportsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

