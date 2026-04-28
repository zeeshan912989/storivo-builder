import React from 'react';
import { sectionFields, defaultSectionProps, SectionWrapper } from './SectionWrapper';

export const FeaturedCollectionBlock = {
  fields: {
    ...sectionFields,
    mainTitle: { type: "text" },
    activeTitle: { type: "text" },
    otherTitles: { 
      type: "array", 
      getItemSummary: (item) => item?.text || "Title",
      fields: { text: { type: "text" } } 
    },
    description: { type: "text" },
    mainImageUrl: { type: "text" },
    buttonText: { type: "text" },
    thumbnails: { 
      type: "array", 
      getItemSummary: (item) => "Thumbnail",
      fields: { imageUrl: { type: "text" } } 
    }
  },
  defaultProps: {
    ...defaultSectionProps,
    mainTitle: "Featured Collections",
    activeTitle: "Heritage Living",
    otherTitles: [
      {text: "The Haven Collection"}, 
      {text: "Solace Series"}
    ],
    description: "With a shape inspired by the bollards used to secure vessels to a jetty",
    mainImageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
    buttonText: "Shop Collection",
    thumbnails: [
      { imageUrl: "https://images.unsplash.com/photo-1503602642458-232111445657?w=200&h=200&fit=crop" },
      { imageUrl: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=200&h=200&fit=crop" },
      { imageUrl: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=200&h=200&fit=crop" },
      { imageUrl: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=200&h=200&fit=crop" }
    ],
    paddingTop: "pt-24",
    paddingBottom: "pb-24",
  },
  render: ({ mainTitle, activeTitle, otherTitles, description, mainImageUrl, buttonText, thumbnails, paddingTop, paddingBottom, bgColor, customCss }) => (
    <SectionWrapper paddingTop={paddingTop} paddingBottom={paddingBottom} bgColor={bgColor} customCss={customCss}>
      <div className="max-w-[1400px] mx-auto px-8 font-sans flex flex-col lg:flex-row gap-20 items-center">
         {/* Left Side Content */}
         <div className="w-full lg:w-1/2 space-y-12">
            <span className="font-black text-xs uppercase tracking-[0.25em] text-gray-400 drop-shadow-sm">{mainTitle}</span>
            
            <div className="space-y-6">
               <div className="relative inline-block group cursor-pointer">
                  <h2 className="text-[5rem] font-black tracking-tighter leading-none text-gray-900 group-hover:text-blue-700 transition-colors">{activeTitle}</h2>
                  <div className="absolute -bottom-2 left-0 w-full h-[6px] bg-black group-hover:bg-blue-700 transition-colors"></div>
               </div>
               
               <div className="flex flex-col gap-4">
                  {otherTitles.map((t, i) => (
                    <h3 key={i} className="text-[3.5rem] font-black tracking-tighter text-gray-200 hover:text-gray-400 cursor-pointer transition-all duration-500 leading-none">{t.text}</h3>
                  ))}
               </div>
            </div>
            
            {/* Thumbnail Selection */}
            <div className="flex flex-wrap gap-4 pt-4">
               {thumbnails.map((t, i) => (
                 <div key={i} className={`w-24 h-24 rounded-2xl overflow-hidden border-4 transition-all cursor-pointer ${i === 0 ? 'border-black shadow-xl scale-110' : 'border-transparent bg-gray-50 hover:border-gray-200 opacity-60 hover:opacity-100'}`}>
                    <img src={t.imageUrl} className="w-full h-full object-cover" />
                 </div>
               ))}
            </div>

            <div className="max-w-md">
              <p className="text-gray-500 font-bold text-xl leading-relaxed tracking-tight">{description}</p>
            </div>
            
            <button className="bg-black text-white px-14 py-6 rounded-full font-black text-sm uppercase tracking-[0.2em] hover:scale-110 active:scale-95 transition-all shadow-2xl shadow-black/20">
               {buttonText}
            </button>
         </div>

         {/* Right Side Image */}
         <div className="w-full lg:w-1/2">
            <div className="relative rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] group border-8 border-white">
               <img src={mainImageUrl} className="w-full aspect-[4/5] object-cover transition-transform duration-[2000ms] group-hover:scale-110" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
         </div>
      </div>
    </SectionWrapper>
  )
};
