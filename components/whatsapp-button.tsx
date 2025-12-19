"use client";

import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useState, useEffect } from "react";

export function WhatsAppButton() {
  const prefersReducedMotion = useReducedMotion();
  const whatsappNumber = "2349158445714";
  const message = encodeURIComponent(
    "Hello! I&apos;m interested in learning more about Tcode Farms products and services."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  const [showBubble, setShowBubble] = useState(false);
  const [bubbleText, setBubbleText] = useState("");

  const chatBubbles = [
    "Need fresh eggs?",
    "Order now!",
    "We deliver daily!",
    "Best prices in Lagos!",
  ];

  useEffect(() => {
    if (prefersReducedMotion) return;
    
    const interval = setInterval(() => {
      setShowBubble(true);
      setBubbleText(chatBubbles[Math.floor(Math.random() * chatBubbles.length)]);
      setTimeout(() => {
        setShowBubble(false);
      }, 3000);
    }, 8000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefersReducedMotion]);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      {/* Chat Bubble */}
      <AnimatePresence>
        {showBubble && (
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-20 right-0 mb-2 bg-[#008751] rounded-2xl px-4 py-2 shadow-2xl max-w-[200px] border border-white/20"
          >
            <p className="text-sm text-white font-medium">{bubbleText}</p>
            <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-3 h-3 bg-[#008751] border-r border-b border-white/20" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Contact us on WhatsApp"
      >
        <motion.div
          animate={prefersReducedMotion ? {} : {
            boxShadow: [
              "0 0 20px rgba(37, 211, 102, 0.4)",
              "0 0 40px rgba(37, 211, 102, 0.6), 0 0 60px rgba(37, 211, 102, 0.4)",
              "0 0 20px rgba(37, 211, 102, 0.4)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 sm:p-5 shadow-2xl relative overflow-hidden"
        >
          <motion.div
            animate={prefersReducedMotion ? {} : {
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-white rounded-full"
          />
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7 relative z-10" />
        </motion.div>
      </motion.a>
    </div>
  );
}
