"use client";

import { motion } from "framer-motion";
import { Calendar, FileText, Egg } from "lucide-react";

export default function ReportsPage() {
  const reports = [
    {
      id: 1,
      title: "Farm Report Coming Soon",
      date: new Date().toLocaleDateString("en-NG", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      excerpt:
        "Daily farm reports will be posted here to keep you updated on our production, health status, and farm activities.",
    },
  ];

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
            <span className="text-xs sm:text-sm font-semibold text-[#F5C543] tracking-wide">Farm Updates</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-white"
          >
            Daily Farm Reports
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 max-w-2xl mx-auto"
          >
            Stay updated with our daily production and farm activities
          </motion.p>
        </div>
      </section>

      {/* Reports Grid */}
      <section className="py-12 sm:py-16 md:py-24 grain relative bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {reports.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center py-12 sm:py-16"
            >
              <FileText className="h-12 w-12 sm:h-16 sm:w-16 text-gray-400 mx-auto mb-3 sm:mb-4" />
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                No Reports Yet
              </h2>
              <p className="text-sm sm:text-base text-gray-600 px-4">
                Check back soon for daily farm reports and updates.
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {reports.map((report, idx) => (
                <motion.div
                  key={report.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="farm-card p-5 sm:p-6"
                >
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                    <div className="w-6 h-6 rounded-lg bg-[#008751]/10 flex items-center justify-center">
                      <Calendar className="h-3 w-3 text-[#008751]" />
                    </div>
                    <span>{report.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 gradient-text">
                    {report.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{report.excerpt}</p>
                </motion.div>
              ))}
            </div>
          )}

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 sm:mt-16 farm-card p-6 sm:p-8 md:p-12 text-center"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#008751]/10 mb-5">
              <FileText className="h-7 w-7 text-[#008751]" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 gradient-text">
              About Our Reports
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-base sm:text-lg">
              Our daily farm reports provide transparency into our operations,
              including production numbers, bird health status, feed consumption,
              and other important farm metrics. These reports help our customers
              and partners stay informed about the quality and consistency of our
              operations.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
