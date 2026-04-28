import React from 'react';
import { sectionFields, defaultSectionProps, SectionWrapper } from './SectionWrapper';

export const ProductCard3DBlock = {
  fields: {
    ...sectionFields,
    productName: { type: "text" },
    price: { type: "text" },
    imageUrl: { type: "text" },
  },
  defaultProps: {
    ...defaultSectionProps,
    productName: "Futuristic Sneaker X",
    price: "$299",
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    paddingTop: "pt-24",
    paddingBottom: "pb-24",
    bgColor: "bg-gray-900",
  },
  render: ({ productName, price, imageUrl, paddingTop, paddingBottom, bgColor }) => (
    <SectionWrapper paddingTop={paddingTop} paddingBottom={paddingBottom} bgColor={bgColor}>
      <div className="flex justify-center items-center font-sans perspective-1000 py-12">
        <div className="w-[380px] h-[480px] relative group cursor-pointer perspective-1000">
          <div className="w-full h-full relative transition-transform duration-1000 preserve-3d group-hover:rotate-y-180 shadow-2xl rounded-3xl">
            
            {/* Front */}
            <div className="absolute inset-0 backface-hidden bg-white rounded-3xl p-8 flex flex-col items-center justify-center border-4 border-white">
              <div className="w-full flex-1 mb-6 rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center relative">
                <div className="absolute top-4 left-4 bg-black text-white text-xs font-bold px-3 py-1 rounded-full z-10">3D VIEW</div>
                <img src={imageUrl} alt={productName} className="w-[120%] h-auto object-cover drop-shadow-2xl group-hover:scale-110 transition-transform duration-700" />
              </div>
              <h3 className="text-2xl font-black text-center mb-1">{productName}</h3>
              <p className="text-gray-500 font-bold text-lg">{price}</p>
            </div>

            {/* Back */}
            <div className="absolute inset-0 backface-hidden bg-black text-white rounded-3xl p-8 flex flex-col items-center justify-center rotate-y-180 border-4 border-gray-800">
              <h3 className="text-4xl font-black mb-4">Quick Add</h3>
              <p className="text-gray-400 text-center mb-8 font-medium">Select your size to add to cart instantly.</p>
              <div className="grid grid-cols-3 gap-3 mb-10 w-full">
                {['8', '9', '10', '11', '12', '13'].map(size => (
                  <button key={size} className="border border-gray-700 rounded-xl py-3 hover:bg-white hover:text-black transition-colors font-bold text-lg">
                    {size}
                  </button>
                ))}
              </div>
              <button className="w-full bg-white text-black py-4 rounded-xl font-black text-lg uppercase tracking-widest hover:scale-105 transition-transform shadow-lg shadow-white/20">
                Add to Cart
              </button>
            </div>
            
          </div>
        </div>
      </div>
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </SectionWrapper>
  ),
};
