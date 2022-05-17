import React, { ReactElement } from 'react';
import { GetStaticProps } from 'next';
import { Layout } from '@/components/molecules/layout';
import { Intro } from '@/components/organisms/intro';
import { AboutMe, AboutMeProps } from '@/components/organisms/about-me';
import { Skills, SkillsProps } from '@/components/organisms/skills';
import { Experience } from '@/components/organisms/experience';
import { getHomePageContent } from 'lib/content/api';

export type HomePageProps = {
  aboutMe: Omit<AboutMeProps, 'id'>;
  skills: Omit<SkillsProps, 'id'>;
};

export default function Home({ aboutMe, skills }: HomePageProps): ReactElement {
  return (
    <Layout>
      <Intro id="intro" />
      <div className="k-container">
        <AboutMe id="about" {...aboutMe} className="mt-28 scroll-mt-28" />
        <Skills id="skills" {...skills} className="mt-28 scroll-mt-28" />
        <Experience id="experience" title="Experience" className="mt-28 scroll-mt-28" />
      </div>
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
