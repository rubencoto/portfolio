import type { Project } from './types';

export const projects: Project[] = [
  {
    id: 'tucitaonline',
    tech: ['C#', '.NET', 'React', 'TypeScript'],
  },
  {
    id: 'cdm',
    tech: ['.NET 8', 'EF Core', 'MySQL', 'React', 'TypeScript', 'DDD'],
    modules: [
      { id: 'scheduling' },
      { id: 'clinicalHistory' },
      { id: 'compliance' },
      { id: 'reports' },
      { id: 'whatsappBot' },
    ],
    links: { live: 'https://consultoriosdrmoraga.com' },
  },
];
