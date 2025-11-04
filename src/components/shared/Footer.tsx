import Image from "next/image";
import React from "react";
import Location from "./Location";

const Footer = () => {
  return (
    <footer className="bg-[#E8F1FD] mt-60 lg:mt-48 relative" role="contentinfo">
      <div className="container mx-auto">
        {/* Location Box */}
        <div className="lg:pt-0 absolute -top-52 lg:-top-36 left-[13%] lg:left-[25%] w-[70%] lg:w-[50%] mx-auto">
          <Location />
        </div>

        {/* Footer Content */}
        <div>
          <div className="flex justify-center items-center pt-[280px] lg:pt-[120px]">
            <Image
              src="/logo.png"
              width={210}
              height={80}
              alt="Company Logo"
              priority
            />
          </div>

          <nav
            className="pt-8 pb-12"
            aria-label="Footer Navigation"
          >
            <ul className="flex text-[#1A73E8] items-center justify-center gap-8">
              <li>
                <a
                  href="#"
                  className="cursor-pointer hover:border-b-2 hover:border-[#1A73E8] transition duration-500"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="cursor-pointer hover:border-b-2 hover:border-[#1A73E8] transition duration-500"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="cursor-pointer hover:border-b-2 hover:border-[#1A73E8] transition duration-500"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="cursor-pointer hover:border-b-2 hover:border-[#1A73E8] transition duration-500"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <hr />

        <p className="text-[#6C757D] text-center font-normal text-[12px] py-5">
          &copy; 2077 Untitled UI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
