import { sections } from "@/modules/shared/consts";

const ContentSectionNavBar = () => {
  return (
    <div className="sticky top-0 bg-white shadow-md z-50 mx-12">
      <nav className="flex justify-around py-4">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="text-gray-600 hover:text-blue-500 transition-all duration-300"
          >
            {section.label}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default ContentSectionNavBar;
