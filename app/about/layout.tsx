import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Tcode Farms - Leading Layer Farm in Lagos",
  description:
    "Learn about Tcode Farms - one of the largest layer farms in Lagos State. 15 years of experience, 7,000 layers, supplying 200 crates daily.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

