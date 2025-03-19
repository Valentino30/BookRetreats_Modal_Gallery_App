const MasonryImageGird = ({ title, images }) => {
  const getRandomSpan = (index) => {
    return index % 3 === 0 ? "md:col-span-2 md:row-span-2" : "md:col-span-1 md:row-span-1";
  };

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <div className="md:col-span-1">
        <h1 className="text-3xl font-bold mb-8">{title}</h1>
      </div>
      <div className="md:col-span-2 grid grid-cols-1 gap-4 md:grid-cols-3 grid-auto-flow-dense">
        {images.map((image, index) => (
          <div key={index} className={`${getRandomSpan(index)}`}>
            <img src={image.url} alt={`masonry image ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MasonryImageGird;
