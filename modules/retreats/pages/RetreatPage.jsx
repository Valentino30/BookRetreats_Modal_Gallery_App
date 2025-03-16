"use client";

import { useState } from "react";
import { FullWidthModal } from "@/modules/shared/components/FullWidthModal";
import { FeaturedImages } from "@/modules/shared/components/FeaturedImages";
import { MasonryImageGird } from "@/modules/shared/components/MasonryImageGird";

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
      <FullWidthModal
        isOpen={isGalleryModalOpen}
        retreatImages={retreat.photos}
        foodImages={retreat.foodPhotos}
        reviewsImages={retreat.reviewPhotos}
        onClose={() => setIsGalleryModalOpen(false)}
      >
        {!!retreat.photos.length && <MasonryImageGird title="Retreat Photos" images={retreat.photos} />}
        {!!retreat.foodPhotos.length && <MasonryImageGird title="Review Photos" images={retreat.foodPhotos} />}
        {!!retreat.reviewPhotos.length && <MasonryImageGird title="Food Photos" images={retreat.reviewPhotos} />}
      </FullWidthModal>
    </div>
  );
};

export default RetreatPage;
