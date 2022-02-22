import { ContentfulClientApi, Entry } from 'contentful';
import { createClient } from 'contentful/dist/es-modules/contentful.js';
import {
  AboutMeContent,
  HomePageContent,
  ContentfulSkillsSection,
  ContentfulSkill,
  ContentfulSkillGroup,
  SkillGroup,
} from './types';

let client: ContentfulClientApi;

export const getContentfulClient = () => {
  if (client) return client;

  client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  return client;
};

export const getFields = <T>(entry: Entry<T>): T => entry.fields;
export const flattenFields = <T>(entries: Entry<T>[]): T[] => entries.map(getFields);

const mapSkillsContent = (skills: Entry<ContentfulSkill>[]): ContentfulSkill[] => flattenFields(skills);
const mapSkillGroups = ({ fields: { title, skills } }: Entry<ContentfulSkillGroup>): SkillGroup => ({
  title,
  skills: mapSkillsContent(skills),
});

export const getHomePageContent = async (): Promise<HomePageContent> => {
  const client = getContentfulClient();

  const [{ fields: aboutMe }, { fields: skillsContent }] = await Promise.all([
    client.getEntry<AboutMeContent>(process.env.CONTENTFUL_ABOUT_ME_ID),
    client.getEntry<ContentfulSkillsSection>(process.env.CONTENTFUL_SKILLS_ID, { include: 2 }),
  ]);

  return {
    aboutMe,
    skills: {
      title: skillsContent.title,
      skillGroups: skillsContent.skillGroups.map(mapSkillGroups),
    },
  };
};
