"use client";

import { motion } from "framer-motion";
import { Calendar, FileText } from "lucide-react";

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
            Daily Farm Reports
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 font-semibold gold-accent"
          >
            Stay updated with our daily production and farm activities
          </motion.p>
        </div>
      </section>

      {/* Reports Grid */}
      <section className="py-24 grain relative bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {reports.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center py-16"
            >
              <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                No Reports Yet
              </h2>
              <p className="text-gray-600">
                Check back soon for daily farm reports and updates.
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reports.map((report, idx) => (
                <motion.div
                  key={report.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="bg-white rounded-2xl p-6 hover-lift shadow-md border border-[#008751]/10"
                >
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <Calendar className="h-4 w-4 text-[#008751]" />
                    <span>{report.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 gradient-text">
                    {report.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{report.excerpt}</p>
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
            className="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-[#008751]/10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center gradient-text">
              About Our Reports
            </h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto leading-relaxed text-lg">
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
