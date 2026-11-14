export const ADMIN_SITE_CONFIG = {
  siteName: 'M R S',
  sourceUrl: '',
  roleTitle: 'Available for Remote IT Support, Virtual Assistance & Administrative Work',
  tagline: 'Available for Remote IT Support, Virtual Assistance & Administrative Work',
  location: 'Global / Remote',
  avatarUrl: './mrs_profile_avatar.jpg',
  certification: '360-hour computer systems course',
  availabilityNote:
    'Whether you need a remote IT support assistant, virtual assistant, website content manager, technical writer, online researcher, or general digital operations support, I am open to discussing how I can help.',
};

export const ESTABLISHED_YEAR = 2018;
export const getCurrentYear = (): number => new Date().getFullYear();
export const getCopyrightNotice = (): string =>
  `© ${getCurrentYear()} ${ADMIN_SITE_CONFIG.siteName}. All rights reserved.`;
