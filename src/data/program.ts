import { Talk } from "@/types";
import { getSpeakerById } from "./speakers";

// Fake data

export const program: Record<string, Talk[]> = {
  "Day 1": [
    {
      time: "9:45",
      title: "Coffee, Croissants & Registration",
      date: "May 26, 2025",
      description: "Morning refreshments",
      speakerIds: [],
      isBreak: true,
    },
    {
      time: "10:00",
      title: "Opening words",
      date: "May 26, 2025",
      description: "",
      speakerIds: [],
      isBreak: false,
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
      title: "Emergent Phenomena in Neural Cellular Automata",
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
      title: "Self-organization of agents and ecosystems from scratch in (Flow-)Lenia",
      date: "May 27, 2025",
      description: `Originally there is only a lifeless environment, in an initial state where there is literally __no body__ (and thus no sensing, no acting, no agent, no evolution). How then, can parts of this environment self-organize structures giving rise to the first functional forms of life and bootstrap their evolution? 
      
      In this talk, we will approach this fundamental question using methods from Artificial Life and Artificial Intelligence. We will consider a recent class of parameterized continuous cellular automata called Lenia [1] as our artificial world. Update rules in Lenia are parameterized, enabling the simulation of very diverse self-organizing dynamics, some of them resembling artificial life forms. 
      
      In a first contribution [2], we will search for environment rules that self-organize robust "individuals" from an initial state with no prior existence of concepts such as \"bodies\", \"brain\", \"perception\" or \"action\". We will leverage diversity-search machine learning algorithms to explore the vast space of Lenia parameters and automate the search of such "individuals". We will show that this approach enables the discovery of localized structures that move around with the ability to react in a coherent manner to external obstacles and maintain their integrity, hence primitive forms of sensorimotor agency. 
      
      In a second contribution, we will introduce Flow-Lenia [3], a mass conservative extension of Lenia with parameter localization, enabling the simulation of diverse self-organizing structures within the same environment. We will see how emergent evolutionary dynamics can arise in this system, resulting in large-scale artificial ecosystem simulations and analyzed through various complexity measures. 
      
      Finally, we will introduce late-breaking experiments where we will automate the search of diverse ecosystem dynamics covering a wide range of complexity measures in Flow-Lenia.

      [1] Chan, B. W. C. (2020). Lenia and expanded universe. In __Artificial Life Conference Proceedings 32__ (pp. 221-229). https://direct.mit.edu/isal/proceedings/isal2020/32/221/98400

      [2] Hamon, G., Etcheverry, M., Chan, B. W. C., Moulin-Frier, C., & Oudeyer, P. Y. (2024, under review). Discovering Sensorimotor Agency in Cellular Automata using Diversity Search.

      - Paper: https://arxiv.org/abs/2402.10236
      - Interactive blog post: https://developmentalsystems.org/sensorimotor-lenia/

      [3] Plantec, E., Hamon, G., Etcheverry, M., Oudeyer, P. Y., Moulin-Frier, C., & Chan, B. W. C. (2023). Flow-Lenia: Towards open-ended evolution in cellular automata through mass conservation and parameter localization. In __Artificial Life Conference Proceedings 35__ (Vol. 2023, No. 1, p. 131). Best paper award.

      - Paper: https://direct.mit.edu/isal/proceedings/isal2023/35/131/116921
      - Demo video: https://youtu.be/bAJIETmC-6o`,
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
      title: "The Life of Games",
      date: "May 27, 2025",
      description: "Do LLMs know their own measure? By investigating the gap between the explicit and the implicit knowledge of LLMs, we are led to consider a class of information games playable by LLM agents. This space of games is very rich and possesses interesting properties. We propose to use an evolutionary dynamics in this space as a means to measure, in a theoretically motivated way, the general capabilities of LLMs.",
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
      title: "Life in Z80",
      date: "May 27, 2025",
      description: "",
      speakerIds: ["eyvind-niklasson"],
      isBreak: false,
    },
    {
      time: "16:40",
      title: "Meta diversity search for the open-ended discovery of self-organized structures",
      date: "May 27, 2025",
      description: "This presentation will explore the limitations of conventional diversity-driven approaches that rely on monolithic behavioral descriptions in the context of open-ended discovery of self-organized structures. I'll then propose a shift from standard diversity search to what I call *meta*-diversity search, whose core idea is to continuously learn and expand the ways in which a system's behaviors can be characterized and explored.",
      speakerIds: ["mayalen-etcheverry"],
      isBreak: false,
    },
    {
      time: "17:20",
      title: "Intriguing properties of randomly-wired boolean circuits",
      date: "May 27, 2025",
      description: "Traditional digital circuit design hinges on precise gate connectivity. This presentation explores a radical alternative: randomly wired circuits where only gate functions are tunable. We investigate the intriguing question of whether such a \"mess of wires\" can be transformed into a useful computing device, and present methods for achieving this.",
      speakerIds: ["alexander-mordvintsev"],
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
      description: `The brain is perhaps the most complex system we know of. This complexity reaches across all levels of organization, from the internal workings of neurons to large scale brain networks. It also extends to the dynamics of biological neural networks which can display a wide range of complex patterns. 
However, this complexity can also break down which is associated with different clinical outcomes and can reduce information processing capacities.

Thus, neuroscientists and psychologists have an increasing interest in studying the brain from a complexity perspective, both motivated by scientific curiosity and the potential of better understanding clinical disorders. Therefor a wide range of methods to study and measure complexity in the brain and other forms of biological neural networks have been adopted.

This talk will give an overview of some of the main families of methods and perspectives used to study complexity in brain with a focus on criticality, complex network science and consciousness measures like integrated information.`,
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
