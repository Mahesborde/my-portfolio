import React, { useState } from 'react';
import { Briefcase, ExternalLink, Github, Sparkles, Layers, ChevronRight, X, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff6b00]/10 border border-[#ff6b00]/30 text-[#ff6b00] text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            AI & Full-Stack <span className="gradient-text-orange">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#ff6b00] to-[#ff9100] rounded-full mt-4"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between group border border-white/10 hover:border-[#ff6b00]/50 transition-all duration-300"
            >
              <div className="p-7">
                {/* Top Badge */}
                <div className="flex justify-between items-center mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#ff6b00]/15 border border-[#ff6b00]/40 text-[#ff6b00] text-xs font-mono font-semibold">
                    {project.badge}
                  </span>
                  <span className="text-xs text-white/50 font-mono">{project.category}</span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#ff6b00] transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-xs font-mono text-[#ff9100] mb-3">{project.subtitle}</p>

                <p className="text-white/70 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-white/80">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-white/5 mt-auto">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#ff6b00] hover:text-[#ff9100] transition-colors cursor-pointer"
                >
                  <span>View Full Details</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white transition-colors"
                    title="GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.demo}
                    className="text-white/60 hover:text-[#ff6b00] transition-colors"
                    title="Live Demo Preview"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div className="bg-[#141212] border border-[#ff6b00]/40 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details modal"
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="px-3 py-1 rounded-full bg-[#ff6b00]/20 border border-[#ff6b00]/50 text-[#ff6b00] text-xs font-mono font-semibold">
              {selectedProject.badge}
            </span>

            <h3 id="project-modal-title" className="text-2xl sm:text-3xl font-extrabold text-white mt-4 mb-1">
              {selectedProject.title}
            </h3>
            <p className="text-sm font-mono text-[#ff9100] mb-6">{selectedProject.subtitle}</p>

            <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6">
              {selectedProject.description}
            </p>

            {/* Key Features */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase text-white/50 mb-3 tracking-wider">Key Architectural Features</h4>
              <div className="space-y-2">
                {selectedProject.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-white/90">
                    <CheckCircle className="w-4 h-4 text-[#ff6b00] mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-8">
              <h4 className="text-xs font-mono uppercase text-white/50 mb-3 tracking-wider">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((t, idx) => (
                  <span key={idx} className="px-3 py-1.5 rounded-lg bg-[#ff6b00]/10 border border-[#ff6b00]/30 text-xs font-mono text-[#ff6b00]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code</span>
              </a>
              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-3 rounded-xl bg-[#ff6b00] hover:bg-[#d35400] text-white font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default Projects;
