import type { ExperienceEntry } from './types';

export const experience: ExperienceEntry[] = [
  {
    id: 'awsSupportSpecialist',
    tech: ['EC2', 'S3', 'EBS', 'RDS', 'DynamoDB', 'VPC', 'Route 53', 'CloudWatch'],
  },
  // The D2AS role was device support rather than engineering, so it carries no
  // technology stack rather than an invented one.
  { id: 'advancedTechnician' },
];
