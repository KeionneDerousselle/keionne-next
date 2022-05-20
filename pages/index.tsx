import React, { ReactElement, useState } from 'react';
import { GetStaticProps } from 'next';
import { Layout } from '@/components/molecules/layout';
import { Intro } from '@/components/organisms/intro';
import { AboutMe, AboutMeProps } from '@/components/organisms/about-me';
import { Skills, SkillsProps } from '@/components/organisms/skills';
import { Experience, ExperienceProps } from '@/components/organisms/experience';
import { getHomePageContent } from 'lib/content/api';
import { Modal } from '@/components/molecules/modal';

export type AboutMeContent = Omit<AboutMeProps, 'id' | 'className'>;
export type SkillsContent = Omit<SkillsProps, 'id' | 'className'>;
export type ExperienceContent = Omit<ExperienceProps, 'id' | 'className'>;

export type HomePageProps = {
  aboutMe: AboutMeContent;
  skills: SkillsContent;
  experience: ExperienceContent;
};

export default function Home({ aboutMe, skills, experience }: HomePageProps): ReactElement {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);

  return (
    <Layout>
      <Intro id="intro" />
      <div className="k-container">
        <AboutMe id="about" className="mt-28 scroll-mt-28" {...aboutMe} />
        <Skills id="skills" className="mt-28 scroll-mt-28" {...skills} />
        <Experience id="experience" className="mt-28 scroll-mt-28" {...experience} />
        <button onClick={() => setModalOpen(!modalOpen)}>Show me!</button>

        <Modal show={modalOpen} onClose={close}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo fuga quas sint, sit qui praesentium saepe!
            Culpa quasi tempore eum numquam perspiciatis quisquam magni dolorem dolore. Mollitia sit deleniti
            blanditiis.
          </p>
          <button onClick={close}>Close me!</button>
        </Modal>
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
