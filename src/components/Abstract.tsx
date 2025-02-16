"use client";

import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function Abstract() {
  return (
    <section id="abstract" className="sm:py-20 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-md bg-black/40 rounded-xl p-6"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-white">
            About the Conference
          </h2>
          <div className="text-white/90 space-y-6">
            <p>
              An abundance of systems has been studied as potential models of
              artificial life: from classical discrete cellular automata, to
              their randomized versions such as random Boolean networks,
              continuous systems including neural CAs or Lenia systems, or even
              simple programming languages.
            </p>
            <p>
              In this workshop, we would like to focus on the fundamental
              question of how to measure the complexity of such systems and
              detect emerging patterns within them. The conference will be held
              at{" "}
              <Link
                to="location"
                smooth={false}
                duration={100}
                className="text-blue-200 hover:text-blue-100 cursor-pointer underline"
              >
                EPFL Bernoulli Center
              </Link>
              , featuring keynote speeches, panel discussions, and interactive
              sessions.
            </p>
            <div className="bg-black/20 backdrop-blur-md p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Key Topics
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-white/90">
                <li>Cellular Automata and Complex Systems</li>
                <li>Pattern Detection in Artificial Life</li>
                <li>Complexity Measures and Metrics</li>
                <li>Emergence in Artificial Life Systems</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
