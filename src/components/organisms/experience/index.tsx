import { FC } from 'react';
import { Section } from '@/components/molecules/section';
import { Timeline } from '@/components/molecules/timeline';

export type ExperienceProps = {
  id: string;
  className?: string;
  title: string;
};

export const Experience: FC<ExperienceProps> = ({ id, className, title }) => {
  const items = [
    {
      id: 'experience-1',
      date: '2019-present',
      title: 'Software Engineer',
      subtitle: 'Google',
      children: (
        <p>
          {' '}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam perspiciatis eligendi doloribus ratione
          soluta necessitatibus alias maiores nulla ipsa quis labore, laudantium porro at nostrum ad quos aliquam, autem
          deserunt.
        </p>
      ),
    },
    {
      id: 'experience-2',
      date: '2019-present',
      title: 'Software Engineer',
      subtitle: 'Google',
      children: (
        <p>
          {' '}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam perspiciatis eligendi doloribus ratione
          soluta necessitatibus alias maiores nulla ipsa quis labore, laudantium porro at nostrum ad quos aliquam, autem
          deserunt.
        </p>
      ),
    },
    {
      id: 'experience-3',
      date: '2019-present',
      title: 'Software Engineer',
      subtitle: 'Google',
      children: (
        <p>
          {' '}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam perspiciatis eligendi doloribus ratione
          soluta necessitatibus alias maiores nulla ipsa quis labore, laudantium porro at nostrum ad quos aliquam, autem
          deserunt.
        </p>
      ),
    },
    {
      id: 'experience-4',
      date: '2019-present',
      title: 'Software Engineer',
      subtitle: 'Google',
      children: (
        <p>
          {' '}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam perspiciatis eligendi doloribus ratione
          soluta necessitatibus alias maiores nulla ipsa quis labore, laudantium porro at nostrum ad quos aliquam, autem
          deserunt.
        </p>
      ),
    },
  ];

  return (
    <Section id={id} title={title} className={className}>
      <Timeline id="experience-timeline" items={items}></Timeline>
    </Section>
  );
};
