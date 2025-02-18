"use client";

import { Speaker } from "@/types";
import ItemsGrid from "./ui/ItemsGrid";
import { organizers, organizersDescription } from "@/data/organizers";

interface OrganizersProps {
  onOrganizerClick: (organizer: Speaker) => void;
}

export default function Organizers({ onOrganizerClick }: OrganizersProps) {
  return (
    <ItemsGrid
      id="organizers"
      title="Organizers"
      items={organizers}
      description={<p>{organizersDescription}</p>}
      renderImage={(organizer) => ({
        src: organizer.image,
        alt: organizer.name,
        className: "object-cover rounded-full",
        containerClassName: "relative w-48 h-48 mb-6",
      })}
      renderSubtitle={(organizer) => (
        <p className="text-white/80 text-center">{organizer.institution}</p>
      )}
      onItemClick={onOrganizerClick}
    />
  );
}
