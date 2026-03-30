"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { EmailSubscriptionForm } from "@/components/email-subscription-form";
import { ConsultationForm } from "@/components/consultation-form";
import { Phone, Package, CheckCircle2, Sparkles, Egg } from "lucide-react";

const EGG_CRATE_PRICE_HIGH = 4800;
const EGG_CRATE_PRICE_LOW = 4300;

export default function ProductsPage() {
  const prefersReducedMotion = useReducedMotion();
  const [consultationOpen, setConsultationOpen] = useState(false);

  return (
    <div className="bg-cream-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-28 pt-28 sm:pt-32 md:pt-36 overflow-hidden wave-divider">
        <div className="absolute inset-0 bg-gradient-to-b from-[#008751] via-[#008751] to-[#006B3F]" />
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
            <span className="text-xs sm:text-sm font-semibold text-[#F5C543] tracking-wide">Farm Fresh Products</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-white"
          >
            Products & Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 max-w-2xl mx-auto"
          >
            Quality poultry products from Lagos&apos;s most trusted farm
          </motion.p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 sm:py-16 md:py-24 grain relative bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 sm:space-y-16 md:space-y-20">
            {/* Table Eggs - Featured */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div
                animate={prefersReducedMotion ? {} : {
                  boxShadow: [
                    "0 0 20px rgba(212, 160, 23, 0.2), 0 0 40px rgba(0, 135, 81, 0.1)",
                    "0 0 30px rgba(212, 160, 23, 0.4), 0 0 60px rgba(0, 135, 81, 0.2)",
                    "0 0 20px rgba(212, 160, 23, 0.2), 0 0 40px rgba(0, 135, 81, 0.1)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="bg-white rounded-3xl overflow-hidden border-2 border-[#D4A017]/40 shadow-lg"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                    className="relative overflow-hidden"
                  >
                    <Image
                      src="https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=800&q=75"
                      alt="Crates of fresh eggs"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover"
                      unoptimized
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#5C4033]/40 to-transparent" />
                    <div className="absolute top-4 left-4 bg-[#D4A017] text-[#5C4033] text-xs font-bold px-3 py-1.5 rounded-full">
                      Best Seller
                    </div>
                  </motion.div>
                  <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-[#008751] to-[#006B3F]">
                    <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                      <div className="w-10 h-10 egg-shape bg-[#F5C543]/20 flex items-center justify-center">
                        <Sparkles className="h-5 w-5 text-[#F5C543]" />
                      </div>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                        Table Eggs
                      </h2>
                    </div>
                    <p className="text-white/85 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
                      Fresh, high-quality table eggs from our healthy, naturally-raised layers. Each crate contains 30 pieces of
                      premium eggs.
                    </p>
                    <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-white/10 rounded-2xl border border-white/10">
                      <p className="text-xs sm:text-sm text-[#F5C543]/80 mb-2 sm:mb-3 font-medium">Price per crate (30 pieces):</p>
                      <div className="space-y-1 sm:space-y-2">
                        <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                          ₦{EGG_CRATE_PRICE_HIGH.toLocaleString()}
                        </p>
                        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white/70">
                          ₦{EGG_CRATE_PRICE_LOW.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://wa.me/2349158445714?text=Hello!%20I%27m%20interested%20in%20ordering%20table%20eggs."
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="w-full sm:w-auto bg-[#D4A017] hover:bg-[#F5C543] text-[#5C4033] border-0 shadow-lg font-bold">
                          <Phone className="h-4 w-4 mr-2" />
                          Order via WhatsApp
                        </Button>
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="tel:+2349158445714"
                      >
                        <Button variant="outline" className="w-full sm:w-auto border-white/40 text-white hover:bg-white hover:text-[#008751]">
                          Call to Order
                        </Button>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Point-of-Lay Birds */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="farm-card rounded-3xl overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden order-2 md:order-1"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&q=75"
                    alt="Point of lay birds"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                    unoptimized
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#5C4033]/40 to-transparent" />
                </motion.div>
                <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center bg-cream-100 order-1 md:order-2">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#008751]/10 flex items-center justify-center">
                      <Package className="h-5 w-5 text-[#008751]" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text">
                      Point-of-Lay Birds
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                    Healthy, well-cared-for birds aged 14-18 weeks, ready to start
                    laying. Perfect for starting or expanding your layer operation.
                  </p>
                  <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-white rounded-xl border border-[#D4A017]/20">
                    <p className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">Availability:</p>
                    <p className="text-base sm:text-lg font-semibold text-[#D4A017]">
                      Subscribe to be notified when available
                    </p>
                  </div>
                  <EmailSubscriptionForm productName="Point-of-Lay Birds" />
                </div>
              </div>
            </motion.div>

            {/* Spent/Old Layers */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="farm-card rounded-3xl overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&q=75"
                    alt="Spent layers"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                    unoptimized
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#5C4033]/40 to-transparent" />
                </motion.div>
                <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center bg-cream-100">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#008751]/10 flex items-center justify-center">
                      <Package className="h-5 w-5 text-[#008751]" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text">
                      Spent/Old Layers
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                    Quality spent layers available for purchase. These birds have
                    completed their productive laying cycle and are suitable for
                    various purposes.
                  </p>
                  <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-white rounded-xl border border-[#D4A017]/20">
                    <p className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">Availability:</p>
                    <p className="text-base sm:text-lg font-semibold text-[#D4A017]">
                      Subscribe to be notified when available
                    </p>
                  </div>
                  <EmailSubscriptionForm productName="Spent/Old Layers" />
                </div>
              </div>
            </motion.div>

            {/* Farm Setup & Consulting */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="farm-card rounded-3xl overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden order-2 md:order-1"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&q=75"
                    alt="Farm consulting"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                    unoptimized
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#5C4033]/40 to-transparent" />
                </motion.div>
                <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center bg-cream-100 order-1 md:order-2">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#D4A017]/10 flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-[#D4A017]" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text">
                      Farm Consulting
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                    Leverage our 15 years of experience to set up your own poultry
                    farm. We offer comprehensive consulting services covering:
                  </p>
                  <ul className="list-none space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    {[
                      "Farm design and layout planning",
                      "Equipment selection and sourcing",
                      "Bird selection and management",
                      "Feed and nutrition planning",
                      "Disease prevention and health management",
                      "Business planning and financial projections",
                    ].map((item, idx) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="flex items-start gap-3 bg-white rounded-lg p-2.5 sm:p-3 border border-[#008751]/10"
                      >
                        <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-[#008751] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={() => setConsultationOpen(true)}
                      size="lg"
                      className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 bg-[#D4A017] hover:bg-[#F5C543] text-[#5C4033] border-0 shadow-lg font-bold"
                    >
                      Book Consultation →
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ConsultationForm
        open={consultationOpen}
        onOpenChange={setConsultationOpen}
      />
    </div>
  );
}
