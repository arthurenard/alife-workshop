"use client";

import Image from "next/image";
import Modal from "./ui/Modal";
import { Speaker } from "@/types";

interface OrganizerProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  organizer: Speaker;
}

export default function OrganizerProfileModal({
  isOpen,
  onClose,
  organizer,
}: OrganizerProfileModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-white">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
          <div className="relative w-40 h-40 flex-shrink-0">
            <Image
              src={organizer.image}
              alt={organizer.name}
              fill
              className="object-cover rounded-full"
            />
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold mb-1">{organizer.name}</h2>
            <p className="text-white/60 mb-2">{organizer.institution}</p>
            <a
              href={organizer.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-400 transition-colors"
            >
              Personal Website
            </a>
          </div>
        </div>
      </div>
    </Modal>
  );
}
