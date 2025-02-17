"use client";

import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Image from "next/image";

export default function Header() {
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
                background:
                  "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.3) 90%, rgba(0,0,0,0) 100%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 90% 60% at 50% 50%, black 40%, transparent 80%)",
                maskImage:
                  "radial-gradient(ellipse 90% 60% at 50% 50%, black 40%, transparent 80%)",
                backdropFilter: "blur(8px)",
              }}
            />
            {/* Content div */}
            <div className="relative p-8">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
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
          <Link
            to="abstract"
            smooth={false}
            duration={50}
            className="inline-block bg-white/10 backdrop-blur-xl text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 hover:scale-105 duration-300 transition-colors cursor-pointer border border-white/20 mt-4"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </header>
  );
}
