import React, { useState, useEffect } from 'react';
import { Home, User, Code2, Briefcase, GraduationCap, Mail, Menu, X, Terminal } from 'lucide-react';

const Navbar = ({ activeSection, setActiveSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code2 },
    { id: 'projects', label: 'Work', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="contents">
      {/* Desktop Floating Navbar */}
      <div className="fixed top-5 left-0 right-0 z-50 hidden md:flex justify-center pointer-events-none px-6">
        <nav aria-label="Main Navigation" className="relative rounded-full px-3 py-1.5 flex items-center gap-1 border pointer-events-auto shadow-2xl transition-all duration-300 bg-[#0F0E0E]/70 backdrop-blur-xl border-white/10">
          
          {/* Animated Border Spin Overlay */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-full p-[1px]">
            <div className="absolute left-1/2 top-1/2 w-[160%] aspect-square animate-navbar-border-spin bg-[conic-gradient(from_0deg,#ff6b00,rgba(255,107,0,0.1)_25%,rgba(255,255,255,0.05)_75%,#ff6b00)] opacity-40"></div>
          </div>

          {/* Logo Brand Badge */}
          <div 
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-2 px-3 py-1.5 cursor-pointer text-white hover:text-[#ff6b00] transition-colors mr-1"
          >
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#ff6b00] to-[#ff9100] flex items-center justify-center text-xs font-bold text-white shadow-md">
              MB
            </div>
            <span className="font-bold text-sm tracking-tight text-white/90">Mahesh.dev</span>
          </div>

          <div className="h-4 w-[1px] bg-white/15 mx-1"></div>

          {/* Nav Links */}
          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative text-xs font-medium px-3.5 py-2 rounded-full cursor-pointer flex items-center gap-1.5 transition-all duration-300 ${
                    isActive 
                      ? 'text-white font-semibold' 
                      : 'text-white/70 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b00]/30 to-[#ff9100]/20 rounded-full border border-[#ff6b00]/40 shadow-[0_0_12px_rgba(255,107,0,0.3)]"></div>
                  )}
                  <Icon className={`w-3.5 h-3.5 relative z-10 ${isActive ? 'text-[#ff6b00]' : 'text-white/60'}`} />
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </div>
        </nav>
      </div>

      {/* Mobile Floating Top Bar */}
      <nav className="fixed top-4 left-4 right-4 z-50 md:hidden">
        <div className="relative backdrop-blur-xl rounded-full px-4 py-2.5 shadow-2xl flex justify-between items-center bg-[#0F0E0E]/80 border border-white/10">
          <div 
            onClick={() => handleNavClick('hero')} 
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#ff6b00] to-[#ff9100] flex items-center justify-center text-xs font-bold text-white shadow-md">
              MB
            </div>
            <span className="font-bold text-sm text-white">Mahesh Borde</span>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#ff6b00]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="mt-2 bg-[#121111]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-3 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isActive 
                        ? 'bg-[#ff6b00]/20 text-[#ff6b00] border border-[#ff6b00]/40' 
                        : 'text-white/80 hover:bg-white/5'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
