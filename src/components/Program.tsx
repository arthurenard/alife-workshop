"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Talk, Speaker } from "@/types";
import ProgramSlotModal from "./ProgramSlotModal";
import ProfileModal from "./ProfileModal";
import { program, getTalkSpeakers, getSpeakerTalks } from "@/data/program";

interface ProgramProps {
  onTalkClick: (talk: Talk) => void;
}

const days = [
  { date: "May 26", day: "Day 1" },
  { date: "May 27", day: "Day 2" },
  { date: "May 28", day: "Day 3" },
];

export default function Program({ onTalkClick }: ProgramProps) {
  const [activeDay, setActiveDay] = useState("Day 1");
  const [selectedTalk, setSelectedTalk] = useState<Talk | null>(null);
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  const handleTalkClick = (talk: Talk) => {
    setSelectedTalk(talk);
  };

  const handleSpeakerClick = (speaker: Speaker) => {
    setSelectedTalk(null);
    setSelectedSpeaker(speaker);
  };

  return (
    <section id="program" className="sm:py-20 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-xl bg-black/50 rounded-xl p-6"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-white">
            Conference Program
          </h2>

          <div className="flex justify-center mb-4">
            {days.map((day) => (
              <button
                key={day.day}
                onClick={() => setActiveDay(day.day)}
                className={`px-6 py-2 mx-2 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors border border-white/10 hover:scale-110 transition-all transition-colors duration-300 ease-in-out ${
                  activeDay === day.day
                    ? "bg-white/10 text-white border border-white/50"
                    : "text-white/80"
                }`}
              >
                {day.date}
              </button>
            ))}
          </div>

          <div className="relative overflow-visible">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDay}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                {program[activeDay]?.map((talk, index) => (
                  <div
                    key={index}
                    className="w-full border-b border-white/10 last:border-b-0 sm:py-4 py-2 last:pb-0 last:my-0"
                    style={{ zIndex: program[activeDay].length - index }}
                  >
                    <motion.button
                      onClick={() =>
                        talk.speakerIds.length > 0 && onTalkClick(talk)
                      }
                      whileHover={
                        talk.speakerIds.length > 0
                          ? { scale: 1.02, zIndex: 10 }
                          : {}
                      }
                      transition={{ duration: 0.3 }}
                      className={`w-full flex rounded-xl items-start py-4 text-left px-2 relative
                        ${
                          talk.isBreak
                            ? "bg-black/20 backdrop-blur-xl"
                            : "bg-black/30 backdrop-blur-xl hover:bg-black/40"
                        }
                        ${
                          talk.speakerIds.length > 0
                            ? "cursor-pointer transition-colors duration-300 ease-in-out"
                            : "cursor-default"
                        }`}
                    >
                      <div className="w-16 flex-shrink-0 text-white/60">
                        {talk.time}
                      </div>
                      <div>
                        <h3
                          className={`font-semibold ${
                            !talk.isBreak ? "text-white" : "text-white/70"
                          }`}
                        >
                          {talk.title}
                        </h3>
                        <div className="flex flex-wrap gap-x-2">
                          {getTalkSpeakers(talk).map((speaker, idx) => (
                            <p
                              key={idx}
                              className={`text-sm whitespace-nowrap ${
                                !talk.isBreak
                                  ? "text-white/90"
                                  : "text-white/60"
                              }`}
                            >
                              {speaker?.name}
                              {idx < getTalkSpeakers(talk).length - 1 && ","}
                            </p>
                          ))}
                        </div>
                      </div>
                    </motion.button>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Modals */}
      <ProgramSlotModal
        isOpen={selectedTalk !== null}
        onClose={() => setSelectedTalk(null)}
        title={selectedTalk?.title || ""}
        date={selectedTalk?.date || ""}
        description={selectedTalk?.description || ""}
        speakers={
          selectedTalk ? (getTalkSpeakers(selectedTalk) as Speaker[]) : []
        }
        onSpeakerClick={handleSpeakerClick}
      />

      {selectedSpeaker && (
        <ProfileModal
          isOpen={true}
          onClose={() => setSelectedSpeaker(null)}
          person={selectedSpeaker}
          talks={getSpeakerTalks(selectedSpeaker.id)}
          onTalkClick={handleTalkClick}
        />
      )}
    </section>
  );
}
