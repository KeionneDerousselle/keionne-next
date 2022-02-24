import React, { ReactElement } from 'react';
import { GetStaticProps } from 'next';
import { Layout } from '@/components/molecules/layout';
import { AboutMe, AboutMeProps } from '@/components/organisms/about-me';
import { getHomePageContent } from 'lib/content/api';
import { Skills, SkillsProps } from '@/components/organisms/skills';

export type HomePageProps = {
  aboutMe: Omit<AboutMeProps, 'id'>;
  skills: Omit<SkillsProps, 'id'>;
};

export default function Home({ aboutMe, skills }: HomePageProps): ReactElement {
  return (
    <Layout>
      <AboutMe id="about" {...aboutMe} className="py-14" />
      <Skills id="skills" {...skills} className="py-14" />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const homePageProps = await getHomePageContent();
  return {
    props: {
      ...homePageProps,
    },
  };
};
