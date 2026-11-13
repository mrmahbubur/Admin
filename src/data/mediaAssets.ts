import flagshipImg from '../assets/images/studio_flagship_portal_1794517091830.jpg';
import adminImg from '../assets/images/business_admin_portal_1794517092190.jpg';
import techImg from '../assets/images/tech_learning_hub_1794517093096.jpg';
import charityImg from '../assets/images/charity_foundation_portal_1794517091973.jpg';

export type MediaAssetKey = 'flagship' | 'admin' | 'tech' | 'charity';

export const WEBSITE_MEDIA_MAP: Record<MediaAssetKey, string> = {
  flagship: flagshipImg,
  admin: adminImg,
  tech: techImg,
  charity: charityImg,
};

export function resolveWebsiteImage(imageKey?: string): string {
  if (imageKey && imageKey in WEBSITE_MEDIA_MAP) {
    return WEBSITE_MEDIA_MAP[imageKey as MediaAssetKey];
  }
  return flagshipImg;
}
