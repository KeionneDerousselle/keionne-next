import { FC } from 'react';
import { Section } from '@/components/molecules/section';
import { ProgressBar } from '@/components/atoms/progress-bar';
import classNames from 'classnames';

export type SkillsProps = {
  id: string;
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

export const Skills: FC<SkillsProps> = ({ id, className, title, skillGroups }) => (
  <Section id={id} title={title} className={className}>
    <div className="flex flex-wrap -mx-6">
      {skillGroups.map(({ title: groupTitle, skills }, i) => (
        <div className="w-full px-6 md:flex-[0_0_33%] md:max-w-[33%]" key={groupTitle}>
          <h3 className="mb-10 text-xl font-semibold text-purple-600">{groupTitle}</h3>

          <div>
            {skills.map(({ title: skillTitle, percent }) => (
              <ProgressBar
                id={`${groupTitle}-${skillTitle}`}
                key={`${groupTitle}-${skillTitle}`}
                label={skillTitle}
                value={percent}
                colorClassName={classNames(skillGroupColors[i])}
              />
            ))}
          </div>
        </div>
      ))}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quaerat dolorem nemo ratione magni quo consequatur.
        Ratione qui autem voluptatibus ex! Libero blanditiis nihil, quasi exercitationem natus veritatis ullam commodi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quaerat dolorem nemo ratione magni quo consequatur.
        Ratione qui autem voluptatibus ex! Libero blanditiis nihil, quasi exercitationem natus veritatis ullam commodi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quaerat dolorem nemo ratione magni quo consequatur.
        Ratione qui autem voluptatibus ex! Libero blanditiis nihil, quasi exercitationem natus veritatis ullam commodi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quaerat dolorem nemo ratione magni quo consequatur.
        Ratione qui autem voluptatibus ex! Libero blanditiis nihil, quasi exercitationem natus veritatis ullam commodi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quaerat dolorem nemo ratione magni quo consequatur.
        Ratione qui autem voluptatibus ex! Libero blanditiis nihil, quasi exercitationem natus veritatis ullam commodi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quaerat dolorem nemo ratione magni quo consequatur.
        Ratione qui autem voluptatibus ex! Libero blanditiis nihil, quasi exercitationem natus veritatis ullam commodi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quaerat dolorem nemo ratione magni quo consequatur.
        Ratione qui autem voluptatibus ex! Libero blanditiis nihil, quasi exercitationem natus veritatis ullam commodi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quaerat dolorem nemo ratione magni quo consequatur.
        Ratione qui autem voluptatibus ex! Libero blanditiis nihil, quasi exercitationem natus veritatis ullam commodi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quaerat dolorem nemo ratione magni quo consequatur.
        Ratione qui autem voluptatibus ex! Libero blanditiis nihil, quasi exercitationem natus veritatis ullam commodi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quaerat dolorem nemo ratione magni quo consequatur.
        Ratione qui autem voluptatibus ex! Libero blanditiis nihil, quasi exercitationem natus veritatis ullam commodi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quaerat dolorem nemo ratione magni quo consequatur.
        Ratione qui autem voluptatibus ex! Libero blanditiis nihil, quasi exercitationem natus veritatis ullam commodi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quaerat dolorem nemo ratione magni quo consequatur.
        Ratione qui autem voluptatibus ex! Libero blanditiis nihil, quasi exercitationem natus veritatis ullam commodi.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae eos magnam libero, accusamus fugit minus itaque
        vero ab? Consequuntur rerum dolor omnis non dolores ducimus accusantium, rem architecto pariatur aut. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Culpa maxime sed reprehenderit aut voluptatibus. Libero,
        nihil? Similique corrupti eum sequi accusantium sunt ea nobis? Aspernatur doloremque qui distinctio fugiat
        vitae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat sint accusantium dolorem veniam, placeat
        rem odio dolore. Ea excepturi pariatur qui aspernatur a, dolorum id repudiandae explicabo repellat, accusantium
        exercitationem.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quaerat dolorem nemo ratione magni quo consequatur.
        Ratione qui autem voluptatibus ex! Libero blanditiis nihil, quasi exercitationem natus veritatis ullam commodi.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae eos magnam libero, accusamus fugit minus itaque
        vero ab? Consequuntur rerum dolor omnis non dolores ducimus accusantium, rem architecto pariatur aut. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Culpa maxime sed reprehenderit aut voluptatibus. Libero,
        nihil? Similique corrupti eum sequi accusantium sunt ea nobis? Aspernatur doloremque qui distinctio fugiat
        vitae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat sint accusantium dolorem veniam, placeat
        rem odio dolore. Ea excepturi pariatur qui aspernatur a, dolorum id repudiandae explicabo repellat, accusantium
        exercitationem.
      </p>{' '}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quaerat dolorem nemo ratione magni quo consequatur.
        Ratione qui autem voluptatibus ex! Libero blanditiis nihil, quasi exercitationem natus veritatis ullam commodi.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae eos magnam libero, accusamus fugit minus itaque
        vero ab? Consequuntur rerum dolor omnis non dolores ducimus accusantium, rem architecto pariatur aut. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Culpa maxime sed reprehenderit aut voluptatibus. Libero,
        nihil? Similique corrupti eum sequi accusantium sunt ea nobis? Aspernatur doloremque qui distinctio fugiat
        vitae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat sint accusantium dolorem veniam, placeat
        rem odio dolore. Ea excepturi pariatur qui aspernatur a, dolorum id repudiandae explicabo repellat, accusantium
        exercitationem.
      </p>{' '}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quaerat dolorem nemo ratione magni quo consequatur.
        Ratione qui autem voluptatibus ex! Libero blanditiis nihil, quasi exercitationem natus veritatis ullam commodi.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae eos magnam libero, accusamus fugit minus itaque
        vero ab? Consequuntur rerum dolor omnis non dolores ducimus accusantium, rem architecto pariatur aut. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Culpa maxime sed reprehenderit aut voluptatibus. Libero,
        nihil? Similique corrupti eum sequi accusantium sunt ea nobis? Aspernatur doloremque qui distinctio fugiat
        vitae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat sint accusantium dolorem veniam, placeat
        rem odio dolore. Ea excepturi pariatur qui aspernatur a, dolorum id repudiandae explicabo repellat, accusantium
        exercitationem.
      </p>{' '}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quaerat dolorem nemo ratione magni quo consequatur.
        Ratione qui autem voluptatibus ex! Libero blanditiis nihil, quasi exercitationem natus veritatis ullam commodi.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae eos magnam libero, accusamus fugit minus itaque
        vero ab? Consequuntur rerum dolor omnis non dolores ducimus accusantium, rem architecto pariatur aut. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Culpa maxime sed reprehenderit aut voluptatibus. Libero,
        nihil? Similique corrupti eum sequi accusantium sunt ea nobis? Aspernatur doloremque qui distinctio fugiat
        vitae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat sint accusantium dolorem veniam, placeat
        rem odio dolore. Ea excepturi pariatur qui aspernatur a, dolorum id repudiandae explicabo repellat, accusantium
        exercitationem.
      </p>{' '}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quaerat dolorem nemo ratione magni quo consequatur.
        Ratione qui autem voluptatibus ex! Libero blanditiis nihil, quasi exercitationem natus veritatis ullam commodi.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae eos magnam libero, accusamus fugit minus itaque
        vero ab? Consequuntur rerum dolor omnis non dolores ducimus accusantium, rem architecto pariatur aut. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Culpa maxime sed reprehenderit aut voluptatibus. Libero,
        nihil? Similique corrupti eum sequi accusantium sunt ea nobis? Aspernatur doloremque qui distinctio fugiat
        vitae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat sint accusantium dolorem veniam, placeat
        rem odio dolore. Ea excepturi pariatur qui aspernatur a, dolorum id repudiandae explicabo repellat, accusantium
        exercitationem.
      </p>{' '}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quaerat dolorem nemo ratione magni quo consequatur.
        Ratione qui autem voluptatibus ex! Libero blanditiis nihil, quasi exercitationem natus veritatis ullam commodi.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae eos magnam libero, accusamus fugit minus itaque
        vero ab? Consequuntur rerum dolor omnis non dolores ducimus accusantium, rem architecto pariatur aut. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Culpa maxime sed reprehenderit aut voluptatibus. Libero,
        nihil? Similique corrupti eum sequi accusantium sunt ea nobis? Aspernatur doloremque qui distinctio fugiat
        vitae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat sint accusantium dolorem veniam, placeat
        rem odio dolore. Ea excepturi pariatur qui aspernatur a, dolorum id repudiandae explicabo repellat, accusantium
        exercitationem.
      </p>{' '}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quaerat dolorem nemo ratione magni quo consequatur.
        Ratione qui autem voluptatibus ex! Libero blanditiis nihil, quasi exercitationem natus veritatis ullam commodi.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae eos magnam libero, accusamus fugit minus itaque
        vero ab? Consequuntur rerum dolor omnis non dolores ducimus accusantium, rem architecto pariatur aut. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Culpa maxime sed reprehenderit aut voluptatibus. Libero,
        nihil? Similique corrupti eum sequi accusantium sunt ea nobis? Aspernatur doloremque qui distinctio fugiat
        vitae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat sint accusantium dolorem veniam, placeat
        rem odio dolore. Ea excepturi pariatur qui aspernatur a, dolorum id repudiandae explicabo repellat, accusantium
        exercitationem.
      </p>{' '}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quaerat dolorem nemo ratione magni quo consequatur.
        Ratione qui autem voluptatibus ex! Libero blanditiis nihil, quasi exercitationem natus veritatis ullam commodi.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae eos magnam libero, accusamus fugit minus itaque
        vero ab? Consequuntur rerum dolor omnis non dolores ducimus accusantium, rem architecto pariatur aut. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Culpa maxime sed reprehenderit aut voluptatibus. Libero,
        nihil? Similique corrupti eum sequi accusantium sunt ea nobis? Aspernatur doloremque qui distinctio fugiat
        vitae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat sint accusantium dolorem veniam, placeat
        rem odio dolore. Ea excepturi pariatur qui aspernatur a, dolorum id repudiandae explicabo repellat, accusantium
        exercitationem.
      </p>{' '}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quaerat dolorem nemo ratione magni quo consequatur.
        Ratione qui autem voluptatibus ex! Libero blanditiis nihil, quasi exercitationem natus veritatis ullam commodi.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae eos magnam libero, accusamus fugit minus itaque
        vero ab? Consequuntur rerum dolor omnis non dolores ducimus accusantium, rem architecto pariatur aut. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Culpa maxime sed reprehenderit aut voluptatibus. Libero,
        nihil? Similique corrupti eum sequi accusantium sunt ea nobis? Aspernatur doloremque qui distinctio fugiat
        vitae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat sint accusantium dolorem veniam, placeat
        rem odio dolore. Ea excepturi pariatur qui aspernatur a, dolorum id repudiandae explicabo repellat, accusantium
        exercitationem.
      </p>{' '}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quaerat dolorem nemo ratione magni quo consequatur.
        Ratione qui autem voluptatibus ex! Libero blanditiis nihil, quasi exercitationem natus veritatis ullam commodi.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae eos magnam libero, accusamus fugit minus itaque
        vero ab? Consequuntur rerum dolor omnis non dolores ducimus accusantium, rem architecto pariatur aut. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Culpa maxime sed reprehenderit aut voluptatibus. Libero,
        nihil? Similique corrupti eum sequi accusantium sunt ea nobis? Aspernatur doloremque qui distinctio fugiat
        vitae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat sint accusantium dolorem veniam, placeat
        rem odio dolore. Ea excepturi pariatur qui aspernatur a, dolorum id repudiandae explicabo repellat, accusantium
        exercitationem.
      </p>{' '}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quaerat dolorem nemo ratione magni quo consequatur.
        Ratione qui autem voluptatibus ex! Libero blanditiis nihil, quasi exercitationem natus veritatis ullam commodi.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae eos magnam libero, accusamus fugit minus itaque
        vero ab? Consequuntur rerum dolor omnis non dolores ducimus accusantium, rem architecto pariatur aut. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Culpa maxime sed reprehenderit aut voluptatibus. Libero,
        nihil? Similique corrupti eum sequi accusantium sunt ea nobis? Aspernatur doloremque qui distinctio fugiat
        vitae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat sint accusantium dolorem veniam, placeat
        rem odio dolore. Ea excepturi pariatur qui aspernatur a, dolorum id repudiandae explicabo repellat, accusantium
        exercitationem.
      </p>{' '}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quaerat dolorem nemo ratione magni quo consequatur.
        Ratione qui autem voluptatibus ex! Libero blanditiis nihil, quasi exercitationem natus veritatis ullam commodi.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae eos magnam libero, accusamus fugit minus itaque
        vero ab? Consequuntur rerum dolor omnis non dolores ducimus accusantium, rem architecto pariatur aut. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Culpa maxime sed reprehenderit aut voluptatibus. Libero,
        nihil? Similique corrupti eum sequi accusantium sunt ea nobis? Aspernatur doloremque qui distinctio fugiat
        vitae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat sint accusantium dolorem veniam, placeat
        rem odio dolore. Ea excepturi pariatur qui aspernatur a, dolorum id repudiandae explicabo repellat, accusantium
        exercitationem.
      </p>{' '}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quaerat dolorem nemo ratione magni quo consequatur.
        Ratione qui autem voluptatibus ex! Libero blanditiis nihil, quasi exercitationem natus veritatis ullam commodi.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae eos magnam libero, accusamus fugit minus itaque
        vero ab? Consequuntur rerum dolor omnis non dolores ducimus accusantium, rem architecto pariatur aut. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Culpa maxime sed reprehenderit aut voluptatibus. Libero,
        nihil? Similique corrupti eum sequi accusantium sunt ea nobis? Aspernatur doloremque qui distinctio fugiat
        vitae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat sint accusantium dolorem veniam, placeat
        rem odio dolore. Ea excepturi pariatur qui aspernatur a, dolorum id repudiandae explicabo repellat, accusantium
        exercitationem.
      </p>{' '}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quaerat dolorem nemo ratione magni quo consequatur.
        Ratione qui autem voluptatibus ex! Libero blanditiis nihil, quasi exercitationem natus veritatis ullam commodi.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae eos magnam libero, accusamus fugit minus itaque
        vero ab? Consequuntur rerum dolor omnis non dolores ducimus accusantium, rem architecto pariatur aut. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Culpa maxime sed reprehenderit aut voluptatibus. Libero,
        nihil? Similique corrupti eum sequi accusantium sunt ea nobis? Aspernatur doloremque qui distinctio fugiat
        vitae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat sint accusantium dolorem veniam, placeat
        rem odio dolore. Ea excepturi pariatur qui aspernatur a, dolorum id repudiandae explicabo repellat, accusantium
        exercitationem.
      </p>{' '}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quaerat dolorem nemo ratione magni quo consequatur.
        Ratione qui autem voluptatibus ex! Libero blanditiis nihil, quasi exercitationem natus veritatis ullam commodi.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae eos magnam libero, accusamus fugit minus itaque
        vero ab? Consequuntur rerum dolor omnis non dolores ducimus accusantium, rem architecto pariatur aut. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Culpa maxime sed reprehenderit aut voluptatibus. Libero,
        nihil? Similique corrupti eum sequi accusantium sunt ea nobis? Aspernatur doloremque qui distinctio fugiat
        vitae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat sint accusantium dolorem veniam, placeat
        rem odio dolore. Ea excepturi pariatur qui aspernatur a, dolorum id repudiandae explicabo repellat, accusantium
        exercitationem.
      </p>{' '}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quaerat dolorem nemo ratione magni quo consequatur.
        Ratione qui autem voluptatibus ex! Libero blanditiis nihil, quasi exercitationem natus veritatis ullam commodi.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae eos magnam libero, accusamus fugit minus itaque
        vero ab? Consequuntur rerum dolor omnis non dolores ducimus accusantium, rem architecto pariatur aut. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Culpa maxime sed reprehenderit aut voluptatibus. Libero,
        nihil? Similique corrupti eum sequi accusantium sunt ea nobis? Aspernatur doloremque qui distinctio fugiat
        vitae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat sint accusantium dolorem veniam, placeat
        rem odio dolore. Ea excepturi pariatur qui aspernatur a, dolorum id repudiandae explicabo repellat, accusantium
        exercitationem.
      </p>{' '}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quaerat dolorem nemo ratione magni quo consequatur.
        Ratione qui autem voluptatibus ex! Libero blanditiis nihil, quasi exercitationem natus veritatis ullam commodi.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae eos magnam libero, accusamus fugit minus itaque
        vero ab? Consequuntur rerum dolor omnis non dolores ducimus accusantium, rem architecto pariatur aut. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Culpa maxime sed reprehenderit aut voluptatibus. Libero,
        nihil? Similique corrupti eum sequi accusantium sunt ea nobis? Aspernatur doloremque qui distinctio fugiat
        vitae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat sint accusantium dolorem veniam, placeat
        rem odio dolore. Ea excepturi pariatur qui aspernatur a, dolorum id repudiandae explicabo repellat, accusantium
        exercitationem.
      </p>{' '}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quaerat dolorem nemo ratione magni quo consequatur.
        Ratione qui autem voluptatibus ex! Libero blanditiis nihil, quasi exercitationem natus veritatis ullam commodi.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae eos magnam libero, accusamus fugit minus itaque
        vero ab? Consequuntur rerum dolor omnis non dolores ducimus accusantium, rem architecto pariatur aut. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Culpa maxime sed reprehenderit aut voluptatibus. Libero,
        nihil? Similique corrupti eum sequi accusantium sunt ea nobis? Aspernatur doloremque qui distinctio fugiat
        vitae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat sint accusantium dolorem veniam, placeat
        rem odio dolore. Ea excepturi pariatur qui aspernatur a, dolorum id repudiandae explicabo repellat, accusantium
        exercitationem.
      </p>
    </div>
  </Section>
);
