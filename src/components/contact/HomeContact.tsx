"use client";

import Image from "next/image";
import React, { useState } from "react";

import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import Link from "next/link";
import { Label } from "../ui/label";
import { Mail } from "lucide-react";

const HomeContact = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const services = [
    { title: "Book a Consultation for Your Business", id: "6" },
    { title: "Work Visa Consulting", id: "1" },
    { title: "Study Visa Consulting", id: "2" },
    { title: "Immigration & Settlement Services", id: "3" },
    { title: "Career & CV Guidance", id: "4" },
    { title: "Documentation & Application Support", id: "5" },
  ];

  const handleCheckboxChange = (title: string, checked: boolean) => {
    setSelectedServices((prev) =>
      checked ? [...prev, title] : prev.filter((t) => t !== title)
    );
  };

  return (
    <section
      id="contact"
      className="py-10 sm:py-16 md:py-20 bg-gray-200"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto">
        {/* Header */}
        <header className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-blue-600 font-semibold uppercase tracking-wide">
            Book a Consultation
          </p>
          <h2
            id="contact-heading"
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mt-2 mb-4"
          >
            Trusted Immigration & Visa Experts
          </h2>
          <p className="text-sm md:text-lg px-4 md:px-0 text-gray-600 leading-relaxed">
            We offer expert immigration, study, and visa consulting services for
            clients from India, Nepal, and GCC countries — helping you take the
            next confident step toward your global future.
          </p>
        </header>

        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Image */}
          <div className="rounded-xl overflow-hidden w-[95%] mx-auto sm:w-full">
            <Image
              src="/images/whychoose.jpeg"
              alt="Immigration consultant discussing with a client"
              width={775}
              height={570}
              className="object-contain w-full aspect-5/5 rounded-2xl"
              loading="lazy"
            />
          </div>

          {/* Right Section */}
          <div className="space-y-6">
            {/* Email Contact Card */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-200">
              <p className="text-lg font-semibold text-gray-800 mb-4">
                Email Only for Business Queries & Collaboration | Book a Call for Visa Assistance
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
                      <span className="text-gray-700 font-medium">
                        {item.title}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Submit Button */}
              <Link
                href={"https://topmate.io/harry_singh12"}
                target="_blank"
                className="block mt-6"
              >
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

export default HomeContact;
