import React, { useState } from 'react';
import { SectionWrapper } from './SectionWrapper';

const DropdownContent = ({ type, links }) => {
  if (type === 'red') {
    return (
      <div className="bg-[#C83214] rounded-xl overflow-hidden p-2 shadow-inner min-w-[240px]">
        <div className="flex flex-col gap-1">
          {links.map((link, j) => (
            <a key={j} href={link.href || "#"} className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 text-white transition-all group/item">
              <span className="text-xl group-hover/item:scale-125 transition-transform">{link.icon || '📍'}</span>
              <span className="font-bold text-sm">{link.label || 'Link'}</span>
              <svg className="w-4 h-4 ml-auto opacity-0 group-hover/item:opacity-100 -translate-x-2 group-hover/item:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    );
  }
  if (type === 'featured') {
    return (
      <div className="grid grid-cols-1 gap-2 w-[400px] p-2">
        {links.map((link, j) => (
          <a key={j} href={link.href || "#"} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all group/item text-left">
            <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-2xl group-hover/item:bg-black group-hover/item:text-white transition-all shadow-sm">
              {link.icon || '✨'}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="font-black text-sm text-black">{link.label || 'Feature'}</span>
                <svg className="w-4 h-4 text-gray-300 group-hover/item:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
              </div>
              <p className="text-[11px] text-gray-500 font-medium mt-1 leading-relaxed">{link.description || 'Description goes here...'}</p>
            </div>
          </a>
        ))}
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-1 min-w-[200px] p-2">
      {links.map((link, j) => (
        <a key={j} href={link.href || "#"} className="flex items-center gap-3 px-5 py-4 rounded-xl hover:bg-gray-50 text-gray-700 hover:text-black transition-all text-left">
          {link.icon && <span className="text-lg">{link.icon}</span>}
          <span className="font-black text-xs uppercase tracking-tight">{link.label || 'Link'}</span>
        </a>
      ))}
    </div>
  );
};

const navFields = (id) => ({
  [`nav${id}_label`]: { type: "text", label: `Menu ${id}: Name` },
  [`nav${id}_href`]: { type: "text", label: `Menu ${id}: Link (If no dropdown)` },
  [`nav${id}_type`]: { 
    type: "select", 
    label: `Menu ${id}: Style`,
    options: [
      { label: "None (Link Only)", value: "none" },
      { label: "Standard Dropdown", value: "standard" },
      { label: "Red Dropdown (Categories)", value: "red" },
      { label: "Featured Dropdown (Icons)", value: "featured" },
    ]
  },
  [`nav${id}_links`]: {
    type: "array",
    label: `Menu ${id}: Dropdown Links`,
    getItemSummary: (link) => link?.label || "Sub-link",
    fields: {
      label: { type: "text" },
      href: { type: "text" },
      icon: { type: "text", label: "Icon Emoji" },
      description: { type: "textarea", label: "Description (For Featured style)" },
    }
  }
});

export const PremiumHeaderBlock = {
  fields: {
    logoImage: { type: "text", label: "Logo Image" },
    logoHeight: { type: "text", label: "Logo Height (px)" },
    topBarText: { type: "text", label: "Top Bar Promo Text" },
    topBarBgColor: { type: "text", label: "Top Bar Background Color" },
    
    ...navFields(1),
    ...navFields(2),
    ...navFields(3),
    ...navFields(4),
    
    buttonText: { type: "text", label: "Action Button Text" },
    buttonHref: { type: "text", label: "Action Button Link" },
  },
  defaultProps: {
    logoImage: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    logoHeight: "30",
    topBarText: "FREE GLOBAL SHIPPING ON ALL ORDERS ABOVE $150",
    topBarBgColor: "#000000",
    buttonText: "Join Now",
    buttonHref: "/signup",
    
    nav1_label: "Categories",
    nav1_type: "red",
    nav1_links: [
      { label: "Electronics", href: "#", icon: "📱" },
      { label: "Fashion", href: "#", icon: "👗" },
      { label: "Home Decor", href: "#", icon: "🏠" },
    ],
    
    nav2_label: "Features",
    nav2_type: "featured",
    nav2_links: [
      { label: "AI Tools", href: "#", icon: "🤖", description: "Automated business intelligence." },
      { label: "Fast Shipping", href: "#", icon: "🚀", description: "Global delivery within 48 hours." },
    ],
    
    nav3_label: "Demos",
    nav3_type: "none",
    nav3_href: "/demos",
    
    nav4_label: "Pricing",
    nav4_type: "none",
    nav4_href: "/pricing",
  },
  render: (props) => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [1, 2, 3, 4].map(id => ({
      label: props[`nav${id}_label`],
      href: props[`nav${id}_href`],
      type: props[`nav${id}_type`],
      links: props[`nav${id}_links`] || []
    })).filter(item => item.label);

    return (
      <header className="w-full font-sans relative z-[9999]">
        {props.topBarText && (
          <div style={{ backgroundColor: props.topBarBgColor }} className="w-full py-2 px-4 text-center">
            <span className="text-[10px] md:text-[11px] font-black text-white tracking-[0.2em] uppercase">
              {props.topBarText}
            </span>
          </div>
        )}

        <div className="bg-white border-b border-gray-100 px-6 md:px-12 py-5 flex items-center justify-between sticky top-0 shadow-sm">
          <div className="flex-shrink-0 cursor-pointer">
            <img 
              src={props.logoImage} 
              style={{ height: `${props.logoHeight}px` }} 
              alt="Logo" 
              className="w-auto object-contain"
            />
          </div>

          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item, i) => (
              <div 
                key={i} 
                className="relative py-2"
                onMouseEnter={() => item.type !== 'none' && setActiveDropdown(i)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="flex items-center gap-1 cursor-pointer group">
                  <a href={item.href || "#"} className="text-[13px] font-bold text-gray-800 group-hover:text-black transition-colors uppercase tracking-tight">
                    {item.label}
                  </a>
                  {item.type !== 'none' && (
                    <svg className={`w-3 h-3 text-gray-400 group-hover:text-black transition-all ${activeDropdown === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </div>

                {activeDropdown === i && item.type !== 'none' && (
                  <div className="absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-gray-50 animate-in fade-in slide-in-from-top-4 duration-300 overflow-hidden">
                    <DropdownContent type={item.type} links={item.links} />
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a href={props.buttonHref} className="bg-black text-white px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg shadow-black/10">
              {props.buttonText}
            </a>
            <button 
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-2xl animate-in slide-in-from-top-4 duration-300 p-6 overflow-y-auto max-h-[80vh]">
            <div className="flex flex-col gap-6">
              {navItems.map((item, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <span className="text-xl font-black text-black tracking-tight">{item.label}</span>
                  {item.type !== 'none' && (
                    <div className="grid grid-cols-2 gap-2 ml-2">
                      {item.links.map((link, j) => (
                        <a key={j} href={link.href || "#"} className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl">
                          <span className="text-lg">{link.icon || '📍'}</span>
                          <span className="text-[10px] font-bold uppercase text-gray-700">{link.label || 'Link'}</span>
                        </a>
                      ))}
                    </div>
                  )}
                  <div className="h-px bg-gray-100 w-full" />
                </div>
              ))}
            </div>
          </div>
        )}
      </header>
    );
  },
};
