"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, MapPin, Users, Package, Award, Calendar, Egg, Leaf, Shield, Heart } from "lucide-react";
import { AnimatedCounter } from "@/components/animated-counter";

export default function AboutPage() {
  return (
    <div className="bg-cream-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-28 pt-28 sm:pt-32 md:pt-36 overflow-hidden wave-divider">
        <div className="absolute inset-0 bg-gradient-to-b from-[#5C4033] via-[#5C4033] to-[#3D2B22]" />
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-[#D4A017]/20 rounded-full border border-[#D4A017]/30"
          >
            <Egg className="h-4 w-4 text-[#F5C543]" />
            <span className="text-xs sm:text-sm font-semibold text-[#F5C543] tracking-wide">Our Story</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-white"
          >
            About Tcode Farms
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-cream-200/80 max-w-2xl mx-auto"
          >
            15 years of delivering farm-fresh excellence to Lagos State
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 sm:py-20 md:py-28 grain relative bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-16 items-center mb-16 sm:mb-20 md:mb-28">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block text-[#D4A017] text-sm font-semibold uppercase tracking-widest mb-3">How It Started</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 gradient-text">Our Journey</h2>
              <p className="text-gray-600 text-base sm:text-lg mb-4 leading-relaxed">
                Tcode Farms has been a cornerstone of the poultry industry in Lagos
                State for over <span className="text-[#008751] font-semibold"><AnimatedCounter value={15} suffix=" years" className="text-[#008751]" /></span>. What started as a small backyard operation has grown
                into one of the largest layer farms in the state, with <span className="text-[#008751] font-semibold"><AnimatedCounter value={7000} suffix=" layers" className="text-[#008751]" /></span>
                producing high-quality eggs for the Lagos market.
              </p>
              <p className="text-gray-600 text-base sm:text-lg mb-4 leading-relaxed">
                Our commitment to excellence, quality, and sustainable farming
                practices has made us a trusted name in the poultry industry. We
                take pride in every aspect of our operation, from the care of our
                birds to the delivery of fresh eggs to our customers.
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Located in Oriokuta, Imota, Lagos State, we are strategically
                positioned to serve the Lagos market efficiently, ensuring that our
                products reach customers fresh and in perfect condition.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-[#D4A017]/30 rounded-tl-3xl" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-[#008751]/30 rounded-br-3xl" />
              <Image
                src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&q=75"
                alt="Tcode Farms poultry house"
                width={800}
                height={600}
                className="rounded-2xl shadow-xl relative z-10"
                unoptimized
                loading="lazy"
              />
              <div className="absolute -bottom-6 left-6 z-20 bg-[#008751] text-white rounded-2xl px-5 py-3 shadow-lg">
                <p className="text-2xl sm:text-3xl font-bold">Est. 2011</p>
                <p className="text-xs sm:text-sm text-white/80">Oriokuta, Imota</p>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20 md:mb-28"
          >
            {[
              { icon: Egg, value: 7000, suffix: "+", label: "Layers in Production", color: "bg-[#008751]" },
              { icon: Package, value: 200, suffix: "+", label: "Crates Daily", color: "bg-[#D4A017]" },
              { icon: Calendar, value: 15, suffix: "+", label: "Years Experience", color: "bg-[#008751]" },
              { icon: MapPin, value: 1, suffix: "", label: "Farm in Lagos", color: "bg-[#5C4033]" },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="farm-card p-5 sm:p-6 text-center"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl ${stat.color}/10 mb-3`}>
                  <stat.icon className={`h-6 w-6 ${stat.color === 'bg-[#D4A017]' ? 'text-[#D4A017]' : stat.color === 'bg-[#5C4033]' ? 'text-[#5C4033]' : 'text-[#008751]'}`} />
                </div>
                <p className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} className="text-gray-900" />
                </p>
                <p className="text-gray-600 text-xs sm:text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Farm Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 sm:mb-20 md:mb-28">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block text-[#D4A017] text-sm font-semibold uppercase tracking-widest mb-3">The Details</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 gradient-text">Our Farm</h2>
              <ul className="space-y-4">
                {[
                  { icon: MapPin, label: "Location", value: "Oriokuta, Imota, Lagos State, Nigeria" },
                  { icon: Users, label: "Farm Size", value: "7,000+ layers in production" },
                  { icon: Package, label: "Daily Production", value: "200+ crates of fresh eggs" },
                  { icon: Calendar, label: "Years in Business", value: "15+ years and counting" },
                ].map((detail, idx) => (
                  <motion.li
                    key={detail.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="farm-card flex items-start gap-4 p-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#008751]/10 flex items-center justify-center flex-shrink-0">
                      <detail.icon className="h-5 w-5 text-[#008751]" />
                    </div>
                    <div>
                      <strong className="text-[#D4A017] text-xs uppercase tracking-wider">{detail.label}</strong>
                      <p className="text-gray-700">{detail.value}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <Image
                src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&q=75"
                alt="Layers in battery cages"
                width={800}
                height={600}
                className="rounded-2xl shadow-xl"
                unoptimized
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-10 sm:mb-12">
              <span className="inline-block text-[#D4A017] text-sm font-semibold uppercase tracking-widest mb-3">What Drives Us</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">Our Values</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {[
                { icon: Shield, title: "Quality First", desc: "We maintain the highest standards in all our operations, ensuring that every egg meets our strict quality criteria.", color: "text-[#008751]", bg: "bg-[#008751]/10" },
                { icon: Heart, title: "Customer Satisfaction", desc: "Our customers are at the heart of everything we do. We strive to exceed expectations with every interaction.", color: "text-[#D4A017]", bg: "bg-[#D4A017]/10" },
                { icon: Leaf, title: "Sustainable Practices", desc: "We are committed to sustainable farming practices that protect the environment while ensuring the welfare of our birds.", color: "text-[#008751]", bg: "bg-[#008751]/10" },
                { icon: Award, title: "Innovation", desc: "We continuously invest in modern farming techniques and technology to improve efficiency and product quality.", color: "text-[#D4A017]", bg: "bg-[#D4A017]/10" },
              ].map((value, idx) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="farm-card flex items-start gap-4 p-6"
                >
                  <div className={`w-12 h-12 rounded-2xl ${value.bg} flex items-center justify-center flex-shrink-0`}>
                    <value.icon className={`h-6 w-6 ${value.color}`} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{value.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
