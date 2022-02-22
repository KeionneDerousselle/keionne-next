import { FC } from 'react';
import { Section } from '@/components/molecules/section';
import { ProgressBar } from '@/components/atoms/progress-bar';
import classNames from 'classnames';

export type SkillsProps = {
  className?: string;
  title: string;
  skillGroups: {
    title: string;
    skills: {
      title: string;
      percent: number;
    }[];
  }[];
};

// Using maps so that the full Tailwind classes can be seen for purging
// see https://tailwindcss.com/docs/optimizing-for-production#writing-purgeable-html
const skillGroupColors = {
  0: 'bg-blue-300',
  1: 'bg-yellow-400',
  2: 'bg-pink-200',
};

export const Skills: FC<SkillsProps> = ({ className, title, skillGroups }) => (
  <Section title={title} className={className}>
    <div className="flex flex-wrap -mx-6">
      {skillGroups.map(({ title: groupTitle, skills }, i) => (
        <div className="w-full px-6 md:flex-[0_0_33%] md:max-w-[33%]">
          <h3 className="mb-10 text-xl font-semibold text-purple-600">{groupTitle}</h3>

          <div>
            {skills.map(({ title: skillTitle, percent }) => (
              <ProgressBar
                id={`${groupTitle}-${skillTitle}`}
                label={skillTitle}
                value={percent}
                colorClassName={classNames(skillGroupColors[i])}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  </Section>
);
