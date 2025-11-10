import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Check } from "lucide-react";
import Link from "next/link";

const WhyChooseUs = () => {
  return (
    <section
      id="why-choose-us"
      className="mt-8 md:mt-0 md:py-16 lg:py-24 bg-linear-to-b from-white to-blue-50"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <header className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-[#1A73E8] font-semibold mb-2 uppercase tracking-wide">
            Why Choose Us
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            What Makes Us Different
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed font-medium">
            We focus on <span className="font-normal">transparency</span>,{" "}
            <span className="font-normal">trust</span>, and{" "}
            <span className="font-normal">personalized guidance</span> to ensure
            a smooth and successful journey abroad for every client.
          </p>
        </header>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-6">
              Key Features
            </h3>

            <ul className="space-y-4 text-gray-700 text-sm md:text-xl">
              <li className="flex items-start gap-3">
                <Check className="text-[#1A73E8] w-5 h-5 md:w-6 md:h-6 mt-1 shrink-0" />
                <p className="font-medium text-base md:text-xl">
                  Experienced Consultants:{" "}
                  <span className="font-normal">
                    Expert guidance from licensed professionals with years of
                    experience in immigration and visa processes.
                  </span>
                </p>
              </li>

              <li className="flex items-start gap-3">
                <Check className="text-[#1A73E8] mt-1 w-5 h-5 md:w-6 md:h-6 shrink-0" />
                <p className="font-medium text-base md:text-xl">
                  Personalized Approach:{" "}
                  <span className="font-normal">
                    Tailored solutions for work, study, and
                    {/* settlement  */}
                    based on individual goals and circumstances.
                  </span>
                </p>
              </li>

              <li className="flex items-start gap-3">
                <Check className="text-[#1A73E8] mt-1 w-5 h-5 md:w-6 md:h-6 shrink-0" />
                <p className="font-medium text-base md:text-xl">
                  Trusted & Transparent:{" "}
                  <span className="font-normal">
                    Clear process, honest advice, and full support at every
                    stage of your journey.
                  </span>
                </p>
              </li>

              {/* <li className="flex items-start gap-3">
                <Check className="text-[#1A73E8] mt-1 shrink-0" />
                <p className="font-medium">
                  End-to-End Support:{" "}
                  <span className="font-normal">
                    From documentation to post-landing assistance, we are with
                    you at every step.
                  </span>
                </p>
              </li> */}

              <li className="flex items-start gap-3">
                <Check className="text-[#1A73E8] mt-1 shrink-0" />
                <p className="font-medium">
                  Wide Reach:{" "}
                  <span className="font-normal">
                    Helping clients from India, Nepal, and GCC countries
                    successfully achieve their international dreams.
                  </span>
                </p>
              </li>
            </ul>
            <Link  href={'https://topmate.io/harry_singh12'}  target="_blank" >
            
            <Button
              className="mt-8 border-2 border-blue-600 bg-[#1A73E8] text-white font-semibold hover:bg-blue-700 transition-all duration-300"
              aria-label="Book a consultation with our visa experts"
            >
              Book a Consultation
            </Button>
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative w-full h-[400px] lg:h-[650px]">
            <Image
              src="/images/bbb.png"
              alt="Experienced immigration consultants assisting clients"
              fill
              className="object-cover rounded-2xl shadow-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
