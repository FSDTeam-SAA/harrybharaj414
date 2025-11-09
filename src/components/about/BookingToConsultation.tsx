import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const BookingToConsultation = () => {
  return (
    <section>
      <div className="contianer mx-auto bg-[url(/images/why.png)] object-cover py-10" >
        {/* Header */}
        <header className="text-center  mx-auto">
          <p className="text-blue-600 font-semibold uppercase tracking-wide">
            Booking consultation
          </p>
          <h2
            id="contact-heading"
            className="text-3xl lg:text-4xl font-bold text-gray-800 mt-2 mb-4"
          >
            Ready to Start Your Journey Abroad?{" "}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-16 px-5 md:px-0 text-sm md:text-base">
            Book a consultation with our expert advisor and get personalized guidance for your work, study, or immigration plans.
          </p>
          <Link href={'https://topmate.io/harry_singh12'} target="_blank">
          
          <Button className=" bg-[#1A73E8] cursor-pointer text-white font-semibold hover:bg-blue-700 transition-all duration-300">Booking A Consultation</Button>
          </Link>
        </header>
      </div>
    </section>
  );
};

export default BookingToConsultation;
