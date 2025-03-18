import { GalleryModal } from "@/modules/shared/components/GalleryModal";

const RetreatPage = ({ retreat }) => {
  return (
    <div className="container p-16 mx-auto">
      <h1 className="text-3xl font-bold mb-8">{retreat.title}</h1>
      <GalleryModal
        retreatImages={retreat.photos}
        foodImages={retreat.foodPhotos}
        reviewsImages={retreat.reviewPhotos}
        featuredVideo={retreat.featuredVideo}
        featuredImage={retreat.featuredPhoto}
      />
    </div>
  );
};

export default RetreatPage;
