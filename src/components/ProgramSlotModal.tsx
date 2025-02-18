"use client";

import Image from "next/image";
import Modal from "./ui/Modal";
import { motion } from "framer-motion";
import { Speaker } from "@/types";

interface ProgramSlotModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  date: string;
  description: string;
  speakers: (Speaker | undefined)[];
  onSpeakerClick: (speaker: Speaker) => void;
}

export default function ProgramSlotModal({
  isOpen,
  onClose,
  title,
  date,
  description,
  speakers,
  onSpeakerClick,
}: ProgramSlotModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-white">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-white/60 mb-6">{date}</p>
        <p className="text-white/80 mb-8 line-clamp-2">{description}</p>

        {speakers.length > 0 && (
          <>
            <h3 className="text-xl font-semibold mb-4">Speakers</h3>
            <div className="space-y-4">
              {speakers.filter(Boolean).map((speaker, index) => (
                <motion.button
                  key={index}
                  onClick={() => onSpeakerClick(speaker!)}
                  className="flex items-center space-x-4 w-full p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-left hover:bg-white/10 transition-all hover:scale-105"
                >
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <Image
                      src={speaker!.image}
                      alt={speaker!.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-white group-hover:text-blue-300 transition-colors">
                      {speaker!.name}
                    </h4>
                    <p className="text-white/60 text-sm line-clamp-2">
                      {speaker!.institution}
                    </p>
                  </div>
                </motion.button>
              ))}
            </div>
          </>
        )}
      </div>
    </Modal>
  );
}
