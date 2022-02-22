import { Entry } from 'contentful';

export interface AboutMeContent {
  title: string;
  blurbTitle: string;
  blurbDescription: string;
  ctaLabel: string;
}

export interface HomePageContent {
  aboutMe: AboutMeContent;
  skills: SkillsSection;
}

export interface ContentfulSkill {
  title: string;
  percent: number;
}

export interface ContentfulSkillGroup {
  title: string;
  skills: Entry<ContentfulSkill>[];
}

export interface ContentfulSkillsSection {
  title: string;
  skillGroups: Entry<ContentfulSkillGroup>[];
}

export interface Skill {
  title: string;
  percent: number;
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}

export interface SkillsSection {
  title: string;
  skillGroups: SkillGroup[];
}
