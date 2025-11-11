import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const HomeAbout = () => {
  return (
    <section className="py-8 sm:py-16 lg:py-16 ">
      <div className="container mx-auto ">
        <div className="text-center mb-6 lg:mb-10">
          <p className="text-blue-600 font-semibold mb-2">About Us</p>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            About Destiny Abroad
          </h3>
          <p className="text-sm md:text-gray-600 mb-6 leading-relaxed">
            Guiding individuals from India, Nepal, and WorldWide
            trusted immigration, work, and study visa consulting to build a
            successful future abroad.
          </p>
        </div>

        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-center mx-auto">
          {/* Left Content */}
          <div className="relative w-[95%] rounded-2xl mx-auto aspect-square">
            <Image
              src="/images/habout.png"
              alt="About Destiny Abroad"
              fill
              className="object-contain  rounded-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Right Image */}
          <div className="px-4">
            <h2 className="text-2xl  lg:text-3xl font-semibold text-gray-800 mb-4">
              Shaping Futures Beyond Borders
            </h2>
            <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">
              Destiny Abroad FZ-LLC delivers professional visa, work-permit,
              study, and residency consultation with end-to-end documentation
              and embassy filing support. The process is transparent,
              structured, and designed to minimize delays.
            </p>
            {/* <p className="text-gray-600 mb-6 leading-relaxed">
              With a personalized and transparent approach, we simplify the
              complex visa and immigration process, ensuring clarity and
              confidence at every step. Our mission is to provide reliable
              guidance, ethical consulting, and successful outcomes that empower
              our clients to build a secure and prosperous future abroad.
            </p> */}

            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li> Licensed UAE LLC .</li>
              <li>Personalized, case-by-case guidance .</li>
              <li>Documentation prepared to embassy standards .</li>
            </ul>
            <Link href={"/about"} target="_blank">
              <Button className="border-2 border-blue-500 text-blue-600 hover:bg-white cursor-pointer bg-transparent hover:scale-105 transition-all duration-300">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
