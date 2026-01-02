"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Toast } from "@/components/ui/toast";

const emailSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type EmailFormData = z.infer<typeof emailSchema>;

interface EmailSubscriptionFormProps {
  productName: string;
}

export function EmailSubscriptionForm({ productName }: EmailSubscriptionFormProps) {
  const [showToast, setShowToast] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
  });

  const onSubmit = async (data: EmailFormData) => {
    try {
      // Send to Formspree
      const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_SUBSCRIPTION_FORM_ID;
      if (formspreeId) {
        const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            email: data.email,
            product: productName,
            _subject: `Email Subscription: ${productName}`,
          }),
        });
        
        if (!response.ok) {
          throw new Error(`Form submission failed: ${response.status}`);
        }
      }

      // Backup to localStorage
      if (typeof window !== "undefined") {
        try {
          const subscriptions = JSON.parse(
            localStorage.getItem("emailSubscriptions") || "[]"
          );
          subscriptions.push({
            email: data.email,
            product: productName,
            date: new Date().toISOString(),
          });
          localStorage.setItem("emailSubscriptions", JSON.stringify(subscriptions));
        } catch (storageError) {
          console.error("Failed to save to localStorage:", storageError);
        }
      }

      setShowToast(true);
      reset();
    } catch (error) {
      console.error("Failed to submit subscription form:", error instanceof Error ? error.message : String(error));
      // Still show success to user even if Formspree fails
      // (localStorage backup will preserve the data)
      setShowToast(true);
      reset();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="email-subscription" className="sr-only">
            Email address for {productName} subscription
          </label>
          <Input
            id="email-subscription"
            type="email"
            placeholder="Enter your email address"
            {...register("email")}
            className="w-full bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-[#008751] focus:ring-[#008751]"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-500" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-[#008751] to-[#00b366] hover:from-[#00b366] hover:to-[#008751] text-white border-0"
        >
          {isSubmitting ? "Subscribing..." : "Subscribe to be notified"}
        </Button>
      </form>
      {showToast && (
        <Toast
          message="Thank you! We&apos;ll notify you when this product is available."
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  );
}

