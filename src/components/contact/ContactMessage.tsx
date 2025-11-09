"use client";

import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Instagram, Mail, Youtube } from "lucide-react";
import Link from "next/link";

const ContactMessage = () => {
  const services = [
    { title: "Work Visa Consulting", id: "1" },
    { title: "Study Visa Consulting", id: "2" },
    { title: "Immigration & Settlement Services", id: "3" },
    { title: "Career & CV Guidance", id: "4" },
    { title: "Documentation & Application Support", id: "5" },
  ];

  return (
    <section className="my-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* LEFT — Image & Socials */}
          <div className="flex flex-col items-center">
            <div className="relative w-full  rounded-xl overflow-hidden">
              <Image
                src="/images/contact1.jpeg"
                alt="Professional immigration consultant"
                width={768}
                height={680}
                className="object-cover rounded-xl "
                loading="lazy"
              />
            </div>

            {/* Overlay Content */}
            <div className="flex flex-col items-center justify-center gap-4 text-blue-500 mt-6 w-full">
              <h3 className="text-xl font-semibold tracking-wide text-center">
                Connect with Us
              </h3>

              <div className="flex gap-4 justify-center">
                <Link
                  href="https://www.instagram.com/harry_bharaj34"
                  target="_blank"
                  className="flex items-center justify-center w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-full transition-transform hover:scale-110"
                  title="Instagram"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </Link>

                <Link
                  href="https://www.youtube.com/@HARRYSINGHEUROPA"
                  target="_blank"
                  className="flex items-center justify-center w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full transition-transform hover:scale-110"
                  title="YouTube"
                >
                  <Youtube className="w-5 h-5 text-white" />
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT — Service List & Contact */}
          <div className="space-y-6">
            {/* Email Contact Card */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-200">
              <p className="text-lg font-semibold text-gray-800 mb-4">
                Book a Consultation for Your Business / Queries
              </p>
              <Link
                href="mailto:harrysingh@destinyabroad.ae"
                className="flex items-center gap-3 text-blue-600 hover:text-blue-700 transition-colors w-fit"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full transition">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium">harrysingh@destinyabroad.ae</span>
              </Link>
            </div>

            {/* Services Card */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-200">
              <p className="font-semibold text-gray-700 text-lg mb-4">
                Our Services
              </p>

              <ul className="space-y-3">
                {services.map((item) => (
                  <li
                    key={item.id}
                    className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-300 cursor-default hover:border-blue-200"
                  >
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">{item.title}</span>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Submit Button */}
              <Link href={"https://topmate.io/harry_singh12"} target="_blank" className="block mt-6">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 text-lg transition-all duration-300 hover:shadow-lg">
                  Book a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMessage;