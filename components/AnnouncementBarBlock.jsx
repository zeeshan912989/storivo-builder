import React from 'react';
import { sectionFields, defaultSectionProps, SectionWrapper } from './SectionWrapper';

export const AnnouncementBarBlock = {
  fields: {
    ...sectionFields,
    message: { type: "text" },
    linkText: { type: "text" },
    linkUrl: { type: "text" },
  },
  defaultProps: {
    ...defaultSectionProps,
    message: "Free shipping on all orders over $50",
    linkText: "Shop Now",
    linkUrl: "#",
    bgColor: "bg-black text-white",
    paddingTop: "pt-2",
    paddingBottom: "pb-2",
  },
  render: ({ message, linkText, linkUrl, paddingTop, paddingBottom, bgColor }) => (
    <SectionWrapper paddingTop={paddingTop} paddingBottom={paddingBottom} bgColor={bgColor}>
      <div className="w-full text-center text-sm font-bold tracking-wide">
        {message}{' '}
        <a href={linkUrl} className="underline underline-offset-4 ml-2 hover:text-gray-300 transition-colors">
          {linkText}
        </a>
      </div>
    </SectionWrapper>
  ),
};
