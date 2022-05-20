import React, { ReactElement } from 'react';
import { GetStaticProps } from 'next';
import { Layout } from '@/components/molecules/layout';
import { Intro } from '@/components/organisms/intro';
import { AboutMe, AboutMeProps } from '@/components/organisms/about-me';
import { Skills, SkillsProps } from '@/components/organisms/skills';
import { Experience, ExperienceProps } from '@/components/organisms/experience';
import { getHomePageContent } from 'lib/content/api';

export type AboutMeContent = Omit<AboutMeProps, 'id' | 'className'>;
export type SkillsContent = Omit<SkillsProps, 'id' | 'className'>;
export type ExperienceContent = Omit<ExperienceProps, 'id' | 'className'>;

export type HomePageProps = {
  aboutMe: AboutMeContent;
  skills: SkillsContent;
  experience: ExperienceContent;
};

export default function Home({ aboutMe, skills, experience }: HomePageProps): ReactElement {
  return (
    <Layout>
      <Intro id="intro" />
      <div className="k-container">
        <AboutMe id="about" className="mt-28 scroll-mt-28" {...aboutMe} />
        <Skills id="skills" className="mt-28 scroll-mt-28" {...skills} />
        <Experience id="experience" className="mt-28 scroll-mt-28" {...experience} />
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
