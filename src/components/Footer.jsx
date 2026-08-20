import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/10 relative z-10 bg-[#0A0909]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#ff6b00] to-[#ff9100] flex items-center justify-center text-xs font-bold text-white shadow-md">
            MB
          </div>
          <div>
            <span className="font-bold text-sm text-white">{personal.name}</span>
            <p className="text-xs text-white/50 font-mono">AI & ML Frontend Developer</p>
          </div>
        </div>

        {/* Copyright Note */}
        <div className="text-xs font-mono text-white/50 text-center flex items-center gap-1.5">
          <span>© {new Date().getFullYear()} Mahesh Borde. Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-[#ff6b00] fill-[#ff6b00]" />
          <span>using React & Tailwind</span>
        </div>

        {/* Back to Top & Socials */}
        <div className="flex items-center gap-4">
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-[#ff6b00] transition-colors"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-[#ff6b00] transition-colors"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-[#ff6b00]/20 hover:bg-[#ff6b00]/40 border border-[#ff6b00]/40 text-[#ff6b00] transition-all cursor-pointer"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
