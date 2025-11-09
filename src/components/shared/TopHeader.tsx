"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function TopHeader() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <section className="bg-[#E8F1FD] relative h-auto w-ful font-poppins">
      <div className="container mx-auto">
        <button
          onClick={() => setIsVisible(false)}
          className=" absolute md:right-2 md:top-4 right-4 top-5 sm:right-2 sm:top-5  text-[#6C757D] flex items-center hover:text-red-500 transition"
        >
          <X className="cursor-pointer" size={20} />
        </button>

        <div className="flex text-[#6C757D] flex-col md:flex-row justify-between items-center py-2 md:py-4 text-sm md:text-base gap-1 md:gap-0">
          <div className="message text-center md:text-left px-2">
            <p className="text-xs md:text-sm">
              Consult with a certified immigration expert and take the first
              step toward your global future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
