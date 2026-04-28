import React, { useState, useEffect } from 'react';

export const RecentPurchasePopupBlock = {
  fields: {
    buyerName: { type: "text" },
    location: { type: "text" },
    productName: { type: "text" },
    timeAgo: { type: "text" },
    imageUrl: { type: "text" },
  },
  defaultProps: {
    buyerName: "Ali",
    location: "Karachi",
    productName: "The Minimalist Watch",
    timeAgo: "2 minutes ago",
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=100&q=80",
  },
  render: ({ buyerName, location, productName, timeAgo, imageUrl }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      // Show after 3 seconds, hide after 10 seconds. Loop in a real app.
      const showTimer = setTimeout(() => setVisible(true), 3000);
      const hideTimer = setTimeout(() => setVisible(false), 12000);
      return () => { clearTimeout(showTimer); clearTimeout(hideTimer); };
    }, []);

    return (
      <div className={`fixed bottom-6 left-6 z-[999] transition-all duration-700 ease-in-out ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}>
        <div className="bg-white p-3 pr-6 rounded-2xl shadow-2xl border border-gray-100 flex items-center gap-4 w-auto font-sans cursor-pointer hover:bg-gray-50 group relative overflow-hidden">
          {/* Shine effect */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shine_1s_ease-in-out]"></div>
          
          <img src={imageUrl} alt={productName} className="w-16 h-16 rounded-xl object-cover" />
          <div className="flex-1">
            <p className="text-xs text-gray-500 mb-0.5">{buyerName} from {location} purchased</p>
            <p className="text-sm font-bold text-gray-900 leading-tight mb-1">{productName}</p>
            <p className="text-[10px] uppercase font-bold text-green-600 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span> Verified • {timeAgo}
            </p>
          </div>
        </div>
        <style>{`
          @keyframes shine {
            100% { transform: translateX(100%); }
          }
        `}</style>
      </div>
    );
  },
};
