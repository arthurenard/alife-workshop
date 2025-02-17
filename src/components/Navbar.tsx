"use client";

import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Image from "next/image";

const navItems = [
  {
    name: "About",
    to: "abstract",
  },
  {
    name: "Program",
    to: "program",
  },
  {
    name: "Speakers",
    to: "speakers",
  },
  {
    name: "Sponsors",
    to: "sponsors",
  },
  {
    name: "Location",
    to: "location",
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle scroll lock
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "15px"; // Prevent layout shift
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [isMenuOpen]);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-100 ${
          isScrolled || isMenuOpen
            ? "bg-black/80 backdrop-blur-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              {isScrolled && (
                <div
                  className="relative h-12 sm:h-16 w-40 cursor-pointer"
                  onClick={handleLogoClick}
                >
                  <Image
                    src="/logo.png"
                    alt="Conference Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              )}
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    spy={true}
                    smooth={false}
                    offset={-96}
                    duration={100}
                    className="cursor-pointer px-4 py-2 text-base font-semibold text-white/90 hover:text-white hover:scale-105 transition-all transition-colors duration-300 ease-in-out"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white/90 hover:text-white focus:outline-none z-50"
              >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
                  <svg
                    className="block h-8 w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-8 w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm transition-all duration-300 md:hidden ${
          isMenuOpen
            ? "opacity-100 z-40"
            : "opacity-0 pointer-events-none -z-10"
        }`}
      >
        <div className="flex items-center justify-center h-screen">
          <div className="px-2 pt-2 pb-3 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={false}
                offset={-96}
                duration={100}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-xl font-semibold text-white/90 hover:text-white transition-colors text-center"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
