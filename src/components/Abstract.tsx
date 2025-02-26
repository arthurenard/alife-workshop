"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { abstractDescription, abstractImage } from "@/data/abstract";

export default function Abstract() {
  return (
    <section id="abstract" className="sm:py-20 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-xl bg-black/50 rounded-xl p-6"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-white">
            Conference Abstract
          </h2>
          <div className="text-white/90 space-y-6">
            <p>{abstractDescription}</p>
            <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg flex justify-center">
              <div className="relative w-full h-64 sm:h-96">
                <Image
                  src={abstractImage}
                  alt="EPFL Bernoulli Center"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
