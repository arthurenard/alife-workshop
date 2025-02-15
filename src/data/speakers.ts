import { Speaker } from "@/types";

// Fake data

export const speakers: Speaker[] = [
  {
    id: "clement-hongler",
    name: "Clément Hongler",
    institution: "EPFL",
    website: "https://www.hongler.org/",
    image: "/speakers/clement-hongler.jpg",
  },
  {
    id: "vassilis-papadopoulos",
    name: "Vassilis Papadopoulos",
    institution: "EPFL",
    website: "https://vassi.life/",
    image: "/speakers/vassilis-papadopoulos.jpg",
  },
  {
    id: "barbora-hudcova",
    name: "Barbora Hudcová",
    institution: "EPFL",
    website: "https://www.barahudcova.com/",
    image: "/speakers/bara-hudcova.jpg",
  },
];

export const getSpeakerById = (id: string): Speaker | undefined => {
  return speakers.find((speaker) => speaker.id === id);
};
