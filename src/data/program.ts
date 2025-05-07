import { Talk } from "@/types";
import { getSpeakerById } from "./speakers";

// Fake data

export const program: Record<string, Talk[]> = {
  "Day 1": [
    {
      time: "10:00",
      title: "Coffee & Croissants",
      date: "May 26, 2025",
      description: "Morning refreshments",
      speakerIds: [],
      isBreak: true,
    },
    {
      time: "10:20",
      title: "Complex Patterns in Lenia",
      date: "May 26, 2025",
      description: "",
      speakerIds: ["bert-chan"], // Note: Chan is not in speakers.ts, needs to be added
      isBreak: false,
    },
    {
      time: "11:50",
      title: "Lunch Break & Coffee",
      date: "May 26, 2025",
      description: "",
      speakerIds: [],
      isBreak: true,
    },
    {
      time: "14:00",
      title: "Computational Universality and Self-replication",
      date: "May 26, 2025",
      description: "",
      speakerIds: ["jordan-cotler"],
      isBreak: false,
    },
    {
      time: "15:30",
      title: "Coffee & Pastry",
      date: "May 26, 2025",
      description: "",
      speakerIds: [],
      isBreak: true,
    },
    {
      time: "16:00",
      title: "Late Afternoon Session",
      date: "May 26, 2025",
      description: "",
      speakerIds: ["sebastian-risi"],
      isBreak: false,
    },
  ],
  "Day 2": [
    {
      time: "10:00",
      title: "Coffee & Croissants",
      date: "May 27, 2025",
      description: "Morning refreshments",
      speakerIds: [],
      isBreak: true,
    },
    {
      time: "10:20",
      title: "Morning Session",
      date: "May 27, 2025",
      description: "",
      speakerIds: ["clement-moulin-frier"],
      isBreak: false,
    },
    {
      time: "11:50",
      title: "Lunch Break & Coffee",
      date: "May 27, 2025",
      description: "",
      speakerIds: [],
      isBreak: true,
    },
    {
      time: "14:00",
      title: "Early Afternoon Session",
      date: "May 27, 2025",
      description: "",
      speakerIds: ["clement-hongler"],
      isBreak: false,
    },
    {
      time: "15:30",
      title: "Coffee & Pastry",
      date: "May 27, 2025",
      description: "",
      speakerIds: [],
      isBreak: true,
    },
    {
      time: "16:00",
      title: "Late Afternoon Session",
      date: "May 27, 2025",
      description: "",
      speakerIds: [
        "alexander-mordvintsev",
        "eyvind-niklasson",
        "ettore-randazzo",
      ],
      isBreak: false,
    },
    {
      time: "19:00",
      title: "Speaker Dinner",
      date: "May 27, 2025",
      description: "Networking and social event",
      speakerIds: [],
      isBreak: true,
    },
  ],
  "Day 3": [
    {
      time: "10:00",
      title: "Coffee & Croissants",
      date: "May 28, 2025",
      description: "Morning refreshments",
      speakerIds: [],
      isBreak: true,
    },
    {
      time: "10:20",
      title: "Automating the Search for Artificial Life with Foundation Models",
      date: "May 28, 2025",
      description: "",
      speakerIds: ["akarsh-kumar"],
      isBreak: false,
    },
    {
      time: "11:50",
      title: "Lunch Break & Coffee",
      date: "May 28, 2025",
      description: "",
      speakerIds: [],
      isBreak: true,
    },
    {
      time: "14:00",
      title: "Complexity in Biological Neural Networks",
      date: "May 28, 2025",
      description: "",
      speakerIds: ["trym-lindell"],
      isBreak: false,
    },
    {
      time: "15:30",
      title: "Coffee & Pastry",
      date: "May 28, 2025",
      description: "",
      speakerIds: [],
      isBreak: true,
    },
    {
      time: "16:00",
      title: "Extended Discussion and Activities",
      date: "May 28, 2025",
      description: "Group discussion and collaborative activities",
      speakerIds: [],
      isBreak: false,
    },
  ],
};

export const getTalkSpeakers = (talk: Talk) => {
  return talk.speakerIds.map((id) => getSpeakerById(id)).filter(Boolean);
};

export const getSpeakerTalks = (speakerId: string): Talk[] => {
  const allTalks: Talk[] = [];
  Object.values(program).forEach((dayTalks) => {
    dayTalks.forEach((talk) => {
      if (talk.speakerIds.includes(speakerId)) {
        allTalks.push(talk);
      }
    });
  });
  return allTalks;
};
