import React from 'react';
import { sectionFields, defaultSectionProps, SectionWrapper } from './SectionWrapper';

export const PremiumFooterBlock = {
  fields: {
    ...sectionFields,
    newsletterTitle: { type: "text" },
    newsletterSubtitle: { type: "text" },
    columns: {
      type: "array",
      getItemSummary: (item) => item?.title || "Column",
      fields: {
        title: { type: "text" },
        links: {
          type: "array",
          getItemSummary: (link) => link?.label || "Link",
          fields: {
            label: { type: "text" },
            href: { type: "text" }
          }
        }
      }
    },
    topInfo: {
      type: "array",
      fields: {
        label: { type: "text" },
        value: { type: "text" },
        icon: { type: "text" }
      }
    }
  },
  defaultProps: {
    ...defaultSectionProps,
    newsletterTitle: "Join Our Newsletter",
    newsletterSubtitle: "Sign up to our newsletter & receive 10% off your first order.",
    topInfo: [
      { icon: "💬", label: "Customer Service", value: "Mon-Sat, 9am-6pm EST." },
      { icon: "📞", label: "Call Us", value: "+1 888-234-1234 (tool-free)" },
      { icon: "✉️", label: "Get In Touch", value: "touch@garacestore.com" },
      { icon: "📍", label: "Address", value: "382 NE 191st St # 87394 Miami" },
    ],
    columns: [
      { 
        title: "Company", 
        links: [{label: "About us", href: "#"}, {label: "Contact", href: "#"}, {label: "FAQs", href: "#"}, {label: "Blog", href: "#"}, {label: "Find a Store", href: "#"}] 
      },
      { 
        title: "Collection", 
        links: [{label: "Tables", href: "#"}, {label: "Bow Chairs", href: "#"}, {label: "Turn Table", href: "#"}, {label: "Turn Chair", href: "#"}, {label: "Cross Bar Chair", href: "#"}] 
      },
      { 
        title: "Shop", 
        links: [{label: "Sofas", href: "#"}, {label: "Outdoor", href: "#"}, {label: "Seating", href: "#"}, {label: "Lighting", href: "#"}, {label: "Accessories", href: "#"}] 
      },
    ],
    paddingTop: "pt-20",
    paddingBottom: "pb-12",
    bgColor: "bg-white",
  },
  render: ({ newsletterTitle, newsletterSubtitle, columns, topInfo, paddingTop, paddingBottom, bgColor, customCss }) => (
    <SectionWrapper paddingTop={paddingTop} paddingBottom={paddingBottom} bgColor={bgColor} customCss={customCss}>
      <div className="max-w-[1400px] mx-auto px-8 font-sans">
        
        {/* Top Info Bar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-20 border-b border-gray-100 mb-20">
           {topInfo.map((info, i) => (
             <div key={i} className="flex gap-5 items-start">
                <div className="text-3xl grayscale brightness-150">{info.icon}</div>
                <div>
                   <h4 className="font-black text-sm uppercase tracking-wider mb-1">{info.label}</h4>
                   <p className="text-gray-400 font-bold text-sm leading-relaxed">{info.value}</p>
                </div>
             </div>
           ))}
        </div>

        {/* Main Footer Grid */}
        <div className="flex flex-col lg:flex-row justify-between gap-20">
           {/* Newsletter Column */}
           <div className="w-full lg:w-1/2 max-w-xl">
              <h2 className="text-5xl font-black tracking-tighter mb-6">{newsletterTitle}</h2>
              <p className="text-gray-400 font-bold text-lg mb-10">{newsletterSubtitle}</p>
              
              <div className="relative mb-8 max-w-md">
                 <input type="email" placeholder="Enter your email" className="w-full bg-[#F3F4F6] border-none px-8 py-5 rounded-full outline-none font-bold text-gray-800 placeholder:text-gray-300" />
                 <button className="absolute right-2 top-2 bottom-2 bg-black text-white px-8 rounded-full font-black text-sm uppercase tracking-widest hover:scale-105 transition-transform">Sign Up</button>
              </div>
              
              <p className="text-[11px] font-bold text-gray-400">
                By subscribing you agree to the <span className="text-gray-900 underline cursor-pointer">Terms of Services</span> and <span className="text-gray-900 underline cursor-pointer">Privacy Policy</span>.
              </p>
           </div>

           {/* Links Columns */}
           <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-12">
              {columns.map((col, i) => (
                <div key={i} className="space-y-8">
                   <h4 className="font-black text-sm uppercase tracking-[0.2em] text-gray-900">{col.title}</h4>
                   <ul className="space-y-4">
                      {col.links.map((link, j) => (
                        <li key={j}>
                           <a href={link.href} className="text-gray-400 font-bold hover:text-black transition-colors">{link.label}</a>
                        </li>
                      ))}
                   </ul>
                </div>
              ))}
           </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-32 pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-10">
           <div className="flex items-center gap-8">
              <div className="flex items-center gap-2 cursor-pointer group">
                 <span className="text-xl">🇺🇸</span>
                 <span className="font-black text-xs uppercase tracking-widest group-hover:text-blue-700 transition-colors">United States (USD $)</span>
                 <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
              </div>
              <div className="flex gap-4 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer">
                 {['visa', 'mastercard', 'amex', 'paypal', 'discover'].map(p => (
                   <div key={p} className="w-10 h-6 bg-gray-100 rounded"></div>
                 ))}
              </div>
           </div>

           <div className="flex items-center gap-6">
              {['facebook', 'x', 'instagram', 'tiktok', 'youtube'].map((s, i) => (
                <div key={i} className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-black hover:border-gray-300 cursor-pointer transition-all hover:scale-110">
                   <div className="w-5 h-5 bg-current rounded-sm"></div>
                </div>
              ))}
           </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
           <p className="text-xs font-bold text-gray-400">© 2026 Storivo Builder. Powered by Medusa.</p>
           <div className="flex gap-8 text-xs font-black uppercase tracking-widest">
              <span className="cursor-pointer hover:text-blue-700">Terms of Service</span>
              <span className="cursor-pointer hover:text-blue-700">Privacy Policy</span>
           </div>
        </div>
      </div>
    </SectionWrapper>
  )
};
