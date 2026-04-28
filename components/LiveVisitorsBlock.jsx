import React, { useState, useEffect } from 'react';
import { sectionFields, defaultSectionProps, SectionWrapper } from './SectionWrapper';

export const LiveVisitorsBlock = {
  fields: {
    ...sectionFields,
    message: { type: "text" },
  },
  defaultProps: {
    ...defaultSectionProps,
    message: "people are looking at this right now",
    paddingTop: "pt-4",
    paddingBottom: "pb-4",
    bgColor: "bg-transparent",
  },
  render: ({ message, paddingTop, paddingBottom, bgColor }) => {
    const [visitors, setVisitors] = useState(24);
    
    useEffect(() => {
      const interval = setInterval(() => {
        setVisitors(prev => {
          const change = Math.floor(Math.random() * 5) - 2;
          const newCount = prev + change;
          return newCount > 12 ? newCount : 12; // keep it realistic
        });
      }, 4000);
      return () => clearInterval(interval);
    }, []);

    return (
      <SectionWrapper paddingTop={paddingTop} paddingBottom={paddingBottom} bgColor={bgColor}>
        <div className="flex justify-center items-center py-2">
          <div className="bg-red-50 border border-red-100 text-red-800 px-6 py-2 rounded-full flex items-center gap-3 shadow-sm font-sans text-sm">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </div>
            <span><strong className="font-bold text-base">{visitors}</strong> {message}</span>
          </div>
        </div>
      </SectionWrapper>
    );
  },
};
