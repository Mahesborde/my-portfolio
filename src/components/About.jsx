import React from 'react';
import { User, Cpu, Database, Layout, MapPin, GraduationCap, Award, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { personal } = portfolioData;

  const coreStrengths = [
    {
      title: "AI & Machine Learning",
      icon: Cpu,
      desc: "Experience building Machine Learning algorithms in Python, content-based recommendation models, and NLP sentiment pipelines."
    },
    {
      title: "Frontend Engineering",
      icon: Layout,
      desc: "Crafting intuitive, responsive, and aesthetically stunning web interfaces using React.js, Tailwind CSS, HTML5, and JavaScript."
    },
    {
      title: "Advanced SQL & Databases",
      icon: Database,
      desc: "Expertise in writing complex SQL queries, relational schema normalization, indexing, and high-speed MySQL database management."
    }
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff6b00]/10 border border-[#ff6b00]/30 text-[#ff6b00] text-xs font-mono mb-3">
            <User className="w-3.5 h-3.5" />
            <span>KNOW MAHESH BORDE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About <span className="gradient-text-orange">My Background</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#ff6b00] to-[#ff9100] rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Bio Card */}
          <div className="lg:col-span-7 glass-card p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#ff6b00]/10 rounded-full filter blur-3xl pointer-events-none group-hover:bg-[#ff6b00]/20 transition-all duration-500"></div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono text-[#ff6b00] uppercase tracking-wider">Engineering Background</span>
                <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">IT Specialization</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Hi, I'm Mahesh Borde 👋
              </h3>

              <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-6">
                I am an **IT Engineering student at Sanjivani College of Engineering, Kopargaon**. My passion lies at the intersection of **Artificial Intelligence, Machine Learning, Modern Frontend Architecture, and Advanced SQL Database Design**.
              </p>

              <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-8">
                Whether it's building AI movie recommendation engines, NLP sentiment analyzers, or designing high-efficiency relational database structures in MySQL, I focus on delivering clean, scalable, and impact-driven software.
              </p>
            </div>

            {/* Quick Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-white/90">
                <CheckCircle2 className="w-4 h-4 text-[#ff6b00] flex-shrink-0" />
                <span>AI/ML Model Integration</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-white/90">
                <CheckCircle2 className="w-4 h-4 text-[#ff6b00] flex-shrink-0" />
                <span>Advanced SQL Database Queries</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-white/90">
                <CheckCircle2 className="w-4 h-4 text-[#ff6b00] flex-shrink-0" />
                <span>React.js & Modern Frontend</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-white/90">
                <CheckCircle2 className="w-4 h-4 text-[#ff6b00] flex-shrink-0" />
                <span>Python & Data Pipelines</span>
              </div>
            </div>

          </div>

          {/* Side Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Education Badge Card */}
            <div className="glass-card p-6 rounded-3xl flex items-start gap-4 border-l-4 border-l-[#ff6b00]">
              <div className="p-3 rounded-2xl bg-[#ff6b00]/15 text-[#ff6b00]">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-mono text-[#ff6b00] uppercase tracking-wide">College & Degree</h4>
                <p className="text-lg font-bold text-white mt-1">{personal.degree}</p>
                <p className="text-sm text-white/70 mt-1">{personal.college}</p>
              </div>
            </div>

            {/* Location Card */}
            <div className="glass-card p-6 rounded-3xl flex items-start gap-4 border-l-4 border-l-[#ff9100]">
              <div className="p-3 rounded-2xl bg-[#ff9100]/15 text-[#ff9100]">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-mono text-[#ff9100] uppercase tracking-wide">Location & Hometown</h4>
                <p className="text-base font-semibold text-white mt-1">Shivrai, Taluka Vaijapur</p>
                <p className="text-xs text-white/70 mt-0.5">District Chhatrapati Sambhajinagar, MH, India</p>
              </div>
            </div>

            {/* Core Values Card */}
            <div className="glass-card p-6 rounded-3xl">
              <h4 className="text-sm font-mono text-white/60 uppercase tracking-wide mb-3">Core Pillars</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white">Python Programming</span>
                <span className="px-3 py-1.5 rounded-full bg-[#ff6b00]/20 border border-[#ff6b00]/40 text-xs text-[#ff6b00] font-semibold">Advanced MySQL</span>
                <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white">Machine Learning</span>
                <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white">React.js UIs</span>
                <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white">Git & GitHub</span>
              </div>
            </div>

          </div>

        </div>

        {/* 3 Core Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {coreStrengths.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="glass-card p-6 rounded-3xl hover:border-[#ff6b00]/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-[#ff6b00]/10 border border-[#ff6b00]/20 flex items-center justify-center text-[#ff6b00] mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default About;
