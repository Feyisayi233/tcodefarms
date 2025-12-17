import * as React from "react";
import { cn } from "@/lib/utils";
import { CheckCircle2, X } from "lucide-react";

interface ToastProps {
  message: string;
  onClose: () => void;
  type?: "success" | "error";
}

export const Toast = ({ message, onClose, type = "success" }: ToastProps) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-20 right-4 z-50 transition-all duration-300 ease-in-out">
      <div
        className={cn(
          "flex items-center gap-2 rounded-lg border px-4 py-3 shadow-lg",
          type === "success"
            ? "bg-green-50 border-green-200 text-green-800"
            : "bg-red-50 border-red-200 text-red-800"
        )}
      >
        <CheckCircle2 className="h-5 w-5" />
        <p className="text-sm font-medium">{message}</p>
        <button
          onClick={onClose}
          className="ml-2 rounded-sm opacity-70 hover:opacity-100"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

