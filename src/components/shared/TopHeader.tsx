"use client";

import { useState } from "react";
import { PhoneForwarded, X } from "lucide-react";

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
              Book a FREE Consultation with an Immigration Advisor to Start Your
              {/* Work, Study, or Settlement */}
              Journey Abroad!
            </p>
          </div>
          <div className="phone-number flex flex-row items-center gap-2 md:gap-3 mt-1 md:mt-0">
            <PhoneForwarded className="text-[#6C757D] w-3 h-3 md:w-4 md:h-4" />
            <p className="text-xs md:text-sm">90860-6745678</p>
          </div>
        </div>
      </div>
    </section>
  );
}
