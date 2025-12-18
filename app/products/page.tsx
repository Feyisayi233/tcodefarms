"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { EmailSubscriptionForm } from "@/components/email-subscription-form";
import { ConsultationForm } from "@/components/consultation-form";
import { Phone, Package, CheckCircle2, Sparkles } from "lucide-react";

// Easy-to-edit price constant
const EGG_CRATE_PRICE = 4900;

export default function ProductsPage() {
  const [consultationOpen, setConsultationOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 pt-32 bg-gradient-to-b from-[#008751] to-[#006B3F] grain overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-title text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
          >
            Products & Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 font-semibold gold-accent"
          >
            Quality poultry products and expert consulting services
          </motion.p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 grain relative bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {/* Table Eggs - Pulsing Green Border */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(0, 135, 81, 0.3), 0 0 40px rgba(0, 135, 81, 0.2)",
                    "0 0 40px rgba(0, 135, 81, 0.6), 0 0 80px rgba(0, 135, 81, 0.4), 0 0 120px rgba(0, 135, 81, 0.2)",
                    "0 0 20px rgba(0, 135, 81, 0.3), 0 0 40px rgba(0, 135, 81, 0.2)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="bg-white rounded-3xl overflow-hidden border-2 border-[#008751]/50 hover-lift shadow-lg"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative overflow-hidden"
                  >
                    <Image
                      src="https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=800&q=75"
                      alt="Crates of eggs stacked"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover"
                      unoptimized
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#008751]/50 to-transparent" />
                  </motion.div>
                  <div className="p-8 md:p-12 flex flex-col justify-center bg-[#008751]">
                    <div className="flex items-center gap-3 mb-6">
                      <Sparkles className="h-8 w-8 text-white" />
                      <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Table Eggs
                      </h2>
                    </div>
                    <p className="text-white/90 mb-8 text-lg leading-relaxed">
                      Fresh, high-quality table eggs. Each crate contains 30 pieces of
                      premium eggs from our healthy layers.
                    </p>
                    <div className="mb-8 p-6 bg-white/10 rounded-2xl">
                      <p className="text-sm text-white/70 mb-3">Price per crate (30 pieces):</p>
                      <p className="text-5xl md:text-6xl font-bold text-white">
                        ₦{EGG_CRATE_PRICE.toLocaleString()}
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://wa.me/2349158445714?text=Hello!%20I%27m%20interested%20in%20ordering%20table%20eggs."
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="w-full sm:w-auto bg-white text-[#008751] hover:bg-gray-100 border-0 shadow-lg font-bold">
                          <Phone className="h-4 w-4 mr-2" />
                          Order via WhatsApp
                        </Button>
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="tel:+2349158445714"
                      >
                        <Button variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-[#008751]">
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
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden hover-lift shadow-lg border border-[#008751]/10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <motion.div
                  whileHover={{ scale: 1.05 }}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#008751]/50 to-transparent" />
                </motion.div>
                <div className="p-8 md:p-12 flex flex-col justify-center bg-gray-50 order-1 md:order-2">
                  <div className="flex items-center gap-3 mb-6">
                    <Package className="h-8 w-8 text-[#008751]" />
                    <h2 className="text-4xl md:text-5xl font-bold gradient-text">
                      Point-of-Lay Birds
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    Healthy, well-cared-for birds aged 14–18 weeks, ready to start
                    laying. Perfect for starting or expanding your layer operation.
                  </p>
                  <div className="mb-6 p-4 bg-white rounded-xl border border-[#008751]/20">
                    <p className="text-sm text-gray-500 mb-2">Availability:</p>
                    <p className="text-lg font-semibold text-[#008751]">
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
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden hover-lift shadow-lg border border-[#008751]/10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <motion.div
                  whileHover={{ scale: 1.05 }}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#008751]/50 to-transparent" />
                </motion.div>
                <div className="p-8 md:p-12 flex flex-col justify-center bg-gray-50">
                  <div className="flex items-center gap-3 mb-6">
                    <Package className="h-8 w-8 text-[#008751]" />
                    <h2 className="text-4xl md:text-5xl font-bold gradient-text">
                      Spent/Old Layers
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    Quality spent layers available for purchase. These birds have
                    completed their productive laying cycle and are suitable for
                    various purposes.
                  </p>
                  <div className="mb-6 p-4 bg-white rounded-xl border border-[#008751]/20">
                    <p className="text-sm text-gray-500 mb-2">Availability:</p>
                    <p className="text-lg font-semibold text-[#008751]">
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
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden hover-lift shadow-lg border border-[#008751]/10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <motion.div
                  whileHover={{ scale: 1.05 }}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#008751]/50 to-transparent" />
                </motion.div>
                <div className="p-8 md:p-12 flex flex-col justify-center bg-gray-50 order-1 md:order-2">
                  <div className="flex items-center gap-3 mb-6">
                    <CheckCircle2 className="h-8 w-8 text-[#008751]" />
                    <h2 className="text-4xl md:text-5xl font-bold gradient-text">
                      Farm Setup & Consulting Services
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    Leverage our 15 years of experience to set up your own poultry
                    farm. We offer comprehensive consulting services covering:
                  </p>
                  <ul className="list-none space-y-3 mb-8">
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
                        className="flex items-start gap-3 bg-white rounded-lg p-3 border border-[#008751]/10"
                      >
                        <CheckCircle2 className="h-5 w-5 text-[#008751] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
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
                      className="w-full sm:w-auto bg-gradient-to-r from-[#008751] to-[#00b366] hover:from-[#00b366] hover:to-[#008751] text-white border-0 shadow-lg"
                    >
                      Book Consultation
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
