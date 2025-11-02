"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const pathname = usePathname();

  // Define menu items in one place
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="logo" width={150} height={60} priority />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 font-medium text-gray-700">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`transition-colors ${
                  pathname === item.path
                    ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                    : "hover:text-blue-600"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon (Mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-0 flex flex-col justify-center items-center h-screen w-full bg-black text-white z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-700 ease-in-out md:hidden`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-5 right-5 text-white hover:text-gray-400 transition"
        >
          <X size={28} />
        </button>

        <ul className="flex flex-col space-y-6 mt-10 px-6 font-medium text-lg">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                onClick={toggleMenu}
                className={`transition ${
                  pathname === item.path
                    ? "text-blue-400 font-semibold underline"
                    : "hover:text-blue-400"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
