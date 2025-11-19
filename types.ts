import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  liveUrl: string;
  repoUrl: string;
  tags: string[];
}

export interface Skill {
  name: string;
  icon?: React.ReactNode;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}

export interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}