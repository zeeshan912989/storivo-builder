import React from 'react';
import { sectionFields, defaultSectionProps, SectionWrapper } from './SectionWrapper';

export const FaqBlock = {
  fields: {
    ...sectionFields,
    title: { type: "text" },
    faqs: {
      type: "array",
      getItemSummary: (item) => item.question || "FAQ",
      arrayFields: {
        question: { type: "text" },
        answer: { type: "textarea" },
      },
    },
  },
  defaultProps: {
    ...defaultSectionProps,
    title: "Frequently Asked Questions",
    paddingTop: "pt-24",
    paddingBottom: "pb-24",
    faqs: [
      { question: "Do you offer international shipping?", answer: "Yes, we ship worldwide! Shipping costs will apply, and will be added at checkout. We run discounts and promotions all year, so stay tuned for exclusive deals." },
      { question: "How long will it take to get my order?", answer: "It depends on where you are. Orders processed here will take 5-7 business days to arrive. Overseas deliveries can take anywhere from 7-16 days. Delivery details will be provided in your confirmation email." },
      { question: "Can I return my product?", answer: "We always aim for make sure our customers love our products, but if you do need to return an order, we're happy to help. Just email us directly and we'll take you through the process." },
    ],
  },
  render: ({ title, faqs, paddingTop, paddingBottom, bgColor }) => (
    <SectionWrapper paddingTop={paddingTop} paddingBottom={paddingBottom} bgColor={bgColor}>
      <div className="max-w-3xl mx-auto px-8 font-sans">
        <h2 className="text-4xl font-extrabold mb-12 text-center tracking-tight">{title}</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  ),
};
