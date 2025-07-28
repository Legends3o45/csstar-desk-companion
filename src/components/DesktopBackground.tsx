import React from 'react';
import { CSStarChatbot } from './CSStarChatbot';

export function DesktopBackground() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden">
      {/* Simulated Desktop Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Desktop Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 35%, rgba(255,255,255,0.2) 35%, rgba(255,255,255,0.2) 65%, transparent 65%),
              linear-gradient(-45deg, transparent 35%, rgba(255,255,255,0.1) 35%, rgba(255,255,255,0.1) 65%, transparent 65%)
            `,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Simulated Desktop Icons */}
        <div className="absolute top-8 left-8 grid grid-cols-1 gap-6">
          {['Documents', 'Applications', 'Downloads'].map((name, idx) => (
            <div key={idx} className="flex flex-col items-center gap-1 opacity-60">
              <div className="w-12 h-12 bg-white/20 rounded-lg border border-white/30 backdrop-blur-sm" />
              <span className="text-xs text-slate-700 font-medium">{name}</span>
            </div>
          ))}
        </div>

        {/* Simulated Taskbar */}
        <div className="absolute bottom-0 left-0 right-1/2 h-12 bg-slate-800/80 backdrop-blur-md border-t border-slate-600/30">
          <div className="flex items-center h-full px-4 gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center">
              <span className="text-white text-xs font-bold">⊞</span>
            </div>
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-8 h-8 bg-slate-600/50 rounded border border-slate-500/30" />
            ))}
          </div>
        </div>
        
        {/* Desktop Title */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className="text-4xl font-bold text-slate-700/30 mb-2">University Desktop</h2>
          <p className="text-lg text-slate-600/40">CS-star Assistant Active</p>
        </div>
      </div>

      {/* CS-star Floating Chatbot Panel */}
      <CSStarChatbot />
    </div>
  );
}