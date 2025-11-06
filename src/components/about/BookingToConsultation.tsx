import React from "react";
import { Button } from "../ui/button";

const BookingToConsultation = () => {
  return (
    <section>
      <div className="contianer mx-auto">
        {/* Header */}
        <header className="text-center mb-14 mx-auto">
          <p className="text-blue-600 font-semibold uppercase tracking-wide">
            Booking consultation
          </p>
          <h2
            id="contact-heading"
            className="text-3xl lg:text-4xl font-bold text-gray-800 mt-2 mb-4"
          >
            Ready to Start Your Journey Abroad?{" "}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-16">
            Book a consultation with our expert advisor and get personalized guidance for your work, study, or immigration plans.
          </p>
          <Button className=" bg-[#1A73E8] cursor-pointer text-white font-semibold hover:bg-blue-700 transition-all duration-300">Booking A Consultation</Button>
        </header>
      </div>
    </section>
  );
};

export default BookingToConsultation;
