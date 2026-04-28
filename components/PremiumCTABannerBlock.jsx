import React from 'react';
import { SectionWrapper } from './SectionWrapper';

export const PremiumCTABannerBlock = {
  fields: {
    title: { type: "text", label: "Heading" },
    description: { type: "textarea", label: "Description" },
    buttonText: { type: "text", label: "Button Text" },
    buttonHref: { type: "text", label: "Button Link" },
    backgroundColor: { type: "text", label: "Background Color" },
    textColor: { type: "text", label: "Text Color" },
    highlightColor: { type: "text", label: "Highlight Color" },
    backgroundImage: { type: "text", label: "Background Image URL" },
  },
  defaultProps: {
    title: "Ready to scale your business?",
    description: "Join over 10,000+ brands using Storivo to power their global commerce operations.",
    buttonText: "Start Free Trial",
    buttonHref: "/signup",
    backgroundColor: "#000000",
    textColor: "#ffffff",
    highlightColor: "#C83214",
  },
  render: ({ title, description, buttonText, buttonHref, backgroundColor, textColor, highlightColor, backgroundImage }) => {
    return (
      <SectionWrapper>
        <div className="max-w-[1400px] mx-auto px-8 py-16 font-sans">
          <div 
            style={{ backgroundColor: backgroundColor, color: textColor }}
            className="relative overflow-hidden rounded-[40px] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border border-white/5"
          >
            {/* Background Decoration */}
            {backgroundImage ? (
               <div className="absolute inset-0 z-0">
                  <img src={backgroundImage} alt="" className="w-full h-full object-cover opacity-20" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
               </div>
            ) : (
              <div className="absolute top-0 right-0 w-1/2 h-full z-0 opacity-20 pointer-events-none">
                <div 
                  className="absolute top-[-20%] right-[-10%] w-[120%] h-[140%] rounded-full blur-[120px]" 
                  style={{ background: `radial-gradient(circle, ${highlightColor} 0%, transparent 70%)` }}
                />
              </div>
            )}

            <div className="relative z-10 flex-1">
              <div 
                className="w-16 h-1.5 rounded-full mb-8" 
                style={{ backgroundColor: highlightColor }}
              />
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none mb-6">
                {title}
              </h2>
              <p className="text-lg md:text-xl font-medium opacity-60 max-w-xl">
                {description}
              </p>
            </div>

            <div className="relative z-10">
              <a 
                href={buttonHref}
                style={{ backgroundColor: highlightColor }}
                className="inline-flex items-center justify-center px-10 py-5 rounded-full text-white font-black text-xs uppercase tracking-[0.2em] shadow-2xl hover:scale-105 active:scale-95 transition-all group"
              >
                <span>{buttonText}</span>
                <svg className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </SectionWrapper>
    );
  },
};
