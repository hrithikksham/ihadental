export interface Service {
  id: string;

  slug: string;

  title: string;

  shortDescription: string;

  description: string;

  icon?: string;

  image?: string;

  benefits: string[];

  procedure?: string[];

  seoTitle?: string;

  seoDescription?: string;
}