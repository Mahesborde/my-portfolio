import React, { useState } from 'react';
import { 
  Code2, BrainCircuit, Database, Layout, Server, Cpu, 
  Terminal, GitBranch, Cloud, BookOpen, Layers, Webhook,
  FileCode, Atom, Palette, BarChart3, Star
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Code2, BrainCircuit, Database, Layout, Server, Cpu,
  Terminal, GitBranch, Cloud, BookOpen, Layers, Webhook,
  FileCode, Atom, Palette, BarChart3
};

const Skills = () => {
  const { categories, items } = portfolioData.skills;
  const [activeTab, setActiveTab] = useState('all');

  const filteredSkills = activeTab === 'all' 
    ? items 
    : items.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" className="py-24 relative z-10 bg-black/20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff6b00]/10 border border-[#ff6b00]/30 text-[#ff6b00] text-xs font-mono mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>MY TECHNICAL STACK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="gradient-text-orange">Expertise</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#ff6b00] to-[#ff9100] rounded-full mt-4"></div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-gradient-to-r from-[#ff6b00] to-[#d35400] text-white shadow-[0_0_20px_rgba(255,107,0,0.4)] scale-105'
                  : 'bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            return (
              <div 
                key={index} 
                className={`glass-card p-6 rounded-3xl relative overflow-hidden group transition-all duration-300 hover:scale-[1.02] ${
                  skill.highlight ? 'border-[#ff6b00]/40 shadow-[0_0_15px_rgba(255,107,0,0.1)]' : ''
                }`}
              >
                {skill.highlight && (
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-[#ff6b00]/20 border border-[#ff6b00]/50 text-[10px] font-mono text-[#ff6b00] flex items-center gap-1">
                    <Star className="w-2.5 h-2.5 fill-[#ff6b00]" />
                    <span>Key Skill</span>
                  </div>
                )}

                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff6b00] mb-4 group-hover:bg-[#ff6b00]/15 group-hover:border-[#ff6b00]/40 transition-colors">
                  <IconComponent className="w-6 h-6" />
                </div>

                <h3 className="text-base font-bold text-white mb-2">{skill.name}</h3>

                {/* Progress Bar */}
                <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden mb-2">
                  <div 
                    className="bg-gradient-to-r from-[#ff6b00] to-[#ff9100] h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>

                <div className="flex justify-between items-center text-xs font-mono text-white/50">
                  <span>Proficiency</span>
                  <span className="text-[#ff6b00] font-semibold">{skill.level}%</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom SQL Highlight Box */}
        <div className="mt-12 glass-card p-6 sm:p-8 rounded-3xl border border-[#ff6b00]/30 bg-gradient-to-r from-[#ff6b00]/10 to-transparent flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#ff6b00]/20 border border-[#ff6b00]/50 flex items-center justify-center text-[#ff6b00] flex-shrink-0">
              <Database className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Advanced SQL & Database Mastery</h4>
              <p className="text-sm text-white/70 mt-1">
                Specialized in complex relational database design, query optimization, JOINs, indexing, and MySQL performance tuning.
              </p>
            </div>
          </div>
          <span className="px-4 py-2 rounded-full bg-[#ff6b00] text-white font-bold text-xs uppercase font-mono tracking-wider flex-shrink-0 shadow-lg">
            Advanced Skill
          </span>
        </div>

      </div>
    </section>
  );
};

export default Skills;
