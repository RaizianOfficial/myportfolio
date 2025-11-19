import React from 'react';
import { SKILLS } from '../constants';
import FadeIn from './ui/FadeIn';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">About Me</h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  I am a web developer focused on building fast, modern, and scalable digital experiences. My approach is simple: design with clarity, develop with precision, and deliver with reliability.
                </p>
                <p>
                  Over the years, I have worked across multiple projects ranging from personal websites to functional web applications. I specialize in creating clean user interfaces, smooth user journeys, and technically strong architectures that perform consistently on all devices. My work emphasizes minimalism, speed, and maintainability — ensuring every project is easy to use, visually refined, and ready to scale.
                </p>
                <p>
                  I work primarily with modern technologies such as React, Next.js, Tailwind CSS, Firebase, and Node.js, allowing me to build everything from landing pages to full-featured platforms. Whether it’s an individual portfolio, a business website, or a course-based platform, I aim to combine aesthetics with functionality to produce results that feel polished and professional.
                </p>
                 <p>
                  Clients appreciate my communication, dedication, and my ability to simplify complex requirements into clean, effective solutions. If you’re looking for a developer who takes ownership, works with discipline, and builds with long-term vision — I’m here to help.
                </p>
              </div>
            </FadeIn>
          </div>
          
          <div className="md:col-span-6 md:col-start-7">
             <FadeIn delay={200}>
                <h3 className="text-xl font-semibold mb-8">Technical Arsenal</h3>
                <div className="flex flex-wrap gap-3">
                  {SKILLS.map((skill, index) => (
                    <div 
                      key={skill.name} 
                      className="bg-white px-5 py-3 rounded-xl border border-gray-200 text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
                    >
                      {skill.name}
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 p-8 bg-white rounded-2xl border border-gray-100">
                    <h4 className="text-lg font-bold mb-2">Currently Learning</h4>
                    <p className="text-gray-600 mb-4">Deep diving into WebGL and advanced AI integration for web apps.</p>
                    <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-black w-3/4 rounded-full" />
                    </div>
                </div>
             </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
