import React from 'react';
import { sectionFields, defaultSectionProps, SectionWrapper } from './SectionWrapper';

export const TrustBadgeBlock = {
  fields: {
    ...sectionFields,
    badges: {
      type: "array",
      getItemSummary: (item) => item.title || "Badge",
      arrayFields: {
        icon: { type: "text" },
        title: { type: "text" },
        subtitle: { type: "text" },
      },
    },
  },
  defaultProps: {
    ...defaultSectionProps,
    paddingTop: "pt-12",
    paddingBottom: "pb-12",
    bgColor: "bg-gray-50",
    badges: [
      { icon: "🚚", title: "Free Shipping", subtitle: "On orders over $50" },
      { icon: "🛡️", title: "Secure Payment", subtitle: "100% secure checkout" },
      { icon: "↩️", title: "Easy Returns", subtitle: "30-day return policy" },
      { icon: "⭐", title: "Top Rated", subtitle: "Over 10k happy customers" },
    ],
  },
  render: ({ badges, paddingTop, paddingBottom, bgColor }) => (
    <SectionWrapper paddingTop={paddingTop} paddingBottom={paddingBottom} bgColor={bgColor}>
      <div className="max-w-7xl mx-auto px-8 font-sans border-y border-gray-200 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {badges.map((badge, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="text-4xl mb-4 grayscale hover:grayscale-0 transition-all cursor-default scale-110">{badge.icon}</div>
              <h4 className="font-bold text-gray-900 mb-1">{badge.title}</h4>
              <p className="text-sm text-gray-500 font-medium">{badge.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  ),
};
