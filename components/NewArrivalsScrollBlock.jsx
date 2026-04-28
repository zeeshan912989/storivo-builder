import React from 'react';
import { sectionFields, defaultSectionProps, SectionWrapper } from './SectionWrapper';

export const NewArrivalsScrollBlock = {
  fields: {
    ...sectionFields,
    title: { type: "text" },
    subtitle: { type: "text" },
    promoCard: {
      type: "object",
      fields: {
        title: { type: "text" },
        label: { type: "text" },
        imageUrl: { type: "text" },
        buttonText: { type: "text" },
      }
    },
    products: {
      type: "array",
      getItemSummary: (item) => item?.title || "Product",
      fields: {
        title: { type: "text" },
        category: { type: "text" },
        price: { type: "text" },
        oldPrice: { type: "text" },
        imageUrl: { type: "text" },
        badge: { type: "text" },
        colors: { type: "array", fields: { color: { type: "text" } } }
      }
    }
  },
  defaultProps: {
    ...defaultSectionProps,
    title: "New Arrivals",
    subtitle: "Traditional divides between personal and professional space.",
    promoCard: {
      title: "Soft Stools Design",
      label: "Promotion",
      imageUrl: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=600&q=80",
      buttonText: "Shop Now"
    },
    products: [
      { title: "Cross Chair Heritage", category: "CHAIRS", price: "$589.00", oldPrice: "$600.00", badge: "Sale", imageUrl: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&w=400&q=80", colors: [{color: "#E2D9D0"}, {color: "#4A3728"}] },
      { title: "Ray Sofa Basic", category: "SOFAS", price: "$3,289.00", imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=400&q=80", colors: [{color: "#D1D5DB"}, {color: "#D9F99D"}] },
      { title: "Turn Chair Vivid", category: "CHAIRS", price: "$309.00", imageUrl: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=400&q=80", colors: [{color: "#B45309"}, {color: "#FCD34D"}] },
      { title: "Curve Coat Stand", category: "STORAGE", price: "$189.00", imageUrl: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=400&q=80", colors: [{color: "#000000"}] },
    ]
  },
  render: ({ title, subtitle, promoCard, products, paddingTop, paddingBottom, bgColor, customCss }) => {
    const scrollRef = React.useRef(null);
    const scroll = (dir) => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: dir === 'left' ? -350 : 350, behavior: 'smooth' });
      }
    };

    return (
      <SectionWrapper paddingTop={paddingTop} paddingBottom={paddingBottom} bgColor={bgColor} customCss={customCss}>
        <div className="max-w-[1400px] mx-auto px-8 font-sans">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
            <div>
              <h2 className="text-[2.75rem] font-black mb-4 tracking-tighter leading-none">{title}</h2>
              <p className="text-gray-500 font-bold text-lg">{subtitle}</p>
            </div>
            <div className="flex gap-10 border-b border-gray-100 shrink-0">
               <span className="font-black text-sm pb-3 border-b-[3px] border-black cursor-pointer uppercase tracking-tight">New Arrivals</span>
               <span className="font-black text-sm pb-3 text-gray-300 cursor-pointer hover:text-black transition-colors uppercase tracking-tight">Hot Items</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-10">
            {/* Promo Card */}
            <div className="w-full lg:w-[400px] shrink-0 relative rounded-[2.5rem] overflow-hidden group cursor-pointer h-[550px] shadow-2xl">
               <img src={promoCard.imageUrl} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
               <div className="absolute inset-0 bg-black/5"></div>
               <div className="absolute inset-0 p-12 flex flex-col justify-between z-10">
                  <div>
                    <span className="text-white font-black text-xs uppercase tracking-[0.2em] drop-shadow-md">{promoCard.label}</span>
                    <h3 className="text-white text-[3.5rem] font-black leading-[1.1] mt-6 tracking-tighter drop-shadow-2xl">{promoCard.title}</h3>
                  </div>
                  <button className="bg-white text-black px-10 py-5 rounded-full font-black text-sm self-start hover:scale-110 active:scale-95 transition-all shadow-2xl uppercase tracking-widest">
                    {promoCard.buttonText}
                  </button>
               </div>
            </div>

            {/* Product Scroll Area */}
            <div className="flex-1 relative overflow-hidden group/scroll">
               <div ref={scrollRef} className="flex gap-8 overflow-x-auto no-scrollbar scroll-smooth pb-12">
                  {products.map((p, i) => (
                    <div key={i} className="w-[300px] md:w-[340px] shrink-0 group/item cursor-pointer">
                       <div className="relative aspect-[4/5] bg-[#F3F4F6] rounded-[2rem] overflow-hidden mb-8 border border-gray-50 shadow-sm group-hover/item:shadow-xl transition-all duration-500">
                          <img src={p.imageUrl} className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-105" />
                          {p.badge && (
                            <span className="absolute top-6 left-6 bg-[#C83214] text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">{p.badge}</span>
                          )}
                       </div>
                       <div className="space-y-3 px-2">
                          <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.15em]">{p.category}</span>
                          <h4 className="font-black text-xl text-gray-900 group-hover/item:text-blue-700 transition-colors tracking-tight">{p.title}</h4>
                          <div className="flex gap-3 items-center">
                             <span className="font-black text-xl text-[#C83214]">{p.price}</span>
                             {p.oldPrice && <span className="text-gray-400 line-through text-base font-bold">{p.oldPrice}</span>}
                          </div>
                          <div className="flex gap-2.5 pt-3">
                             {p.colors?.map((c, j) => (
                               <div key={j} className="w-7 h-7 rounded-lg border-2 border-transparent hover:border-gray-300 transition-all cursor-pointer shadow-sm" style={{backgroundColor: c.color}}></div>
                             ))}
                          </div>
                       </div>
                    </div>
                  ))}
               </div>

               {/* Custom Arrow Navigation */}
               <div className="absolute bottom-0 right-4 flex gap-5 z-20">
                  <button onClick={() => scroll('left')} className="w-16 h-16 rounded-full border-2 border-gray-100 flex items-center justify-center bg-white text-gray-400 hover:bg-black hover:text-white hover:border-black transition-all shadow-xl active:scale-90">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
                  </button>
                  <button onClick={() => scroll('right')} className="w-16 h-16 rounded-full border-2 border-gray-100 flex items-center justify-center bg-white text-gray-400 hover:bg-black hover:text-white hover:border-black transition-all shadow-xl active:scale-90">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                  </button>
               </div>

               {/* Progress Bar Line */}
               <div className="absolute bottom-8 left-0 right-44 h-[2px] bg-gray-100 rounded-full">
                  <div className="w-1/4 h-full bg-black rounded-full"></div>
               </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    );
  }
};
