"use client";

import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Image from "next/image";

export default function Header() {
  return (
    <header className="relative h-screen flex items-center justify-center text-white">
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative h-40 w-40 sm:h-64 sm:w-64 mx-auto mb-12">
            <Image
              src="/workshop.png"
              alt="Conference Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Detection and Emergence of Complexity
          </h1>
          <p className="text-2xl md:text-3xl mb-4 text-gray-200">
            ALIFE Perspectives
          </p>
          <p className="text-lg md:text-2xl mb-8">
            May 26-28, 2024 • EPFL, Lausanne
          </p>
          <Link
            to="abstract"
            smooth={true}
            duration={500}
            className="inline-block bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-colors cursor-pointer border border-white/20"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </header>
  );
}
