"use client";

import { Speaker } from "@/types";
import { organizers, organizersDescription } from "@/data/organizers";
import PeopleGrid from "./ui/PeopleGrid";

interface OrganizersProps {
  onOrganizerClick: (organizer: Speaker) => void;
}

export default function Organizers({ onOrganizerClick }: OrganizersProps) {
  return (
    <PeopleGrid
      id="organizers"
      title="Organizers"
      items={organizers}
      description={<p>{organizersDescription}</p>}
      onPersonClick={onOrganizerClick}
    />
  );
}
