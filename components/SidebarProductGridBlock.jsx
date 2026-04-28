import React, { useState, useEffect } from 'react';
import { SectionWrapper } from './SectionWrapper';

export const SidebarProductGridBlock = {
  fields: {
    sidebarTitle: { type: "text", label: "Sidebar Title" },
    sidebarDescription: { type: "textarea", label: "Sidebar Description" },
    buttonText: { type: "text", label: "Sidebar Button Text" },
    
    // Timer
    showTimer: { type: "radio", label: "Show Countdown", options: [{ label: "Yes", value: true }, { label: "No", value: false }] },
    targetDate: { type: "text", label: "Target Date (YYYY-MM-DD)" },
    
    // Product Grid
    apiUrl: { type: "text", label: "Product API URL (REST)" },
    columns: { type: "select", options: [{ label: "3", value: "3" }, { label: "4", value: "4" }] },
    primaryColor: { type: "text", label: "Primary Theme Color" },
  },
  defaultProps: {
    sidebarTitle: "Deals of the week",
    sidebarDescription: "Hurry and grab these limited-time offers before the countdown runs out.",
    buttonText: "Show more",
    showTimer: true,
    targetDate: "2026-12-31",
    columns: "4",
    primaryColor: "#C83214",
  },
  render: ({ sidebarTitle, sidebarDescription, buttonText, showTimer, targetDate, apiUrl, columns, primaryColor }) => {
    const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 1, mins: 57, secs: 9 });
    const [products, setProducts] = useState([
      { id: 1, title: "Barto 145/80/13 Efficient", price: 82.00, oldPrice: 105.00, image: "https://images.unsplash.com/photo-1551218372-a202996a67c3?auto=format&fit=crop&w=800&q=80", stock: "In Stock", discount: "SALE" },
      { id: 2, title: "BMP Masters 16\" Yuki", price: 319.00, oldPrice: 380.00, image: "https://images.unsplash.com/photo-1583267746897-4a4452cc3f82?auto=format&fit=crop&w=800&q=80", stock: "In Stock", discount: "SALE" },
      { id: 3, title: "Alurim 18\" MotionPro", price: 188.00, oldPrice: 220.00, image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=800&q=80", stock: "In Stock", discount: "SALE" },
      { id: 4, title: "Barto Euro Summer K900", price: 98.00, oldPrice: 125.00, image: "https://images.unsplash.com/photo-1594731802114-035392ecb39c?auto=format&fit=crop&w=800&q=80", stock: "In Stock", discount: "SALE" },
    ]);

    const gridCols = columns === "4" ? "lg:grid-cols-4" : "lg:grid-cols-3";

    return (
      <SectionWrapper>
        <div className="max-w-[1440px] mx-auto px-8 py-16 font-sans flex flex-col xl:flex-row gap-12">
          {/* Sidebar */}
          <div className="xl:w-[320px] shrink-0">
             <div className="h-1 w-12 bg-red-600 mb-8"></div>
             <h2 className="text-3xl font-black text-black tracking-tighter uppercase mb-6">{sidebarTitle}</h2>
             <p className="text-gray-500 font-medium mb-10 leading-relaxed">{sidebarDescription}</p>
             
             {showTimer && (
               <div className="flex gap-4 mb-12">
                  {Object.entries(timeLeft).map(([unit, val]) => (
                    <div key={unit} className="flex flex-col items-center">
                       <div className="text-2xl font-black text-black bg-gray-50 w-14 h-14 flex items-center justify-center rounded-xl shadow-sm border border-gray-100 mb-1">
                         {val.toString().padStart(2, '0')}
                       </div>
                       <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{unit}</span>
                    </div>
                  ))}
               </div>
             )}

             <button 
              className="px-10 py-4 rounded-full text-white font-black text-sm uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl shadow-red-600/20"
              style={{ backgroundColor: primaryColor }}
             >
               {buttonText}
             </button>
          </div>

          {/* Product Grid */}
          <div className={`flex-1 grid grid-cols-1 md:grid-cols-2 ${gridCols} gap-6`}>
             {products.map(product => (
               <div key={product.id} className="bg-white group relative flex flex-col h-full border border-gray-50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 rounded-[24px] overflow-hidden">
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-red-600 text-white text-[9px] font-black px-3 py-1.5 rounded-sm uppercase tracking-tighter">SALE</span>
                  </div>
                  
                  <div className="aspect-square p-8 flex items-center justify-center bg-gray-50 group-hover:bg-white transition-colors duration-500">
                    <img src={product.image} alt={product.title} className="max-w-full max-h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700" />
                  </div>

                  <div className="p-6 flex flex-col flex-1 text-center">
                    <div className="text-[10px] font-bold text-gray-400 uppercase mb-2 flex items-center justify-center gap-2">
                       <span>Barto</span>
                       <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                       <span>MN001</span>
                    </div>
                    <h3 className="text-sm font-black text-gray-900 line-clamp-2 mb-3 leading-snug px-2">
                      {product.title}
                    </h3>
                    
                    <div className="flex items-center justify-center gap-2 mb-6">
                       <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                       <span className="text-[9px] font-black text-green-600 uppercase tracking-wider">In Stock</span>
                    </div>

                    <div className="mt-auto">
                      <div className="flex flex-col items-center gap-1 mb-6">
                        <span className="text-xs text-gray-400 line-through font-medium">$105.00</span>
                        <div className="flex items-center gap-2">
                          <span className="text-xl font-black text-red-600">${product.price.toFixed(2)}</span>
                          <span className="text-[8px] font-bold text-gray-400 uppercase tracking-tighter">Inc. Tax</span>
                        </div>
                      </div>

                      <button className="w-full bg-black text-white py-4 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-zinc-800 transition-colors">
                        Add to cart
                      </button>
                    </div>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </SectionWrapper>
    );
  },
};
