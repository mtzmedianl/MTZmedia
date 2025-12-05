export interface Project {
  id: number;
  title: string;
  category: string;
  thumbnail: null;
  videoUrl?: string; // URL for the video file
  description: string;
  client?: string;
  tools?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: any;
}
