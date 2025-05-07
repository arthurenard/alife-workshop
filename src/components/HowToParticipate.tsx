"use client";

import { motion } from "framer-motion";

export default function HowToParticipate() {
  return (
    <section id="how-to-participate" className="sm:py-20 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-xl bg-black/50 rounded-xl p-6"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-white">
            How to Participate
          </h2>
          <div className="text-white/90 space-y-6 text-justify">
            <p>
              There are about 30 seats for people who wish to attend the talks in the workshop. 
              If you wish to participate, please fill the following form <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSd0SpPoBTATyLKKeVWokuHjeSoZtTJev0tCh0xW_X8t4o9RuQ/viewform?pli=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-blue-200 underline"
              >
                here
              </a>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 