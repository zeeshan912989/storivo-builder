import React from 'react';
import { SectionWrapper } from './SectionWrapper';

export const HeroSliderBlock = {
  fields: {
    autoPlay: { type: "radio", label: "Auto-Play Slides", options: [{ label: "On", value: true }, { label: "Off", value: false }] },
    
    // Banner 1
    slide1_image: { type: "text", label: "Banner 1: Upload Image" },
    slide1_title: { type: "text", label: "Banner 1: Main Title" },
    slide1_subtitle: { type: "text", label: "Banner 1: Subtitle" },
    
    // Banner 2
    slide2_image: { type: "text", label: "Banner 2: Upload Image" },
    slide2_title: { type: "text", label: "Banner 2: Main Title" },
    slide2_subtitle: { type: "text", label: "Banner 2: Subtitle" },
    
    // Banner 3
    slide3_image: { type: "text", label: "Banner 3: Upload Image" },
    slide3_title: { type: "text", label: "Banner 3: Main Title" },
    slide3_subtitle: { type: "text", label: "Banner 3: Subtitle" },
    
    // Banner 4
    slide4_image: { type: "text", label: "Banner 4: Upload Image" },
    slide4_title: { type: "text", label: "Banner 4: Main Title" },
    slide4_subtitle: { type: "text", label: "Banner 4: Subtitle" },
    
    // Banner 5
    slide5_image: { type: "text", label: "Banner 5: Upload Image" },
    slide5_title: { type: "text", label: "Banner 5: Main Title" },
    slide5_subtitle: { type: "text", label: "Banner 5: Subtitle" },

    paddingTop: {
      type: "select",
      options: [
        { label: "None", value: "pt-0" },
        { label: "Small", value: "pt-8" },
        { label: "Medium", value: "pt-16" },
        { label: "Large", value: "pt-24" },
      ],
    },
    paddingBottom: {
      type: "select",
      options: [
        { label: "None", value: "pb-0" },
        { label: "Small", value: "pb-8" },
        { label: "Medium", value: "pb-16" },
        { label: "Large", value: "pb-24" },
      ],
    },
    bgColor: {
      type: "select",
      options: [
        { label: "Default", value: "bg-white" },
        { label: "Light", value: "bg-gray-50" },
        { label: "Dark", value: "bg-zinc-900 text-white" },
      ],
    },
  },
  defaultProps: {
    autoPlay: true,
    paddingTop: "pt-0",
    paddingBottom: "pb-0",
    bgColor: "bg-white",
    slide1_image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1600&q=80",
    slide1_title: "Spoke Sofa",
    slide1_subtitle: "Modern Elegance",
    slide2_image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1600&q=80",
    slide2_title: "Velvet Lounge",
    slide2_subtitle: "Pure Comfort",
    slide3_image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1600&q=80",
    slide3_title: "Nordic Living",
    slide3_subtitle: "Minimalist Design",
    slide4_image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80",
    slide4_title: "Urban Space",
    slide4_subtitle: "Compact Style",
    slide5_image: "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&w=1600&q=80",
    slide5_title: "Luxury Suite",
    slide5_subtitle: "Premium Finish",
  },
  render: (props) => {
    const { autoPlay, paddingTop, paddingBottom, bgColor } = props;
    const [current, setCurrent] = React.useState(0);

    const slides = [];
    if (props.slide1_image) slides.push({ image: props.slide1_image, title: props.slide1_title, subtitle: props.slide1_subtitle });
    if (props.slide2_image) slides.push({ image: props.slide2_image, title: props.slide2_title, subtitle: props.slide2_subtitle });
    if (props.slide3_image) slides.push({ image: props.slide3_image, title: props.slide3_title, subtitle: props.slide3_subtitle });
    if (props.slide4_image) slides.push({ image: props.slide4_image, title: props.slide4_title, subtitle: props.slide4_subtitle });
    if (props.slide5_image) slides.push({ image: props.slide5_image, title: props.slide5_title, subtitle: props.slide5_subtitle });

    React.useEffect(() => {
      if (!autoPlay || !slides.length) return;
      const timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(timer);
    }, [autoPlay, slides.length]);

    if (slides.length === 0) return <div className="p-20 text-center bg-gray-100 font-bold uppercase tracking-widest text-gray-400">Please upload images in sidebar</div>;

    return (
      <SectionWrapper paddingTop={paddingTop} paddingBottom={paddingBottom} bgColor={bgColor}>
        <div className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-gray-100 group font-sans">
          {slides.map((s, i) => (
            <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
              <img key={s.image} src={s.image} className="w-full h-full object-cover transition-transform duration-[10000ms] scale-110 group-hover:scale-100" alt={s.title} />
              <div className="absolute inset-0 bg-black/10"></div>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
                <h4 className="text-white font-black text-xl md:text-2xl mb-4 tracking-tight drop-shadow-md uppercase tracking-[0.1em]">{s.subtitle}</h4>
                <h2 className="text-7xl md:text-[12rem] font-black text-white mb-10 tracking-tighter drop-shadow-2xl leading-none scale-y-110 uppercase">{s.title}</h2>
                <button className="bg-white text-black px-16 py-6 rounded-full font-black text-xl hover:scale-110 active:scale-95 transition-all shadow-2xl shadow-black/20 uppercase tracking-[0.15em]">
                  Shop Now
                </button>
              </div>
            </div>
          ))}

          <div className="absolute bottom-16 left-0 right-0 flex justify-center items-center gap-10 z-20">
             <button onClick={() => setCurrent((current - 1 + slides.length) % slides.length)} className="text-white/60 hover:text-white transition-all transform hover:-translate-x-1">
               <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
             </button>
             <div className="flex gap-4 items-center">
                {slides.map((_, i) => (
                   <div 
                    key={i} 
                    onClick={() => setCurrent(i)}
                    className={`cursor-pointer transition-all duration-500 rounded-full ${i === current ? 'w-20 h-3 bg-white shadow-lg' : 'w-4 h-4 bg-white/40 hover:bg-white/60'}`}
                   ></div>
                ))}
             </div>
             <button onClick={() => setCurrent((current + 1) % slides.length)} className="text-white/60 hover:text-white transition-all transform hover:translate-x-1">
               <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
             </button>
          </div>
        </div>
      </SectionWrapper>
    );
  },
};
