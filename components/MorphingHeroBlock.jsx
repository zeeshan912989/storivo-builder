import React from 'react';
import { sectionFields, defaultSectionProps, SectionWrapper } from './SectionWrapper';

export const MorphingHeroBlock = {
  fields: {
    ...sectionFields,
    title: { type: "text" },
    subtitle: { type: "text" },
    buttonText: { type: "text" },
  },
  defaultProps: {
    ...defaultSectionProps,
    title: "Next Gen Commerce",
    subtitle: "Experience shopping like never before. Immerse yourself in the ultimate digital storefront.",
    buttonText: "Explore Now",
    paddingTop: "pt-32",
    paddingBottom: "pb-32",
    bgColor: "bg-white",
  },
  render: ({ title, subtitle, buttonText, paddingTop, paddingBottom, bgColor }) => (
    <SectionWrapper paddingTop={paddingTop} paddingBottom={paddingBottom} bgColor={bgColor}>
      <div className="relative w-full max-w-7xl mx-auto px-8 flex items-center justify-center min-h-[600px] overflow-hidden rounded-3xl bg-gray-50/50">
        {/* Morphing Blob Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
          <div className="morphing-blob bg-gradient-to-tr from-purple-400 to-blue-500 w-[500px] h-[500px] absolute mix-blend-multiply filter blur-3xl"></div>
          <div className="morphing-blob animation-delay-2000 bg-gradient-to-tr from-yellow-400 to-pink-500 w-[500px] h-[500px] absolute mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative z-10 text-center font-sans">
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            {subtitle}
          </p>
          <button className="bg-black text-white px-14 py-6 rounded-full font-black text-xl hover:scale-110 hover:shadow-2xl transition-all duration-500">
            {buttonText}
          </button>
        </div>
      </div>
      <style>{`
        .morphing-blob {
          animation: morph 8s ease-in-out infinite alternate;
          border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        @keyframes morph {
          0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transform: scale(1) translate(0px, 0px); }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; transform: scale(1.2) translate(40px, -40px); }
          100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transform: scale(0.8) translate(-40px, 40px); }
        }
      `}</style>
    </SectionWrapper>
  ),
};
