import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Education = () => {
  const { education, experience } = portfolioData;

  return (
    <section id="education" className="py-24 relative z-10 bg-black/20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff6b00]/10 border border-[#ff6b00]/30 text-[#ff6b00] text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Education & <span className="gradient-text-orange">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#ff6b00] to-[#ff9100] rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Education Timeline */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 font-mono">
              <GraduationCap className="w-5 h-5 text-[#ff6b00]" />
              <span>Education</span>
            </h3>

            <div className="space-y-6">
              {education.map((item, idx) => (
                <div key={idx} className="glass-card p-7 rounded-3xl relative border-l-4 border-l-[#ff6b00]">
                  <div className="flex justify-between items-start mb-3">
                    <span className="px-3 py-1 rounded-full bg-[#ff6b00]/15 border border-[#ff6b00]/40 text-[#ff6b00] text-xs font-mono font-semibold">
                      {item.period}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-1">{item.degree}</h4>
                  <p className="text-sm font-semibold text-[#ff9100] mb-4">{item.institution}</p>
                  
                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-white/10">
                    {item.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-white/90">
                        <CheckCircle2 className="w-4 h-4 text-[#ff6b00] flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Timeline */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 font-mono">
              <Award className="w-5 h-5 text-[#ff9100]" />
              <span>Projects & Practical Experience</span>
            </h3>

            <div className="space-y-6">
              {experience.map((item, idx) => (
                <div key={idx} className="glass-card p-7 rounded-3xl relative border-l-4 border-l-[#ff9100]">
                  <div className="flex justify-between items-start mb-3">
                    <span className="px-3 py-1 rounded-full bg-[#ff9100]/15 border border-[#ff9100]/40 text-[#ff9100] text-xs font-mono font-semibold">
                      {item.period}
                    </span>
                    <span className="text-xs text-white/50 font-mono">{item.type}</span>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-1">{item.role}</h4>
                  <p className="text-[#ff6b00] text-xs font-mono mb-4">Practical Application & Systems Development</p>
                  
                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-white/10">
                    {item.achievements.map((a, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-white/90">
                        <CheckCircle2 className="w-4 h-4 text-[#ff9100] flex-shrink-0" />
                        <span>{a}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Education;
