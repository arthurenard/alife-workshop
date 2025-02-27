import { Speaker } from "@/types";

export const organizersDescription = ""; // `The event is hosted by the EPFL Bernoulli Center, a leading research unit dedicated to advancing the study of complex systems and artificial life. Our organizers are renowned experts in their fields, committed to fostering innovation and collaboration.`;

// Reusing speaker profiles for organizers temporarily
export const organizers: Speaker[] = [
  // {
  //   id: "clement-hongler",
  //   name: "Clément Hongler",
  //   institution: "EPFL",
  //   website: "https://www.hongler.org/",
  //   image: "/organizers/clement-hongler.jpg",
  //   biography:
  //     "Professor at EPFL, head of the Chair of Statistical Field Theory.",
  // },
  {
    id: "vassilis-papadopoulos",
    name: "Vassilis Papadopoulos",
    institution: "EPFL",
    website: "https://vassi.life/",
    image: "/organizers/vassilis-papadopoulos.jpg",
    biography:
      "I am a theoretical physicist, now working on more applied aspects of Artificial Life. I am particularly interested in developing methods that allow to generate interesting dynamics at scale (probably using machine learning, but not necessarily!).",
  },
  {
    id: "barbora-hudcova",
    name: "Barbora Hudcová",
    institution: "EPFL",
    website: "https://www.barahudcova.com/",
    image: "/organizers/barbora-hudcova.jpg",
    biography:
      "I am a researcher at the border between mathematics and computer science, fascinated with emergent behaviour of dynamical systems. I am currently studying complex systems as models of self-replication and universal computation.",
  },
];

export const getOrganizerById = (id: string): Speaker | undefined => {
  return organizers.find((organizer) => organizer.id === id);
};
