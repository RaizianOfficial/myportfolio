import React from 'react';
import FadeIn from './ui/FadeIn';
import { Icons } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
      {/* Abstract decorative shape */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-gray-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -z-10 translate-x-1/2 animate-pulse" />
      
      <div className="max-w-4xl mx-auto px-6 text-center md:text-left">
        <FadeIn delay={100}>
          <p className="text-gray-500 font-medium tracking-wide mb-4 uppercase text-sm">
            Portfolio 2026
          </p>
        </FadeIn>
        
        <FadeIn delay={200}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight mb-6 text-black">
            Sunny Rawat <span className="text-gray-300">—</span><br />
            Founder of Raizian | Frontend Dev.
          </h1>
        </FadeIn>
        
        <FadeIn delay={300}>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed">
            Building modern, fast, and scalable web experiences with a focus on minimalism and performance.
          </p>
        </FadeIn>
        
        <FadeIn delay={400}>
          <div className="flex flex-col md:flex-row gap-4 items-center md:justify-start justify-center">
            <a 
              href="#projects" 
              className="group bg-black text-white px-8 py-4 rounded-full font-medium text-lg flex items-center gap-2 hover:bg-gray-900 transition-all hover:scale-105"
            >
              View My Work
              <Icons.ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="text-black px-8 py-4 rounded-full font-medium text-lg border border-gray-200 hover:border-black hover:bg-gray-50 transition-all"
            >
              Contact Me
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;
