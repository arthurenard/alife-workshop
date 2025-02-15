"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export interface GridItem {
  name: string;
  image: string;
  subtitle?: string;
}

interface ItemsGridProps<T extends GridItem> {
  title: string;
  items: T[];
  renderImage: (item: T) => {
    src: string;
    alt: string;
    className: string;
    containerClassName: string;
  };
  renderSubtitle?: (item: T) => React.ReactNode;
  onItemClick: (item: T) => void;
  mobileImageContainerClassName?: string;
  id?: string;
}

export default function ItemsGrid<T extends GridItem>({
  title,
  items,
  renderImage,
  renderSubtitle,
  onItemClick,
  mobileImageContainerClassName,
  id,
}: ItemsGridProps<T>) {
  return (
    <section id={id} className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          // transition={{ duration: 0.3 }}
          className="backdrop-blur-md bg-black/40 rounded-xl p-6"
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-white">
            {title}
          </h2>

          {/* Desktop Layout */}
          <div className="hidden md:flex flex-wrap justify-center gap-12 max-w-6xl mx-auto">
            {items.map((item, index) => (
              <motion.button
                key={index}
                onClick={() => onItemClick(item)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                // transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="backdrop-blur-md rounded-2xl overflow-hidden flex flex-col items-center p-6 hover:bg-black/30 hover:bg-white/5 transition-all transition-colors duration-300 ease-in-out w-full max-w-[320px] min-w-[200px]"
              >
                <div className={renderImage(item).containerClassName}>
                  <Image
                    src={renderImage(item).src}
                    alt={renderImage(item).alt}
                    fill
                    className={renderImage(item).className}
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 text-center">
                  {item.name}
                </h3>
                {renderSubtitle && renderSubtitle(item)}
              </motion.button>
            ))}
          </div>

          {/* Mobile Layout */}
          <div className="flex flex-col space-y-4 md:hidden">
            {items.map((item, index) => (
              <motion.button
                key={index}
                onClick={() => onItemClick(item)}
                whileHover={{ scale: 1.05 }}
                className="flex items-center p-4 bg-black/20 backdrop-blur-md rounded-lg hover:bg-black/30 transition-all transition-colors duration-300 ease-in-out w-full"
              >
                <div
                  className={
                    mobileImageContainerClassName ||
                    "relative w-16 h-16 flex-shrink-0"
                  }
                >
                  <Image
                    src={renderImage(item).src}
                    alt={renderImage(item).alt}
                    fill
                    className={renderImage(item).className}
                  />
                </div>
                <div className="flex-grow flex flex-col items-center justify-center">
                  <h3 className="text-lg font-semibold text-white px-2">
                    {item.name}
                  </h3>
                  {renderSubtitle && renderSubtitle(item)}
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
