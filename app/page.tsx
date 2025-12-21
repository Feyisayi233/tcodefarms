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
          <div className="absolute inset-0 bg-gradient-to-b from-[#008751]/90 via-[#008751]/80 to-white" />
        </motion.div>

        {/* Floating Animated Icons */}
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-4 md:left-10 z-10 hidden md:block"
        >
          <Egg className="h-8 w-8 md:h-12 md:w-12 text-white/30" />
        </motion.div>
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 right-4 md:right-10 z-10 hidden md:block"
        >
          <TrendingUp className="h-8 w-8 md:h-10 md:w-10 text-white/30" />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-title text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 text-white px-4"
          >
            Tcode Farms
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mb-6 sm:mb-8 md:mb-12 text-white/90 gold-accent px-4 leading-tight sm:leading-normal"
          >
            From Hatch to Harvest – We Deliver Excellence
          </motion.p>

          {/* Animated Achievement Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-12 md:mt-16 px-4"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 hover-lift shadow-lg border border-[#008751]/20"
            >
              <Award className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 text-[#008751] mx-auto mb-2 sm:mb-3 md:mb-4 animate-float" />
              <p className="text-gray-700 font-medium mb-2 text-xs sm:text-sm md:text-base text-center leading-snug">
                One of the largest layer farms in Lagos State
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 hover-lift shadow-lg border border-[#008751]/20"
            >
              <Package className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 text-[#008751] mx-auto mb-2 sm:mb-3 md:mb-4 animate-float" />
              <p className="text-gray-700 font-medium mb-2 text-xs sm:text-sm md:text-base text-center leading-snug">
                Supplies <AnimatedCounter value={200} suffix=" crates" className="text-[#008751] font-bold" /> daily to Lagos
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 hover-lift shadow-lg border border-[#008751]/20 sm:col-span-2 md:col-span-1"
            >
              <Users className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 text-[#008751] mx-auto mb-2 sm:mb-3 md:mb-4 animate-float" />
              <p className="text-gray-700 font-medium mb-2 text-xs sm:text-sm md:text-base text-center leading-snug">
                <AnimatedCounter value={15} suffix=" years" className="text-[#008751] font-bold" /> in business
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 sm:mt-12 px-4"
          >
            <Link href="/products">
              <Button
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 bg-white text-[#008751] hover:bg-[#008751] hover:text-white border-2 border-white hover:border-[#008751] shadow-lg transition-all font-bold w-full sm:w-auto"
              >
                View Our Products
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div
              animate={prefersReducedMotion ? {} : { y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full mt-2"
            />
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
