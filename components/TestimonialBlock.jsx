import React from 'react';
import { sectionFields, defaultSectionProps, SectionWrapper } from './SectionWrapper';

export const TestimonialBlock = {
  fields: {
    ...sectionFields,
    title: { type: "text" },
    testimonials: {
      type: "array",
      getItemSummary: (item) => item.author || "Testimonial",
      arrayFields: {
        quote: { type: "textarea" },
        author: { type: "text" },
        role: { type: "text" },
      },
    },
  },
  defaultProps: {
    ...defaultSectionProps,
    title: "Loved by Customers",
    paddingTop: "pt-24",
    paddingBottom: "pb-24",
    bgColor: "bg-gray-50",
    testimonials: [
      { quote: "The quality is simply outstanding. I've never seen anything like this before. It exceeded all my expectations.", author: "Sarah Jenkins", role: "Verified Buyer" },
      { quote: "Fast shipping and amazing customer service. Highly recommend to anyone looking for premium products.", author: "Michael Chen", role: "Verified Buyer" },
      { quote: "This transformed my daily workflow completely. Worth every single penny. Will buy again!", author: "Elena Rodriguez", role: "Verified Buyer" },
    ],
  },
  render: ({ title, testimonials, paddingTop, paddingBottom, bgColor }) => (
    <SectionWrapper paddingTop={paddingTop} paddingBottom={paddingBottom} bgColor={bgColor}>
      <div className="max-w-7xl mx-auto px-8 font-sans text-center">
        <h2 className="text-4xl font-extrabold mb-16 tracking-tight">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl shadow-sm text-left hover:shadow-xl transition-shadow duration-300">
              <div className="text-yellow-400 text-2xl mb-6 tracking-widest">★★★★★</div>
              <p className="text-lg text-gray-700 italic mb-8 leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{t.author}</h4>
                  <p className="text-sm text-gray-500 font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  ),
};
