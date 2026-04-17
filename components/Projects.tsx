import React from 'react';
import FadeIn from './ui/FadeIn';
import { Icons } from '../constants';

const PROJECTS = [
  {
    id: 1,
    title: 'Demo Cafe Website',
    description: 'Modern cafe website with premium UI, fast load times, and conversion-focused layout.',
    liveUrl: 'https://demo-cafe-virid.vercel.app',
    tags: ['React', 'Tailwind', 'Vercel'],
  },
  {
    id: 2,
    title: 'Shrudhaba',
    description: 'Clean website for restaurants with elegant sections and smooth UX for storytelling.',
    liveUrl: 'https://shrudhaba.vercel.app',
    tags: ['Next.js', 'Design', 'Brand'],
  },
  {
    id: 3,
    title: 'Sai Millennium School',
    description: 'Professional school website focused on trust, clarity, and accessibility.',
    liveUrl: 'https://saimillennium.raizian.in',
    tags: ['Education', 'Responsive', 'SEO'],
  },
  {
    id: 4,
    title: 'Luna Cycle',
    description: 'A website for tracking periods by your phone through this page',
    liveUrl: 'https://luna-cycle-two.vercel.app',
    tags: ['Health', 'UI', 'Tracker'],
  },
  {
    id: 5,
    title: 'MBA Chaiwala (Dun)',
    description: 'Local brand website built for visibility, reach, and quick conversions.',
    liveUrl: 'https://mbachaiwala-dun.vercel.app',
    tags: ['Local Business', 'Marketing', 'Web'],
  },
  {
    id: 6,
    title: 'Demo School Website',
    description: 'Template-based school website demo for fast client onboarding.',
    liveUrl: 'https://demo-school-1.vercel.app',
    tags: ['Template', 'School', 'Fast Deploy'],
  },
  {
    id: 7,
    title: 'Angrezzify',
    description: 'Experimental brand concept with sharp UI and bold personality.',
    liveUrl: 'https://angrezzify.vercel.app',
    tags: ['Branding', 'Experimental', 'Creative'],
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
