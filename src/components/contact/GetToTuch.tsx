import React from "react";
import { Mail, MapPin } from "lucide-react";

const GetToTuch = () => {
  return (
    <section className="lg:mt-20 mt-14 pb-10 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-blue-600 font-semibold uppercase tracking-wide">
            Contact Us
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-2 mb-4">
            Get In Touch With Us
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We’re here to guide you with timely and personalized opportunities
            for your journey abroad.
          </p>
        </header>

        {/* Contact Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 text-center md:text-left">
          {/* Email */}
          <div className="flex flex-col items-center md:items-center bg-[#E8F1FD] justify-center p-5 rounded-lg">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
              Email
            </h3>
            <p className="text-gray-600 mb-1">
              Our friendly team is happy to help.
            </p>
            <a
              href="mailto:example@example.com"
              className="text-blue-600 font-medium hover:text-blue-700 transition-colors text-[16px]"
            >
              harrysingh@destinyabroad.ae
            </a>
          </div>

          {/* Office */}
          <div className="flex flex-col items-center md:items-center bg-[#E8F1FD] p-5 rounded-lg">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Office</h3>
            <p className="text-gray-600 mb-1 text-center tracking-wide leading-[150%]">
              FDBC4169 Compass Building <br /> AL Shohada Road, <br />
              Al Hamra Industrial Zone-Fz,
            </p>

            {/* <p className="text-gray-600 mb-1">
              office-Destiny Abroad FZ-LLC,having it&apos;s address at 
            </p> */}
            <address className="text-blue-600 not-italic text-[16px] text-center leading-relaxed">
              Ras AL Khaimah,United Arab Emirates
            </address>
          </div>

          {/* Phone */}
          {/* <div className="flex flex-col items-center md:items-center">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
            <p className="text-gray-600 mb-1">Mon to Fri from 8am to 9pm.</p>
            <a
              href="tel:+10666050850"
              className="text-blue-600 font-medium hover:text-blue-700 transition-colors text-[16px]"
            >
              +1 (066) 605-0850
            </a>
          </div> */}
        </div>

        {/* CTA Section */}
        {/* <div className="text-center">
          <p className="text-gray-600 mb-6 text-lg max-w-2xl mx-auto">
            Ready to start your journey abroad? Contact us today for
            personalized guidance and expert support.
          </p>
          <button className="bg-blue-600 text-white px-8 py-1 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 text-lg shadow-md hover:shadow-lg">
            Book a Free Consultation
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default GetToTuch;
