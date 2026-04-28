import React from 'react';
import { sectionFields, defaultSectionProps, SectionWrapper } from './SectionWrapper';

export const NewsletterPopupBlock = {
  fields: {
    ...sectionFields,
    title: { type: "text" },
    subtitle: { type: "text" },
    imageUrl: { type: "text" },
    buttonText: { type: "text" },
  },
  defaultProps: {
    ...defaultSectionProps,
    title: "Sign up to get 10% OFF your first order",
    subtitle: "Sexy and sustainable goodies? Sign me up",
    imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    buttonText: "Get 10% OFF",
    paddingTop: "pt-12",
    paddingBottom: "pb-12",
    bgColor: "bg-transparent",
  },
  render: ({ title, subtitle, imageUrl, buttonText, paddingTop, paddingBottom, bgColor, customCss }) => (
    <SectionWrapper paddingTop={paddingTop} paddingBottom={paddingBottom} bgColor={bgColor} customCss={customCss}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row bg-white rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-gray-100">
          <div className="w-full md:w-1/2 min-h-[400px]">
             <img src={imageUrl} alt="Offer" className="w-full h-full object-cover" />
          </div>
          <div className="w-full md:w-1/2 p-12 md:p-16 flex flex-col justify-center text-center relative font-sans">
            <button className="absolute top-8 right-8 text-gray-300 hover:text-black transition-colors">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <h2 className="text-4xl md:text-[2.75rem] font-black leading-[1.1] mb-6 tracking-tight text-gray-900">{title}</h2>
            <p className="text-gray-500 font-medium mb-10 text-lg">{subtitle}</p>
            <div className="space-y-4 max-w-sm mx-auto w-full">
              <input type="email" placeholder="Enter your email" className="w-full bg-gray-100 border-none px-8 py-5 rounded-full text-center focus:ring-4 focus:ring-black/5 outline-none font-bold text-gray-800" />
              <button className="w-full bg-black text-white py-5 rounded-full font-black uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl shadow-black/20 text-sm">
                {buttonText}
              </button>
            </div>
            <div className="flex justify-center gap-4 mt-12">
               {/* Custom Social Icons with Border */}
               {['facebook', 'x', 'instagram', 'tiktok', 'youtube'].map((s, i) => (
                 <div key={i} className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-black hover:border-gray-300 cursor-pointer transition-all hover:scale-110">
                   <div className="w-5 h-5 bg-current rounded-[4px]"></div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  ),
};
