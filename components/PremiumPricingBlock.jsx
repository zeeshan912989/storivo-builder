import React, { useState } from 'react';
import { SectionWrapper } from './SectionWrapper';

const TierCard = ({ name, price, features, isHighlighted, buttonText, primaryColor, billingCycle }) => {
  return (
    <div className={`relative flex flex-col p-8 rounded-[32px] transition-all duration-500 group ${isHighlighted ? 'bg-black text-white shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] scale-105 z-10' : 'bg-white text-black border border-gray-100 hover:shadow-2xl'}`}>
      {isHighlighted && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-widest shadow-xl">
          Best Value
        </div>
      )}
      
      <div className="mb-8">
        <h3 className={`text-sm font-black uppercase tracking-widest mb-4 ${isHighlighted ? 'text-gray-400' : 'text-gray-500'}`}>{name}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-5xl font-black tracking-tighter">${price}</span>
          <span className={`text-sm font-bold uppercase ${isHighlighted ? 'text-gray-400' : 'text-gray-400'}`}>/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
        </div>
      </div>

      <div className="flex-1 mb-10 space-y-4">
        {features.map((feature, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${isHighlighted ? 'bg-white/10 text-white' : 'bg-black/5 text-black'}`}>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
            </div>
            <span className={`text-sm font-bold tracking-tight ${isHighlighted ? 'text-gray-200' : 'text-gray-600'}`}>{feature}</span>
          </div>
        ))}
      </div>

      <button 
        className={`w-full py-5 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] transition-all ${isHighlighted ? 'bg-white text-black hover:scale-105 active:scale-95' : 'bg-black text-white hover:bg-zinc-800 shadow-xl shadow-black/10'}`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export const PremiumPricingBlock = {
  fields: {
    title: { type: "text", label: "Title" },
    subtitle: { type: "textarea", label: "Subtitle" },
    discountBadge: { type: "text", label: "Annual Discount Badge (e.g. SAVE 20%)" },
    primaryColor: { type: "text", label: "Highlight Color" },
    
    // Tier 1
    tier1_name: { type: "text", label: "Tier 1: Name" },
    tier1_priceMonthly: { type: "text", label: "Tier 1: Monthly Price" },
    tier1_priceAnnual: { type: "text", label: "Tier 1: Annual Price" },
    tier1_features: { type: "array", label: "Tier 1: Features", fields: { text: { type: "text" } } },
    
    // Tier 2
    tier2_name: { type: "text", label: "Tier 2: Name" },
    tier2_priceMonthly: { type: "text", label: "Tier 2: Monthly Price" },
    tier2_priceAnnual: { type: "text", label: "Tier 2: Annual Price" },
    tier2_features: { type: "array", label: "Tier 2: Features", fields: { text: { type: "text" } } },
    
    // Tier 3
    tier3_name: { type: "text", label: "Tier 3: Name" },
    tier3_priceMonthly: { type: "text", label: "Tier 3: Monthly Price" },
    tier3_priceAnnual: { type: "text", label: "Tier 3: Annual Price" },
    tier3_features: { type: "array", label: "Tier 3: Features", fields: { text: { type: "text" } } },
  },
  defaultProps: {
    title: "Simple, Transparent Pricing",
    subtitle: "Choose the perfect plan for your business. No hidden fees, no surprises.",
    discountBadge: "SAVE 20%",
    primaryColor: "#C83214",
    
    tier1_name: "Starter",
    tier1_priceMonthly: "29",
    tier1_priceAnnual: "278",
    tier1_features: [{ text: "Up to 5 Products" }, { text: "Basic Analytics" }, { text: "Community Support" }],
    
    tier2_name: "Professional",
    tier2_priceMonthly: "99",
    tier2_priceAnnual: "950",
    tier2_features: [{ text: "Unlimited Products" }, { text: "Advanced AI Tools" }, { text: "24/7 Priority Support" }, { text: "Custom Branding" }],
    
    tier3_name: "Enterprise",
    tier3_priceMonthly: "249",
    tier3_priceAnnual: "2390",
    tier3_features: [{ text: "Full API Access" }, { text: "Dedicated Manager" }, { text: "SLA Guarantee" }],
  },
  render: ({ title, subtitle, discountBadge, tier1_name, tier1_priceMonthly, tier1_priceAnnual, tier1_features, tier2_name, tier2_priceMonthly, tier2_priceAnnual, tier2_features, tier3_name, tier3_priceMonthly, tier3_priceAnnual, tier3_features, primaryColor }) => {
    const [billingCycle, setBillingCycle] = useState('monthly');

    return (
      <SectionWrapper>
        <div className="max-w-[1400px] mx-auto px-8 py-24 font-sans">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black text-black tracking-tighter uppercase mb-6 leading-none">{title}</h2>
            <p className="text-gray-500 font-medium max-w-2xl mx-auto mb-12">{subtitle}</p>
            
            {/* Toggle */}
            <div className="flex items-center justify-center gap-6">
              <span className={`text-xs font-black uppercase tracking-widest transition-colors ${billingCycle === 'monthly' ? 'text-black' : 'text-gray-300'}`}>Monthly</span>
              <button 
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
                className="w-16 h-8 bg-gray-100 rounded-full p-1 transition-all relative"
              >
                <div className={`w-6 h-6 rounded-full shadow-md transition-all duration-300 ${billingCycle === 'monthly' ? 'translate-x-0 bg-white' : 'translate-x-8 bg-black'}`} />
              </button>
              <div className="flex items-center gap-3">
                <span className={`text-xs font-black uppercase tracking-widest transition-colors ${billingCycle === 'annual' ? 'text-black' : 'text-gray-300'}`}>Annual</span>
                <span style={{ backgroundColor: primaryColor }} className="text-white text-[9px] font-black px-3 py-1 rounded-full animate-bounce shadow-lg shadow-red-600/20">{discountBadge}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            <TierCard 
              name={tier1_name} 
              price={billingCycle === 'monthly' ? tier1_priceMonthly : tier1_priceAnnual} 
              features={tier1_features.map(f => f.text)}
              billingCycle={billingCycle}
              buttonText="Get Started"
            />
            <TierCard 
              name={tier2_name} 
              price={billingCycle === 'monthly' ? tier2_priceMonthly : tier2_priceAnnual} 
              features={tier2_features.map(f => f.text)}
              isHighlighted={true}
              billingCycle={billingCycle}
              buttonText="Try Pro Free"
              primaryColor={primaryColor}
            />
            <TierCard 
              name={tier3_name} 
              price={billingCycle === 'monthly' ? tier3_priceMonthly : tier3_priceAnnual} 
              features={tier3_features.map(f => f.text)}
              billingCycle={billingCycle}
              buttonText="Contact Sales"
            />
          </div>
        </div>
      </SectionWrapper>
    );
  },
};
