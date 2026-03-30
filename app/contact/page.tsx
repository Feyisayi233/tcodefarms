"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Toast } from "@/components/ui/toast";
import { Phone, Mail, MapPin, MessageCircle, Clock, Egg } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [showToast, setShowToast] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_FORM_ID;
      if (formspreeId) {
        const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error(`Form submission failed: ${response.status}`);
        }
      }

      if (typeof window !== "undefined") {
        try {
          const contacts = JSON.parse(localStorage.getItem("contacts") || "[]");
          contacts.push({
            ...data,
            date: new Date().toISOString(),
          });
          localStorage.setItem("contacts", JSON.stringify(contacts));
        } catch (storageError) {
          console.error("Failed to save to localStorage:", storageError);
        }
      }

      setShowToast(true);
      reset();
    } catch (error) {
      console.error("Failed to submit contact form:", error instanceof Error ? error.message : String(error));
      setShowToast(true);
      reset();
    }
  };

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
            <span className="text-xs sm:text-sm font-semibold text-[#F5C543] tracking-wide">Get In Touch</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-white"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-cream-200/80 max-w-2xl mx-auto"
          >
            We&apos;d love to hear from you — whether you&apos;re ordering eggs or need farm consulting
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 md:py-24 grain relative bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block text-[#D4A017] text-sm font-semibold uppercase tracking-widest mb-3">Send a Message</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 gradient-text">
                Drop Us a Line
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 sm:space-y-6 bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-[#008751]/10">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">
                    Name *
                  </label>
                  <Input
                    id="name"
                    {...register("name")}
                    placeholder="Your full name"
                    className="bg-cream-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-[#008751] focus:ring-[#008751]"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="your.email@example.com"
                    className="bg-cream-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-[#008751] focus:ring-[#008751]"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-700">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    placeholder="+234 800 000 0000"
                    className="bg-cream-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-[#008751] focus:ring-[#008751]"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    placeholder="Tell us what you need — egg orders, farm consulting, or just say hello..."
                    rows={6}
                    className="bg-cream-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-[#008751] focus:ring-[#008751]"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="w-full bg-[#008751] hover:bg-[#006B3F] text-white border-0 font-bold"
                >
                  {isSubmitting ? "Sending..." : "Send Message →"}
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block text-[#D4A017] text-sm font-semibold uppercase tracking-widest mb-3">Reach Us Directly</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 gradient-text">
                Contact Information
              </h2>
              <div className="space-y-4 sm:space-y-5">
                {[
                  { icon: MapPin, title: "Farm Location", content: "Oriokuta, Imota, Lagos State, Nigeria", color: "bg-[#008751]/10", iconColor: "text-[#008751]" },
                  { icon: Phone, title: "Phone Numbers", links: ["+234 915 844 5714", "+234 806 724 0887"], color: "bg-[#D4A017]/10", iconColor: "text-[#D4A017]" },
                  { icon: Mail, title: "Email", content: "tcodefarminc@gmail.com", href: "mailto:tcodefarminc@gmail.com", color: "bg-[#008751]/10", iconColor: "text-[#008751]" },
                  { icon: MessageCircle, title: "WhatsApp", content: "Chat with us on WhatsApp", href: "https://wa.me/2349158445714?text=Hello!%20I%27m%20interested%20in%20learning%20more%20about%20Tcode%20Farms.", color: "bg-[#25D366]/10", iconColor: "text-[#25D366]" },
                ].map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="farm-card p-5 sm:p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0`}>
                        <item.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${item.iconColor}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">{item.title}</h3>
                        {item.content && (
                          item.href ? (
                            <a
                              href={item.href}
                              target={item.href.startsWith("http") ? "_blank" : undefined}
                              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                              className="text-gray-600 hover:text-[#008751] transition-colors text-sm sm:text-base"
                            >
                              {item.content}
                            </a>
                          ) : (
                            <p className="text-gray-600 text-sm sm:text-base">{item.content}</p>
                          )
                        )}
                        {item.links && (
                          <div className="space-y-1">
                            {item.links.map((link) => (
                              <a
                                key={link}
                                href={`tel:${link.replace(/\s/g, "")}`}
                                className="block text-gray-600 hover:text-[#008751] transition-colors text-sm sm:text-base"
                              >
                                {link}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-6 bg-gradient-to-br from-[#008751] to-[#006B3F] rounded-2xl p-6 text-white"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="h-5 w-5 text-[#F5C543]" />
                  <h3 className="font-semibold text-lg">Business Hours</h3>
                </div>
                <div className="space-y-2 text-white/80 text-sm sm:text-base">
                  <div className="flex justify-between">
                    <span>Monday - Saturday</span>
                    <span className="font-medium text-white">7:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium text-white/60">Closed</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {showToast && (
        <Toast
          message="Thank you! We&apos;ll get back to you soon."
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
}
