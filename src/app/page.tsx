"use client";

import { useState, useEffect, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Abstract from "@/components/Abstract";
import Program from "@/components/Program";
import Speakers from "@/components/Speakers";
import Sponsors from "@/components/Sponsors";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import ProgramSlotModal from "@/components/ProgramSlotModal";
import ProfileModal from "@/components/ProfileModal";
import Organizers from "@/components/Organizers";
import { Talk, Speaker } from "@/types";
import { getSpeakerTalks } from "@/data/program";
import { getSpeakerById } from "@/data/speakers";
import { backgroundVideos, getRandomVideo } from "@/data/videos";

export default function Home() {
  const [selectedTalk, setSelectedTalk] = useState<Talk | null>(null);
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);
  const [selectedOrganizer, setSelectedOrganizer] = useState<Speaker | null>(
    null
  );
  const [backgroundVideo, setBackgroundVideo] = useState(backgroundVideos[0]);
  const [isVideoFading, setIsVideoFading] = useState(false);

  const changeVideo = useCallback(() => {
    setIsVideoFading(true);

    // Wait for fade out animation
    setTimeout(() => {
      setBackgroundVideo(getRandomVideo());
      setIsVideoFading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const videoElement = document.querySelector("video");

    if (videoElement) {
      // Listen for when the video is about to end
      videoElement.addEventListener("timeupdate", () => {
        const timeLeft = videoElement.duration - videoElement.currentTime;
        if (timeLeft < 1.0 && !isVideoFading) {
          changeVideo();
        }
      });
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("timeupdate", () => {});
      }
    };
  }, [changeVideo, isVideoFading]);

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
      {/* Fixed video background that repeats */}
      <div className="fixed top-0 left-0 w-full h-screen -z-10 overflow-hidden">
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${
            isVideoFading ? "opacity-0" : "opacity-100"
          }`}
        >
          <video
            key={backgroundVideo.id}
            autoPlay
            muted
            loop={false}
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover filter blur-sm"
          >
            <source src={backgroundVideo.src} type={backgroundVideo.type} />
          </video>
        </div>
        <div className="absolute inset-0 bg-black/20" />{" "}
        {/* Darkening overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Header />
        <div className="container mx-auto px-4">
          <Abstract />
          <Program onTalkClick={handleTalkClick} />
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
