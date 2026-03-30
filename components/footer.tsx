"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Egg } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Top wave */}
      <div className="bg-cream-50">
        <svg viewBox="0 0 1440 60" className="w-full h-[40px] sm:h-[60px]" preserveAspectRatio="none">
          <path fill="#5C4033" d="M0,60 C360,20 720,60 1080,20 C1260,0 1380,20 1440,20 L1440,60 L0,60 Z" />
        </svg>
      </div>

      <div className="bg-[#5C4033] relative">
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='20' cy='20' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/" className="flex items-center gap-2 sm:gap-3 mb-4 group">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                  <Image
                    src="/logo.png"
                    alt="Tcode Farms Logo"
                    width={56}
                    height={56}
                    className="object-contain drop-shadow-lg group-hover:scale-105 transition-transform"
                    unoptimized
                    onError={(e) => {
                      try {
                        const img = e.currentTarget as HTMLImageElement;
                        if (img && img.src && img.src.includes('logo.png')) {
                          img.src = '/logo.svg';
                          img.onerror = () => {
                            if (img) {
                              img.style.display = 'none';
                            }
                          };
                        } else if (img) {
                          img.style.display = 'none';
                        }
                      } catch (error) {
                        console.error("Image error handler failed:", error instanceof Error ? error.message : String(error));
                      }
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Tcode Farms</h3>
                  <p className="text-xs text-[#F5C543]/80 font-medium tracking-wider">Layer Farm Lagos</p>
                </div>
              </Link>
              <p className="text-cream-200/70 mb-4 leading-relaxed text-sm sm:text-base">
                From Hatch to Harvest — delivering farm-fresh eggs to Lagos families and businesses for over 15 years.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <Egg className="h-4 w-4 text-[#F5C543]" />
                <span className="text-[#F5C543] font-medium">200+ crates delivered daily</span>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="font-semibold mb-4 sm:mb-6 text-[#F5C543] text-base sm:text-lg">Quick Links</h4>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About Us" },
                  { href: "/products", label: "Products & Services" },
                  { href: "/reports", label: "Daily Farm Reports" },
                  { href: "/contact", label: "Contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-cream-200/70 hover:text-white transition-colors inline-flex items-center gap-2 group text-sm sm:text-base"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#008751] group-hover:bg-[#F5C543] transition-colors" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-semibold mb-4 sm:mb-6 text-[#F5C543] text-base sm:text-lg">Contact Us</h4>
              <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#008751]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="h-4 w-4 text-[#008751]" />
                  </div>
                  <span className="text-cream-200/70">
                    Oriokuta, Imota, Lagos State, Nigeria
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#008751]/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-4 w-4 text-[#008751]" />
                  </div>
                  <div className="space-y-1">
                    <a href="tel:+2349158445714" className="block text-cream-200/70 hover:text-white transition-colors">
                      +234 915 844 5714
                    </a>
                    <a href="tel:+2348067240887" className="block text-cream-200/70 hover:text-white transition-colors">
                      +234 806 724 0887
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#008751]/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-4 w-4 text-[#008751]" />
                  </div>
                  <a href="mailto:tcodefarminc@gmail.com" className="text-cream-200/70 hover:text-white transition-colors">
                    tcodefarminc@gmail.com
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs sm:text-sm text-cream-200/40 text-center md:text-left">
              &copy; {new Date().getFullYear()} Tcode Farms. All rights reserved.
            </p>
            <div className="flex gap-4 sm:gap-6">
              {["Facebook", "Instagram", "Twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-cream-200/40 hover:text-[#F5C543] transition-colors text-xs sm:text-sm"
                  aria-label={social}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
