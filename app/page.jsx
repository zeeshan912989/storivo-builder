"use client";

import React from "react";
import { Puck } from "@measured/puck";
import "@measured/puck/dist/index.css";
import { useBuilderStore } from "../store/useBuilderStore";
import { Panel, Group as PanelGroup, Separator as PanelResizeHandle } from "react-resizable-panels";
import { config } from "../puck.config";

export default function EditorPage() {
  const { data, setData } = useBuilderStore();
  const { undo, redo } = useBuilderStore.temporal.getState();

  const handleSave = (newData) => {
    setData(newData);
    // Sync to localStorage for the storefront to read
    if (typeof window !== 'undefined') {
      localStorage.setItem('storivo-storefront-data', JSON.stringify(newData));
    }
  };

  return (
    <div className="h-screen w-full flex flex-col bg-white overflow-hidden font-sans">
      {/* Top Navigation Bar */}
      <div className="h-16 border-b border-gray-100 flex items-center justify-between px-6 shrink-0 bg-white z-50">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
            <span className="text-white font-black text-xl">S</span>
          </div>
          <div>
            <h1 className="font-black text-lg tracking-tighter text-black uppercase leading-none">Storivo Builder</h1>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Production Environment</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex bg-gray-100 p-1 rounded-xl mr-4">
            <button onClick={undo} className="p-2 hover:bg-white hover:shadow-sm rounded-lg transition-all"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" /></svg></button>
            <button onClick={redo} className="p-2 hover:bg-white hover:shadow-sm rounded-lg transition-all"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 10h-10a8 8 0 00-8 8v2m18-10l-6 6m6-6l-6-6" /></svg></button>
          </div>
          
          <a 
            href="/store" 
            target="_blank"
            className="px-6 py-2.5 text-xs font-black uppercase tracking-widest text-gray-600 hover:text-black transition-all flex items-center gap-2"
          >
            <span>View Live Store</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </a>
          
          <button className="px-8 py-3 bg-black text-white rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-xl shadow-black/20 hover:scale-105 active:scale-95 transition-all">
            Publish Changes
          </button>
        </div>
      </div>

      {/* Editor Main Content */}
      <div className="flex-1 overflow-hidden relative">
        <Puck 
          config={config} 
          data={data} 
          onPublish={handleSave}
          onChange={setData}
        />
      </div>

      <style jsx global>{`
        .Puck {
          --puck-color-grey-11: #ffffff;
          --puck-color-grey-10: #f9f9f9;
          --puck-color-grey-09: #eeeeee;
          --puck-color-blue-05: #000000;
        }
        
        .Puck-leftSideBar, .Puck-rightSideBar {
          background-color: #ffffff !important;
          border-color: #f0f0f0 !important;
          padding: 10px !important;
        }

        .Puck-component-list-item {
          border-radius: 12px !important;
          margin-bottom: 8px !important;
          font-weight: 700 !important;
          text-transform: uppercase !important;
          letter-spacing: 0.05em !important;
          font-size: 10px !important;
          border: 1px solid #f0f0f0 !important;
          transition: all 0.2s ease !important;
        }

        .Puck-component-list-item:hover {
          border-color: #000 !important;
          background: #fafafa !important;
        }
      `}</style>
    </div>
  );
}
