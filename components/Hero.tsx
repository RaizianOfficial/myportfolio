import React from 'react';
import FadeIn from './ui/FadeIn';
import { Icons } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
      {/* Brutalist geometric decorative shapes */}
      <div className="absolute top-[15%] right-[15%] w-32 h-32 border-[8px] border-black rounded-full opacity-80 -z-10" />
      <div className="absolute bottom-[20%] left-[10%] w-40 h-40 border-[8px] border-black bg-accent opacity-80 -z-10 transform -rotate-12" />
      
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none -z-20" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.1 }}></div>
      <div className="max-w-4xl mx-auto px-6 text-center md:text-left">
        <FadeIn delay={100}>
          <p className="text-gray-500 font-medium tracking-wide mb-4 uppercase text-sm">
            Portfolio 2026
          </p>
        </FadeIn>
        
        <FadeIn delay={200}>
          <div className="flex flex-col gap-2 mb-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none text-black uppercase">
              Sunny Rawat
            </h1>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-black uppercase">
              Founder of Raizian
            </h2>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-gray-600 uppercase mt-2">
              Frontend Dev.
            </h3>
          </div>
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
              className="group bg-black text-white px-8 py-4 font-bold text-lg flex items-center gap-2 transition-all border-[3px] border-black shadow-brutal hover:bg-accent hover:text-black hover:-translate-y-1 hover:shadow-brutal-lg"
            >
              View My Work
              <Icons.ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="bg-white text-black px-8 py-4 font-bold text-lg border-[3px] border-black shadow-brutal hover:-translate-y-1 hover:shadow-brutal-lg transition-all"
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
