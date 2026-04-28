import React, { useState, useEffect, useRef } from 'react';
import { SectionWrapper } from './SectionWrapper';
import { ImageUploadField } from './ImageUploadField';

export const StickyFeaturesBlock = {
  fields: {
    title: { type: "text", label: "Section Title" },
    features: {
      type: "array",
      getItemSummary: (item) => item?.title || "Feature",
      fields: {
        title: { type: "text" },
        description: { type: "textarea" },
        image: { 
          type: "text", 
          label: "Visual Image",
          render: ({ value, onChange, field }) => (
            <ImageUploadField value={value} onChange={onChange} label={field.label} />
          )
        },
        icon: { 
          type: "text", 
          label: "Icon (Emoji or Upload)",
          render: ({ value, onChange, field }) => (
            <ImageUploadField value={value} onChange={onChange} label={field.label} />
          )
        },
      }
    }
  },
  defaultProps: {
    title: "Why Choose Storivo?",
    features: [
      { 
        title: "Lightning Fast Performance", 
        description: "Our headless architecture ensures your store loads in under 1 second, providing a seamless experience for your customers.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        icon: "⚡"
      },
      { 
        title: "AI-Powered Personalization", 
        description: "Automatically recommend products to your customers based on their browsing history and behavior using our advanced AI models.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
        icon: "🤖"
      },
      { 
        title: "Global Scalability", 
        description: "Scale your business globally with multi-currency support, international shipping integrations, and localized checkout experiences.",
        image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80",
        icon: "🌍"
      }
    ]
  },
  render: ({ title, features }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const featureRefs = useRef([]);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = parseInt(entry.target.getAttribute('data-index'));
              setActiveIndex(index);
            }
          });
        },
        { threshold: 0.6, rootMargin: "-10% 0px -10% 0px" }
      );

      featureRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });

      return () => observer.disconnect();
    }, [features]);

    return (
      <SectionWrapper>
        <div className="max-w-[1400px] mx-auto px-8 py-24 font-sans">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Left side: Sticky Visual */}
            <div className="lg:w-1/2 lg:sticky lg:top-32 lg:h-[600px] self-start">
               <div className="relative w-full h-full rounded-[40px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] bg-gray-50 border border-gray-100">
                  {features.map((feature, i) => (
                    <div 
                      key={i}
                      className={`absolute inset-0 transition-all duration-1000 ease-in-out ${activeIndex === i ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'}`}
                    >
                      <img 
                        src={feature.image} 
                        alt={feature.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute bottom-10 left-10 right-10">
                         <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-2xl mb-4 shadow-xl overflow-hidden p-2">
                           {feature.icon?.startsWith('http') || feature.icon?.startsWith('data:image') ? (
                             <img src={feature.icon} alt="" className="w-full h-full object-contain" />
                           ) : (
                             feature.icon
                           )}
                         </div>
                         <h3 className="text-white text-2xl font-black tracking-tight uppercase">{feature.title}</h3>
                      </div>
                    </div>
                  ))}
               </div>
            </div>

            {/* Right side: Scrolling Content */}
            <div className="lg:w-1/2 space-y-[40vh] py-[10vh]">
               <div className="mb-20">
                  <h2 className="text-5xl md:text-7xl font-black text-black tracking-tighter uppercase leading-none mb-6">
                    {title}
                  </h2>
               </div>
               {features.map((feature, i) => (
                 <div 
                   key={i} 
                   data-index={i}
                   ref={(el) => (featureRefs.current[i] = el)}
                   className={`transition-all duration-500 ${activeIndex === i ? 'opacity-100 translate-x-0' : 'opacity-20 -translate-x-4'}`}
                 >
                    <div className="flex items-center gap-4 mb-6">
                       <span className="text-4xl font-black text-gray-100">0{i+1}</span>
                       <div className="h-px flex-1 bg-gray-100"></div>
                    </div>
                    <h3 className="text-3xl font-black text-black tracking-tight uppercase mb-6 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-gray-500 font-medium text-lg leading-relaxed max-w-lg">
                      {feature.description}
                    </p>
                    <div className="mt-10">
                       <button className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-black group">
                         <span>Learn More</span>
                         <svg className="w-4 h-4 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                       </button>
                    </div>
                 </div>
               ))}
               <div className="h-[20vh]"></div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    );
  },
};
