"use client";

import { Speaker } from "@/types";
import { speakers } from "@/data/speakers";
import PeopleGrid from "./ui/PeopleGrid";

interface SpeakersProps {
  onSpeakerClick: (speaker: Speaker) => void;
}

export default function Speakers({ onSpeakerClick }: SpeakersProps) {
  return (
    <PeopleGrid
      id="speakers"
      title="Speakers"
      items={speakers}
      onPersonClick={onSpeakerClick}
    />
  );
}
