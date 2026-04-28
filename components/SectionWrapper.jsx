import React from 'react';

export const sectionFields = {
  paddingTop: {
    type: "select",
    options: [
      { label: "None", value: "pt-0" },
      { label: "Small", value: "pt-8" },
      { label: "Medium", value: "pt-16" },
      { label: "Large", value: "pt-24" },
      { label: "Extra Large", value: "pt-32" },
    ],
  },
  paddingBottom: {
    type: "select",
    options: [
      { label: "None", value: "pb-0" },
      { label: "Small", value: "pb-8" },
      { label: "Medium", value: "pb-16" },
      { label: "Large", value: "pb-24" },
      { label: "Extra Large", value: "pb-32" },
    ],
  },
  bgColor: {
    type: "select",
    options: [
      { label: "Default", value: "bg-white" },
      { label: "Light", value: "bg-gray-50" },
      { label: "Dark", value: "bg-zinc-900 text-white" },
      { label: "Brand", value: "bg-blue-600 text-white" },
    ],
  },
  customCss: { type: "textarea", label: "Custom CSS (Use & for current section)" },
};

export const defaultSectionProps = {
  paddingTop: "pt-16",
  paddingBottom: "pb-16",
  bgColor: "bg-white",
  customCss: "",
};

export const SectionWrapper = ({ children, paddingTop, paddingBottom, bgColor, customCss }) => {
  const id = React.useId().replace(/:/g, "");
  const sectionId = `section-${id}`;

  return (
    <section id={sectionId} className={`w-full ${paddingTop} ${paddingBottom} ${bgColor} transition-colors duration-300 relative`}>
      {customCss && (
        <style dangerouslySetInnerHTML={{ 
          __html: customCss.replace(/&/g, `#${sectionId}`) 
        }} />
      )}
      {children}
    </section>
  );
};
