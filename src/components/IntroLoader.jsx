import React, { useState, useEffect } from 'react';
import { Cpu, Sparkles, Terminal } from 'lucide-react';

const IntroLoader = ({ onComplete }) => {
  const [stage, setStage] = useState(0);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    // Stage 1: Hologram ignition
    const timer1 = setTimeout(() => setStage(1), 300);
    // Stage 2: 3D Text Blast
    const timer2 = setTimeout(() => setStage(2), 1100);
    // Stage 3: Shutter curtain open
    const timer3 = setTimeout(() => {
      setFadingOut(true);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 900);
    }, 2400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-[#0A0909] flex items-center justify-center overflow-hidden transition-all duration-900 ease-in-out ${
        fadingOut ? 'opacity-0 scale-110 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Laser Light Sweep Lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-[#ff6b00] to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-[#ff9100] to-transparent animate-pulse"></div>
        <div className="absolute top-1/2 left-0 w-[2px] h-full -translate-y-1/2 bg-gradient-to-b from-transparent via-[#ff6b00] to-transparent animate-pulse"></div>
        <div className="absolute top-1/2 right-0 w-[2px] h-full -translate-y-1/2 bg-gradient-to-b from-transparent via-[#ff9100] to-transparent animate-pulse"></div>
      </div>

      {/* Cyberpunk Hologram Radial Core */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#ff6b00]/30 via-[#d35400]/10 to-transparent filter blur-[120px] animate-pulse"></div>

      {/* Intro Center 3D Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl w-full">
        
        {/* Top Floating Hologram Badge */}
        <div 
          className={`transition-all duration-700 transform ${
            stage >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#ff6b00]/10 border border-[#ff6b00]/40 backdrop-blur-xl shadow-[0_0_20px_rgba(255,107,0,0.3)] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#ff6b00] animate-ping"></span>
            <span className="text-xs font-mono tracking-widest text-[#ff6b00] uppercase font-bold">
              SYSTEM INITIALIZING • MAHESH BORDE
            </span>
          </div>
        </div>

        {/* 3D Big Typography Blast */}
        <div 
          className={`perspective-1000 transition-all duration-900 transform ${
            stage >= 2 ? 'opacity-100 translate-z-0 rotate-x-0' : 'opacity-0 -translate-z-40 rotate-x-12'
          }`}
          style={{ perspective: '1000px' }}
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight leading-none text-white select-none">
            <span className="block drop-shadow-[0_0_35px_rgba(255,107,0,0.6)] gradient-text-orange font-sans">
              MAHESH BORDE
            </span>
          </h1>

          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#ff6b00]"></span>
            <span className="text-xs sm:text-base font-mono tracking-[0.25em] text-white/90 uppercase font-semibold">
              AI & ML FRONTEND DEVELOPER
            </span>
            <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#ff6b00]"></span>
          </div>
        </div>

        {/* Bottom Status Progress Indicator */}
        <div 
          className={`mt-12 transition-all duration-700 delay-300 transform ${
            stage >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="flex items-center gap-3 text-xs font-mono text-white/50">
            <Cpu className="w-4 h-4 text-[#ff6b00] animate-spin" style={{ animationDuration: '3s' }} />
            <span>Sanjivani COE Kopargaon • Full Stack & AI Engine</span>
          </div>
        </div>

      </div>

    </div>
  );
};

export default IntroLoader;
