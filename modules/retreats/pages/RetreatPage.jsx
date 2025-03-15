import { FeaturedPhotos } from "@/modules/shared/components/FeaturedPhotos";

const RetreatPage = ({ retreat }) => {
  return (
    <div className="container p-16 mx-auto">
      <h1 className="text-3xl font-bold mb-8">{retreat.title}</h1>
      <FeaturedPhotos photos={retreat.photos} label={"Bookretreats are certified carbon neutral"} />
    </div>
  );
};

export default RetreatPage;
