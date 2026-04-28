import React from 'react';
import { sectionFields, defaultSectionProps, SectionWrapper } from './SectionWrapper';

export const ShippingInfoBarBlock = {
  fields: {
    ...sectionFields,
    message: { type: "text" },
    details: {
      type: "array",
      getItemSummary: (item) => item.text || "Detail",
      arrayFields: {
        icon: { type: "text" },
        text: { type: "text" },
      },
    },
  },
  defaultProps: {
    ...defaultSectionProps,
    message: "Worldwide Shipping Available",
    paddingTop: "pt-4",
    paddingBottom: "pb-4",
    bgColor: "bg-green-50 text-green-800",
    details: [
      { icon: "⚡", text: "Fast Dispatch" },
      { icon: "🌍", text: "Global Coverage" },
      { icon: "📦", text: "Tracked Delivery" },
    ],
  },
  render: ({ message, details, paddingTop, paddingBottom, bgColor }) => (
    <SectionWrapper paddingTop={paddingTop} paddingBottom={paddingBottom} bgColor={bgColor}>
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 text-sm font-semibold tracking-wide">
        <span className="uppercase tracking-widest bg-white/50 px-4 py-1 rounded-full border border-current/10">{message}</span>
        <div className="flex items-center gap-6">
          {details.map((detail, i) => (
            <div key={i} className="flex items-center gap-2 opacity-90">
              <span>{detail.icon}</span>
              <span>{detail.text}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  ),
};
