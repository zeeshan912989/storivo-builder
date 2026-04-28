import React from 'react';
import { sectionFields, defaultSectionProps, SectionWrapper } from './SectionWrapper';

export const CircularCategoryBlock = {
  fields: {
    ...sectionFields,
    title: { type: "text" },
    categories: {
      type: "array",
      getItemSummary: (item) => item.label || "Category",
      fields: {
        label: { type: "text" },
        imageUrl: { type: "text" },
        isSale: { type: "radio", options: [{ label: "Yes", value: true }, { label: "No", value: false }] },
      },
    },
  },
  defaultProps: {
    ...defaultSectionProps,
    title: "Shop by Category",
    categories: [
      { label: "Sale Items", imageUrl: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=200&h=200&fit=crop", isSale: true },
      { label: "Press Tables", imageUrl: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=200&h=200&fit=crop" },
      { label: "Lighting", imageUrl: "https://images.unsplash.com/photo-1507473885765-e6ed657f8971?w=200&h=200&fit=crop" },
      { label: "Spoke Sofa", imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&h=200&fit=crop" },
      { label: "Storage", imageUrl: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=200&h=200&fit=crop" },
      { label: "Turn Chairs", imageUrl: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=200&h=200&fit=crop" },
      { label: "Chairs", imageUrl: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=200&h=200&fit=crop" },
      { label: "Curve Coat", imageUrl: "https://images.unsplash.com/photo-1544441893-675973e31985?w=200&h=200&fit=crop" },
    ],
    paddingTop: "pt-12",
    paddingBottom: "pt-12",
  },
  render: ({ title, categories, paddingTop, paddingBottom, bgColor, customCss }) => (
    <SectionWrapper paddingTop={paddingTop} paddingBottom={paddingBottom} bgColor={bgColor} customCss={customCss}>
      <div className="max-w-7xl mx-auto px-8 font-sans">
        {title && <h2 className="text-2xl font-black mb-12 text-center tracking-tight">{title}</h2>}
        <div className="flex flex-wrap justify-center gap-10 md:gap-14">
          {categories.map((cat, i) => (
            <div key={i} className="flex flex-col items-center group cursor-pointer w-24 md:w-28 text-center">
              <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden mb-4 border border-gray-100 shadow-sm transition-all group-hover:scale-105 group-hover:shadow-lg duration-500">
                <img src={cat.imageUrl} alt={cat.label} className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700" />
                {cat.isSale && (
                   <div className="absolute inset-0 bg-[#C83214]/90 flex items-center justify-center text-white font-black text-sm md:text-lg uppercase tracking-tight">Sale</div>
                )}
              </div>
              <span className="text-xs md:text-sm font-bold text-gray-800 tracking-tight leading-tight group-hover:text-black transition-colors">{cat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  ),
};
