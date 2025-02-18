import { Speaker } from "@/types";

export const organizersDescription = `The event is hosted by the EPFL Bernoulli Center, a leading research unit dedicated to advancing the study of complex systems and artificial life. Our organizers are renowned experts in their fields, committed to fostering innovation and collaboration.`;

// Reusing speaker profiles for organizers temporarily
export const organizers: Speaker[] = [
  {
    id: "clement-hongler",
    name: "Clément Hongler",
    institution: "EPFL",
    website: "https://www.hongler.org/",
    image: "/speakers/clement-hongler.jpg",
    biography:
      "Professor at EPFL and head of the complex systems laboratory...",
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

export const getOrganizerById = (id: string): Speaker | undefined => {
  return organizers.find((organizer) => organizer.id === id);
};
