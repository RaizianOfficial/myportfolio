import React from "react";

import { Icons } from '../constants'; // Ensure Icons is imported

const certificates = [
  {
    verifyUrl: "https://www.hackerrank.com/certificates/0b1d4c4ad702",
    imgUrl: "https://images.unsplash.com/photo-1523289217630-0dd16184af8e?auto=format&fit=crop&q=80&w=800",
    title: "Frontend Developer (React)"
  },
  {
    verifyUrl: "https://www.hackerrank.com/certificates/cb96634c4f5e",
    imgUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800",
    title: "Problem Solving (Basic)"
  }
];

const Certificate: React.FC = () => {
  return (
    <section className="py-28 px-6 max-w-6xl mx-auto bg-white border-b-[3px] border-black">
      <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-16 text-black">
        Certifications
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {certificates.map((cert, index) => (
          <a
            key={index}
            href={cert.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-none border-[3px] border-black shadow-brutal hover:-translate-y-1 hover:shadow-brutal-lg transition-all"
          >
            <div className="bg-accent border-b-[3px] border-black p-4 flex justify-between items-center">
              <span className="font-bold uppercase tracking-tight text-black">{cert.title}</span>
              <Icons.ExternalLink className="w-5 h-5 text-black transform group-hover:scale-125 transition-transform" />
            </div>
            <img
              src={cert.imgUrl}
              alt={cert.title}
              className="w-full aspect-video object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              loading="lazy"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certificate;
