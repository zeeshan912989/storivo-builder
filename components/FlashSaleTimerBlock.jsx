import React from 'react';
import { sectionFields, defaultSectionProps, SectionWrapper } from './SectionWrapper';

export const FlashSaleTimerBlock = {
  fields: {
    ...sectionFields,
    title: { type: "text" },
    text: { type: "text" },
    code: { type: "text" },
    hours: { type: "text" },
    minutes: { type: "text" },
    seconds: { type: "text" },
    milliseconds: { type: "text" },
  },
  defaultProps: {
    ...defaultSectionProps,
    title: "Flash Sale now on!",
    text: "Save on modern table office, best sellers + more",
    code: "FLASH30",
    hours: "03",
    minutes: "03",
    seconds: "14",
    milliseconds: "21",
    bgColor: "bg-[#FDF99F]",
    paddingTop: "pt-10",
    paddingBottom: "pb-10",
  },
  render: ({ title, text, code, hours, minutes, seconds, milliseconds, paddingTop, paddingBottom, bgColor, customCss }) => {
    return (
      <SectionWrapper paddingTop={paddingTop} paddingBottom={paddingBottom} bgColor={bgColor} customCss={customCss}>
        <div className="max-w-[1400px] mx-auto px-8 font-sans flex flex-col lg:flex-row items-center justify-between gap-10">
           {/* Left Info */}
           <h3 className="text-2xl font-black tracking-tighter text-black uppercase">{title}</h3>
           
           {/* Timer Center */}
           <div className="flex gap-4 md:gap-10 items-center justify-center">
              {[ 
                {val: hours, label: 'HRS'}, 
                {val: minutes, label: 'MIN'}, 
                {val: seconds, label: 'SEC'}, 
                {val: milliseconds, label: 'MS'} 
              ].map((t, i) => (
                <React.Fragment key={i}>
                  <div className="flex flex-col items-center">
                    <div className="text-6xl md:text-[5.5rem] font-black tabular-nums tracking-tighter leading-none text-black">{t.val}</div>
                  </div>
                  {i < 3 && <div className="text-4xl md:text-5xl font-black text-black/20 pb-4">:</div>}
                </React.Fragment>
              ))}
           </div>

           {/* Right Description */}
           <div className="max-w-[280px] text-center lg:text-left">
              <p className="text-gray-900 font-bold leading-tight text-lg">{text}</p>
           </div>

           {/* CTA Button */}
           <button className="bg-black text-white px-12 py-5 rounded-full font-black text-sm uppercase tracking-[0.2em] hover:scale-110 active:scale-95 transition-all shadow-2xl shadow-black/20 shrink-0">
              Use Code: {code}
           </button>
        </div>
      </SectionWrapper>
    );
  }
};
