"use client";

import { useState } from "react";
import { FullWidthModal } from "@/modules/shared/components/FullWidthModal";
import { MasonryImageGird } from "@/modules/shared/components/MasonryImageGird";
import { FeaturedContentGrid } from "@/modules/shared/components/FeaturedContentGrid";

const GalleryModal = ({ retreatImages, foodImages, reviewsImages, featuredVideo, featuredImage }) => {
  const [isFullWidthModalOpen, setIsFullWidthModalOpen] = useState(false);

  return (
    <div className="container">
      <FeaturedContentGrid
        otherImages={retreatImages}
        featuredVideo={featuredVideo}
        featuredImage={featuredImage}
        onContentClick={() => setIsFullWidthModalOpen(true)}
      />
      <FullWidthModal isOpen={isFullWidthModalOpen} onClose={() => setIsFullWidthModalOpen(false)}>
        {!!retreatImages.length && <MasonryImageGird title="Retreat Photos" images={retreatImages} />}
        {!!reviewsImages.length && <MasonryImageGird title="Reviews Photos" images={reviewsImages} />}
        {!!foodImages.length && <MasonryImageGird title="Food Photos" images={foodImages} />}
      </FullWidthModal>
    </div>
  );
};

export default GalleryModal;
