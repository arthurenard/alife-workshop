"use client";

import { Speaker } from "@/types";
import ItemsGrid from "./ItemsGrid";

interface PeopleGridProps {
  id: string;
  title: string;
  items: Speaker[];
  description?: React.ReactNode;
  onPersonClick: (person: Speaker) => void;
}

export default function PeopleGrid({
  id,
  title,
  items,
  description,
  onPersonClick,
}: PeopleGridProps) {
  return (
    <ItemsGrid
      id={id}
      title={title}
      items={items}
      description={description}
      renderImage={(person) => ({
        src: person.image,
        alt: person.name,
        className: "object-cover rounded-full",
        containerClassName: "relative w-48 h-48 mb-6",
      })}
      renderSubtitle={(person) => (
        <p className="text-white/80 text-center">{person.institution}</p>
      )}
      onItemClick={onPersonClick}
    />
  );
}
