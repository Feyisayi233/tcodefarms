"use client";

import { SmoothScroll } from "./smooth-scroll";
import { Navigation } from "./navigation";
import { Footer } from "./footer";
import { WhatsAppButton } from "./whatsapp-button";

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <Navigation />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <WhatsAppButton />
    </SmoothScroll>
  );
}

