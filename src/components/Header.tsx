import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full max-w-[1440px] h-[104px] px-16 py-3 mx-auto">
      {/* Logo */}
      <div className="w-[104.83px] h-[80px] flex items-center justify-center">
        <img src="/logo.svg" alt="Logo" className="object-contain" />
      </div>

      {/* Navigation Links */}
      <nav className="flex items-center gap-8">
        <Link href="/" className="text-base font-medium text-black hover:text-gray-700">
          Home
        </Link>
        <Link href="/menu" className="text-base font-medium text-black hover:text-gray-700">
          Menu
        </Link>
        <Link href="/franchising-and-events" className="text-base font-medium text-black hover:text-gray-700">
          Franchising and Events
        </Link>
        <Link href="/contact-us" className="text-base font-medium text-black hover:text-gray-700">
          Contact Us
        </Link>
      </nav>

      {/* Enquire Now Button */}
      <div>
        <Link
          href="/enquire"
          className="flex items-center justify-center px-5 py-2 text-white text-sm font-medium bg-[#D15457] rounded-full hover:bg-[#b14646] transition duration-300 ease-in-out"
          style={{ width: "135px", height: "48px" }}
        >
          Enquire Now
        </Link>
      </div>
    </header>
  );
}
