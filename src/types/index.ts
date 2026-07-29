export interface PortfolioItem {
  id: string;
  title: string;
  category: "Commercial" | "Residential" | "Mixed Use" | "Strategic Investments";
  location: string;
  year: string;
  description: string;
  image: string;
  gallery?: string[];
}

export interface InsightArticle {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: string;
  suffix?: string;
}