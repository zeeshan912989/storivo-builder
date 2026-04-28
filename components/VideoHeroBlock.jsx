import React from 'react';
import { sectionFields, defaultSectionProps, SectionWrapper } from './SectionWrapper';

export const VideoHeroBlock = {
  fields: {
    ...sectionFields,
    title: { type: "text" },
    subtitle: { type: "textarea" },
    videoUrl: { type: "text" },
    buttonText: { type: "text" },
  },
  defaultProps: {
    ...defaultSectionProps,
    title: "Unleash Your Style",
    subtitle: "Explore the new collection with breathtaking cinematic visuals.",
    videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    buttonText: "Shop Collection",
    paddingTop: "pt-0",
    paddingBottom: "pb-0",
    bgColor: "bg-black",
  },
  render: ({ title, subtitle, videoUrl, buttonText, paddingTop, paddingBottom, bgColor }) => (
    <SectionWrapper paddingTop={paddingTop} paddingBottom={paddingBottom} bgColor={bgColor}>
      <div className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video 
          key={videoUrl}
          autoPlay 
          loop 
          muted 
          playsInline
          src={videoUrl}
          className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none"
        />
        
        {/* Dark Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/60"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-8 max-w-5xl mx-auto font-sans">
          <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter drop-shadow-2xl uppercase">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 font-medium drop-shadow-md max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          <button className="bg-white text-black px-12 py-5 rounded-full font-black text-lg uppercase tracking-widest hover:scale-105 hover:bg-gray-100 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
            {buttonText}
          </button>
        </div>
      </div>
    </SectionWrapper>
  ),
};
