import { Talk } from "@/types";
import { getSpeakerById } from "./speakers";

// Fake data

export const program: Record<string, Talk[]> = {
  "Day 1": [
    {
      time: "10:00",
      title: "Coffee & Croissants",
      date: "June 24, 2024",
      description: "Morning refreshments",
      speakerIds: [],
    },
    {
      time: "10:20",
      title: "Complex Patterns in Lenia",
      date: "June 24, 2024",
      description: "",
      speakerIds: ["bert-chan"], // Note: Chan is not in speakers.ts, needs to be added
    },
    {
      time: "11:50",
      title: "Lunch Break",
      date: "June 24, 2024",
      description: "",
      speakerIds: [],
    },
    {
      time: "13:30",
      title: "Coffee Break",
      date: "June 24, 2024",
      description: "",
      speakerIds: [],
    },
    {
      time: "14:00",
      title: "Computational Universality and Self-replication",
      date: "June 24, 2024",
      description: "",
      speakerIds: ["jordan-cotler"],
    },
    {
      time: "15:30",
      title: "Coffee & Pastry",
      date: "June 24, 2024",
      description: "",
      speakerIds: [],
    },
    {
      time: "16:00",
      title: "Late Afternoon Session",
      date: "June 24, 2024",
      description: "",
      speakerIds: ["sebastian-risi"],
    },
  ],
  "Day 2": [
    {
      time: "10:00",
      title: "Coffee & Croissants",
      date: "June 25, 2024",
      description: "Morning refreshments",
      speakerIds: [],
    },
    {
      time: "10:20",
      title: "Morning Session",
      date: "June 25, 2024",
      description: "",
      speakerIds: ["clement-moulin-frier"],
    },
    {
      time: "11:50",
      title: "Lunch Break",
      date: "June 25, 2024",
      description: "",
      speakerIds: [],
    },
    {
      time: "13:30",
      title: "Coffee Break",
      date: "June 25, 2024",
      description: "",
      speakerIds: [],
    },
    {
      time: "14:00",
      title: "Early Afternoon Session",
      date: "June 25, 2024",
      description: "",
      speakerIds: ["clement-hongler"],
    },
    {
      time: "15:30",
      title: "Coffee & Pastry",
      date: "June 25, 2024",
      description: "",
      speakerIds: [],
    },
    {
      time: "16:00",
      title: "Late Afternoon Session",
      date: "June 25, 2024",
      description: "",
      speakerIds: [
        "alexander-mordvintsev",
        "eyvind-niklasson",
        "ettore-randazzo",
      ],
    },
  ],
  "Day 3": [
    {
      time: "10:00",
      title: "Coffee & Croissants",
      date: "June 26, 2024",
      description: "Morning refreshments",
      speakerIds: [],
    },
    {
      time: "10:20",
      title: "Automating the Search for Artificial Life with Foundation Models",
      date: "June 26, 2024",
      description: "",
      speakerIds: ["akarsh-kumar"],
    },
    {
      time: "11:50",
      title: "Lunch Break",
      date: "June 26, 2024",
      description: "",
      speakerIds: [],
    },
    {
      time: "13:30",
      title: "Coffee Break",
      date: "June 26, 2024",
      description: "",
      speakerIds: [],
    },
    {
      time: "14:00",
      title: "Complexity in Biological Neural Networks",
      date: "June 26, 2024",
      description: "",
      speakerIds: ["trym-lindell"],
    },
    {
      time: "15:30",
      title: "Coffee & Pastry",
      date: "June 26, 2024",
      description: "",
      speakerIds: [],
    },
    {
      time: "16:00",
      title: "Extended Discussion and Activities",
      date: "June 26, 2024",
      description: "Group discussion and collaborative activities",
      speakerIds: [],
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
