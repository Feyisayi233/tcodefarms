"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Users, Package, Award, Egg, TrendingUp } from "lucide-react";
import { AnimatedCounter } from "@/components/animated-counter";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
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
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 z-10 hidden lg:block"
        >
          <Egg className="h-12 w-12 text-white/30" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 right-10 z-10 hidden lg:block"
        >
          <TrendingUp className="h-10 w-10 text-white/30" />
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
            className="hero-title text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
          >
            Tcode Farms
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-3xl lg:text-4xl font-semibold mb-12 text-white/90 gold-accent"
          >
            From Hatch to Harvest – We Deliver Excellence
          </motion.p>

          {/* Animated Achievement Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 hover-lift shadow-lg border border-[#008751]/20"
            >
              <Award className="h-10 w-10 text-[#008751] mx-auto mb-4 animate-float" />
              <p className="text-gray-700 font-medium mb-2 text-sm md:text-base">
                One of the largest layer farms in Lagos State
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 hover-lift shadow-lg border border-[#008751]/20"
            >
              <Package className="h-10 w-10 text-[#008751] mx-auto mb-4 animate-float" />
              <p className="text-gray-700 font-medium mb-2 text-sm md:text-base">
                Supplies <AnimatedCounter value={200} suffix=" crates" className="text-[#008751] font-bold" /> daily to Lagos
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 hover-lift shadow-lg border border-[#008751]/20"
            >
              <Users className="h-10 w-10 text-[#008751] mx-auto mb-4 animate-float" />
              <p className="text-gray-700 font-medium mb-2 text-sm md:text-base">
                <AnimatedCounter value={15} suffix=" years" className="text-[#008751] font-bold" /> in business
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12"
          >
            <Link href="/products">
              <Button
                size="lg"
                className="text-lg px-10 py-6 bg-white text-[#008751] hover:bg-[#008751] hover:text-white border-2 border-white hover:border-[#008751] shadow-lg transition-all font-bold"
              >
                View Our Products
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gray-50 grain relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">About Tcode Farms</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Located in Oriokuta, Imota, Lagos State, Tcode Farms is a leading
              poultry farm with <span className="text-[#008751] font-semibold"><AnimatedCounter value={7000} suffix=" layers" className="text-[#008751]" /></span>, dedicated to delivering excellence
              in every aspect of our operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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
              className="space-y-6"
            >
              <h3 className="text-3xl md:text-4xl font-bold gradient-text">Our Farm</h3>
              <ul className="space-y-4">
                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex items-start gap-4 bg-white rounded-xl p-4 hover-lift shadow-md border border-[#008751]/10"
                >
                  <CheckCircle2 className="h-6 w-6 text-[#008751] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong className="text-[#008751]"><AnimatedCounter value={7000} suffix=" layers" className="text-[#008751]" /></strong> in production
                  </span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-start gap-4 bg-white rounded-xl p-4 hover-lift shadow-md border border-[#008751]/10"
                >
                  <CheckCircle2 className="h-6 w-6 text-[#008751] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong className="text-[#008751]"><AnimatedCounter value={200} suffix=" crates" className="text-[#008751]" /></strong> of fresh eggs supplied daily
                  </span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-start gap-4 bg-white rounded-xl p-4 hover-lift shadow-md border border-[#008751]/10"
                >
                  <CheckCircle2 className="h-6 w-6 text-[#008751] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong className="text-[#008751]"><AnimatedCounter value={15} suffix=" years" className="text-[#008751]" /></strong> of experience in the industry
                  </span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex items-start gap-4 bg-white rounded-xl p-4 hover-lift shadow-md border border-[#008751]/10"
                >
                  <CheckCircle2 className="h-6 w-6 text-[#008751] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white rounded-2xl p-6 hover-lift shadow-lg border border-[#008751]/10 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#008751]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <Egg className="h-12 w-12 text-[#008751] mb-4 relative z-10" />
              <h3 className="text-xl font-bold text-gray-900 mb-2 relative z-10">
                Table Eggs
              </h3>
              <p className="text-gray-600 mb-4 text-sm relative z-10">
                Fresh eggs, crate of 30 pieces
              </p>
              <p className="text-3xl font-bold text-[#008751] mb-6 relative z-10">
                ₦4,900
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
                className="bg-white rounded-2xl p-6 hover-lift shadow-lg border border-[#008751]/10 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#008751]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <Package className="h-12 w-12 text-[#008751] mb-4 relative z-10" />
                <h3 className="text-xl font-bold text-gray-900 mb-2 relative z-10">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-6 text-sm relative z-10">
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
            className="text-center mt-12"
          >
            <Link href="/products">
              <Button
                size="lg"
                className="text-lg px-10 py-6 bg-gradient-to-r from-[#008751] to-[#00b366] hover:from-[#00b366] hover:to-[#008751] text-white border-0 shadow-lg shadow-[#008751]/30"
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
