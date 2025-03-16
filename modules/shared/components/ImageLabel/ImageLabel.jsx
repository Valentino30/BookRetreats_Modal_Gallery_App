import Icon from "@/modules/shared/components/Icon";

const ImageLabel = ({ label = "label placeholder", labelColor, labelIcon }) => {
  return (
    <div
      className={`absolute top-0 left-0 ${labelColor} text-white text-sm font-semibold px-3 py-3 rounded-br-lg flex items-center gap-2`}
    >
      <Icon name={labelIcon} />
      {label.toUpperCase()}
    </div>
  );
};

export default ImageLabel;
