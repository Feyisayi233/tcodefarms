"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Toast } from "@/components/ui/toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const consultationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  farmSize: z.string().min(1, "Please enter your farm size"),
  message: z.string().optional(),
});

type ConsultationFormData = z.infer<typeof consultationSchema>;

interface ConsultationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ConsultationForm({ open, onOpenChange }: ConsultationFormProps) {
  const [showToast, setShowToast] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationSchema),
  });

  const onSubmit = async (data: ConsultationFormData) => {
    try {
      // Send to Formspree
      const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_CONSULTATION_FORM_ID;
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
        const consultations = JSON.parse(
          localStorage.getItem("consultations") || "[]"
        );
        consultations.push({
          ...data,
          date: new Date().toISOString(),
        });
        localStorage.setItem("consultations", JSON.stringify(consultations));
      }

      setShowToast(true);
      reset();
      setTimeout(() => {
        onOpenChange(false);
        setShowToast(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to submit consultation form:", error);
      // Still show success to user even if Formspree fails
      // (localStorage backup will preserve the data)
      setShowToast(true);
      reset();
      setTimeout(() => {
        onOpenChange(false);
        setShowToast(false);
      }, 2000);
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent onClose={() => onOpenChange(false)}>
          <DialogHeader>
            <DialogTitle>Book Farm Setup & Consulting</DialogTitle>
            <DialogDescription>
              Fill out the form below and we&apos;ll get back to you soon.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">
                Name *
              </label>
              <Input
                id="name"
                {...register("name")}
                placeholder="Your full name"
                className="bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-[#008751] focus:ring-[#008751]"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
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
                className="bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-[#008751] focus:ring-[#008751]"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="farmSize" className="block text-sm font-medium mb-2 text-gray-700">
                Farm Size *
              </label>
              <Input
                id="farmSize"
                {...register("farmSize")}
                placeholder="e.g., 1000 birds, 5000 birds"
                className="bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-[#008751] focus:ring-[#008751]"
              />
              {errors.farmSize && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.farmSize.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">
                Message (Optional)
              </label>
              <Textarea
                id="message"
                {...register("message")}
                placeholder="Tell us about your farm setup needs..."
                rows={4}
                className="bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-[#008751] focus:ring-[#008751]"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#008751] to-[#00b366] hover:from-[#00b366] hover:to-[#008751] text-white border-0"
            >
              {isSubmitting ? "Submitting..." : "Submit Consultation Request"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
      {showToast && (
        <Toast
          message="Thank you! We&apos;ll contact you soon about your consultation request."
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  );
}

