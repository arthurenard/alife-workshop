"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Abstract from "@/components/Abstract";
// import Program from "@/components/Program";
import Speakers from "@/components/Speakers";
import Sponsors from "@/components/Sponsors";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import ProgramSlotModal from "@/components/ProgramSlotModal";
import ProfileModal from "@/components/ProfileModal";
import Organizers from "@/components/Organizers";
import VideoBackground from "@/components/VideoBackground";
import { Talk, Speaker } from "@/types";
import { getSpeakerTalks } from "@/data/program";
import { getSpeakerById } from "@/data/speakers";

export default function Home() {
  const [selectedTalk, setSelectedTalk] = useState<Talk | null>(null);
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);
  const [selectedOrganizer, setSelectedOrganizer] = useState<Speaker | null>(
    null
  );

  const handleTalkClick = (talk: Talk) => {
    setSelectedSpeaker(null);
    setSelectedTalk(talk);
  };

  const handleSpeakerClick = (speaker: Speaker) => {
    setSelectedTalk(null);
    setSelectedSpeaker(speaker);
  };

  const handleOrganizerClick = (organizer: Speaker) => {
    setSelectedOrganizer(organizer);
  };

  return (
    <main className="min-h-screen relative">
      <VideoBackground />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Header />
        <div className="container mx-auto px-4">
          <Abstract />
          {/* <Program onTalkClick={handleTalkClick} /> */}
          <Speakers onSpeakerClick={handleSpeakerClick} />
          <Sponsors />
          <Organizers onOrganizerClick={handleOrganizerClick} />
          <Location />
        </div>
        <Footer />

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
          <ProfileModal
            isOpen={true}
            onClose={() => setSelectedSpeaker(null)}
            person={selectedSpeaker}
            talks={getSpeakerTalks(selectedSpeaker.id)}
            onTalkClick={handleTalkClick}
          />
        )}

        {selectedOrganizer && (
          <ProfileModal
            isOpen={true}
            onClose={() => setSelectedOrganizer(null)}
            person={selectedOrganizer}
          />
        )}
      </div>
    </main>
  );
}
