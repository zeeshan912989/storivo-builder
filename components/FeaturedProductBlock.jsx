import React from 'react';
import { sectionFields, defaultSectionProps, SectionWrapper } from './SectionWrapper';

export const FeaturedProductBlock = {
  fields: {
    ...sectionFields,
    title: { type: "text" },
    productName: { type: "text" },
    price: { type: "text" },
    description: { type: "textarea" },
    imageUrl: { type: "text" },
    buttonText: { type: "text" },
  },
  defaultProps: {
    ...defaultSectionProps,
    title: "Spotlight",
    productName: "The Minimalist Watch",
    price: "$299.00",
    description: "Crafted with precision, this minimalist watch features a scratch-resistant sapphire crystal and a premium leather band. Perfect for every occasion. It is designed to be your daily companion.",
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    buttonText: "Add to Cart",
    paddingTop: "pt-24",
    paddingBottom: "pb-24",
  },
  render: ({ title, productName, price, description, imageUrl, buttonText, paddingTop, paddingBottom, bgColor }) => (
    <SectionWrapper paddingTop={paddingTop} paddingBottom={paddingBottom} bgColor={bgColor}>
      <div className="max-w-7xl mx-auto px-8 font-sans">
        <h2 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-10 text-center md:text-left">{title}</h2>
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <div className="aspect-square rounded-[2rem] overflow-hidden bg-gray-100 shadow-2xl">
              <img src={imageUrl} alt={productName} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-5xl font-extrabold mb-4 tracking-tight">{productName}</h3>
            <p className="text-3xl font-light text-gray-500 mb-8">{price}</p>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">{description}</p>
            <ul className="mb-12 space-y-4 text-left inline-block md:block mx-auto">
              <li className="flex items-center gap-3 font-medium text-gray-700"><span className="text-green-500 bg-green-100 p-1 rounded-full">✓</span> Free shipping worldwide</li>
              <li className="flex items-center gap-3 font-medium text-gray-700"><span className="text-green-500 bg-green-100 p-1 rounded-full">✓</span> 30-day money-back guarantee</li>
              <li className="flex items-center gap-3 font-medium text-gray-700"><span className="text-green-500 bg-green-100 p-1 rounded-full">✓</span> 2-year warranty included</li>
            </ul>
            <button className="w-full md:w-auto bg-black text-white px-14 py-5 rounded-full font-bold text-lg hover:-translate-y-1 transition-transform shadow-2xl shadow-black/30">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  ),
};
