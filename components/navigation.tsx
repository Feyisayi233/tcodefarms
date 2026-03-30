"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Egg } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products & Services" },
  { href: "/reports", label: "Daily Farm Reports" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream-50/95 backdrop-blur-md shadow-lg shadow-earth/5 border-b border-[#008751]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group gap-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Tcode Farms Logo"
                  width={48}
                  height={48}
                  className="object-contain drop-shadow-md"
                  priority
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
            </motion.div>
            <div className="flex flex-col">
              <motion.span
                whileHover={{ scale: 1.02 }}
                className={`text-lg sm:text-xl md:text-2xl font-bold tracking-tight transition-colors ${scrolled ? 'text-[#008751]' : 'text-white'}`}
              >
                Tcode Farms
              </motion.span>
              <span className={`text-[10px] sm:text-xs font-medium tracking-wider transition-colors hidden sm:block ${scrolled ? 'text-[#D4A017]' : 'text-[#F5C543]/80'}`}>
                Layer Farm Lagos
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item, idx) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={`relative px-2 lg:px-4 py-2 transition-all duration-300 font-medium text-xs lg:text-sm uppercase tracking-wider lg:tracking-widest group ${
                    pathname === item.href
                      ? scrolled ? "text-[#008751]" : "text-[#F5C543]"
                      : scrolled ? "text-gray-700 hover:text-[#008751]" : "text-white/90 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className={`absolute bottom-0 left-0 h-[2px] transition-all duration-500 ${
                    pathname === item.href
                      ? `w-full ${scrolled ? 'bg-gradient-to-r from-[#008751] to-[#D4A017]' : 'bg-gradient-to-r from-[#F5C543] to-[#D4A017]'}`
                      : "w-0 group-hover:w-full bg-gradient-to-r from-[#008751] to-[#00b366]"
                  }`} />
                </Link>
              </motion.div>
            ))}

            {/* CTA Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+2349158445714"
              className="ml-2 lg:ml-6 px-4 lg:px-6 py-2 lg:py-2.5 bg-[#D4A017] hover:bg-[#F5C543] text-[#5C4033] rounded-full text-xs lg:text-sm font-bold shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-1 lg:gap-2"
            >
              <Phone className="h-3 w-3 lg:h-4 lg:w-4" />
              <span className="hidden xl:inline">Call Now</span>
              <span className="xl:hidden">Call</span>
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className={`md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008751] transition-all ${
              scrolled ? "text-gray-700 hover:text-[#008751] hover:bg-[#008751]/10" : "text-white hover:bg-white/10"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden py-6 border-t border-[#008751]/20 bg-cream-50 rounded-b-2xl sm:rounded-b-3xl shadow-2xl shadow-earth/10 relative overflow-hidden"
            >
              <div className="relative z-10">
                {navItems.map((item, idx) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className={`block py-3 sm:py-4 px-4 sm:px-6 transition-all rounded-lg mx-2 uppercase tracking-wider text-xs sm:text-sm font-semibold ${
                        pathname === item.href
                          ? "text-[#008751] bg-[#008751]/10 border-l-4 border-[#008751]"
                          : "text-gray-700 hover:text-[#008751] hover:bg-[#008751]/5"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-[#008751]/15 px-3 sm:px-4">
                  <motion.a
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
                    href="tel:+2349158445714"
                    className="block w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-[#D4A017] hover:bg-[#F5C543] text-[#5C4033] rounded-full text-center text-sm sm:text-base font-bold shadow-md"
                  >
                    <Phone className="h-4 w-4 inline mr-2" />
                    Call Now
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
