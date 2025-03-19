import Icon from "@/modules/shared/components/Icon";
import { ContentSection } from "@/modules/shared/components/ContentSection";
import { ContentSectionNavBar } from "@/modules/shared/components/ContentSectionNavBar";

const FullWidthModal = ({ children, isOpen, onClose, withNavigation }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white p-4">
      {!!withNavigation && <ContentSectionNavBar />}
      <button onClick={onClose} className="absolute top-4 right-4 rounded-full p-2 hover:bg-gray-100 transition-colors">
        <Icon name="x" color="gray" />
      </button>
      <div className="flex flex-col w-full h-full p-12 overflow-y-auto scrollbar-thin gap-8">
        {withNavigation
          ? children.map((section) => (
              <ContentSection key={section.props.title} id={section.props.title}>
                {section}
              </ContentSection>
            ))
          : children}
      </div>
    </div>
  );
};

export default FullWidthModal;
