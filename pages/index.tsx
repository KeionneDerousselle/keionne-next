import React from 'react';
import { Layout } from '@/components/molecules/layout';
import { AboutMe } from '@/components/organisms/about-me';

function IndexPage() {
  return (
    <Layout>
      <AboutMe title="About Me" blurbTitle="Hi, there!" blurbDescription="lorem ipsum" ctaLabel="Download CV" />
    </Layout>
  );
}

export default IndexPage;
