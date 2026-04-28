import React from 'react';
import { sectionFields, defaultSectionProps, SectionWrapper } from './SectionWrapper';

export const NewArrivalsBlock = {
  fields: {
    ...sectionFields,
    title: { type: "text" },
    subtitle: { type: "text" },
    buttonText: { type: "text" },
    products: {
      type: "array",
      getItemSummary: (item) => item.name || "Product",
      arrayFields: {
        name: { type: "text" },
        price: { type: "text" },
        imageUrl: { type: "text" },
        badge: { type: "text" },
      },
    },
  },
  defaultProps: {
    ...defaultSectionProps,
    title: "New Arrivals",
    subtitle: "Discover the latest additions to our collection.",
    buttonText: "View All New Arrivals",
    paddingTop: "pt-24",
    paddingBottom: "pb-24",
    bgColor: "bg-white",
    products: [
      { name: "Premium Wireless Headphones", price: "$199", badge: "NEW", imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80" },
      { name: "Minimalist Smartwatch", price: "$249", badge: "NEW", imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80" },
      { name: "Ergonomic Office Chair", price: "$399", badge: "NEW", imageUrl: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&w=600&q=80" },
      { name: "Mechanical Keyboard", price: "$149", badge: "NEW", imageUrl: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=600&q=80" },
    ],
  },
  render: ({ title, subtitle, buttonText, products, paddingTop, paddingBottom, bgColor }) => (
    <SectionWrapper paddingTop={paddingTop} paddingBottom={paddingBottom} bgColor={bgColor}>
      <div className="max-w-7xl mx-auto px-8 font-sans">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight mb-2">{title}</h2>
            <p className="text-gray-500 text-lg">{subtitle}</p>
          </div>
          <button className="hidden md:block px-6 py-3 border-2 border-black rounded-full font-bold hover:bg-black hover:text-white transition-colors">
            {buttonText}
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 mb-4 shadow-sm group-hover:shadow-xl transition-all duration-300">
                <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                {product.badge && (
                  <div className="absolute top-4 left-4 bg-black text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {product.badge}
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-full bg-white text-black py-3 rounded-xl font-bold shadow-lg hover:bg-gray-50 transition-colors">
                    Quick Add
                  </button>
                </div>
              </div>
              <h3 className="font-bold text-gray-900 mb-1">{product.name}</h3>
              <p className="text-gray-500 font-medium">{product.price}</p>
            </div>
          ))}
        </div>
        
        <button className="w-full mt-8 md:hidden px-6 py-4 border-2 border-black rounded-full font-bold hover:bg-black hover:text-white transition-colors">
          {buttonText}
        </button>
      </div>
    </SectionWrapper>
  ),
};
