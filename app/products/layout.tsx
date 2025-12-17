import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products & Services | Tcode Farms - Buy Eggs Lagos | Point of Lay Birds",
  description:
    "Buy fresh table eggs, point-of-lay birds, and spent layers from Tcode Farms. Professional farm setup and consulting services available. Located in Imota, Lagos.",
  keywords: [
    "buy eggs Lagos",
    "point of lay birds Imota",
    "table eggs Lagos",
    "poultry consulting Lagos",
    "farm setup Lagos",
  ],
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

