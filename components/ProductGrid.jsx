import React from 'react';
import { sectionFields, defaultSectionProps, SectionWrapper } from './SectionWrapper';

export const ProductGrid = {
  fields: {
    ...sectionFields,
    title: { type: "text" },
    columns: {
      type: "select",
      options: [
        { label: "2 Columns", value: "2" },
        { label: "3 Columns", value: "3" },
        { label: "4 Columns", value: "4" },
      ],
    },
  },
  defaultProps: {
    ...defaultSectionProps,
    title: "Featured Collections",
    columns: "3",
    paddingTop: "pt-24",
    paddingBottom: "pb-24",
  },
  render: ({ title, columns, paddingTop, paddingBottom, bgColor }) => {
    const products = [
      { id: 1, name: "Minimalist Watch", price: "$299", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80" },
      { id: 2, name: "Premium Audio", price: "$199", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80" },
      { id: 3, name: "Design Camera", price: "$899", image: "https://images.unsplash.com/photo-1526170315873-3a9163efc245?auto=format&fit=crop&w=500&q=80" },
      { id: 4, name: "Leather Bag", price: "$149", image: "https://images.unsplash.com/photo-1548036654-3d607bdd5ba7?auto=format&fit=crop&w=500&q=80" },
      { id: 5, name: "Desk Lamp", price: "$89", image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&w=500&q=80" },
      { id: 6, name: "Wireless Mouse", price: "$59", image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=500&q=80" },
    ];

    const gridCols = {
      "2": "grid-cols-1 md:grid-cols-2",
      "3": "grid-cols-1 md:grid-cols-3",
      "4": "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    }[columns];

    return (
      <SectionWrapper paddingTop={paddingTop} paddingBottom={paddingBottom} bgColor={bgColor}>
        <div className="px-8 max-w-7xl mx-auto font-sans">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-4 tracking-tight">{title}</h2>
              <div className="h-1.5 w-20 bg-black rounded-full" />
            </div>
            <button className="text-sm font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:opacity-60 transition-opacity">
              View All
            </button>
          </div>
          <div className={`grid gap-x-8 gap-y-16 ${gridCols}`}>
            {products.slice(0, parseInt(columns) * 2).map((p) => (
              <div key={p.id} className="group cursor-pointer">
                <div className="aspect-[4/5] bg-gray-100 rounded-3xl overflow-hidden mb-6 relative">
                  <img 
                    src={p.image} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                    alt={p.name} 
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                    New
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{p.name}</h3>
                <p className="text-gray-500 font-medium">{p.price}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    );
  },
};
