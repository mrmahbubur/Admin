import type { DisplayBannerAd } from '../types';

export const DISPLAY_BANNER_ADS: DisplayBannerAd[] = [
  {
    id: 'alibaba-wide-20off',
    advertiser: 'Alibaba WW',
    title: '20% Off Global Sourcing Offers',
    tagline:
      'Explore wholesale supplier discounts, hardware components, and business sourcing deals across global categories.',
    ctaLabel: 'Shop Alibaba WW',
    href: 'https://rzekl.com/g/1qbjalo1djcb5002cfdd219aa26f6f/?i=4',
    imgSrc: 'https://ad.admitad.com/b/1qbjalo1djcb5002cfdd219aa26f6f/',
    alt: 'Alibaba WW 20% Off Banners',
    width: 1200,
    height: 628,
    format: 'wide',
  },
  {
    id: 'aliexpress-leaderboard-logo',
    advertiser: 'AliExpress WW',
    title: 'AliExpress Worldwide Marketplace',
    tagline:
      'Discover consumer electronics, desk hardware, and everyday tools with direct international dispatch.',
    ctaLabel: 'Visit AliExpress',
    href: 'https://rzekl.com/g/hfzguitca6cb5002cfdd16525dc3e8/?i=4',
    imgSrc: 'https://ad.admitad.com/b/hfzguitca6cb5002cfdd16525dc3e8/',
    alt: 'AliExpress WW Global Marketplace',
    width: 468,
    height: 90,
    format: 'leaderboard',
  },
  {
    id: 'alibaba-rect-freeship',
    advertiser: 'Alibaba WW',
    title: 'Free Shipping Supplier Picks',
    tagline:
      'Curated hardware, office accessories, and bulk product listings qualifying for complimentary international shipping.',
    ctaLabel: 'Browse Free Shipping',
    href: 'https://rzekl.com/g/n11go1amqvcb5002cfdd219aa26f6f/?i=4',
    imgSrc: 'https://ad.admitad.com/b/n11go1amqvcb5002cfdd219aa26f6f/',
    alt: 'Alibaba WW Free Shipping Deals',
    width: 300,
    height: 250,
    format: 'rectangle',
  },
  {
    id: 'aliexpress-rect-seasonal',
    advertiser: 'AliExpress WW',
    title: 'Black Friday & Cyber Monday Event',
    tagline:
      'Seasonal global savings across computing peripherals, smart accessories, and workstation essentials.',
    ctaLabel: 'Explore Event Deals',
    href: 'https://rzekl.com/g/kyot8uekw2cb5002cfdd16525dc3e8/?i=4',
    imgSrc: 'https://ad.admitad.com/b/kyot8uekw2cb5002cfdd16525dc3e8/',
    alt: 'AliExpress WW Black Friday and Cyber Monday Deals',
    width: 300,
    height: 250,
    format: 'rectangle',
  },
  {
    id: 'alibaba-square-freeship',
    advertiser: 'Alibaba WW',
    title: 'Global Free Shipping Spotlight',
    tagline:
      'Direct manufacturer storefronts offering zero shipping charges across selected electronics and supplies.',
    ctaLabel: 'View Spotlight',
    href: 'https://rzekl.com/g/3q21xrzcs0cb5002cfdd219aa26f6f/?i=4',
    imgSrc: 'https://ad.admitad.com/b/3q21xrzcs0cb5002cfdd219aa26f6f/',
    alt: 'Alibaba WW Free Shipping Square Spotlight',
    width: 500,
    height: 500,
    format: 'square',
  },
  {
    id: 'alibaba-portrait-weekly',
    advertiser: 'Alibaba WW',
    title: 'Weekly Featured Sourcing Deals',
    tagline:
      'Updated weekly collections showcasing price reductions on verified electronics, gadgets, and essentials.',
    ctaLabel: 'See Weekly Deals',
    href: 'https://rzekl.com/g/2yynmq9itycb5002cfdd219aa26f6f/?i=4',
    imgSrc: 'https://ad.admitad.com/b/2yynmq9itycb5002cfdd219aa26f6f/',
    alt: 'Alibaba WW Weekly Deals',
    width: 320,
    height: 480,
    format: 'portrait',
  },
  {
    id: 'aliexpress-portrait-seasonal',
    advertiser: 'AliExpress WW',
    title: 'Seasonal Flash Markdowns',
    tagline:
      'Limited-time Black Friday & Cyber Monday promotions across global retail tech and daily essentials.',
    ctaLabel: 'Shop Flash Deals',
    href: 'https://rzekl.com/g/nbdijtg4iscb5002cfdd16525dc3e8/?i=4',
    imgSrc: 'https://ad.admitad.com/b/nbdijtg4iscb5002cfdd16525dc3e8/',
    alt: 'AliExpress WW Black Friday and Cyber Monday Vertical Banner',
    width: 320,
    height: 480,
    format: 'portrait',
  },
];

export function getDisplayBannerAd(id: string): DisplayBannerAd | undefined {
  return DISPLAY_BANNER_ADS.find((ad) => ad.id === id);
}
