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
    tags: ['Landing Page', 'UI', 'Performance'],
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
    <section id="projects" className="py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
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
                relative h-full rounded-2xl p-[1px]
                bg-gradient-to-br from-cyan-400/40 via-purple-500/40 to-pink-500/40
                hover:shadow-[0_0_40px_rgba(99,102,241,0.35)]
                transition-shadow duration-500
              ">
                <div className="
                  h-full rounded-2xl p-6
                  bg-white/70 backdrop-blur-xl
                  border border-white/40
                  flex flex-col
                ">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold">
                      {project.title}
                    </h3>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        p-2 rounded-full
                        bg-black/5 hover:bg-black hover:text-white
                        transition-colors
                      "
                      title="Live Website"
                    >
                      <Icons.ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="
                          text-xs px-2.5 py-1 rounded-md
                          bg-white/60 backdrop-blur
                          border border-gray-200
                          text-gray-700
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
