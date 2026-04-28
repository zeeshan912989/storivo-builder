import React from 'react';
import { sectionFields, defaultSectionProps, SectionWrapper } from './SectionWrapper';

export const SignupFormBlock = {
  fields: {
    ...sectionFields,
    title: { type: "text" },
  },
  defaultProps: {
    ...defaultSectionProps,
    title: "Start Your Journey",
    paddingTop: "pt-24",
    paddingBottom: "pb-24",
    bgColor: "bg-gray-50",
  },
  render: ({ title, paddingTop, paddingBottom, bgColor, customCss }) => (
    <SectionWrapper paddingTop={paddingTop} paddingBottom={paddingBottom} bgColor={bgColor} customCss={customCss}>
      <div className="max-w-md mx-auto px-8 font-sans">
        <div className="bg-white p-12 rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-gray-100">
          <div className="text-center mb-10">
             <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-[10px] font-black uppercase tracking-widest mb-6 border border-indigo-100">Join Storivo</div>
             <h2 className="text-3xl font-black tracking-tight">{title}</h2>
             <p className="text-gray-500 mt-2 font-medium text-sm">Create your free account in seconds</p>
          </div>

          <form className="space-y-5" onSubmit={e => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
               <div className="space-y-2">
                 <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">First Name</label>
                 <input type="text" placeholder="John" className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-black/5 transition-all font-medium text-sm" />
               </div>
               <div className="space-y-2">
                 <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Last Name</label>
                 <input type="text" placeholder="Doe" className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-black/5 transition-all font-medium text-sm" />
               </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
              <input type="email" placeholder="john@example.com" className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-black/5 transition-all font-medium text-sm" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Password</label>
              <input type="password" placeholder="••••••••" className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-black/5 transition-all font-medium text-sm" />
            </div>
            
            <div className="flex items-start gap-4 py-4 px-1">
              <input type="checkbox" className="mt-1 w-4 h-4 rounded border-gray-300 text-black focus:ring-black" id="terms" />
              <label htmlFor="terms" className="text-xs text-gray-500 font-bold leading-relaxed">
                By signing up, you agree to our <a href="#" className="text-black underline decoration-2 underline-offset-2">Terms</a> and <a href="#" className="text-black underline decoration-2 underline-offset-2">Privacy Policy</a>.
              </label>
            </div>

            <button className="w-full bg-black text-white py-5 rounded-2xl font-black text-lg hover:shadow-2xl hover:shadow-black/20 transition-all active:scale-[0.98] uppercase tracking-widest">
              Create Account
            </button>
          </form>
          
          <p className="text-center text-sm text-gray-500 mt-10 font-medium">
            Already have an account? <a href="#" className="text-black font-black underline decoration-2 underline-offset-4 hover:text-indigo-600 transition-colors">Sign in</a>
          </p>
        </div>
      </div>
    </SectionWrapper>
  ),
};
