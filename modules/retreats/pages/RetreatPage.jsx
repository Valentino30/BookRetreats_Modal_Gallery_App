import { GalleryModal } from "@/modules/shared/components/GalleryModal";

const RetreatPage = ({ retreat }) => {
  return (
    <div className="container p-16 mx-auto">
      <h1 className="text-3xl font-bold mb-8">{retreat.title}</h1>
      <GalleryModal
        retreatImages={retreat.photos}
        reviewsImages={retreat.reviewPhotos}
        foodImages={retreat.foodPhotos}
      />
    </div>
  );
};

export default RetreatPage;
