"use client";

import { motion } from "framer-motion";

export default function Location() {
  return (
    <section id="location" className="sm:py-20 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-md bg-black/40 rounded-xl p-6"
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-white">
            Location
          </h2>

          <div className="overflow-hidden rounded-lg">
            <div className="w-full h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5490.834100643343!2d6.566492091974004!3d46.51964858792201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c310264beddaf%3A0x3a4de4ac4fbd08c1!2sEPFL%20Bernoulli%20center!5e0!3m2!1sfr!2sch!4v1739390699067!5m2!1sfr!2sch"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2 text-white">
                EPFL Bernoulli Center
              </h3>
              <p className="text-white/80">
                EPFL
                <br />
                1015 Lausanne
                <br />
                Switzerland
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
