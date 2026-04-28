import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

export const MonacoEditorField = ({ value, onChange, language = "html", height = "200px" }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="space-y-2 my-2">
      <div className="flex items-center justify-between">
        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Editor</label>
        <button 
          onClick={(e) => {
            e.preventDefault();
            setIsExpanded(true);
          }}
          className="text-[10px] font-black uppercase tracking-widest text-blue-600 hover:text-blue-700 flex items-center gap-1"
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
          Open Fullscreen
        </button>
      </div>

      <div className="border border-gray-100 rounded-xl overflow-hidden shadow-inner bg-[#1e1e1e]">
        <Editor
          height={height}
          language={language}
          value={value}
          onChange={(val) => onChange(val)}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 12,
            lineNumbers: "off",
            folding: false,
            wordWrap: "on",
            scrollBeyondLastLine: false,
            automaticLayout: true,
          }}
        />
      </div>

      {/* Fullscreen Editor Modal */}
      {isExpanded && (
        <div className="fixed inset-0 z-[100000] flex flex-col bg-white animate-in fade-in duration-200">
          {/* Header */}
          <div className="h-16 border-b border-gray-100 flex items-center justify-between px-8 bg-white shrink-0">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <code className="text-white font-bold text-xs">{"</>"}</code>
              </div>
              <div>
                <h3 className="font-black text-xs uppercase tracking-widest text-black leading-none">Custom Code Editor</h3>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Language: {language}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
               <button 
                onClick={() => setIsExpanded(false)}
                className="px-8 py-3 bg-black text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 shadow-xl shadow-black/20 transition-all"
              >
                Close & Save
              </button>
            </div>
          </div>

          {/* Editor Body */}
          <div className="flex-1 bg-[#1e1e1e]">
            <Editor
              height="100%"
              language={language}
              value={value}
              onChange={(val) => onChange(val)}
              theme="vs-dark"
              options={{
                minimap: { enabled: true },
                fontSize: 14,
                lineNumbers: "on",
                wordWrap: "on",
                scrollBeyondLastLine: true,
                automaticLayout: true,
                padding: { top: 40, bottom: 40 },
              }}
            />
          </div>
          
          {/* Footer / Status */}
          <div className="h-10 bg-zinc-900 border-t border-white/5 px-6 flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-gray-500">
            <div className="flex gap-4">
               <span>Characters: {value?.length || 0}</span>
               <span>Lines: {value?.split('\n').length || 0}</span>
            </div>
            <div className="flex items-center gap-2">
               <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
               <span>Auto-saving enabled</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
