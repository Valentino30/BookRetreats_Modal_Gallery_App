"use client";

import { useState } from "react";
import { FullWidthModal } from "@/modules/shared/components/FullWidthModal";
import { MasonryImageGird } from "@/modules/shared/components/MasonryImageGird";
import { FeaturedImagesGrid } from "@/modules/shared/components/FeaturedImagesGrid";

const GalleryModal = ({ retreatImages, foodImages, reviewsImages }) => {
  const [isFullWidthModalOpen, setIsFullWidthModalOpen] = useState(false);

  return (
    <div className="container">
      <FeaturedImagesGrid images={retreatImages} onImageClick={() => setIsFullWidthModalOpen(true)} />
      <FullWidthModal isOpen={isFullWidthModalOpen} onClose={() => setIsFullWidthModalOpen(false)}>
        {!!retreatImages.length && <MasonryImageGird title="Retreat Photos" images={retreatImages} />}
        {!!reviewsImages.length && <MasonryImageGird title="Reviews Photos" images={reviewsImages} />}
        {!!foodImages.length && <MasonryImageGird title="Food Photos" images={foodImages} />}
      </FullWidthModal>
    </div>
  );
};

export default GalleryModal;
