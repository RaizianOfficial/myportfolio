import React from 'react';
import { PROJECTS, Icons } from '../constants';
import FadeIn from './ui/FadeIn';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Selected Works</h2>
              <p className="text-gray-500 max-w-md">A collection of projects that showcase my passion for clean code and design.</p>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <FadeIn key={project.id} delay={index * 100}>
              <div className="group flex flex-col h-full">
                <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3] mb-6">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                </div>
                
                <div className="flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <div className="flex gap-2">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 rounded-full hover:bg-black hover:text-white transition-colors" title="Live Demo">
                        <Icons.ExternalLink className="w-4 h-4" />
                      </a>
                      <a href={project.repoUrl} className="p-2 bg-gray-100 rounded-full hover:bg-black hover:text-white transition-colors" title="Code Repo">
                        <Icons.Code className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-md bg-gray-50 text-gray-600 border border-gray-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;