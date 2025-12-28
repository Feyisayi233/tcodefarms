"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Users, Package, Award, Egg, TrendingUp } from "lucide-react";
import { AnimatedCounter } from "@/components/animated-counter";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const prefersReducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? ["0%", "0%"] : ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="bg-white">
      {/* Hero Section with Parallax */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden grain pt-20"
      >
        {/* Parallax Background */}
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=1200&q=75"
            alt="Tcode Farms - Poultry Farm"
            fill
            className="object-cover scale-110"
            priority
            unoptimized
            sizes="100vw"
          />
          {/* Enhanced gradient overlay with multiple layers for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#008751]/95 via-[#008751]/85 to-[#008751]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </motion.div>

        {/* Floating Animated Icons - More subtle and professional */}
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, -15, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-24 left-6 md:left-12 z-10 hidden lg:block"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-white/10 blur-xl rounded-full" />
            <Egg className="h-10 w-10 md:h-14 md:w-14 text-white/40 relative z-10" />
          </div>
        </motion.div>
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 15, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute bottom-24 right-6 md:right-12 z-10 hidden lg:block"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-white/10 blur-xl rounded-full" />
            <TrendingUp className="h-10 w-10 md:h-12 md:w-12 text-white/40 relative z-10" />
          </div>
        </motion.div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
        >
          {/* Badge/Tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 sm:mb-8 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg"
          >
            <Award className="h-4 w-4 text-white/90" />
            <span className="text-xs sm:text-sm font-semibold text-white/90 tracking-wide uppercase">
              Leading Layer Farm in Lagos State
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-title text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 text-white leading-[1.1] tracking-tight"
          >
            Tcode Farms
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-8 sm:mb-10 md:mb-12 text-white/95 leading-relaxed max-w-3xl mx-auto"
          >
            From Hatch to Harvest – We Deliver Excellence
          </motion.p>

          {/* Enhanced Achievement Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.03, y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-white/98 backdrop-blur-md rounded-2xl p-5 sm:p-6 md:p-8 hover-lift shadow-2xl border border-white/30 group relative overflow-hidden"
            >
              {/* Subtle gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#008751]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-4 rounded-2xl bg-gradient-to-br from-[#008751] to-[#00b366] shadow-lg">
                  <Award className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white" />
                </div>
                <p className="text-gray-800 font-semibold text-sm sm:text-base md:text-lg text-center leading-snug">
                  One of the largest layer farms in Lagos State
                </p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03, y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-white/98 backdrop-blur-md rounded-2xl p-5 sm:p-6 md:p-8 hover-lift shadow-2xl border border-white/30 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#008751]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-4 rounded-2xl bg-gradient-to-br from-[#008751] to-[#00b366] shadow-lg">
                  <Package className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white" />
                </div>
                <p className="text-gray-800 font-semibold text-sm sm:text-base md:text-lg text-center leading-snug">
                  Supplies <AnimatedCounter value={200} suffix=" crates" className="text-[#008751] font-bold" /> daily to Lagos
                </p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03, y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-white/98 backdrop-blur-md rounded-2xl p-5 sm:p-6 md:p-8 hover-lift shadow-2xl border border-white/30 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#008751]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-4 rounded-2xl bg-gradient-to-br from-[#008751] to-[#00b366] shadow-lg">
                  <Users className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white" />
                </div>
                <p className="text-gray-800 font-semibold text-sm sm:text-base md:text-lg text-center leading-snug">
                  <AnimatedCounter value={15} suffix=" years" className="text-[#008751] font-bold" /> in business
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <Link href="/products">
              <Button
                size="lg"
                className="group relative text-base sm:text-lg px-8 sm:px-10 md:px-12 py-5 sm:py-6 md:py-7 bg-white text-[#008751] hover:bg-[#008751] hover:text-white border-2 border-white hover:border-white shadow-2xl hover:shadow-[#008751]/50 transition-all duration-300 font-bold w-full sm:w-auto overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Our Products
                  <motion.span
                    animate={prefersReducedMotion ? {} : { x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="inline-block"
                  >
                    →
                  </motion.span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#008751] to-[#00b366] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="text-base sm:text-lg px-8 sm:px-10 md:px-12 py-5 sm:py-6 md:py-7 bg-transparent text-white border-2 border-white/80 hover:bg-white/10 hover:border-white backdrop-blur-sm shadow-xl transition-all duration-300 font-semibold w-full sm:w-auto"
              >
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/60 text-xs font-medium uppercase tracking-wider mb-2">
              Scroll
            </span>
            <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm bg-white/5">
              <motion.div
                animate={prefersReducedMotion ? {} : { y: [0, 14, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-white rounded-full mt-2"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gray-50 grain relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="gradient-text">About Tcode Farms</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
              Located in Oriokuta, Imota, Lagos State, Tcode Farms is a leading
              poultry farm with <AnimatedCounter value={7000} suffix=" layers" className="text-[#008751] font-semibold" />, dedicated to delivering excellence
              in every aspect of our operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#008751]/20 to-transparent rounded-2xl blur-2xl" />
              <Image
                src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&q=75"
                alt="Farm exterior"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl relative z-10"
                unoptimized
                loading="lazy"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4 sm:space-y-6"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">Our Farm</h3>
              <ul className="space-y-3 sm:space-y-4">
                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex items-start gap-3 sm:gap-4 bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 hover-lift shadow-md border border-[#008751]/10"
                >
                  <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-[#008751] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm sm:text-base">
                    <strong className="text-[#008751]"><AnimatedCounter value={7000} suffix=" layers" className="text-[#008751]" /></strong> in production
                  </span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-start gap-3 sm:gap-4 bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 hover-lift shadow-md border border-[#008751]/10"
                >
                  <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-[#008751] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm sm:text-base">
                    <strong className="text-[#008751]"><AnimatedCounter value={200} suffix=" crates" className="text-[#008751]" /></strong> of fresh eggs supplied daily
                  </span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-start gap-3 sm:gap-4 bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 hover-lift shadow-md border border-[#008751]/10"
                >
                  <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-[#008751] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm sm:text-base">
                    <strong className="text-[#008751]"><AnimatedCounter value={15} suffix=" years" className="text-[#008751]" /></strong> of experience in the industry
                  </span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex items-start gap-3 sm:gap-4 bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 hover-lift shadow-md border border-[#008751]/10"
                >
                  <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-[#008751] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm sm:text-base">
                    Located in <strong className="text-[#008751]">Oriokuta, Imota, Lagos State</strong>
                  </span>
                </motion.li>
              </ul>
              <Link href="/about">
                <Button
                  variant="outline"
                  className="mt-8 border-[#008751] text-[#008751] hover:bg-[#008751] hover:text-white transition-all"
                >
                  Learn More About Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-24 bg-white grain relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Our Products & Services</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Quality poultry products and expert consulting services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 hover-lift shadow-lg border border-[#008751]/10 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#008751]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <Egg className="h-10 w-10 sm:h-12 sm:w-12 text-[#008751] mb-3 sm:mb-4 relative z-10" />
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 relative z-10">
                Table Eggs
              </h3>
              <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm relative z-10">
                Fresh eggs, crate of 30 pieces
              </p>
              <div className="mb-4 sm:mb-6 relative z-10">
                <p className="text-2xl sm:text-3xl font-bold text-[#008751]">
                  ₦4,900
                </p>
                <p className="text-xl sm:text-2xl font-bold text-[#008751]/80">
                  ₦4,500
                </p>
              </div>
              <Link href="/products">
                <Button
                  variant="outline"
                  className="w-full border-[#008751] text-[#008751] hover:bg-[#008751] hover:text-white relative z-10"
                >
                  View Details
                </Button>
              </Link>
            </motion.div>

            {[
              { title: "Point-of-Lay Birds", desc: "14–18 weeks old, ready to lay" },
              { title: "Spent/Old Layers", desc: "Quality spent layers available" },
              { title: "Consulting Services", desc: "Farm setup & consulting expertise" },
            ].map((product, idx) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 hover-lift shadow-lg border border-[#008751]/10 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#008751]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <Package className="h-10 w-10 sm:h-12 sm:w-12 text-[#008751] mb-3 sm:mb-4 relative z-10" />
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 relative z-10">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4 sm:mb-6 text-xs sm:text-sm relative z-10">
                  {product.desc}
                </p>
                <Link href="/products">
                  <Button
                    variant="outline"
                    className="w-full border-[#008751] text-[#008751] hover:bg-[#008751] hover:text-white relative z-10"
                  >
                    View Details
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-8 sm:mt-12"
          >
            <Link href="/products">
              <Button
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 bg-gradient-to-r from-[#008751] to-[#00b366] hover:from-[#00b366] hover:to-[#008751] text-white border-0 shadow-lg shadow-[#008751]/30 w-full sm:w-auto"
              >
                View All Products & Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
