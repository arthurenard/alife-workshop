"use client";

import ItemsGrid from "./ui/ItemsGrid";
import { sponsors, Sponsor } from "@/data/sponsors";

export default function Sponsors() {
  const handleSponsorClick = (sponsor: Sponsor) => {
    window.open(sponsor.website, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="sponsors">
      <ItemsGrid
        id="sponsors"
        title="Our Sponsors"
        items={sponsors}
        renderImage={(sponsor) => ({
          src: sponsor.image,
          alt: sponsor.name,
          className: "object-contain px-2",
          containerClassName:
            "relative w-64 h-32 bg-white rounded-lg mb-6 md:mb-6",
        })}
        onItemClick={handleSponsorClick}
        mobileImageContainerClassName="relative w-16 h-16 flex-shrink-0 bg-white rounded-lg"
      />
    </section>
  );
}
