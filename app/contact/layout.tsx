import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Tcode Farms - Get in Touch",
  description:
    "Contact Tcode Farms in Oriokuta, Imota, Lagos State. Call +234 915 844 5714 or +234 806 724 0887. Email: tcodefarminc@gmail.com",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

