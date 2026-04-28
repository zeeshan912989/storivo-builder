import React from 'react';
import { sectionFields, defaultSectionProps, SectionWrapper } from './SectionWrapper';

export const AutoScrollProductsBlock = {
  fields: {
    ...sectionFields,
    title: { type: "text" },
    products: {
      type: "array",
      getItemSummary: (item) => item.name || "Product",
      arrayFields: {
        name: { type: "text" },
        price: { type: "text" },
        imageUrl: { type: "text" },
      },
    },
  },
  defaultProps: {
    ...defaultSectionProps,
    title: "Trending Now",
    paddingTop: "pt-16",
    paddingBottom: "pb-16",
    bgColor: "bg-gray-50",
    products: [
      { name: "Urban Backpack", price: "$89", imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400&q=80" },
      { name: "Classic Aviators", price: "$120", imageUrl: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=400&q=80" },
      { name: "Leather Wallet", price: "$45", imageUrl: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=400&q=80" },
      { name: "Running Shoes", price: "$150", imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80" },
      { name: "Smart Watch", price: "$299", imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80" },
    ],
  },
  render: ({ title, products, paddingTop, paddingBottom, bgColor }) => (
    <SectionWrapper paddingTop={paddingTop} paddingBottom={paddingBottom} bgColor={bgColor}>
      <div className="font-sans">
        <h2 className="text-3xl font-extrabold mb-8 px-8 max-w-[1400px] mx-auto tracking-tight">{title}</h2>
        
        <div className="w-full overflow-hidden flex whitespace-nowrap relative group">
          <div className="flex animate-scroll-fast items-center gap-6 px-6 min-w-full group-hover:[animation-play-state:paused]">
            {products.concat(products).map((product, i) => (
              <div key={i} className="flex-shrink-0 w-64 cursor-pointer">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gray-200 mb-4 shadow-sm hover:shadow-xl transition-shadow">
                  <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="font-bold text-gray-900 truncate">{product.name}</h3>
                <p className="text-gray-500 font-medium">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes scrollFast {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-fast {
          animation: scrollFast 25s linear infinite;
        }
      `}</style>
    </SectionWrapper>
  ),
};
