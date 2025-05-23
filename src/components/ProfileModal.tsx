"use client";

import Image from "next/image";
import Modal from "./ui/Modal";
import { Speaker, Talk } from "@/types";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  person: Speaker;
  talks?: Talk[];
  onTalkClick?: (talk: Talk) => void;
}

export default function ProfileModal({
  isOpen,
  onClose,
  person,
  talks,
  onTalkClick,
}: ProfileModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-white">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
          <div className="relative w-40 h-40 flex-shrink-0">
            <Image
              src={person.image}
              alt={person.name}
              fill
              className="object-cover rounded-full"
            />
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold mb-1">{person.name}</h2>
            <p className="text-white/60 mb-2">{person.institution}</p>
            {person.website && (
              <a
                href={person.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-blue-400 transition-colors"
              >
                Personal Website
              </a>
            )}
          </div>
        </div>

        {person.biography && (
          <>
            <h3 className="text-xl font-semibold mb-4">Biography</h3>
            <div className="space-y-4 mb-8">
              <div className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
                <p className="text-white/90 whitespace-pre-wrap">{person.biography}</p>
              </div>
            </div>
          </>
        )}

        {talks && talks.length > 0 && (
          <>
            <h3 className="text-xl font-semibold mb-4">Talks</h3>
            <div className="space-y-4">
              {talks.map((talk, index) => (
                <button
                  key={index}
                  onClick={() => onTalkClick?.(talk)}
                  className="w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all hover:scale-105 text-left"
                >
                  <h4 className="font-medium text-white mb-2">{talk.title}</h4>
                  <p className="text-white/60 text-sm">
                    {talk.date} at {talk.time}
                  </p>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </Modal>
  );
}
