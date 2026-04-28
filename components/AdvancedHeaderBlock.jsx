import React from 'react';
import { sectionFields, defaultSectionProps, SectionWrapper } from './SectionWrapper';

export const AdvancedHeaderBlock = {
  fields: {
    ...sectionFields,
    logoText: { type: "text" },
    items: {
      type: "array",
      getItemSummary: (item) => item?.label || "Menu Item",
      fields: {
        label: { type: "text" },
        isSale: { type: "radio", options: [{ label: "Yes", value: true }, { label: "No", value: false }] },
        links: {
          type: "array",
          getItemSummary: (link) => link?.label || "Sub Link",
          fields: {
            label: { type: "text" },
            href: { type: "text" },
          }
        }
      }
    }
  },
  defaultProps: {
    ...defaultSectionProps,
    logoText: "HYPER",
    items: [
      { label: "Shop By Categories", links: [{ label: "Furniture", href: "#" }, { label: "Lighting", href: "#" }, { label: "Decor", href: "#" }] },
      { label: "Shop By Room", links: [{ label: "Living Room", href: "#" }, { label: "Bedroom", href: "#" }, { label: "Office", href: "#" }] },
      { label: "Tables & Desks", links: [] },
      { label: "Chairs & Stools", links: [] },
      { label: "Pages", links: [] },
      { label: "On Sale", isSale: true, links: [] },
    ],
    paddingTop: "pt-0",
    paddingBottom: "pb-0",
    bgColor: "bg-white",
  },
  render: ({ logoText, items, paddingTop, paddingBottom, bgColor, customCss }) => {
    const [active, setActive] = React.useState(null);

    return (
      <SectionWrapper paddingTop={paddingTop} paddingBottom={paddingBottom} bgColor={bgColor} customCss={customCss}>
        <header className="w-full bg-white font-sans border-b border-gray-100 shadow-sm relative z-[100]">
          {/* Top Accent Bar */}
          <div className="bg-[#1A3A8A] h-[6px] w-full"></div>

          {/* Main Header Row */}
          <div className="max-w-[1400px] mx-auto px-8 py-7 flex items-center justify-between gap-10">
             {/* Logo */}
             <h1 className="text-[2.5rem] font-black tracking-tighter text-black leading-none">{logoText}</h1>

             {/* Search Bar Container */}
             <div className="flex-1 max-w-2xl hidden lg:flex items-center bg-[#F3F4F6] rounded-full px-8 py-4 gap-5 group focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-50 transition-all border border-transparent focus-within:border-gray-200">
                <div className="flex items-center gap-2 border-r border-gray-300 pr-5 cursor-pointer hover:text-blue-600 transition-colors shrink-0">
                   <span className="font-black text-xs uppercase tracking-tight">All Categories</span>
                   <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                </div>
                <input type="text" placeholder="What are you looking for?" className="flex-1 bg-transparent border-none outline-none font-bold text-gray-800 placeholder:text-gray-400 text-sm" />
                <svg className="w-6 h-6 text-gray-500 cursor-pointer hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
             </div>

             {/* Action Icons */}
             <div className="flex items-center gap-7 text-gray-900">
                <div className="cursor-pointer hover:scale-110 transition-transform"><svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg></div>
                <div className="cursor-pointer hover:scale-110 transition-transform"><svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg></div>
                <div className="relative cursor-pointer group">
                   <div className="bg-[#F3F4F6] p-3.5 rounded-full group-hover:bg-black group-hover:text-white transition-all duration-300">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                   </div>
                   <span className="absolute -top-1 -right-1 bg-[#C83214] text-white text-[10px] font-black w-6 h-6 flex items-center justify-center rounded-full border-[3px] border-white shadow-sm">0</span>
                </div>
             </div>
          </div>

          {/* Navigation Categories Row */}
          <nav className="max-w-[1400px] mx-auto px-8 pb-5 hidden md:flex items-center gap-9 overflow-visible">
             {items.map((item, i) => (
               <div 
                 key={i} 
                 className="relative group py-2"
                 onMouseEnter={() => setActive(i)}
                 onMouseLeave={() => setActive(null)}
               >
                  <div className="flex items-center gap-1.5 cursor-pointer">
                    <span className={`text-[11px] font-black tracking-tighter uppercase transition-colors ${item.isSale ? 'text-[#C83214] animate-pulse' : 'text-gray-900 group-hover:text-blue-700'}`}>
                      {item.isSale && '✨'} {item.label} {item.isSale && '✨'}
                    </span>
                    {item.links && item.links.length > 0 && (
                      <svg className="w-3 h-3 text-gray-400 group-hover:text-blue-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                    )}
                  </div>

                  {/* Dropdown Menu */}
                  {active === i && item.links && item.links.length > 0 && (
                    <div className="absolute top-full left-0 w-64 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-2xl border border-gray-100 p-4 mt-1 animate-in fade-in slide-in-from-top-2 duration-300 z-[110]">
                       <div className="flex flex-col gap-1">
                          {item.links.map((link, j) => (
                            <a key={j} href={link.href} className="px-4 py-3 rounded-xl hover:bg-gray-50 text-sm font-bold text-gray-700 hover:text-black transition-all">
                              {link.label}
                            </a>
                          ))}
                       </div>
                    </div>
                  )}
               </div>
             ))}
          </nav>
        </header>
      </SectionWrapper>
    );
  },
};
