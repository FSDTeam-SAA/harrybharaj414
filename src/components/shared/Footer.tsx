import Image from "next/image";
import React from "react";
import Location from "./Location";

const Footer = () => {
  return (
    <footer className="bg-[#E8F1FD] mt-60 lg:mt-48 relative" role="contentinfo">
      <div className="container mx-auto">
        {/* Location Box */}
        <div className="lg:pt-0 absolute -top-52 md:-top-46 lg:-top-36 left-[5%]  xl:left-[25%] w-[90%] sm-w-[90%] xl:w-[50%] mx-auto">
          <Location />
        </div>

        {/* Footer Content */}
        <div>
          <div className="flex justify-center items-center pt-[280px] lg:pt-[120px]">
            <Image
              src="/logo5.png"
              width={210}
              height={80}
              alt="Company Logo"
              priority
            />
          </div>

       <nav
  className="pt-8 pb-12 px-4"
  aria-label="Footer Navigation"
>
  <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-8 text-[#1A73E8] text-sm sm:text-base text-center">
    <li>
      <a
        href="/"
        className="cursor-pointer hover:border-b-2 hover:border-[#1A73E8] transition duration-300 whitespace-nowrap"
      >
        Home
      </a>
    </li>

    <li>
      <a
        href="/services"
        className="cursor-pointer hover:border-b-2 hover:border-[#1A73E8] transition duration-300 whitespace-nowrap"
      >
        Services
      </a>
    </li>

    <li>
      <a
        href="/about"
        className="cursor-pointer hover:border-b-2 hover:border-[#1A73E8] transition duration-300 whitespace-nowrap"
      >
        About Us
      </a>
    </li>

    <li>
      <a
        href="/contact"
        className="cursor-pointer hover:border-b-2 hover:border-[#1A73E8] transition duration-300 whitespace-nowrap"
      >
        Contact Us
      </a>
    </li>

    <li>
      <a
        href="/t&c"
        className="cursor-pointer hover:border-b-2 hover:border-[#1A73E8] transition duration-300 whitespace-nowrap"
      >
        Terms & Conditions
      </a>
    </li>
  </ul>
</nav>
        </div>

        <hr />

        <p className="text-[#6C757D] text-center font-normal text-[12px] py-5">
          &copy; 2026 Untitled UI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
