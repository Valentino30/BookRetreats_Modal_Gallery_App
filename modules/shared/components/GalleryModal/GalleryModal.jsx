import Icon from "@/modules/shared/components/Icon";
import { MasonryImageGird } from "@/modules/shared/components/MasonryImageGird";

const GalleryModal = ({ isOpen, onClose, retreatImages = [], reviewsImages = [], foodImages = [] }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white p-4">
      <button onClick={onClose} className="absolute top-4 right-4 rounded-full p-2 hover:bg-gray-100 transition-colors">
        <Icon name="x" color="gray" />
      </button>
      <div className="flex flex-col w-full h-full p-12 overflow-y-auto scrollbar-thin gap-8">
        <div>{!!retreatImages.length && <MasonryImageGird title="Retreat Photos" images={retreatImages} />}</div>
        <div>{!!reviewsImages.length && <MasonryImageGird title="Review Photos" images={reviewsImages} />}</div>
        <div>{!!foodImages.length && <MasonryImageGird title="Food Photos" images={foodImages} />}</div>
      </div>
    </div>
  );
};

export default GalleryModal;
