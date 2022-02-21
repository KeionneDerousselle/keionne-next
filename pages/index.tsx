import React, { ReactElement } from 'react';
import { GetStaticProps } from 'next';
import { Layout } from '@/components/molecules/layout';
import { AboutMe, AboutMeProps } from '@/components/organisms/about-me';
import { getHomePageContent } from 'lib/content/api';

export interface HomePageProps {
  aboutMe: AboutMeProps;
}

export default function Home({ aboutMe }: HomePageProps): ReactElement {
  return (
    <Layout>
      <AboutMe {...aboutMe} />
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
