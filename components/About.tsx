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
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-12 text-black">About Me</h2>
              <div className="space-y-8 text-black text-lg md:text-xl font-medium leading-relaxed">
                <p>
                  I am a web developer focused on building <span className="font-bold text-2xl bg-accent px-1">fast, modern, and scalable digital experiences</span>. My approach is simple: design with clarity, develop with precision, and deliver with reliability.
                </p>
                <p>
                  Over the years, I have worked across multiple projects ranging from personal websites to functional web applications. I specialize in creating clean user interfaces, smooth user journeys, and technically strong architectures that perform consistently on all devices. My work emphasizes minimalism, speed, and maintainability.
                </p>
                <p>
                  I work primarily with <span className="font-bold text-2xl uppercase border-b-4 border-black">modern technologies</span> such as React, Next.js, Tailwind CSS, Firebase, and Node.js. Whether it’s an individual portfolio, a business website, or a complex platform, I combine aesthetics with functionality to produce highly polished results.
                </p>
              </div>
            </FadeIn>
          </div>
          
          <div className="md:col-span-6 md:col-start-7">
             <FadeIn delay={200}>
                <h3 className="text-3xl font-bold mb-8 uppercase tracking-tighter">Technical Arsenal</h3>
                <div className="flex flex-wrap gap-4">
                  {SKILLS.map((skill, index) => (
                    <div 
                      key={skill.name} 
                      className="bg-white px-5 py-3 rounded-none border-[3px] border-black font-bold uppercase tracking-tight shadow-brutal hover:-translate-y-1 hover:shadow-brutal-lg hover:bg-accent transition-all cursor-crosshair"
                    >
                      {skill.name}
                    </div>
                  ))}
                </div>
                
                <div className="mt-16 p-8 bg-accent rounded-none border-[3px] border-black shadow-brutal">
                    <h4 className="text-2xl font-bold mb-2 uppercase tracking-tighter text-black">Currently Learning</h4>
                    <p className="text-black font-medium mb-6">Deep diving into WebGL and advanced AI integration for web apps.</p>
                    <div className="h-6 w-full bg-white border-[3px] border-black overflow-hidden relative">
                        <div className="h-full bg-black w-3/4 border-r-[3px] border-black" />
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
