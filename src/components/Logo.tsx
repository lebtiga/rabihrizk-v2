import React from 'react';

export default function Logo() {
  return (
    <div className="relative flex items-center justify-center h-10 w-10">
      {/* Background gradient and effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-20 blur-sm" />
      <div className="absolute inset-0 bg-[#0A051E] rounded-lg" />
      
      {/* Border effect */}
      <div className="absolute inset-0 rounded-lg border border-blue-500/30" />
      
      {/* RR Text */}
      <div className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-bold text-xl tracking-tight">
        RR
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 h-2 w-2 bg-blue-400 rounded-full" />
      <div className="absolute bottom-0 left-0 h-2 w-2 bg-purple-400 rounded-full" />
      
      {/* Animated glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg animate-pulse" />
    </div>
  );
}
