"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0a0a0a] to-black relative grain border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="relative w-14 h-14 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Tcode Farms Logo"
                  width={56}
                  height={56}
                  className="object-contain drop-shadow-lg group-hover:scale-105 transition-transform"
                  unoptimized
                  onError={(e) => {
                    // Try SVG if PNG fails
                    const img = e.currentTarget as HTMLImageElement;
                    if (img.src.includes('logo.png')) {
                      img.src = '/logo.svg';
                      img.onerror = () => {
                        img.style.display = 'none';
                      };
                    } else {
                      img.style.display = 'none';
                    }
                  }}
                />
              </div>
              <h3 className="text-2xl font-bold gradient-text">Tcode Farms</h3>
            </Link>
            <p className="text-gray-400 mb-4 leading-relaxed">
              From Hatch to Harvest – We Deliver Excellence
            </p>
            <p className="text-sm text-gray-500">
              One of the largest layer farms in Lagos State
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold mb-6 text-white text-lg">Quick Links</h4>
            <ul className="space-y-3">
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
                    className="text-gray-400 hover:text-gold transition-colors inline-block hover:translate-x-2 transition-transform"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-6 text-white text-lg">Contact Information</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#008751] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  Oriokuta, Imota, Lagos State, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#008751] flex-shrink-0" />
                <a
                  href="tel:+2349158445714"
                  className="text-gray-400 hover:text-gold transition-colors"
                >
                  +234 915 844 5714
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#008751] flex-shrink-0" />
                <a
                  href="tel:+2348067240887"
                  className="text-gray-400 hover:text-gold transition-colors"
                >
                  +234 806 724 0887
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#008751] flex-shrink-0" />
                <a
                  href="mailto:tcodefarminc@gmail.com"
                  className="text-gray-400 hover:text-gold transition-colors"
                >
                  tcodefarminc@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © 2025 Tcode Farms. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            {["Facebook", "Instagram", "Twitter"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-gray-500 hover:text-gold transition-colors text-sm"
                aria-label={social}
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
