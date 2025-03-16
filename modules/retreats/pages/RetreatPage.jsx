import { GalleryModal } from "@/modules/shared/components/GalleryModal";

const RetreatPage = ({ retreat }) => {
  return (
    <div className="container p-16 mx-auto">
      <GalleryModal retreat={retreat} />
    </div>
  );
};

export default RetreatPage;
