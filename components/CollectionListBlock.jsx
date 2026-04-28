import React from 'react';
import { sectionFields, defaultSectionProps, SectionWrapper } from './SectionWrapper';

export const CollectionListBlock = {
  fields: {
    ...sectionFields,
    title: { type: "text" },
    collections: {
      type: "array",
      getItemSummary: (item) => item.name || "Collection",
      arrayFields: {
        name: { type: "text" },
        imageUrl: { type: "text" },
        itemCount: { type: "text" },
      },
    },
  },
  defaultProps: {
    ...defaultSectionProps,
    title: "Shop by Category",
    paddingTop: "pt-24",
    paddingBottom: "pb-24",
    bgColor: "bg-white",
    collections: [
      { name: "Electronics", itemCount: "24 items", imageUrl: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=600&q=80" },
      { name: "Apparel", itemCount: "56 items", imageUrl: "https://images.unsplash.com/photo-1489987707023-af82705b7668?auto=format&fit=crop&w=600&q=80" },
      { name: "Accessories", itemCount: "12 items", imageUrl: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80" },
      { name: "Footwear", itemCount: "38 items", imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80" },
    ],
  },
  render: ({ title, collections, paddingTop, paddingBottom, bgColor }) => (
    <SectionWrapper paddingTop={paddingTop} paddingBottom={paddingBottom} bgColor={bgColor}>
      <div className="max-w-7xl mx-auto px-8 font-sans">
        <h2 className="text-3xl font-extrabold mb-10 tracking-tight">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((col, i) => (
             <div key={i} className="group relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer shadow-md">
                <img src={col.imageUrl} alt={col.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-white text-2xl font-bold mb-1">{col.name}</h3>
                  <p className="text-gray-300 font-medium text-sm">{col.itemCount}</p>
                </div>
             </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  ),
};
