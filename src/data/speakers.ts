import { Speaker } from "@/types";

// Fake data

export const speakers: Speaker[] = [
  // {
  //   id: "clement-hongler",
  //   name: "Clément Hongler",
  //   institution: "EPFL",
  //   website: "https://www.hongler.org/",
  //   image: "/speakers/clement-hongler.jpg",
  //   biography:
  //     "Professor at EPFL specializing in mathematical physics and complex systems...",
  // },
  // {
  //   id: "vassilis-papadopoulos",
  //   name: "Vassilis Papadopoulos",
  //   institution: "EPFL",
  //   website: "https://vassi.life/",
  //   image: "/speakers/vassilis-papadopoulos.jpg",
  //   biography:
  //     "Professor at EPFL specializing in mathematical physics and complex systems...",
  // },
  // {
  //   id: "barbora-hudcova",
  //   name: "Barbora Hudcová",
  //   institution: "EPFL",
  //   website: "https://www.barahudcova.com/",
  //   image: "/speakers/bara-hudcova.jpg",
  // },

  {
    id: "jordan-cotler",
    name: "Jordan Cotler",
    institution: "Harvard University",
    website: "",
    image: "/speakers/jordan-cotler.jpeg",
    biography: "Assistant Professor at Harvard University",
  },
  {
    id: "clement-hongler",
    name: "Clément Hongler",
    institution: "EPFL",
    website: "https://www.hongler.org/",
    image: "/organizers/clement-hongler.jpg",
    biography:
      "Professor at EPFL, head of the Chair of Statistical Field Theory.",
  },

  {
    id: "akarsh-kumar",
    name: "Akarsh Kumar",
    institution: "MIT, Sakana AI",
    website: "",
    image: "/speakers/akarsh-kumar.jpg",
    biography:
      "Ph.D. Student at MIT and Research Scientist Intern at Sakana AI",
  },
  {
    id: "trym-lindell",
    name: "Trym A.E. Lindell",
    institution: "Oslo Metropolitan University",
    website: "",
    image: "/speakers/trym-lindell.jpg",
    biography: "Assistant Professor at Oslo Metropolitan University.",
  },
  {
    id: "clement-moulin-frier",
    name: "Clément Moulin-Frier",
    institution: "Inria, Bordeaux",
    website: "",
    image: "/speakers/clement-moulin-frier.jpg",
    biography: "Researcher at Flowers lab, Inria, Bordeaux",
  },
  {
    id: "sebastian-risi",
    name: "Sebastian Risi",
    institution: "IT University of Copenhagen",
    website: "",
    image: "/speakers/sebastian-risi.png",
    biography: "Professor at IT Univesity of Copenhagen",
  },
];

export const getSpeakerById = (id: string): Speaker | undefined => {
  return speakers.find((speaker) => speaker.id === id);
};
