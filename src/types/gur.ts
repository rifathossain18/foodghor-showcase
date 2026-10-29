export interface GurProduct {
  id: string;
  name: string;
  nameEnglish: string;
  badge?: string;
  tagline: string;
  description: string;
  detailedDescription: string;
  traditionalUses: string[];
  texture: string;
  sweetnessProfile: string;
  sampleWeight: string;
  samplePrice: string;
  image: string;
  altText: string;
  season: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  category: string;
}
