import React from 'react';
import confetti from 'canvas-confetti';
import { sectionFields, defaultSectionProps, SectionWrapper } from './SectionWrapper';

export const ConfettiCTABlock = {
  fields: {
    ...sectionFields,
    title: { type: "text" },
    buttonText: { type: "text" },
  },
  defaultProps: {
    ...defaultSectionProps,
    title: "Ready to Upgrade Your Life?",
    buttonText: "Claim Your VIP Access",
    paddingTop: "pt-32",
    paddingBottom: "pb-32",
    bgColor: "bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white",
  },
  render: ({ title, buttonText, paddingTop, paddingBottom, bgColor }) => {
    const handleConfetti = () => {
      var duration = 3 * 1000;
      var animationEnd = Date.now() + duration;
      var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      var interval = setInterval(function() {
        var timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) {
          return clearInterval(interval);
        }
        var particleCount = 50 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: Math.random(), y: Math.random() - 0.2 } }));
      }, 250);
    };

    return (
      <SectionWrapper paddingTop={paddingTop} paddingBottom={paddingBottom} bgColor={bgColor}>
        <div className="max-w-4xl mx-auto px-8 font-sans text-center relative z-10">
          <h2 className="text-6xl font-black mb-12 tracking-tight drop-shadow-md">{title}</h2>
          <button 
            onClick={handleConfetti}
            className="bg-white text-indigo-600 px-12 py-6 rounded-full font-black text-2xl hover:scale-110 hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transition-all duration-300 active:scale-95 uppercase tracking-widest"
          >
            {buttonText}
          </button>
        </div>
      </SectionWrapper>
    );
  },
};
