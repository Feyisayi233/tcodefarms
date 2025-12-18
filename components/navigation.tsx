"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
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
          ? "bg-white shadow-lg border-b border-[#008751]/10" 
          : "bg-transparent"
      }`}
    >
      {/* Gradient border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#008751]/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo */}
          <Link href="/" className="flex items-center group gap-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#008751]/20 blur-xl rounded-full" />
              <div className="relative w-12 h-12 flex items-center justify-center">
                {/* Try logo.png first, then logo.svg, with fallback */}
                <div className="relative w-full h-full">
                  <Image
                    src="/logo.png"
                    alt="Tcode Farms Logo"
                    width={48}
                    height={48}
                    className="object-contain drop-shadow-lg"
                    priority
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
              </div>
            </motion.div>
            <motion.span
              whileHover={{ scale: 1.05 }}
              className={`text-2xl md:text-3xl font-bold tracking-tight ${scrolled ? 'text-[#008751]' : 'text-white'}`}
            >
              Tcode Farms
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, idx) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={`relative px-4 py-2 transition-all duration-300 font-medium text-sm uppercase tracking-widest group ${
                    pathname === item.href
                      ? "text-[#008751]"
                      : scrolled ? "text-gray-700 hover:text-[#008751]" : "text-white/90 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {/* Glowing underline */}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#008751] to-[#00b366] transition-all duration-500 ${
                    pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                  {/* Background glow on hover */}
                  <span className="absolute inset-0 bg-[#008751]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </motion.div>
            ))}
            
            {/* CTA Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+2349158445714"
              className="ml-6 px-6 py-2.5 bg-gradient-to-r from-[#008751] to-[#00b366] hover:from-[#00b366] hover:to-[#008751] text-white rounded-full text-sm font-bold shadow-lg shadow-[#008751]/30 hover:shadow-[#008751]/50 transition-all duration-300 flex items-center gap-2"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden lg:inline">Call Now</span>
              <span className="lg:hidden">Call</span>
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

        {/* Enhanced Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden py-8 border-t border-[#008751]/20 bg-white rounded-b-3xl shadow-2xl relative overflow-hidden"
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
                      className={`block py-4 px-6 transition-all rounded-lg mx-2 uppercase tracking-wider text-sm font-semibold ${
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
                <div className="mt-6 pt-6 border-t border-[#008751]/20 px-4">
                  <motion.a
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
                    href="tel:+2349158445714"
                    className="block w-full px-6 py-3 bg-gradient-to-r from-[#008751] to-[#00b366] text-white rounded-full text-center font-bold shadow-lg"
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
