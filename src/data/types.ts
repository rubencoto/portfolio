export interface ProjectModule {
  id: string;
}

export interface Project {
  id: string;
  tech: string[];
  modules?: ProjectModule[];
  links?: {
    github?: string;
    live?: string;
  };
}

export interface ExperienceEntry {
  id: string;
}

export interface AboutFact {
  id: string;
}

export type SkillCategory = 'backend' | 'frontend' | 'database' | 'cloud' | 'tools';

export interface SkillGroup {
  id: SkillCategory;
  items: string[];
}
