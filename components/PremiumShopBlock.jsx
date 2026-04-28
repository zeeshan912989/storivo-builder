import React from 'react';
import { sectionFields, defaultSectionProps, SectionWrapper } from './SectionWrapper';

export const PremiumShopBlock = {
  fields: {
    ...sectionFields,
    title: { type: "text" },
    subtitle: { type: "text" },
    viewAllText: { type: "text" },
    products: {
      type: "array",
      getItemSummary: (item) => item?.title || "Product",
      fields: {
        title: { type: "text" },
        category: { type: "text" },
        price: { type: "text" },
        oldPrice: { type: "text" },
        imageUrl: { type: "text" },
        badge: { type: "select", options: [{label: "None", value: ""}, {label: "Sale", value: "Sale"}, {label: "New", value: "New"}] },
        status: { type: "text" }, // e.g. "Selling Fast"
        colors: { type: "array", fields: { color: { type: "text" } } }
      }
    }
  },
  defaultProps: {
    ...defaultSectionProps,
    title: "Shop Our Offers",
    subtitle: "Traditional divides between personal and professional space.",
    viewAllText: "Shop All Products",
    products: [
      { title: "Cross Table Bark", category: "TABLES", price: "$170.00", oldPrice: "$200.00", badge: "Sale", imageUrl: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=500", colors: [{color: "#8B4513"}] },
      { title: "Axis Storage System", category: "RACK WALL", price: "$135.00", oldPrice: "$185.00", badge: "Sale", imageUrl: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500", colors: [{color: "#D2B48C"}] },
      { title: "Task Chair Luxe", category: "CHAIRS", price: "$559.00", oldPrice: "$599.00", badge: "Sale", status: "Selling Fast", imageUrl: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500", colors: [{color: "#3D2B1F"}] },
      { title: "Cross Chair Heritage", category: "CHAIRS", price: "$589.00", oldPrice: "$600.00", badge: "Sale", imageUrl: "https://images.unsplash.com/photo-1503602642458-232111445657?w=500", colors: [{color: "#E2D9D0"}, {color: "#4A3728"}] },
    ],
    paddingTop: "pt-24",
    paddingBottom: "pb-24",
  },
  render: ({ title, subtitle, viewAllText, products, paddingTop, paddingBottom, bgColor, customCss }) => (
    <SectionWrapper paddingTop={paddingTop} paddingBottom={paddingBottom} bgColor={bgColor} customCss={customCss}>
      <div className="max-w-[1400px] mx-auto px-8 font-sans">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <h2 className="text-[3.5rem] font-black mb-4 tracking-tighter leading-none text-gray-900">{title}</h2>
            <p className="text-gray-400 font-bold text-xl">{subtitle}</p>
          </div>
          <button className="flex items-center gap-3 font-black text-sm uppercase tracking-widest hover:text-blue-700 transition-colors group">
            {viewAllText}
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
           {products.map((p, i) => (
             <div key={i} className="group cursor-pointer">
                <div className="relative aspect-square bg-[#F3F4F6] rounded-[2.5rem] overflow-hidden mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-500">
                   <img src={p.imageUrl} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                   
                   {/* Badges */}
                   {p.badge && (
                     <span className="absolute top-6 left-6 bg-[#C83214] text-white px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-[0.15em] shadow-lg">{p.badge}</span>
                   )}

                   {/* Status Pill */}
                   {p.status && (
                     <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm px-6 py-2.5 rounded-full flex items-center gap-2 shadow-xl border border-gray-100 min-w-max">
                        <span className="text-[#FBBF24]">⚡</span>
                        <span className="text-[11px] font-black uppercase tracking-widest text-gray-900">{p.status}</span>
                     </div>
                   )}
                </div>

                <div className="space-y-3 px-2">
                   <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">{p.category}</span>
                   <h4 className="font-black text-xl text-gray-900 group-hover:text-blue-700 transition-colors tracking-tighter leading-tight">{p.title}</h4>
                   <div className="flex gap-3 items-center">
                      <span className="font-black text-xl text-[#C83214]">{p.price}</span>
                      {p.oldPrice && <span className="text-gray-300 line-through text-base font-bold">{p.oldPrice}</span>}
                   </div>
                   <div className="flex gap-2 pt-4">
                      {p.colors?.map((c, j) => (
                        <div key={j} className="w-8 h-8 rounded-xl border-2 border-transparent hover:border-gray-200 transition-all cursor-pointer shadow-sm" style={{backgroundColor: c.color}}></div>
                      ))}
                   </div>
                </div>
             </div>
           ))}
        </div>
      </div>
    </SectionWrapper>
  )
};
