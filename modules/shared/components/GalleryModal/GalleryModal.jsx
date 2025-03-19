"use client";

import { useState } from "react";
import { VideoPlayer } from "@/modules/shared/components/VideoPlayer";
import { FullWidthModal } from "@/modules/shared/components/FullWidthModal";
import { MasonryImageGird } from "@/modules/shared/components/MasonryImageGird";
import { FeaturedContentGrid } from "@/modules/shared/components/FeaturedContentGrid";

const GalleryModal = ({ retreatImages, foodImages, reviewsImages, featuredVideo, featuredImage }) => {
  const [isFullWidthImageModalOpen, setIsFullWidthImageModalOpen] = useState(false);
  const [isFullWidthVideoModalOpen, setIsFullWidthVideoModalOpen] = useState(false);

  return (
    <div className="container">
      <FeaturedContentGrid
        otherImages={retreatImages}
        featuredVideo={featuredVideo}
        featuredImage={featuredImage}
        onImageClick={() => setIsFullWidthImageModalOpen(true)}
        onVideoClick={() => setIsFullWidthVideoModalOpen(true)}
      />
      {/* Image Modal */}
      <FullWidthModal
        withNavigation
        isOpen={isFullWidthImageModalOpen}
        onClose={() => setIsFullWidthImageModalOpen(false)}
      >
        {!!retreatImages.length && <MasonryImageGird title="Retreat Photos" images={retreatImages} />}
        {!!reviewsImages.length && <MasonryImageGird title="Reviews Photos" images={reviewsImages} />}
        {!!foodImages.length && <MasonryImageGird title="Food Photos" images={foodImages} />}
      </FullWidthModal>
      {/* Video Modal */}
      <FullWidthModal isOpen={isFullWidthVideoModalOpen} onClose={() => setIsFullWidthVideoModalOpen(false)}>
        {!!featuredVideo.id && <VideoPlayer video={featuredVideo} />}
      </FullWidthModal>
    </div>
  );
};

export default GalleryModal;
