import Icon from "@/modules/shared/components/Icon";

const FeaturedImagesGrid = ({ images, label = "", onImageClick }) => {
  const featuredImages = images.slice(0, 4);

  const getColumnSpan = (index) => {
    const spans = {
      0: "md:col-span-3 md:row-span-3",
      1: "md:col-span-2 md:row-span-2",
      2: "md:col-span-1 md:row-span-1",
      3: "md:col-span-1 md:row-span-1",
    };

    return spans[index] || "";
  };

  const getRoundedBorder = (index) => {
    const borders = {
      0: "max-md:rounded-lg md:rounded-tl-2xl md:rounded-bl-2xl",
      1: "max-md:rounded-lg md:rounded-tr-2xl",
      2: "max-md:rounded-lg",
      3: "max-md:rounded-lg md:rounded-br-2xl",
    };

    return borders[index] || "";
  };

  return (
    <div className="grid grid-cols-1 grid-rows-4 gap-4 md:grid-cols-5 md:grid-rows-2 md:h-[500px]">
      {featuredImages.map((image, index) => (
        <div
          key={index}
          className={`${getColumnSpan(index)} ${getRoundedBorder(
            index
          )} overflow-hidden relative transition-transform duration-300 hover:scale-[1.02]`}
        >
          {label && index === 0 && (
            <div className="absolute top-0 left-0 bg-green-500 text-white text-sm font-semibold px-3 py-3 rounded-br-lg flex items-center gap-2">
              <Icon name="eco" />
              {label.toUpperCase()}
            </div>
          )}
          <img
            onClick={onImageClick}
            alt={`featured image ${index + 1}`}
            className="w-full h-full object-cover"
            src={`https://BookRetreats.com${image.url}`}
          />
        </div>
      ))}
    </div>
  );
};

export default FeaturedImagesGrid;
