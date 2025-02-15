"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Abstract from "@/components/Abstract";
import Program from "@/components/Program";
import Speakers from "@/components/Speakers";
import Sponsors from "@/components/Sponsors";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import ProgramSlotModal from "@/components/ProgramSlotModal";
import SpeakerProfileModal from "@/components/SpeakerProfileModal";
import { Talk, Speaker } from "@/types";
import { getSpeakerTalks } from "@/data/program";
import { getSpeakerById } from "@/data/speakers";
import { backgroundVideos, getRandomVideo } from "@/data/videos";

export default function Home() {
  const [selectedTalk, setSelectedTalk] = useState<Talk | null>(null);
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);
  const [backgroundVideo, setBackgroundVideo] = useState(backgroundVideos[0]);

  useEffect(() => {
    setBackgroundVideo(getRandomVideo());
  }, []);

  const handleTalkClick = (talk: Talk) => {
    setSelectedSpeaker(null);
    setSelectedTalk(talk);
  };

  const handleSpeakerClick = (speaker: Speaker) => {
    setSelectedTalk(null);
    setSelectedSpeaker(speaker);
  };

  return (
    <main className="min-h-screen relative">
      {/* Fixed video background that repeats */}
      <div className="fixed top-0 left-0 w-full h-screen -z-10">
        <video
          key={backgroundVideo.id}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={backgroundVideo.src} type={backgroundVideo.type} />
        </video>
        <div className="absolute inset-0 bg-black/50" />{" "}
        {/* Darkening overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Header />
        <div className="backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <Abstract />
            <Program onTalkClick={handleTalkClick} />
            <Speakers onSpeakerClick={handleSpeakerClick} />
            <Sponsors />
            <Location />
          </div>
          <Footer />
        </div>

        {selectedTalk && (
          <ProgramSlotModal
            isOpen={true}
            onClose={() => setSelectedTalk(null)}
            title={selectedTalk.title}
            date={selectedTalk.date}
            description={selectedTalk.description}
            speakers={selectedTalk.speakerIds.map((id) => getSpeakerById(id))}
            onSpeakerClick={handleSpeakerClick}
          />
        )}

        {selectedSpeaker && (
          <SpeakerProfileModal
            isOpen={true}
            onClose={() => setSelectedSpeaker(null)}
            {...selectedSpeaker}
            talks={getSpeakerTalks(selectedSpeaker.id)}
            onTalkClick={handleTalkClick}
          />
        )}
      </div>
    </main>
  );
}
