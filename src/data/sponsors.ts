import { GridItem } from "@/components/ui/ItemsGrid";

export interface Sponsor extends GridItem {
  website: string;
}

export const sponsors: Sponsor[] = [
  {
    name: "Bernoulli Center",
    image: "/sponsors/Bernoulli-Center.png",
    website: "https://bernoulli.epfl.ch/",
  },
  {
    name: "EPFL",
    image: "/sponsors/epfl.png",
    website: "https://www.epfl.ch/en/",
  },
];
