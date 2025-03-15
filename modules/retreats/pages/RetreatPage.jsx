"use client";

import { useState } from "react";
import { GalleryModal } from "@/modules/shared/components/GalleryModal";
import { FeaturedImages } from "@/modules/shared/components/FeaturedImages";

const RetreatPage = ({ retreat }) => {
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);

  return (
    <div className="container p-16 mx-auto">
      <h1 className="text-3xl font-bold mb-8">{retreat.title}</h1>
      <FeaturedImages
        images={retreat.photos}
        onImageClick={() => setIsGalleryModalOpen(true)}
        label={"Bookretreats are certified carbon neutral"}
      />
      <GalleryModal
        isOpen={isGalleryModalOpen}
        retreatImages={retreat.photos}
        onClose={() => setIsGalleryModalOpen(false)}
      />
    </div>
  );
};

export default RetreatPage;
