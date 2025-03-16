"use client";

import { useState } from "react";
import { FullWidthModal } from "@/modules/shared/components/FullWidthModal";
import { MasonryImageGird } from "@/modules/shared/components/MasonryImageGird";
import { FeaturedImagesGrid } from "@/modules/shared/components/FeaturedImagesGrid";

const GalleryModal = ({ retreat }) => {
  const [isFullWidthModalOpen, setIsFullWidthModalOpen] = useState(false);

  return (
    <div className="container">
      <h1 className="text-3xl font-bold mb-8">{retreat.title}</h1>
      <FeaturedImagesGrid
        images={retreat.photos}
        onImageClick={() => setIsFullWidthModalOpen(true)}
        label={"Bookretreats are certified carbon neutral"}
      />
      <FullWidthModal
        isOpen={isFullWidthModalOpen}
        retreatImages={retreat.photos}
        foodImages={retreat.foodPhotos}
        reviewsImages={retreat.reviewPhotos}
        onClose={() => setIsFullWidthModalOpen(false)}
      >
        {!!retreat.photos.length && <MasonryImageGird title="Retreat Photos" images={retreat.photos} />}
        {!!retreat.foodPhotos.length && <MasonryImageGird title="Review Photos" images={retreat.foodPhotos} />}
        {!!retreat.reviewPhotos.length && <MasonryImageGird title="Food Photos" images={retreat.reviewPhotos} />}
      </FullWidthModal>
    </div>
  );
};

export default GalleryModal;
