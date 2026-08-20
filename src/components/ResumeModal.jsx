import React from 'react';
import { X, Printer, Download, Mail, MapPin, GraduationCap, Code2, Database, BrainCircuit, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const { personal, skills, projects, education } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-[#121111] border border-[#ff6b00]/40 rounded-3xl max-w-3xl w-full p-6 sm:p-10 shadow-2xl relative my-8 text-white">
        
        {/* Header Actions */}
        <div className="flex justify-between items-center pb-6 border-b border-white/10 mb-8 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff6b00]"></span>
            <span className="text-xs font-mono text-white/70 uppercase">Official Resume Preview</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4 text-[#ff6b00]" />
              <span>Print / Download PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Document Body */}
        <div className="space-y-8 font-sans">
          
          {/* Header */}
          <div className="text-center sm:text-left flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
              <h1 className="text-3xl font-black tracking-tight text-white">{personal.name}</h1>
              <p className="text-base font-semibold text-[#ff6b00] mt-1">{personal.role}</p>
              <p className="text-xs text-white/60 font-mono mt-1">IT Engineering Student • Sanjivani College of Engineering, Kopargaon</p>
            </div>

            <div className="text-xs font-mono text-white/70 space-y-1 text-left sm:text-right">
              <p>Email: {personal.email}</p>
              <p>Location: Shivrai, Chhatrapati Sambhajinagar</p>
              <p>LinkedIn: linkedin.com/in/-borde-a71a86380</p>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
            <h2 className="text-xs font-mono uppercase text-[#ff6b00] font-bold mb-2">Executive Profile</h2>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              {personal.shortBio}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase text-[#ff6b00] font-bold mb-3 pb-1 border-b border-white/10">
              Education
            </h2>
            {education.map((edu, idx) => (
              <div key={idx} className="mb-3">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-sm font-bold text-white">{edu.degree}</h3>
                  <span className="text-xs font-mono text-[#ff9100]">{edu.period}</span>
                </div>
                <p className="text-xs text-white/70">{edu.institution}</p>
                <p className="text-xs text-white/60 mt-1">{edu.description}</p>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase text-[#ff6b00] font-bold mb-3 pb-1 border-b border-white/10">
              Technical Skill Matrix
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="font-semibold text-white">AI & Machine Learning:</span>
                <p className="text-white/70">Python, Machine Learning Algorithms, Scikit-Learn, Pandas, NLP</p>
              </div>
              <div>
                <span className="font-semibold text-white">Frontend Architecture:</span>
                <p className="text-white/70">React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS</p>
              </div>
              <div>
                <span className="font-semibold text-white">Backend & Databases:</span>
                <p className="text-white/70">Advanced SQL / MySQL Architecture, Node.js, Express, REST APIs</p>
              </div>
              <div>
                <span className="font-semibold text-white">Developer Tools:</span>
                <p className="text-white/70">Git, GitHub, VS Code, Jupyter Notebook, Google Colab</p>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase text-[#ff6b00] font-bold mb-3 pb-1 border-b border-white/10">
              Selected Technical Projects
            </h2>
            <div className="space-y-4">
              {projects.map((proj, idx) => (
                <div key={idx} className="text-xs">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-bold text-white text-sm">{proj.title}</h3>
                    <span className="font-mono text-[#ff6b00]">{proj.category}</span>
                  </div>
                  <p className="text-white/70 mb-2">{proj.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {proj.tech.map((t, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-white/10 text-[10px] text-white/80 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-6 border-t border-white/10 flex justify-end print:hidden">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-[#ff6b00] hover:bg-[#d35400] text-white text-xs font-semibold transition-colors cursor-pointer"
          >
            Close Resume
          </button>
        </div>

      </div>
    </div>
  );
};

export default ResumeModal;
