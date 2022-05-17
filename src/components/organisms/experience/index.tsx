import { FC } from 'react';
import { Section } from '@/components/molecules/section';
import { Timeline } from '@/components/molecules/timeline';

export type Job = {
  companyName: string;
  positionTitle: string;
  startDate: string;
  endDate: string;
  summary: string;
  content: string;
};

export type ExperienceProps = {
  id: string;
  className?: string;
  title: string;
  jobs: Job[];
};

export const Experience: FC<ExperienceProps> = ({ id, className, title, jobs }) => {
  const timelineItems = jobs
    .map(({ companyName, positionTitle, startDate }) => ({
      id: `${companyName}-${positionTitle}`,
      date: new Date(startDate),
      title: companyName,
      subtitle: positionTitle,
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi asperiores cupiditate ipsa, vero sit, est neque obcaecati distinctio non velit, ipsam corporis atque doloribus maiores quae? Dolor doloribus quas nulla.',
    }))
    .sort((a, b) => b.date.getTime() - a.date.getTime());

  return (
    <Section id={id} title={title} className={className}>
      <Timeline id="experience-timeline" items={timelineItems}></Timeline>
    </Section>
  );
};
