import React from 'react';
import FadeIn from './ui/FadeIn';
import { Icons } from '../constants';

const PROJECTS = [
  {
    id: 1,
    title: 'AI Business Bot',
    description: 'AI bot tailored for businesses, featuring an automated AI order-taking system.',
    liveUrl: 'https://ai-business-bot-pi.vercel.app/',
    tags: ['AI', 'Automation', 'Business'],
  },
  {
    id: 2,
    title: 'Neo-Brutalism UI',
    description: 'A striking website built with a modern neo-brutalism design aesthetic.',
    liveUrl: 'https://neo-brutalism-website.vercel.app/',
    tags: ['UI/UX', 'Neo-Brutalism', 'Design'],
  },
  {
    id: 3,
    title: 'Sai Millennium School',
    description: 'A modern, professional website tailored specifically for schools.',
    liveUrl: 'https://saimillennium.raizian.in',
    tags: ['Education', 'Responsive', 'Web'],
  },
  {
    id: 4,
    title: 'Angrezzify',
    description: 'SaaS version UI showcasing a clean, bold, and experimental layout.',
    liveUrl: 'https://angrezzify.vercel.app/',
    tags: ['SaaS', 'UI', 'Creative'],
  },
  {
    id: 5,
    title: 'Mobile POS System',
    description: 'Mobile-first POS system with barcode scanning using Firebase — no hardware required.',
    liveUrl: 'https://ai-billing-app-eight.vercel.app/',
    tags: ['Firebase', 'POS', 'Mobile-First'],
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-28 bg-white border-y-[3px] border-black">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="mb-20">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-4 text-black">
              Selected Works
            </h2>
            <p className="text-gray-500 max-w-lg">
              Real projects. Real deployments. Built with performance, clarity, and intent.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <FadeIn key={project.id} delay={index * 100}>
              <div className="
                h-full p-8 bg-white border-[3px] border-black shadow-brutal
                transition-all duration-300 hover:-translate-y-1 hover:shadow-brutal-lg
                flex flex-col relative overflow-hidden group
              ">
                {/* Decorative brutalist shapes inside card */}
                <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-accent opacity-0 group-hover:opacity-100 transition-opacity -z-0" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '10px 10px' }} />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold uppercase tracking-tight text-black flex-1 pr-4">
                      {project.title}
                    </h3>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex-shrink-0 p-2 border-[3px] border-black bg-accent hover:bg-black hover:text-accent hover:-translate-y-1
                        transition-transform shadow-[2px_2px_0px_#000] hover:shadow-[4px_4px_0px_#000]
                      "
                      title="Live Website"
                    >
                      <Icons.ExternalLink className="w-5 h-5" />
                    </a>
                  </div>

                  <p className="text-base text-gray-800 font-medium leading-relaxed mb-8 border-b-2 border-black/10 pb-6">
                    {project.description}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="
                          text-xs font-bold px-3 py-1.5 uppercase tracking-wider
                          bg-white border-2 border-black text-black
                        "
                      >
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
