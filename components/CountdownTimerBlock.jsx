import React, { useState, useEffect } from 'react';
import { sectionFields, defaultSectionProps, SectionWrapper } from './SectionWrapper';

function Timer({ hours }) {
  const [timeLeft, setTimeLeft] = useState(hours * 3600);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [hours]);

  const h = Math.floor(timeLeft / 3600);
  const m = Math.floor((timeLeft % 3600) / 60);
  const s = timeLeft % 60;

  return (
    <div className="flex gap-4 justify-center text-center">
      <div className="bg-white text-black rounded-2xl p-5 min-w-[90px] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)]">
        <div className="text-5xl font-black">{String(h).padStart(2, '0')}</div>
        <div className="text-xs uppercase font-bold text-gray-500 mt-2 tracking-widest">Hours</div>
      </div>
      <div className="text-4xl font-black pt-4 opacity-50">:</div>
      <div className="bg-white text-black rounded-2xl p-5 min-w-[90px] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)]">
        <div className="text-5xl font-black">{String(m).padStart(2, '0')}</div>
        <div className="text-xs uppercase font-bold text-gray-500 mt-2 tracking-widest">Mins</div>
      </div>
      <div className="text-4xl font-black pt-4 opacity-50">:</div>
      <div className="bg-white text-black rounded-2xl p-5 min-w-[90px] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)]">
        <div className="text-5xl font-black">{String(s).padStart(2, '0')}</div>
        <div className="text-xs uppercase font-bold text-gray-500 mt-2 tracking-widest">Secs</div>
      </div>
    </div>
  );
}

export const CountdownTimerBlock = {
  fields: {
    ...sectionFields,
    title: { type: "text" },
    subtitle: { type: "text" },
    hours: { type: "number" },
    buttonText: { type: "text" },
  },
  defaultProps: {
    ...defaultSectionProps,
    title: "Flash Sale Ending Soon",
    subtitle: "Don't miss out on our biggest discounts of the year.",
    hours: 24,
    buttonText: "Shop The Sale",
    paddingTop: "pt-24",
    paddingBottom: "pb-24",
    bgColor: "bg-red-600 text-white",
  },
  render: ({ title, subtitle, hours, buttonText, paddingTop, paddingBottom, bgColor }) => (
    <SectionWrapper paddingTop={paddingTop} paddingBottom={paddingBottom} bgColor={bgColor}>
      <div className="max-w-4xl mx-auto px-8 font-sans text-center">
        <h2 className="text-6xl font-black mb-6 tracking-tighter drop-shadow-sm">{title}</h2>
        <p className="text-2xl mb-14 opacity-90 font-medium max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
        
        <div className="mb-14">
          <Timer hours={hours} />
        </div>
        
        <button className="bg-black text-white px-12 py-5 rounded-full font-black text-lg uppercase tracking-widest hover:scale-105 hover:shadow-2xl hover:shadow-black/50 transition-all duration-300">
          {buttonText}
        </button>
      </div>
    </SectionWrapper>
  ),
};
