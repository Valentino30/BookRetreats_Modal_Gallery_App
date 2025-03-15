const Gallery = ({ title, images }) => {
  const getRandomSpan = () => {
    const randomColSpan = Math.floor(Math.random() * 2) + 1;
    return `md:col-span-${randomColSpan} md:row-span-${randomColSpan}`;
  };

  return (
    <div className="grid md:grid-cols-3 gap-4 w-full">
      <div className="md:col-span-1">
        <h1 className="text-3xl font-bold mb-8">{title}</h1>
      </div>
      <div className="grid gap-4 md:col-span-2">
        {images.map((image, index) => (
          <img
            key={index}
            alt={`retreat image ${index + 1}`}
            src={`https://BookRetreats.com${image.url}`}
            className={`w-full h-full object-cover rounded-lg ${getRandomSpan()}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
