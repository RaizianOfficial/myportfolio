import React from 'react';
import { Project, Skill, SocialLink, NavItem } from './types';

// Simple SVG Icons components
export const Icons = {
  Home: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
  ),
  User: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
  ),
  Briefcase: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
  ),
  Mail: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
  ),
  Github: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
  ),
  Linkedin: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
  ),
  ExternalLink: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
  ),
  Code: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
  ),
  ArrowRight: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
  ),
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Aadaram Cafe',
    description: 'A modern landing page for a premium cafe featuring an elegant menu showcase, location integration, and smooth scroll animations.',
    imageUrl: 'https://picsum.photos/800/600?random=11',
    liveUrl: 'https://aadaramcafe.vercel.app',
    repoUrl: '#',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    id: '2',
    title: 'Aesthetic Clinic',
    description: 'A minimalist and clean web platform for a beauty and aesthetic clinic, focusing on service showcasing and appointment booking flows.',
    imageUrl: 'https://picsum.photos/800/600?random=22',
    liveUrl: 'https://aestheticlinic.vercel.app',
    repoUrl: '#',
    tags: ['React', 'UI/UX', 'Responsive'],
  },
  {
    id: '3',
    title: 'Gritty Gaming Cafe',
    description: 'A high-energy digital space for a gaming lounge featuring tournament schedules, dynamic visuals, and a dark-themed UI.',
    imageUrl: 'https://picsum.photos/800/600?random=33',
    liveUrl: 'https://grittygamingcafe.vercel.app',
    repoUrl: '#',
    tags: ['Next.js', 'React', 'Neon UI'],
  },
];

export const SKILLS: Skill[] = [
  { name: 'React' },
  { name: 'TypeScript' },
  { name: 'Next.js' },
  { name: 'Tailwind CSS' },
  { name: 'Node.js' },
  { name: 'Firebase' },
  { name: 'Design Systems' },
  { name: 'UI/UX Design' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'GitHub', url: '#', icon: <Icons.Github className="w-5 h-5" /> },
  { platform: 'LinkedIn', url: '#', icon: <Icons.Linkedin className="w-5 h-5" /> },
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home', icon: <Icons.Home className="w-6 h-6" /> },
  { label: 'Projects', href: '#projects', icon: <Icons.Briefcase className="w-6 h-6" /> },
  { label: 'About', href: '#about', icon: <Icons.User className="w-6 h-6" /> },
  { label: 'Contact', href: '#contact', icon: <Icons.Mail className="w-6 h-6" /> },
];