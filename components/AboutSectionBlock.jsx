import React from 'react';
import { sectionFields, defaultSectionProps, SectionWrapper } from './SectionWrapper';

export const AboutSectionBlock = {
  fields: {
    ...sectionFields,
    title: { type: "text" },
    subtitle: { type: "text" },
    content: { type: "textarea" },
    imageUrl: { type: "text" },
    imagePosition: { 
      type: "select", 
      options: [
        { label: "Left", value: "left" },
        { label: "Right", value: "right" }
      ]
    },
  },
  defaultProps: {
    ...defaultSectionProps,
    title: "Our Story",
    subtitle: "Built for creators, by creators",
    content: "We started with a simple idea: that building a beautiful online presence should be accessible to everyone. Our team is dedicated to providing tools that combine power with simplicity, allowing you to focus on what you do best.",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    imagePosition: "left",
    paddingTop: "pt-24",
    paddingBottom: "pb-24",
  },
  render: ({ title, subtitle, content, imageUrl, imagePosition, paddingTop, paddingBottom, bgColor, customCss }) => (
    <SectionWrapper paddingTop={paddingTop} paddingBottom={paddingBottom} bgColor={bgColor} customCss={customCss}>
      <div className="max-w-7xl mx-auto px-8 font-sans">
        <div className={`flex flex-col ${imagePosition === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 md:gap-24`}>
          <div className="w-full md:w-1/2">
            <h4 className="text-indigo-600 font-black uppercase tracking-[0.2em] text-sm mb-6">{subtitle}</h4>
            <h2 className="text-5xl md:text-6xl font-black mb-10 tracking-tight leading-[1.1] text-gray-900">{title}</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12 font-medium">{content}</p>
            <div className="grid grid-cols-2 gap-12">
              <div className="space-y-2">
                <p className="text-4xl font-black text-gray-900">10k+</p>
                <p className="text-gray-500 font-bold uppercase tracking-wider text-xs">Happy Users</p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl font-black text-gray-900">24/7</p>
                <p className="text-gray-500 font-bold uppercase tracking-wider text-xs">Expert Support</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="absolute -inset-4 bg-indigo-100 rounded-[3rem] -rotate-3 z-0"></div>
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-700 aspect-[4/5]">
              <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  ),
};
