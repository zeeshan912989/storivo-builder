import React from 'react';
import { sectionFields, defaultSectionProps, SectionWrapper } from './SectionWrapper';

export const LoginFormBlock = {
  fields: {
    ...sectionFields,
    title: { type: "text" },
    showSocial: { type: "radio", options: [{ label: "Yes", value: true }, { label: "No", value: false }] },
  },
  defaultProps: {
    ...defaultSectionProps,
    title: "Welcome Back",
    showSocial: true,
    paddingTop: "pt-24",
    paddingBottom: "pb-24",
    bgColor: "bg-gray-50",
  },
  render: ({ title, showSocial, paddingTop, paddingBottom, bgColor, customCss }) => (
    <SectionWrapper paddingTop={paddingTop} paddingBottom={paddingBottom} bgColor={bgColor} customCss={customCss}>
      <div className="max-w-md mx-auto px-8 font-sans">
        <div className="bg-white p-12 rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-gray-100">
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-white text-3xl font-black mx-auto mb-6 shadow-xl shadow-black/20">S</div>
            <h2 className="text-3xl font-black tracking-tight">{title}</h2>
            <p className="text-gray-500 mt-2 font-medium text-sm">Enter your details to access your account</p>
          </div>
          
          <form className="space-y-6" onSubmit={e => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
              <input type="email" placeholder="name@company.com" className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-black/5 transition-all font-medium" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Password</label>
                <a href="#" className="text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors">Forgot Password?</a>
              </div>
              <input type="password" placeholder="••••••••" className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-black/5 transition-all font-medium" />
            </div>
            <button className="w-full bg-black text-white py-5 rounded-2xl font-black text-lg hover:shadow-2xl hover:shadow-black/20 transition-all active:scale-[0.98] mt-4 uppercase tracking-widest">
              Sign In
            </button>
          </form>

          {showSocial && (
            <>
              <div className="relative my-10">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
                <div className="relative flex justify-center text-[10px] font-black uppercase tracking-widest"><span className="bg-white px-4 text-gray-400">Or continue with</span></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-3 py-4 border border-gray-200 rounded-2xl hover:bg-gray-50 font-bold text-sm transition-all active:scale-[0.98]">
                  <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-5 h-5" alt="Google" /> Google
                </button>
                <button className="flex items-center justify-center gap-3 py-4 border border-gray-200 rounded-2xl hover:bg-gray-50 font-bold text-sm transition-all active:scale-[0.98]">
                  <img src="https://www.svgrepo.com/show/448234/linkedin.svg" className="w-5 h-5" alt="LinkedIn" /> LinkedIn
                </button>
              </div>
            </>
          )}
          
          <p className="text-center text-sm text-gray-500 mt-10 font-medium">
            Don't have an account? <a href="#" className="text-black font-black underline decoration-2 underline-offset-4 hover:text-indigo-600 transition-colors">Sign up</a>
          </p>
        </div>
      </div>
    </SectionWrapper>
  ),
};
