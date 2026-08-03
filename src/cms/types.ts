export interface HeroData {
  name: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaTarget: string;
}

export interface AboutSectionItem {
  id: string;
  title: string;
  description: string;
  link?: string;
}

export interface AboutData {
  bio1: string;
  bio2: string;
  fossgceeTitle: string;
  fossgceeDescription: string;
  fossgceeLink: string;
  systemsFocusTitle: string;
  systemsFocusDescription: string;
  goal: string;
  customSections?: AboutSectionItem[];
}

export interface Skill {
  name: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  thumbnail: string;
  liveDemo: string;
  githubRepo: string;
  category: string;
}

export interface ExperienceItem {
  id: string;
  date: string;
  title: string;
  company: string;
  description: string;
}

export interface EducationItem {
  id: string;
  date: string;
  title: string;
  institution: string;
  description: string;
}

export interface ContactItem {
  id: string;
  title: string;
  value: string;
  url?: string;
  qrCodeUrl?: string;
}

export interface ContactData {
  email: string;
  discordHandle: string;
  discordUrl: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  linkedinUrl: string;
  linkedinHandle: string;
  emailQrCode?: string;
  discordQrCode?: string;
  whatsappQrCode?: string;
  linkedinQrCode?: string;
  customContacts?: ContactItem[];
}

export interface SocialLink {
  label: string;
  url: string;
}

export interface FooterData {
  ownerName: string;
  socialLinks: SocialLink[];
}

export interface MetaData {
  siteTitle: string;
  metaDescription: string;
  keywords: string;
}

export interface NavLink {
  name: string;
  to: string;
}

export interface CMSData {
  hero: HeroData;
  about: AboutData;
  skillCategories: SkillCategory[];
  projects: Project[];
  experience: ExperienceItem[];
  education: EducationItem[];
  contact: ContactData;
  footer: FooterData;
  meta: MetaData;
  navLinks: NavLink[];
}
