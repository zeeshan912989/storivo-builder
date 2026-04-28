import React from 'react';
import { sectionFields, defaultSectionProps, SectionWrapper } from './SectionWrapper';

export const AutoScrollLogoBannerBlock = {
  fields: {
    ...sectionFields,
    logos: {
      type: "array",
      getItemSummary: (item) => item.alt || "Logo",
      arrayFields: {
        imageUrl: { type: "text" },
        alt: { type: "text" },
      },
    },
  },
  defaultProps: {
    ...defaultSectionProps,
    paddingTop: "pt-8",
    paddingBottom: "pb-8",
    bgColor: "bg-white",
    logos: [
      { imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", alt: "Amazon" },
      { imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", alt: "Google" },
      { imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg", alt: "IBM" },
      { imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg", alt: "Microsoft" },
      { imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg", alt: "Netflix" },
    ],
  },
  render: ({ logos, paddingTop, paddingBottom, bgColor }) => (
    <SectionWrapper paddingTop={paddingTop} paddingBottom={paddingBottom} bgColor={bgColor}>
      <div className="w-full overflow-hidden flex whitespace-nowrap relative border-y border-gray-100">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex animate-scroll items-center gap-24 px-8 min-w-full">
          {logos.concat(logos).map((logo, i) => (
            <div key={i} className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <img src={logo.imageUrl} alt={logo.alt} className="max-w-full max-h-full object-contain" />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </SectionWrapper>
  ),
};
