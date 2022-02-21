import { ContentfulClientApi } from 'contentful';
import { createClient } from 'contentful/dist/es-modules/contentful.js';
import { AboutMeContent, HomePageContent } from './types';

let client: ContentfulClientApi;

export const getContentfulClient = () => {
  if (client) return client;

  client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  return client;
};

export const getHomePageContent = async (): Promise<HomePageContent> => {
  const client = getContentfulClient();

  const [{ fields: aboutMe }] = await Promise.all([
    client.getEntry<AboutMeContent>(process.env.CONTENTFUL_ABOUT_ME_ID),
  ]);

  return {
    aboutMe,
  };
};
