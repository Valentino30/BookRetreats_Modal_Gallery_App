import Icon from "../Icon";

const GalleryModal = ({ isOpen, onClose, retreatImages }) => {
  if (!isOpen) return null;

  const getRandomSpan = () => {
    const randomColSpan = Math.floor(Math.random() * 2) + 1;
    return `md:col-span-${randomColSpan} md:row-span-${randomColSpan}`;
  };

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50 p-4 transition-opacity duration-500">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 transition-colors"
      >
        <Icon name="x" />
      </button>
      <div className="w-full h-full overflow-y-auto p-12">
        {retreatImages.length && (
          <div className="grid md:grid-cols-3 gap-4 w-full md:h-[500px]">
            <div className="md:col-span-1">
              <h1 className="text-3xl font-bold mb-8">Retreat Photos</h1>
            </div>
            <div className="grid gap-4 md:col-span-2">
              {retreatImages.map((photo, index) => (
                <img
                  key={index}
                  alt={`retreat photo ${index + 1}`}
                  src={`https://BookRetreats.com${photo.url}`}
                  className={`w-full h-full object-cover rounded-lg ${getRandomSpan()}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryModal;
