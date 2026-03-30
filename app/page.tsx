"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Users, Package, Award, Egg, TrendingUp, Leaf, Shield, Truck, Heart } from "lucide-react";
import { AnimatedCounter } from "@/components/animated-counter";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const parallaxAmount = prefersReducedMotion || isMobile ? "0%" : "40%";
  const y = useTransform(scrollYProgress, [0, 1], ["0%", parallaxAmount]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="bg-cream-50">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
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
          {/* Warm overlay with depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#5C4033]/90 via-[#006B3F]/90 to-[#008751]/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#5C4033]/40 via-transparent to-[#D4A017]/15" />
        </motion.div>

        {/* Decorative egg shapes */}
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, -12, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 left-8 md:left-16 z-10 hidden lg:block"
        >
          <div className="w-16 h-20 egg-shape bg-cream-100/20 backdrop-blur-sm border border-cream-200/30" />
        </motion.div>
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 10, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-32 right-12 md:right-20 z-10 hidden lg:block"
        >
          <div className="w-12 h-16 egg-shape bg-[#D4A017]/15 backdrop-blur-sm border border-[#D4A017]/20" />
        </motion.div>
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-48 right-24 z-10 hidden xl:block"
        >
          <div className="w-10 h-13 egg-shape bg-white/10 backdrop-blur-sm border border-white/15" />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
        >
          {/* Farm badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 sm:mb-8 bg-[#D4A017]/20 backdrop-blur-md rounded-full border border-[#D4A017]/30"
          >
            <Egg className="h-4 w-4 text-[#F5C543]" />
            <span className="text-xs sm:text-sm font-semibold text-cream-100 tracking-wide">
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

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-4 text-cream-100/95 leading-relaxed max-w-3xl mx-auto"
          >
            From Hatch to Harvest
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl text-cream-200/80 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto"
          >
            Supplying Lagos with farm-fresh eggs daily from our 7,000-bird layer farm in Imota
          </motion.p>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-3 gap-3 sm:gap-5 md:gap-8 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto"
          >
            {[
              { value: 7000, suffix: "+", label: "Layers", icon: Egg },
              { value: 200, suffix: "", label: "Crates Daily", icon: Package },
              { value: 15, suffix: "+", label: "Years Experience", icon: Award },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + idx * 0.1 }}
                className="text-center"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 sm:p-5 border border-white/15 hover:bg-white/15 transition-colors">
                  <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#F5C543] mx-auto mb-2" />
                  <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} className="text-white" />
                  </p>
                  <p className="text-cream-200/70 text-xs sm:text-sm mt-1">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
          >
            <Link href="/products">
              <Button
                size="lg"
                className="group relative text-base sm:text-lg px-8 sm:px-10 md:px-12 py-5 sm:py-6 md:py-7 bg-[#D4A017] hover:bg-[#F5C543] text-[#5C4033] shadow-2xl shadow-[#D4A017]/30 transition-all duration-300 font-bold w-full sm:w-auto border-0"
              >
                <Egg className="h-5 w-5 mr-2" />
                Order Fresh Eggs
                <motion.span
                  animate={prefersReducedMotion ? {} : { x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="inline-block ml-1"
                >
                  →
                </motion.span>
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="text-base sm:text-lg px-8 sm:px-10 md:px-12 py-5 sm:py-6 md:py-7 bg-transparent text-white border-2 border-white/50 hover:bg-white/10 hover:border-white backdrop-blur-sm shadow-xl transition-all duration-300 font-semibold w-full sm:w-auto"
              >
                Visit Our Farm
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-4 xs:bottom-6 sm:bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="flex flex-col items-center gap-1 sm:gap-2">
            <span className="text-cream-200/50 text-[10px] xs:text-xs font-medium uppercase tracking-wider mb-1 sm:mb-2">
              Scroll
            </span>
            <div className="w-5 h-8 xs:w-6 xs:h-10 sm:w-6 sm:h-10 border-2 border-cream-200/40 rounded-full flex justify-center backdrop-blur-sm bg-white/5">
              <motion.div
                animate={prefersReducedMotion ? {} : { y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-1 xs:w-1.5 xs:h-1.5 bg-cream-200 rounded-full mt-1.5 xs:mt-2"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 md:py-28 bg-cream-100 grain relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="inline-block text-[#D4A017] text-sm font-semibold uppercase tracking-widest mb-3">Why Tcode Farms</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="gradient-text">Farm Fresh Guarantee</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-earth/70 max-w-2xl mx-auto leading-relaxed">
              Every egg we deliver comes from healthy, well-cared-for birds raised with the highest standards
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
            {[
              { icon: Leaf, title: "Naturally Raised", desc: "Our birds are raised with proper nutrition and care for optimal egg quality", color: "text-[#008751]", bg: "bg-[#008751]/10" },
              { icon: Shield, title: "Quality Assured", desc: "Strict quality control from our farm to your doorstep every single day", color: "text-[#D4A017]", bg: "bg-[#D4A017]/10" },
              { icon: Truck, title: "Daily Delivery", desc: "200 crates delivered fresh across Lagos State, rain or shine", color: "text-[#008751]", bg: "bg-[#008751]/10" },
              { icon: Heart, title: "15 Years Trusted", desc: "Over a decade of reliability serving families and businesses in Lagos", color: "text-[#D4A017]", bg: "bg-[#D4A017]/10" },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="farm-card p-6 sm:p-8 text-center group"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${item.bg} mb-4 sm:mb-5 group-hover:scale-110 transition-transform`}>
                  <item.icon className={`h-7 w-7 sm:h-8 sm:w-8 ${item.color}`} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-cream-50 grain relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Decorative frame */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-[#D4A017]/40 rounded-tl-3xl" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-[#008751]/40 rounded-br-3xl" />
              <Image
                src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&q=75"
                alt="Tcode Farms poultry house"
                width={800}
                height={600}
                className="rounded-2xl shadow-xl relative z-10"
                unoptimized
                loading="lazy"
              />
              {/* Badge overlay */}
              <div className="absolute -bottom-6 -right-2 sm:right-6 z-20 bg-[#008751] text-white rounded-2xl px-5 py-3 shadow-lg">
                <p className="text-2xl sm:text-3xl font-bold"><AnimatedCounter value={15} className="text-white" /></p>
                <p className="text-xs sm:text-sm text-white/80">Years of Excellence</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4 sm:space-y-6"
            >
              <span className="inline-block text-[#D4A017] text-sm font-semibold uppercase tracking-widest">Our Story</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">About Tcode Farms</h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Located in the heart of Oriokuta, Imota, Lagos State, Tcode Farms has grown from a small backyard operation to one of the largest layer farms in Lagos — housing over <strong className="text-[#008751]">7,000 birds</strong> and delivering <strong className="text-[#008751]">200 crates</strong> of fresh eggs daily.
              </p>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  "Premium quality eggs from healthy layers",
                  "Daily fresh deliveries across Lagos",
                  "Expert poultry consulting services",
                  "Point-of-Lay birds available seasonally",
                ].map((item, idx) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#008751]/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-4 w-4 text-[#008751]" />
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <Link href="/about">
                <Button
                  variant="outline"
                  className="mt-6 border-[#008751] text-[#008751] hover:bg-[#008751] hover:text-white transition-all"
                >
                  Learn More About Us →
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-16 sm:py-20 md:py-28 bg-[#008751] grain relative wave-divider-white overflow-hidden">
        {/* Top wave */}
        <div className="absolute top-0 left-0 w-full h-[60px] z-10">
          <svg viewBox="0 0 1440 60" className="w-full h-full" preserveAspectRatio="none">
            <path fill="#FFFEF7" d="M0,60 C360,20 720,60 1080,20 C1260,0 1380,20 1440,20 L1440,0 L0,0 Z" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="inline-block text-[#F5C543] text-sm font-semibold uppercase tracking-widest mb-3">What We Offer</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white">
              Our Products & Services
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Quality poultry products from Lagos&apos;s most trusted farm
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {/* Table Eggs - Featured */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.03, y: -8 }}
              className="bg-white rounded-2xl p-5 sm:p-7 shadow-xl border-2 border-[#D4A017]/30 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-[#D4A017] text-[#5C4033] text-xs font-bold px-3 py-1 rounded-bl-xl">
                Best Seller
              </div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 egg-shape bg-[#FFF8E7] flex items-center justify-center mb-4 sm:mb-5">
                <Egg className="h-6 w-6 sm:h-7 sm:w-7 text-[#D4A017]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Table Eggs</h3>
              <p className="text-gray-600 mb-4 text-sm">Fresh eggs, crate of 30 pieces</p>
              <div className="mb-5 bg-cream-100 rounded-xl p-3">
                <p className="text-2xl sm:text-3xl font-bold text-[#008751]">₦4,800</p>
                <p className="text-lg sm:text-xl font-bold text-[#008751]/70">₦4,300</p>
              </div>
              <Link href="/products">
                <Button className="w-full bg-[#008751] hover:bg-[#006B3F] text-white border-0">
                  Order Now
                </Button>
              </Link>
            </motion.div>

            {[
              { title: "Point-of-Lay Birds", desc: "Healthy birds aged 14-18 weeks, ready to start laying", icon: "🐔" },
              { title: "Spent Layers", desc: "Quality spent layers at competitive prices", icon: "🐓" },
              { title: "Farm Consulting", desc: "15 years of expertise to set up your own poultry farm", icon: "📋" },
            ].map((product, idx) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                whileHover={{ scale: 1.03, y: -8 }}
                className="bg-white rounded-2xl p-5 sm:p-7 shadow-xl group relative overflow-hidden"
              >
                <div className="text-3xl sm:text-4xl mb-4 sm:mb-5">{product.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-5 text-sm leading-relaxed">{product.desc}</p>
                <Link href="/products">
                  <Button
                    variant="outline"
                    className="w-full border-[#008751] text-[#008751] hover:bg-[#008751] hover:text-white"
                  >
                    Learn More
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
            className="text-center mt-10 sm:mt-14"
          >
            <Link href="/products">
              <Button
                size="lg"
                className="text-base sm:text-lg px-8 sm:px-10 md:px-12 py-5 sm:py-6 md:py-7 bg-[#D4A017] hover:bg-[#F5C543] text-[#5C4033] border-0 shadow-lg shadow-black/20 font-bold w-full sm:w-auto"
              >
                View All Products & Services →
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Farm to Table CTA */}
      <section className="py-16 sm:py-20 md:py-28 bg-cream-50 grain relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-gradient-to-br from-[#5C4033] via-[#5C4033] to-[#3D2B22] rounded-3xl p-8 sm:p-12 md:p-16 text-center overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-6 left-6 w-16 h-20 egg-shape bg-[#D4A017]/10 rotate-12" />
            <div className="absolute bottom-8 right-8 w-12 h-16 egg-shape bg-[#008751]/10 -rotate-6" />
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4A017]/20 to-transparent" />

            <div className="relative z-10">
              <Egg className="h-10 w-10 sm:h-12 sm:w-12 text-[#F5C543] mx-auto mb-4" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                Ready for Farm-Fresh Eggs?
              </h2>
              <p className="text-cream-200/80 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
                Whether you need eggs for your home, restaurant, or business — we deliver fresh, quality eggs across Lagos daily
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://wa.me/2349158445714?text=Hello!%20I%27m%20interested%20in%20ordering%20eggs%20from%20Tcode%20Farms."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-[#25D366] hover:bg-[#20BD5A] text-white border-0 font-bold px-8 py-6 text-base sm:text-lg shadow-lg">
                    Order via WhatsApp
                  </Button>
                </a>
                <a href="tel:+2349158445714">
                  <Button variant="outline" size="lg" className="border-2 border-cream-200/40 text-cream-100 hover:bg-white/10 px-8 py-6 text-base sm:text-lg bg-transparent">
                    Call +234 915 844 5714
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
