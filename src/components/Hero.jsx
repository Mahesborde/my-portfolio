import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, FileText, Github, Linkedin, Mail, MapPin, Sparkles, Database, BrainCircuit, Code2, Terminal, ChevronDown } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Hero = ({ onOpenResume }) => {
  const { personal } = portfolioData;
  const heroRef = useRef(null);

  // Mouse spotlight positioning state for 3D torch mask effect
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const heroEl = heroRef.current;
    if (heroEl) {
      heroEl.addEventListener('mousemove', handleMouseMove);
      heroEl.addEventListener('mouseenter', handleMouseEnter);
      heroEl.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (heroEl) {
        heroEl.removeEventListener('mousemove', handleMouseMove);
        heroEl.removeEventListener('mouseenter', handleMouseEnter);
        heroEl.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWork = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Helper to split text into 3D animated character spans
  const render3DText = (text, startDelay = 0) => {
    return text.split('').map((char, index) => {
      if (char === ' ') return <span key={index} className="inline-block w-3 sm:w-5 md:w-8">&nbsp;</span>;
      return (
        <span
          key={index}
          className="inline-block transition-transform duration-700 ease-out hover:scale-125 hover:text-[#ff6b00] hover:-translate-y-2 cursor-pointer"
          style={{
            willChange: 'transform, opacity',
            animation: `letter3DReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
            animationDelay: `${startDelay + index * 0.04}s`,
            opacity: 0,
            transform: 'translateY(60px) rotateX(40deg)'
          }}
        >
          {char}
        </span>
      );
    });
  };

  return (
    <section 
      ref={heroRef}
      id="hero" 
      className="relative min-h-screen flex flex-col justify-between pt-24 pb-12 overflow-hidden select-none"
    >
      {/* Interactive Torch Spotlight Mouse Mask Layer */}
      <div 
        className="absolute inset-0 pointer-events-none z-[3] transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(circle 300px at ${mousePos.x}px ${mousePos.y}px, rgba(255, 107, 0, 0.18), transparent 80%)`
        }}
      ></div>

      {/* Rameshwar Bhagwat Sky Glow Arc Backdrop SVG */}
      <div className="absolute bottom-[-20px] left-0 right-0 w-full h-[480px] pointer-events-none overflow-hidden z-[2]">
        <svg className="w-full h-full opacity-80" viewBox="0 0 1200 600" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="skyArcGlow" cx="50%" cy="80%" r="52%">
              <stop offset="0%" stopColor="#d35400" stopOpacity="0.95" />
              <stop offset="20%" stopColor="#b23b00" stopOpacity="0.75" />
              <stop offset="45%" stopColor="#802000" stopOpacity="0.4" />
              <stop offset="75%" stopColor="#3b0800" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#0F0E0E" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="coreArcGlow" cx="50%" cy="80%" r="18%">
              <stop offset="0%" stopColor="#ff9100" stopOpacity="1" />
              <stop offset="30%" stopColor="#ff6b00" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#d35400" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="arcLineGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#ff6b00" stopOpacity="0" />
              <stop offset="25%" stopColor="#ff8c38" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="75%" stopColor="#ff8c38" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#ff6b00" stopOpacity="0" />
            </linearGradient>
            <filter id="softGlowBlur">
              <feGaussianBlur stdDeviation="5" />
            </filter>
          </defs>
          <rect x="0" y="0" width="1200" height="600" fill="url(#skyArcGlow)" />
          <rect x="0" y="0" width="1200" height="600" fill="url(#coreArcGlow)" />
          <path d="M 0 560 Q 600 340, 1200 560" fill="none" stroke="url(#arcLineGrad)" strokeWidth="16" filter="url(#softGlowBlur)" opacity="0.4" />
          <path d="M 0 560 Q 600 340, 1200 560" fill="none" stroke="url(#arcLineGrad)" strokeWidth="4" />
        </svg>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none z-[1]"></div>

      {/* Side Monospace Notes (Matching Rameshwar Bhagwat Layout) */}
      <div className="absolute left-[4%] top-[16%] hidden lg:block max-w-[220px] text-right pointer-events-none font-mono text-[10px] leading-[1.6] tracking-widest text-white/40 z-[10]">
        MAHESH BORDE • ARCHITECTING MODERN, SCALABLE WEB PLATFORMS WITH INTELLIGENT LOGIC.
      </div>
      <div className="absolute right-[4%] bottom-[22%] hidden lg:block max-w-[230px] text-left pointer-events-none font-mono text-[10px] leading-[1.6] tracking-widest text-white/40 z-[10]">
        CRAFTING ULTRA-FAST REACT APPLICATIONS POWERED BY ADVANCED SQL & PYTHON.
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-[1300px] w-full mx-auto px-4 sm:px-6 md:px-8 text-center flex flex-col items-center justify-center my-auto">
        
        {/* Top Status Capsule */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-6 shadow-inner animate-pulse-glow">
          <span className="w-2 h-2 rounded-full bg-[#ff6b00] animate-ping"></span>
          <span className="w-2 h-2 rounded-full bg-[#ff6b00]"></span>
          <span className="text-xs font-mono tracking-widest text-white/90 uppercase font-semibold">
            SANJIVANI COE KOPARGAON • IT ENGINEERING
          </span>
        </div>

        {/* 3D PERSPECTIVE MASSIVE TITLE */}
        <h1 
          aria-label="Mahesh Borde | Full Stack Developer & IT Engineering Student"
          className="w-full flex flex-col items-center leading-[0.9] text-4xl sm:text-6xl md:text-7xl lg:text-[7vw] font-black tracking-tighter text-white mb-6"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            perspective: "1000px"
          }}
        >
          {/* Row 1: AI & ML FRONTEND */}
          <div className="flex items-center gap-2 sm:gap-4 flex-wrap justify-center text-white/90">
            <div className="gradient-text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              {render3DText("AI & ML FRONTEND", 0.1)}
            </div>
            
            {/* Social GitHub Icon embedded inside text row */}
            <a 
              href={personal.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Mahesh Borde GitHub Profile"
              className="p-2 sm:p-3 rounded-full text-white/30 hover:text-[#ff6b00] hover:scale-125 transition-all duration-300 inline-block pointer-events-auto"
              title="GitHub Profile"
            >
              <Github className="w-7 h-7 sm:w-10 sm:h-10" />
            </a>
          </div>

          {/* Row 2: DEVELOPER & SQL */}
          <div className="flex items-center gap-2 sm:gap-4 flex-wrap justify-center mt-1 sm:mt-3">
            <a 
              href={personal.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Mahesh Borde LinkedIn Profile"
              className="p-2 sm:p-3 rounded-full text-white/30 hover:text-[#ff6b00] hover:scale-125 transition-all duration-300 inline-block pointer-events-auto"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-7 h-7 sm:w-10 sm:h-10" />
            </a>

            <div className="gradient-text-orange drop-shadow-[0_0_35px_rgba(255,107,0,0.5)]">
              {render3DText("DEVELOPER", 0.4)}
            </div>
          </div>

          {/* Row 3: MAHESH BORDE */}
          <div className="flex items-center gap-2 sm:gap-4 flex-wrap justify-center mt-2 sm:mt-4 text-white">
            <div className="text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]">
              {render3DText("MAHESH BORDE", 0.7)}
            </div>

            <a 
              href={`mailto:${personal.email}`} 
              aria-label="Send Direct Email to Mahesh Borde"
              className="p-2 sm:p-3 rounded-full text-white/30 hover:text-[#ff6b00] hover:scale-125 transition-all duration-300 inline-block pointer-events-auto"
              title="Send Direct Email"
            >
              <Mail className="w-7 h-7 sm:w-10 sm:h-10" />
            </a>
          </div>
        </h1>

        {/* Subtitle / Role Info */}
        <p className="max-w-2xl text-base sm:text-xl text-white/70 font-medium leading-relaxed mb-8">
          Specializing in <span className="text-[#ff6b00] font-semibold">Python AI/ML Models</span>, <span className="text-white font-semibold">React Frontend UIs</span> & <span className="text-[#ff9100] font-semibold">Advanced MySQL Systems</span>.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 w-full sm:w-auto pointer-events-auto">
          {/* View Resume Trigger */}
          <button
            onClick={onOpenResume}
            className="w-full sm:w-auto px-10 py-4 rounded-full font-bold text-sm sm:text-base text-white glowing-btn-orange flex items-center justify-center gap-3 group cursor-pointer shadow-2xl"
          >
            <FileText className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>View Resume</span>
          </button>

          {/* Explore Projects */}
          <button
            onClick={scrollToWork}
            className="w-full sm:w-auto px-10 py-4 rounded-full font-bold text-sm sm:text-base text-white glowing-btn-outline flex items-center justify-center gap-3 group cursor-pointer"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4 text-[#ff6b00] group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

        {/* Location Badge */}
        <div className="flex items-center justify-center gap-2 text-xs font-mono text-white/50">
          <MapPin className="w-4 h-4 text-[#ff6b00]" />
          <span>Shivrai, Taluka Vaijapur, Dist. Chhatrapati Sambhajinagar</span>
        </div>

      </div>

      {/* Keyframe animation style for 3D letter reveal */}
      <style>{`
        @keyframes letter3DReveal {
          0% {
            opacity: 0;
            transform: translateY(60px) rotateX(40deg) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateY(0px) rotateX(0deg) scale(1);
          }
        }
      `}</style>

    </section>
  );
};

export default Hero;
