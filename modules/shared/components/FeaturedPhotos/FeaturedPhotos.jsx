const FeaturedPhotos = ({ photos }) => {
  const featuredPhotos = photos.slice(0, 4);

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
          )} overflow-hidden transition-transform duration-300 hover:scale-[1.02]`}
        >
          <img
            alt={`retreat photo ${index + 1}`}
            className="w-full h-full object-cover"
            src={`https://BookRetreats.com${photo.url}`}
          />
        </div>
      ))}
    </div>
  );
};

export default FeaturedPhotos;
