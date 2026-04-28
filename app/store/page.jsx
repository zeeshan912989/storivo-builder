"use client";

import React, { useEffect, useState } from "react";
import { Render } from "@measured/puck";
import { config } from "../../puck.config";

export default function StorefrontPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Initial load from localStorage
    const savedData = localStorage.getItem('storivo-storefront-data');
    if (savedData) {
      setData(JSON.parse(savedData));
    }

    // Listen for updates from the builder in other tabs
    const handleStorageChange = (e) => {
      if (e.key === 'storivo-storefront-data' && e.newValue) {
        setData(JSON.parse(e.newValue));
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  if (!data) {
    return (
      <div className="h-screen flex flex-col items-center justify-center font-sans bg-white">
        <div className="w-16 h-16 border-4 border-gray-100 border-t-black rounded-full animate-spin mb-6"></div>
        <h2 className="text-xl font-black uppercase tracking-widest text-black">Connecting to Storefront...</h2>
        <p className="text-gray-400 mt-2 font-medium">Please publish your changes in the builder first.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Render config={config} data={data} />
      
      {/* Floating Preview Badge */}
      <div className="fixed bottom-8 left-8 z-[9999] bg-black text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 border border-white/20 backdrop-blur-sm bg-black/80">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-[10px] font-black uppercase tracking-[0.2em]">Live Preview Mode</span>
      </div>
    </div>
  );
}
