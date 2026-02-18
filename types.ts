
export enum Page {
  HOME = 'home',
  ABOUT = 'about',
  CONTACT = 'contact',
  TESTIMONIALS = 'testimonials',
  PROJECTS = 'projects',
  PRIVACY = 'privacy',
  TERMS = 'terms'
}

export interface NavItem {
  label: string;
  value: Page;
}
