"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, MapPin, Users, Package, Award, Calendar } from "lucide-react";
import { AnimatedCounter } from "@/components/animated-counter";

export default function AboutPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-[#008751]/20 to-transparent grain overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,135,81,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-title text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">About Tcode Farms</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 gradient-text-gold font-semibold gold-accent"
          >
            From Hatch to Harvest – We Deliver Excellence
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 grain relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Our Story</h2>
              <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                Tcode Farms has been a cornerstone of the poultry industry in Lagos
                State for over <span className="text-gold font-semibold"><AnimatedCounter value={15} suffix=" years" className="text-gold" /></span>. What started as a small operation has grown
                into one of the largest layer farms in the state, with <span className="text-gold font-semibold"><AnimatedCounter value={7000} suffix=" layers" className="text-gold" /></span>
                producing high-quality eggs for the Lagos market.
              </p>
              <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                Our commitment to excellence, quality, and sustainable farming
                practices has made us a trusted name in the poultry industry. We
                take pride in every aspect of our operation, from the care of our
                birds to the delivery of fresh eggs to our customers.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
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
          </div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass rounded-3xl p-8 md:p-12 mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
              Our Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Award, title: "Largest in Lagos", desc: "One of the largest layer farms in Lagos State" },
                { icon: Package, title: "200 Crates Daily", desc: "Supplies 200 crates daily to Lagos market" },
                { icon: Calendar, title: "15 Years Experience", desc: "Over a decade and a half in the business" },
              ].map((achievement, idx) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center glass-dark rounded-2xl p-6 hover-lift"
                >
                  <achievement.icon className="h-12 w-12 text-[#008751] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                  <p className="text-gray-400">{achievement.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Farm Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">Farm Details</h2>
              <ul className="space-y-4">
                {[
                  { icon: MapPin, label: "Location", value: "Oriokuta, Imota, Lagos State, Nigeria" },
                  { icon: Users, label: "Farm Size", value: "7,000 layers in production" },
                  { icon: Package, label: "Daily Production", value: "200 crates of fresh eggs" },
                  { icon: Calendar, label: "Years in Business", value: "15 years" },
                ].map((detail, idx) => (
                  <motion.li
                    key={detail.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex items-start gap-4 glass rounded-xl p-4 hover-lift"
                  >
                    <detail.icon className="h-6 w-6 text-[#008751] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gold text-sm">{detail.label}:</strong>
                      <p className="text-gray-300">{detail.value}</p>
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
              <div className="absolute inset-0 bg-gradient-to-l from-[#008751]/20 to-transparent rounded-2xl blur-2xl" />
              <Image
                src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&q=75"
                alt="Layers in battery cages"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl relative z-10"
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
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Quality First", desc: "We maintain the highest standards in all our operations, ensuring that every product meets our strict quality criteria." },
                { title: "Customer Satisfaction", desc: "Our customers are at the heart of everything we do. We strive to exceed expectations with every interaction." },
                { title: "Sustainable Practices", desc: "We are committed to sustainable farming practices that protect the environment while ensuring the welfare of our birds." },
                { title: "Innovation", desc: "We continuously invest in modern farming techniques and technology to improve efficiency and product quality." },
              ].map((value, idx) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="flex items-start gap-4 glass rounded-2xl p-6 hover-lift"
                >
                  <CheckCircle2 className="h-6 w-6 text-[#008751] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{value.desc}</p>
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
