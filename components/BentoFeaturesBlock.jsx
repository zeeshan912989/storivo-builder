import React from 'react';
import { SectionWrapper } from './SectionWrapper';

const BentoTile = ({ title, description, icon, size, image, primaryColor }) => {
  const sizeClasses = {
    large: "md:col-span-4 md:row-span-2 min-h-[400px]",
    medium: "md:col-span-2 md:row-span-2 min-h-[300px]",
    small: "md:col-span-2 md:row-span-1 min-h-[200px]",
  }[size] || "md:col-span-2";

  return (
    <div className={`${sizeClasses} relative group overflow-hidden rounded-[32px] bg-white border border-gray-100 hover:border-black transition-all duration-700 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] flex flex-col`}>
      {image && (
        <div className="absolute inset-0 z-0">
          <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
        </div>
      )}
      
      <div className="relative z-10 p-8 flex flex-col h-full">
        <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 group-hover:bg-black group-hover:text-white transition-all shadow-sm">
          {icon || '✨'}
        </div>
        
        <div className="mt-auto">
          <h3 className={`font-black text-black tracking-tighter uppercase mb-2 ${size === 'large' ? 'text-3xl' : 'text-xl'}`}>
            {title}
          </h3>
          <p className={`text-gray-500 font-medium leading-relaxed ${size === 'large' ? 'text-base max-w-md' : 'text-sm'}`}>
            {description}
          </p>
        </div>

        {size === 'large' && (
          <div className="mt-8">
            <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-black group/btn">
              <span>Learn More</span>
              <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export const BentoFeaturesBlock = {
  fields: {
    title: { type: "text", label: "Main Title" },
    subtitle: { type: "textarea", label: "Subtitle" },
    features: {
      type: "array",
      getItemSummary: (item) => item?.title || "Feature",
      fields: {
        title: { type: "text" },
        description: { type: "textarea" },
        icon: { type: "text", label: "Icon Emoji" },
        image: { type: "text", label: "Background Image URL" },
        size: {
          type: "select",
          options: [
            { label: "Small (Horizontal)", value: "small" },
            { label: "Medium (Portrait)", value: "medium" },
            { label: "Large (Featured)", value: "large" },
          ]
        }
      }
    }
  },
  defaultProps: {
    title: "Next-Gen Features",
    subtitle: "Built for the future of e-commerce. Everything you need to scale your brand faster.",
    features: [
      { 
        title: "AI Marketing Agent", 
        description: "Let our advanced AI handle your social media, email campaigns, and customer retargeting while you sleep.", 
        icon: "🤖", 
        size: "large",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
      },
      { 
        title: "Global Shipping", 
        description: "Ship to 190+ countries with automated customs and tax calculations.", 
        icon: "🌍", 
        size: "medium",
        image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?auto=format&fit=crop&w=800&q=80"
      },
      { 
        title: "Real-time Analytics", 
        description: "Watch your sales grow in real-time with our live data dashboard.", 
        icon: "📈", 
        size: "small"
      },
      { 
        title: "Ultra Secure", 
        description: "Multi-layered security for your peace of mind.", 
        icon: "🔒", 
        size: "small"
      }
    ]
  },
  render: ({ title, subtitle, features }) => {
    return (
      <SectionWrapper>
        <div className="max-w-[1400px] mx-auto px-8 py-24 font-sans">
          <div className="mb-16">
            <div className="h-1 w-20 bg-red-600 mb-8"></div>
            <h2 className="text-5xl md:text-7xl font-black text-black tracking-tighter uppercase mb-6 leading-none max-w-3xl">
              {title}
            </h2>
            <p className="text-gray-500 font-medium max-w-xl text-lg">
              {subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-fr">
            {features.map((feature, i) => (
              <BentoTile key={i} {...feature} />
            ))}
          </div>
        </div>
      </SectionWrapper>
    );
  },
};
