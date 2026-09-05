import type { SkillGroup } from './types';

export const skillGroups: SkillGroup[] = [
  { id: 'languages', items: ['C#', 'TypeScript', 'JavaScript', 'Java', 'Python', 'SQL'] },
  { id: 'frontend', items: ['React', 'Next.js', 'Vite', 'HTML & CSS'] },
  { id: 'backend', items: ['ASP.NET Core', '.NET 8', 'Entity Framework Core', 'Node.js', 'REST APIs'] },
  {
    id: 'cloud',
    items: ['AWS (EC2, S3, RDS, VPC, Route 53, CloudWatch)', 'Docker', 'GitHub Actions', 'Railway', 'CI/CD'],
  },
  { id: 'databases', items: ['MySQL', 'SQL Server', 'PostgreSQL', 'Redis'] },
  { id: 'tools', items: ['Git', 'Visual Studio', 'VS Code', 'Figma'] },
];
