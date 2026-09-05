import { describe, expect, it } from 'vitest';
import { projects } from './projects';

describe('projects data', () => {
  it('includes the CDM project with all five real-world modules', () => {
    const cdm = projects.find((project) => project.id === 'cdm');

    expect(cdm).toBeDefined();
    expect(cdm?.modules?.map((module) => module.id)).toEqual([
      'scheduling',
      'clinicalHistory',
      'compliance',
      'reports',
      'whatsappBot',
    ]);
  });

  it('includes a live link for the CDM project', () => {
    const cdm = projects.find((project) => project.id === 'cdm');

    expect(cdm?.links?.live).toBe('https://consultoriosdrmoraga.com');
  });

  it('includes the TuCitaOnline project with no modules', () => {
    const tucitaonline = projects.find((project) => project.id === 'tucitaonline');

    expect(tucitaonline).toBeDefined();
    expect(tucitaonline?.modules).toBeUndefined();
  });
});
