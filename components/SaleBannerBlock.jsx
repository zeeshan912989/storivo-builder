import React from 'react';
import { sectionFields, defaultSectionProps, SectionWrapper } from './SectionWrapper';

export const SaleBannerBlock = {
  fields: {
    ...sectionFields,
    title: { type: "text" },
    subtitle: { type: "text" },
    discount: { type: "text" },
    buttonText: { type: "text" },
  },
  defaultProps: {
    ...defaultSectionProps,
    title: "End of Season Sale",
    subtitle: "Upgrade your lifestyle with our premium collection.",
    discount: "Up to 50% OFF",
    buttonText: "Shop The Sale",
    bgColor: "bg-red-600 text-white",
    paddingTop: "pt-12",
    paddingBottom: "pb-12",
  },
  render: ({ title, subtitle, discount, buttonText, paddingTop, paddingBottom, bgColor }) => (
    <SectionWrapper paddingTop={paddingTop} paddingBottom={paddingBottom} bgColor={bgColor}>
      <div className="max-w-7xl mx-auto px-8 font-sans flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div>
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-2">{title}</h2>
          <p className="text-lg opacity-90">{subtitle}</p>
        </div>
        <div className="text-5xl font-black italic tracking-tighter shrink-0 drop-shadow-md">
          {discount}
        </div>
        <div>
          <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-gray-100 transition-colors shrink-0 shadow-xl">
            {buttonText}
          </button>
        </div>
      </div>
    </SectionWrapper>
  ),
};
