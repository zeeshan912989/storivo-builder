import React from 'react';
import { sectionFields, defaultSectionProps, SectionWrapper } from './SectionWrapper';

export const FooterBlock = {
  fields: {
    ...sectionFields,
    brandName: { type: "text" },
    description: { type: "textarea" },
    copyright: { type: "text" },
  },
  defaultProps: {
    ...defaultSectionProps,
    brandName: "STORIVO",
    description: "Empowering the next generation of digital commerce with beautiful design.",
    copyright: "© 2026 Storivo Inc. All rights reserved.",
    paddingTop: "pt-24",
    paddingBottom: "pb-8",
    bgColor: "bg-zinc-900 text-white",
  },
  render: ({ brandName, description, copyright, paddingTop, paddingBottom, bgColor }) => (
    <SectionWrapper paddingTop={paddingTop} paddingBottom={paddingBottom} bgColor={bgColor}>
      <footer className="max-w-7xl mx-auto px-8 font-sans">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-black mb-4 tracking-tighter">{brandName}</h3>
            <p className="text-gray-400 max-w-sm leading-relaxed">{description}</p>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase text-sm tracking-widest text-gray-300">Shop</h4>
            <ul className="space-y-3 text-gray-400 font-medium">
              <li><a href="#" className="hover:text-white transition">All Products</a></li>
              <li><a href="#" className="hover:text-white transition">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white transition">Sale</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase text-sm tracking-widest text-gray-300">Support</h4>
            <ul className="space-y-3 text-gray-400 font-medium">
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition">Shipping</a></li>
              <li><a href="#" className="hover:text-white transition">Returns</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>{copyright}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="cursor-pointer hover:text-white font-bold transition">Instagram</span>
            <span className="cursor-pointer hover:text-white font-bold transition">Twitter</span>
          </div>
        </div>
      </footer>
    </SectionWrapper>
  ),
};
