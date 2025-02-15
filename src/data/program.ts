import { Talk } from "@/types";
import { getSpeakerById } from "./speakers";

// Fake data

export const program: Record<string, Talk[]> = {
  "Day 1": [
    {
      time: "09:00",
      title: "Registration & Coffee",
      date: "May 26, 2024",
      description: "",
      speakerIds: [],
    },
    {
      time: "10:00",
      title: "Opening Keynote: Complexity in Cellular Automata",
      date: "May 26, 2024",
      description:
        "An exploration of emergence and complexity in cellular automata systems, focusing on pattern formation and self-organization.",
      speakerIds: ["clement-hongler"],
    },
    {
      time: "11:30",
      title: "Panel Discussion: Future of AI in Complex Systems",
      date: "May 26, 2024",
      description:
        "A panel discussion on the future role of AI in understanding and developing complex systems.",
      speakerIds: ["vassilis-papadopoulos", "barbora-hudcova"],
    },
    {
      time: "14:00",
      title: "Workshop: Hands-on with Cellular Automata",
      date: "May 26, 2024",
      description:
        "A practical workshop exploring cellular automata and their applications.",
      speakerIds: ["clement-hongler", "barbora-hudcova"],
    },
  ],
  "Day 2": [
    {
      time: "09:00",
      title: "Keynote: Emergence in Artificial Life",
      date: "May 27, 2024",
      description:
        "Exploring the concept of emergence in artificial life systems.",
      speakerIds: ["barbora-hudcova"],
    },
    {
      time: "11:00",
      title: "Talk: Complexity Measures in AI",
      date: "May 27, 2024",
      description:
        "Discussing various measures of complexity in artificial intelligence.",
      speakerIds: ["vassilis-papadopoulos"],
    },
  ],
  "Day 3": [
    {
      time: "09:00",
      title: "Closing Keynote: The Future of Complexity Science",
      date: "May 28, 2024",
      description:
        "A look into the future of complexity science and its potential impacts.",
      speakerIds: ["clement-hongler", "vassilis-papadopoulos"],
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
