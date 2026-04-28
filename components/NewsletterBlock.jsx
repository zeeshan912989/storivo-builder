import React from 'react';
import { sectionFields, defaultSectionProps, SectionWrapper } from './SectionWrapper';

export const NewsletterBlock = {
  fields: {
    ...sectionFields,
    title: { type: "text" },
    description: { type: "text" },
    buttonText: { type: "text" },
  },
  defaultProps: {
    ...defaultSectionProps,
    title: "Join Our Newsletter",
    description: "Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.",
    buttonText: "Subscribe",
    paddingTop: "pt-24",
    paddingBottom: "pb-24",
    bgColor: "bg-blue-600 text-white",
  },
  render: ({ title, description, buttonText, paddingTop, paddingBottom, bgColor }) => (
    <SectionWrapper paddingTop={paddingTop} paddingBottom={paddingBottom} bgColor={bgColor}>
      <div className="max-w-4xl mx-auto px-8 text-center font-sans">
        <h2 className="text-5xl font-extrabold mb-6 tracking-tight">{title}</h2>
        <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">{description}</p>
        <form className="flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="px-6 py-4 rounded-xl text-black flex-1 focus:outline-none focus:ring-4 focus:ring-black/20 font-medium"
            required
          />
          <button type="submit" className="bg-black text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-900 transition-colors shadow-lg">
            {buttonText}
          </button>
        </form>
      </div>
    </SectionWrapper>
  ),
};
