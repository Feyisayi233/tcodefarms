"use client";

import Link from "next/link";
import { Home, Info, Package, FileText, Phone } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

const navItems = [
  { name: "Home", url: "/", icon: Home },
  { name: "About", url: "/about", icon: Info },
  { name: "Products", url: "/products", icon: Package },
  { name: "Reports", url: "/reports", icon: FileText },
  { name: "Contact", url: "/contact", icon: Phone },
];

export function TubelightNavigation() {
  return (
    <>
      {/* Logo/Branding at top */}
      <nav className="bg-white shadow-sm sticky top-0 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">Tcode Farms</span>
            </Link>
            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:+2349158445714"
                className="flex items-center gap-1 text-sm text-gray-700 hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="hidden lg:inline">+234 915 844 5714</span>
              </a>
              <a
                href="tel:+2348067240887"
                className="flex items-center gap-1 text-sm text-gray-700 hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="hidden lg:inline">+234 806 724 0887</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Tubelight Navbar */}
      <NavBar items={navItems} />
    </>
  );
}

