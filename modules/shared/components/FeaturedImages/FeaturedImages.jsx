import Icon from "@/modules/shared/components/Icon";

const FeaturedImages = ({ images, label = "", onImageClick }) => {
  const featuredPhotos = images.slice(0, 4);

  const getColumnSpan = (index) => {
    if (index === 0) return "md:col-span-3 md:row-span-3";
    if (index === 1) return "md:col-span-2 md:row-span-2";
    if (index === 2 || index === 3) return "md:col-span-1 md:row-span-1";
    return;
  };

  const getRoundedBorder = (index) => {
    if (index === 0) return "max-md:rounded-lg md:rounded-tl-2xl md:rounded-bl-2xl";
    if (index === 1) return "max-md:rounded-lg md:rounded-tr-2xl";
    if (index === 2) return "max-md:rounded-lg";
    if (index === 3) return "max-md:rounded-lg md:rounded-br-2xl";
    return;
  };

  return (
    <div className="grid grid-cols-1 grid-rows-4 gap-4 md:grid-cols-5 md:grid-rows-2 md:gap-4 w-full md:h-[500px]">
      {featuredPhotos.map((photo, index) => (
        <div
          key={index}
          className={`${getColumnSpan(index)} ${getRoundedBorder(
            index
          )} overflow-hidden relative transition-transform duration-300 hover:scale-[1.02]`}
        >
          {label && index === 0 && (
            <div className="absolute top-0 left-0 bg-green-500 text-white text-sm font-semibold w-fit px-3 py-3 rounded-br-lg flex items-center gap-2">
              <Icon name="eco" />
              {label.toUpperCase()}
            </div>
          )}
          <img
            onClick={onImageClick}
            alt={`retreat photo ${index + 1}`}
            className="w-full h-full object-cover"
            src={`https://BookRetreats.com${photo.url}`}
          />
        </div>
      ))}
    </div>
  );
};

export default FeaturedImages;
