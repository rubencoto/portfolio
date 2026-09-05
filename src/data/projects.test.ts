import { describe, expect, it } from 'vitest';
import { projects } from './projects';

describe('projects data', () => {
  it('includes the CDM project with bot and erp modules', () => {
    const cdm = projects.find((project) => project.id === 'cdm');

    expect(cdm).toBeDefined();
    expect(cdm?.modules?.map((module) => module.id)).toEqual(['bot', 'erp']);
  });

  it('includes the TuCitaOnline project with no modules', () => {
    const tucitaonline = projects.find((project) => project.id === 'tucitaonline');

    expect(tucitaonline).toBeDefined();
    expect(tucitaonline?.modules).toBeUndefined();
  });
});
