import { Job } from '@/components/organisms/experience';
import { Skill } from '@/components/organisms/skills';
import { Entry } from 'contentful';

export interface ContentfulAboutMeSection {
  title: string;
  blurbTitle: string;
  blurbDescription: string;
  ctaLabel: string;
}

export interface ContentfulSkillGroup {
  title: string;
  skills: Entry<Skill>[];
}

export interface ContentfulSkillsSection {
  title: string;
  skillGroups: Entry<ContentfulSkillGroup>[];
}

export interface ContentfulExperienceSection {
  title: string;
  jobs: Entry<Job>[];
}
