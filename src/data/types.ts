export interface ProjectLinks {
  live?: string;
  github?: string;
}

export interface Project {
  id: string;
  tech: string[];
  links?: ProjectLinks;
}

export interface ExperienceEntry {
  id: string;
  /** Optional: not every role has a meaningful technology stack. */
  tech?: string[];
}

export type SkillCategory =
  | 'languages'
  | 'frontend'
  | 'backend'
  | 'cloud'
  | 'databases'
  | 'tools';

export interface SkillGroup {
  id: SkillCategory;
  items: string[];
}

export interface AboutBlock {
  id: string;
}
