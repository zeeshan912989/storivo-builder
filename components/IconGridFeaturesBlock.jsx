import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { ImageUploadField } from './ImageUploadField';

export const IconGridFeaturesBlock = {
  fields: {
    title: { type: "text", label: "Title" },
    subtitle: { type: "textarea", label: "Subtitle" },
    features: {
      type: "array",
      getItemSummary: (item) => item?.label || "Feature",
      fields: {
        label: { type: "text" },
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
    title: "Everything you need",
    subtitle: "A complete suite of tools to build, launch, and scale your brand.",
    features: [
      { label: "AI Marketing", icon: "🤖" },
      { label: "Global Sales", icon: "🌍" },
      { label: "Fast Shipping", icon: "🚀" },
      { label: "Secure Pay", icon: "🔒" },
      { label: "Analytics", icon: "📊" },
      { label: "Custom Domain", icon: "🌐" },
      { label: "SEO Tools", icon: "🔍" },
      { label: "Email Auto", icon: "📧" },
      { label: "Support 24/7", icon: "🎧" },
      { label: "Cloud Sync", icon: "☁️" },
      { label: "Team Access", icon: "👥" },
      { label: "API Webhooks", icon: "🔗" },
    ]
  },
  render: ({ title, subtitle, features }) => {
    return (
      <SectionWrapper>
        <div className="max-w-[1400px] mx-auto px-8 py-24 font-sans text-center">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-black tracking-tighter uppercase leading-none mb-6">
              {title}
            </h2>
            <p className="text-gray-500 font-medium max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {features.map((feature, i) => (
              <div 
                key={i} 
                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-black hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center gap-4"
              >
                <div className="text-3xl transition-transform group-hover:scale-125 duration-300 w-10 h-10 flex items-center justify-center">
                  {feature.icon?.startsWith('http') || feature.icon?.startsWith('data:image') ? (
                    <img src={feature.icon} alt="" className="w-full h-full object-contain" />
                  ) : (
                    feature.icon
                  )}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors text-center">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    );
  },
};
