import { describe, expect, it } from 'vitest';
import { projects } from './projects';

describe('projects data', () => {
  it('leads with CDM, the project with the most engineering depth', () => {
    expect(projects[0]?.id).toBe('cdm');
  });

  it('gives the CDM project a live link', () => {
    const cdm = projects.find((project) => project.id === 'cdm');

    expect(cdm?.links?.live).toBe('https://consultoriosdrmoraga.com');
  });

  // TuCitaOnline is a private repository, so it must not advertise a link.
  it('leaves TuCitaOnline without links', () => {
    const tucitaonline = projects.find((project) => project.id === 'tucitaonline');

    expect(tucitaonline).toBeDefined();
    expect(tucitaonline?.links).toBeUndefined();
  });

  it('gives every project a non-empty stack', () => {
    for (const project of projects) {
      expect(project.tech.length).toBeGreaterThan(0);
    }
  });
});
