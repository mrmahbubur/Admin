export const ADMIN_SITE_CONFIG = {
  siteName: 'M R S',
  sourceUrl: 'https://mrxshahin.ai.studio',
  roleTitle: 'IT Support Professional | Remote Admin & Documentation Specialist | Web Manager',
  tagline: 'Helping businesses run smoother, one ticket at a time',
  location: 'Global / Remote',
  avatarUrl: './mrs_profile_avatar.jpg',
  certification: '360-Hour Certified Computer Specialist & MS Office Professional',
  availabilityNote: 'Open to remote contract, freelance, and part-time opportunities.',
};

export const ESTABLISHED_YEAR = 2018;
export const getCurrentYear = (): number => new Date().getFullYear();
export const getCopyrightNotice = (): string =>
  `© ${getCurrentYear()} ${ADMIN_SITE_CONFIG.siteName}. All rights reserved.`;
