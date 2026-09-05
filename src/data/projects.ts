import type { Project } from './types';

export const projects: Project[] = [
  {
    id: 'tucitaonline',
    tech: ['C#', '.NET', 'React', 'TypeScript'],
  },
  {
    id: 'cdm',
    tech: ['C#', '.NET', 'React'],
    modules: [{ id: 'bot' }, { id: 'erp' }],
  },
];
