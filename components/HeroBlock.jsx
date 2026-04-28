import React from 'react';
import { motion } from 'framer-motion';
import { sectionFields, defaultSectionProps, SectionWrapper } from './SectionWrapper';

export const HeroBlock = {
  fields: {
    ...sectionFields,
    title: { type: "text" },
    description: { type: "textarea" },
    buttonText: { type: "text" },
    imageUrl: { type: "text" },
  },
  defaultProps: {
    ...defaultSectionProps,
    title: "Dream Store Starts Here",
    description: "Launch your brand with our premium builder. Everything you need to scale your business.",
    buttonText: "Shop Now",
    imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80",
    paddingTop: "pt-0",
    paddingBottom: "pb-0",
  },
  render: ({ title, description, buttonText, imageUrl, paddingTop, paddingBottom, bgColor }) => (
    <SectionWrapper paddingTop={paddingTop} paddingBottom={paddingBottom} bgColor={bgColor}>
      <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden font-sans">
        <img src={imageUrl} className="absolute inset-0 w-full h-full object-cover z-0" alt={title} />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 text-center px-4 max-w-4xl"
        >
          <h1 className="text-6xl font-extrabold mb-6 tracking-tight leading-tight">{title}</h1>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto font-light leading-relaxed">{description}</p>
          <button className="bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-xl">
            {buttonText}
          </button>
        </motion.div>
      </section>
    </SectionWrapper>
  ),
};
