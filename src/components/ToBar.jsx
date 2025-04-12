"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const ToBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-600 bg-slate-900 text-[#8A8680]">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center justify-start rtl:justify-end">
            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-100 rounded-lg bg-slate-700 sm:hidden hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <span className="sr-only">Toggle Menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>

            {/* Logo */}
            <Link href="/" className="flex ms-2 md:me-24">
              <Image src="/logo.png" alt="Logo" width={40} height={40} />
              <span className="self-center text-xl font-bold whitespace-nowrap ms-2">
                Galaxy Store
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <MobileMenu />
      )}
    </nav>
  );
};

export default ToBar;
