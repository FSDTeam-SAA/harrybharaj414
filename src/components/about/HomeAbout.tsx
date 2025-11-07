import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const HomeAbout = () => {
  return (
    <section className="py-16 lg:py-16 ">
      <div className="container mx-auto ">
        <div className="text-center mb-[60px]">
          <p className="text-blue-600 font-semibold mb-2">About Us</p>
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            About Destiny Abroad
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Guiding individuals from India, Nepal, and GCC countries with
            trusted immigration, work, and study visa consulting to build a
            successful future abroad.
          </p>
        </div>

        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-center mx-auto">
          {/* Left Content */}
          <div className="relative w-full h-[400px] lg:h-[550px]">
            <Image
              src="/about.jpg"
              alt="About Destiny Abroad"
              fill
              className="object-cover rounded-2xl shadow-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Right Image */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-4">
              Shaping Futures Beyond Borders
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Destiny Abroad FZ-LLC is a licensed UAE-based immigration and
              career consulting firm dedicated to helping individuals from
              India, Nepal, and GCC countries achieve global opportunities. We
              specialize in guiding clients toward
              {/* work, study, and settlement */}
              pathways in Europe with trusted consultation and seamless
              documentation support.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With a personalized and transparent approach, we simplify the
              complex visa and immigration process, ensuring clarity and
              confidence at every step. Our mission is to provide reliable
              guidance, ethical consulting, and successful outcomes that empower
              our clients to build a secure and prosperous future abroad.
            </p>

            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Licensed UAE-based Immigration & Career Consultancy.</li>
              <li>
                Personalized Guidance with End-to-End Documentation Support.
              </li>
              <li>Trusted by Clients Across India, Nepal & GCC Countries.</li>
            </ul>
            <Link href={"/about"}>
              <Button className="border-2 border-blue-500 text-blue-600 hover:bg-white cursor-pointer bg-transparent hover:scale-105 transition-all duration-300">
                More Info
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
