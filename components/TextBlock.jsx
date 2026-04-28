import React from 'react';
import { sectionFields, defaultSectionProps, SectionWrapper } from './SectionWrapper';

export const TextBlock = {
  fields: {
    ...sectionFields,
    content: { type: "textarea" },
    align: {
      type: "select",
      options: [
        { label: "Left", value: "left" },
        { label: "Center", value: "center" },
        { label: "Right", value: "right" },
      ],
    },
    variant: {
      type: "select",
      options: [
        { label: "Standard", value: "standard" },
        { label: "Highlight", value: "highlight" },
      ],
    },
  },
  defaultProps: {
    ...defaultSectionProps,
    content: "Our mission is to empower creators and brands through high-performance digital tools. We believe in the power of great design to transform businesses and lives.",
    align: "center",
    variant: "standard",
    paddingTop: "pt-24",
    paddingBottom: "pb-24",
  },
  render: ({ content, align, variant, paddingTop, paddingBottom, bgColor }) => {
    const alignment = {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    }[align];

    const styles = {
      standard: "text-gray-700 font-normal",
      highlight: "text-black font-semibold text-2xl leading-relaxed italic",
    }[variant];

    return (
      <SectionWrapper paddingTop={paddingTop} paddingBottom={paddingBottom} bgColor={bgColor}>
        <div className={`px-8 max-w-4xl mx-auto ${alignment} font-sans`}>
          <p className={`text-lg leading-relaxed ${styles}`}>
            {content}
          </p>
        </div>
      </SectionWrapper>
    );
  },
};
