"use client";

import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useInactivity } from "@/hooks/useInactivity";

export default function Header() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [gradientWidth, setGradientWidth] = useState(80);
  const isInactive = useInactivity();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateGradientWidth = () => {
      if (titleRef.current) {
        const titleWidth = titleRef.current.offsetWidth;
        const parentWidth =
          titleRef.current.parentElement?.offsetWidth || window.innerWidth;
        const widthPercentage = (titleWidth / parentWidth) * 100;
        setGradientWidth(widthPercentage + 10); // Add some padding
      }
    };

    updateGradientWidth();
    window.addEventListener("resize", updateGradientWidth);

    return () => {
      window.removeEventListener("resize", updateGradientWidth);
    };
  }, []);

  return (
    <header className="relative h-screen flex items-center justify-center text-white">
      <div className="relative z-10 text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative h-40 w-40 sm:h-64 sm:w-64 mx-auto mb-12">
            <Image
              src="/logo.png"
              alt="Alife Workshop Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="relative">
            {/* Background div with fade effect */}
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(ellipse ${
                  gradientWidth * 0.8
                }% 75% at 50% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0) 60%)`,
                WebkitMaskImage: `radial-gradient(ellipse ${
                  gradientWidth * 0.8
                }% 75% at 50% 50%, black 40%, transparent 80%)`,
                maskImage: `radial-gradient(ellipse ${
                  gradientWidth * 0.8
                }% 75% at 50% 50%, black 40%, transparent 80%)`,
                backdropFilter: "blur(8px)",
              }}
            />
            {/* Content div */}
            <div className="relative p-8">
              <h1
                className="text-4xl md:text-6xl font-bold mb-6"
                ref={titleRef}
              >
                Detection and Emergence of Complexity
              </h1>
              <p className="text-2xl md:text-3xl mb-4 text-gray-200">
                ALIFE Perspectives
              </p>
              <p className="text-lg md:text-2xl mb-8">
                May 26-28, 2024 • EPFL, Lausanne
              </p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="abstract"
              spy={true}
              smooth={false}
              offset={-96}
              duration={100}
              className={`inline-block bg-white/10 backdrop-blur-xl text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 hover:scale-105 duration-300 transition-all cursor-pointer border border-white/20 mt-4 ${
                isInactive && !isScrolled ? "opacity-0" : "opacity-100"
              }`}
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}
