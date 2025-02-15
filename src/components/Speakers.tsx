"use client";

import { Speaker } from "@/types";
import ItemsGrid from "./ui/ItemsGrid";
import { speakers } from "@/data/speakers";

interface SpeakersProps {
  onSpeakerClick: (speaker: Speaker) => void;
}

export default function Speakers({ onSpeakerClick }: SpeakersProps) {
  return (
    <section id="speakers">
      <ItemsGrid
        id="speakers"
        title="Speakers"
        items={speakers}
        renderImage={(speaker) => ({
          src: speaker.image,
          alt: speaker.name,
          className: "object-cover rounded-full",
          containerClassName: "relative w-48 h-48 mb-6",
        })}
        renderSubtitle={(speaker) => (
          <p className="text-white/80 text-center">{speaker.institution}</p>
        )}
        onItemClick={onSpeakerClick}
      />
    </section>
  );
}
