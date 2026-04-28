import React from 'react';
import { sectionFields, defaultSectionProps, SectionWrapper } from './SectionWrapper';

export const ContactFormBlock = {
  fields: {
    ...sectionFields,
    title: { type: "text" },
    description: { type: "textarea" },
    buttonText: { type: "text" },
  },
  defaultProps: {
    ...defaultSectionProps,
    title: "Get in Touch",
    description: "Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
    buttonText: "Send Message",
    paddingTop: "pt-24",
    paddingBottom: "pb-24",
  },
  render: ({ title, description, buttonText, paddingTop, paddingBottom, bgColor, customCss }) => (
    <SectionWrapper paddingTop={paddingTop} paddingBottom={paddingBottom} bgColor={bgColor} customCss={customCss}>
      <div className="max-w-3xl mx-auto px-8 font-sans">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6 tracking-tight">{title}</h2>
          <p className="text-gray-600 text-xl leading-relaxed">{description}</p>
        </div>
        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-3">
              <label className="text-sm font-black text-gray-900 uppercase tracking-wider ml-1">Full Name</label>
              <input type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-black/5 transition-all text-lg font-medium" />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-sm font-black text-gray-900 uppercase tracking-wider ml-1">Email Address</label>
              <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-black/5 transition-all text-lg font-medium" />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-sm font-black text-gray-900 uppercase tracking-wider ml-1">Your Message</label>
            <textarea rows={6} placeholder="How can we help you?" className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-black/5 transition-all text-lg font-medium resize-none" />
          </div>
          <button className="w-full bg-black text-white py-5 rounded-2xl font-black text-xl hover:scale-[1.02] transition-transform shadow-2xl shadow-black/20 uppercase tracking-widest">
            {buttonText}
          </button>
        </form>
      </div>
    </SectionWrapper>
  ),
};
