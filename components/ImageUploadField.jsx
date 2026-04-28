import React, { useState, useRef } from "react";

export const ImageUploadField = ({ value, onChange, label = "Image" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange(reader.result);
        setIsOpen(false);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-2">
      <label className="text-xs font-bold uppercase text-gray-500">{label}</label>
      <div className="flex flex-col gap-2">
        {value && (
          <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-gray-200 bg-gray-50 group">
            <img src={value} alt="Preview" className="w-full h-full object-contain" />
            <div className="absolute inset-0 bg-black/5 flex flex-col items-center justify-center gap-2">
              <button 
                onClick={() => setIsOpen(true)}
                className="bg-white text-black text-[10px] font-black px-4 py-2 rounded-full shadow-2xl hover:scale-105 transition-all uppercase tracking-wider"
              >
                Change Image
              </button>
            </div>
          </div>
        )}
        {!value && (
          <button 
            onClick={() => setIsOpen(true)}
            className="w-full aspect-video rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center gap-3 text-gray-400 hover:border-black hover:text-black hover:bg-gray-50 transition-all bg-white"
          >
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest">Upload Image</span>
          </button>
        )}
        
        <div className="flex gap-2">
          <input 
            type="text" 
            value={value || ""} 
            onChange={(e) => onChange(e.target.value)} 
            placeholder="Or paste image URL here..."
            className="flex-1 text-[11px] p-2 border border-gray-200 rounded focus:border-black outline-none bg-white transition-all shadow-sm"
          />
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300" onClick={() => setIsOpen(false)} />
          <div className="relative bg-white rounded-3xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.3)] w-full max-w-xl overflow-hidden animate-in fade-in zoom-in slide-in-from-bottom-8 duration-500">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-black text-black tracking-tight">Media Manager</h3>
                  <p className="text-xs font-medium text-gray-500">Upload or select your assets</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-black hover:border-black transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-8">
              <div 
                onClick={() => fileInputRef.current.click()}
                className="w-full h-72 rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center gap-6 cursor-pointer hover:border-black hover:bg-gray-50 transition-all group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-black group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-xl">
                  <svg className="w-10 h-10 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                </div>
                
                <div className="text-center relative z-10">
                  <p className="text-xl font-black text-gray-900 tracking-tight">Drop your image here</p>
                  <p className="text-sm text-gray-500 mt-2 font-medium">PNG, JPG, WEBP up to 5MB</p>
                </div>
                
                <button className="mt-2 px-8 py-3 bg-white border border-gray-200 rounded-full text-sm font-bold shadow-sm group-hover:border-black transition-all">
                  Browse Files
                </button>
                
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  className="hidden" 
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>
              
              <div className="mt-8">
                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-gray-100" />
                  <span className="text-[10px] font-black uppercase text-gray-400 tracking-[0.2em]">External Asset</span>
                  <div className="h-px flex-1 bg-gray-100" />
                </div>
                
                <div className="mt-6 flex gap-2">
                  <div className="relative flex-1">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </div>
                    <input 
                      type="text" 
                      defaultValue={value && !value.startsWith('data:') ? value : ""}
                      onBlur={(e) => {
                        if (e.target.value) onChange(e.target.value);
                      }}
                      placeholder="Enter image URL..."
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-black outline-none transition-all text-sm font-medium"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-gray-50 flex justify-between items-center">
              <p className="text-[10px] text-gray-400 font-medium max-w-[200px]">
                Files are stored locally in your browser for this session.
              </p>
              <div className="flex gap-3">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-2.5 text-sm font-bold text-gray-500 hover:text-black transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="px-8 py-2.5 bg-black text-white rounded-xl text-sm font-bold hover:bg-gray-800 transition-all shadow-lg hover:shadow-black/20 active:scale-95"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes zoom-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-in {
          animation-fill-mode: forwards;
        }
        .fade-in {
          animation-name: fade-in;
        }
        .zoom-in {
          animation-name: zoom-in;
        }
      `}</style>
    </div>
  );
};
