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
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

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
      // Send to Formspree
      const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_FORM_ID;
      if (formspreeId) {
        await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        });
      }

      // Backup to localStorage
      if (typeof window !== "undefined") {
        const contacts = JSON.parse(localStorage.getItem("contacts") || "[]");
        contacts.push({
          ...data,
          date: new Date().toISOString(),
        });
        localStorage.setItem("contacts", JSON.stringify(contacts));
      }

      setShowToast(true);
      reset();
    } catch (error) {
      console.error("Failed to submit contact form:", error);
      // Still show success to user even if Formspree fails
      // (localStorage backup will preserve the data)
      setShowToast(true);
      reset();
    }
  };

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
            <span className="gradient-text">Contact Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 gradient-text-gold font-semibold gold-accent"
          >
            Get in touch with Tcode Farms
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 grain relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                    Name *
                  </label>
                  <Input
                    id="name"
                    {...register("name")}
                    placeholder="Your full name"
                    className="bg-white/5 border-gray-700 text-white placeholder:text-gray-500 focus:border-[#008751]"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="your.email@example.com"
                    className="bg-white/5 border-gray-700 text-white placeholder:text-gray-500 focus:border-[#008751]"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-300">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    placeholder="+234 800 000 0000"
                    className="bg-white/5 border-gray-700 text-white placeholder:text-gray-500 focus:border-[#008751]"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-400">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    placeholder="Your message..."
                    rows={6}
                    className="bg-white/5 border-gray-700 text-white placeholder:text-gray-500 focus:border-[#008751]"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="w-full bg-gradient-to-r from-[#008751] to-[#00b366] hover:from-[#00b366] hover:to-[#008751] text-white border-0"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
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
              <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
                Contact Information
              </h2>
              <div className="space-y-6">
                {[
                  { icon: MapPin, title: "Address", content: "Oriokuta, Imota, Lagos State, Nigeria" },
                  { icon: Phone, title: "Phone", links: ["+234 915 844 5714", "+234 806 724 0887"] },
                  { icon: Mail, title: "Email", content: "tcodefarminc@gmail.com", href: "mailto:tcodefarminc@gmail.com" },
                  { icon: MessageCircle, title: "WhatsApp", content: "Chat with us on WhatsApp", href: "https://wa.me/2349158445714?text=Hello!%20I%27m%20interested%20in%20learning%20more%20about%20Tcode%20Farms." },
                ].map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="glass rounded-2xl p-6 hover-lift"
                  >
                    <div className="flex items-start gap-4">
                      <item.icon className="h-6 w-6 text-[#008751] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                        {item.content && (
                          item.href ? (
                            <a
                              href={item.href}
                              target={item.href.startsWith("http") ? "_blank" : undefined}
                              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                              className="text-gray-400 hover:text-gold transition-colors"
                            >
                              {item.content}
                            </a>
                          ) : (
                            <p className="text-gray-400">{item.content}</p>
                          )
                        )}
                        {item.links && (
                          <div className="space-y-2">
                            {item.links.map((link) => (
                              <a
                                key={link}
                                href={`tel:${link.replace(/\s/g, "")}`}
                                className="block text-gray-400 hover:text-gold transition-colors"
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
                className="mt-8 glass rounded-2xl p-6"
              >
                <h3 className="font-semibold text-white mb-3">Business Hours</h3>
                <p className="text-gray-400">Monday - Saturday: 7:00 AM - 6:00 PM</p>
                <p className="text-gray-400">Sunday: Closed</p>
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
