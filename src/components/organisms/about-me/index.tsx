import { FC } from 'react';
import { Section } from '@/components/molecules/section';
import { ButtonLink } from '@/components/atoms/button-link';

export type AboutMeProps = {
  id: string;
  className?: string;
  title: string;
  blurbTitle: string;
  blurbDescription: string;
  ctaLabel: string;
};

const AvatarContainer: FC = ({ children }) => (
  <div className="relative flex justify-center w-full px-4 mb-8 about__avatar md:mb-0 md:justify-start md:w-1/4 md:flex-[0_0_25%] md:max-w-[25%]">
    <div>{children}</div>
  </div>
);

type SpeechBubbleProps = {
  blurbTitle: string;
  blurbDescription: string;
  ctaLabel: string;
};

const SpeechBubble: FC<SpeechBubbleProps> = ({ blurbTitle, blurbDescription, ctaLabel }) => (
  <div className="relative w-full about__speech-bubble md:w-3/4 md:pl-[15px] md:flex-[0_0_75%] md:max-w-[75%] before:absolute before:w-0 before:h-0 before:left-1/2 before:top-[-10px] before:border-t-0 before:translate-x-[-7.5px] before:border-l-[10px] before:border-l-transparent before:border-r-[10px] before:border-r-transparent before:border-b-[10px] before:border-b-white md:before:border-l-0 md:before:border-t-[10px] md:before:border-t-transparent md:before:border-b-[10px] md:before:border-b-transparent md:before:border-r-[15px] md:before:border-r-white md:before:left-0 md:before:top-[20%] md:before:translate-x-0">
    <div className="w-full p-8 bg-white speech-bubble__content rounded-3xl shadow-custom">
      <h3 className="mb-4 text-2xl font-semibold text-purple-600 content__title">{blurbTitle}</h3>
      <p className="text-purple-500 content__description">{blurbDescription}</p>
      <ButtonLink type="button" className="mt-8">
        {ctaLabel}
      </ButtonLink>
    </div>
  </div>
);

export const AboutMe: FC<AboutMeProps> = ({ id, className, title, blurbDescription, blurbTitle, ctaLabel }) => (
  <Section id={id} title={title} className={className}>
    <div className="flex flex-wrap">
      <AvatarContainer>
        <img src="https://via.placeholder.com/150x150" className="align-middle" alt="Keionne's Avatar" />
      </AvatarContainer>

      <SpeechBubble blurbTitle={blurbTitle} blurbDescription={blurbDescription} ctaLabel={ctaLabel} />

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus sint laudantium quis, illo quos adipisci
        deleniti exercitationem laboriosam. Nostrum eum quam saepe! Eos sit quia voluptatum ratione quidem quod aliquid.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nihil distinctio obcaecati, voluptatibus
        voluptates ut corporis iusto aut quos ad, non cumque unde optio maxime possimus amet est quis assumenda. Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Vel culpa voluptatibus sunt omnis voluptatum non, sit tenetur
        nihil ratione magnam voluptas facilis accusantium eius, quae alias in consequuntur. Distinctio, non. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Nemo quibusdam assumenda laborum cupiditate saepe qui ducimus
        corrupti, distinctio incidunt veniam amet veritatis, debitis consequuntur minus, iure dolores nobis mollitia
        possimus!
      </p>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus sint laudantium quis, illo quos adipisci
        deleniti exercitationem laboriosam. Nostrum eum quam saepe! Eos sit quia voluptatum ratione quidem quod aliquid.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nihil distinctio obcaecati, voluptatibus
        voluptates ut corporis iusto aut quos ad, non cumque unde optio maxime possimus amet est quis assumenda. Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Vel culpa voluptatibus sunt omnis voluptatum non, sit tenetur
        nihil ratione magnam voluptas facilis accusantium eius, quae alias in consequuntur. Distinctio, non. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Nemo quibusdam assumenda laborum cupiditate saepe qui ducimus
        corrupti, distinctio incidunt veniam amet veritatis, debitis consequuntur minus, iure dolores nobis mollitia
        possimus!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus sint laudantium quis, illo quos adipisci
        deleniti exercitationem laboriosam. Nostrum eum quam saepe! Eos sit quia voluptatum ratione quidem quod aliquid.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nihil distinctio obcaecati, voluptatibus
        voluptates ut corporis iusto aut quos ad, non cumque unde optio maxime possimus amet est quis assumenda. Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Vel culpa voluptatibus sunt omnis voluptatum non, sit tenetur
        nihil ratione magnam voluptas facilis accusantium eius, quae alias in consequuntur. Distinctio, non. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Nemo quibusdam assumenda laborum cupiditate saepe qui ducimus
        corrupti, distinctio incidunt veniam amet veritatis, debitis consequuntur minus, iure dolores nobis mollitia
        possimus!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus sint laudantium quis, illo quos adipisci
        deleniti exercitationem laboriosam. Nostrum eum quam saepe! Eos sit quia voluptatum ratione quidem quod aliquid.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nihil distinctio obcaecati, voluptatibus
        voluptates ut corporis iusto aut quos ad, non cumque unde optio maxime possimus amet est quis assumenda. Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Vel culpa voluptatibus sunt omnis voluptatum non, sit tenetur
        nihil ratione magnam voluptas facilis accusantium eius, quae alias in consequuntur. Distinctio, non. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Nemo quibusdam assumenda laborum cupiditate saepe qui ducimus
        corrupti, distinctio incidunt veniam amet veritatis, debitis consequuntur minus, iure dolores nobis mollitia
        possimus!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus sint laudantium quis, illo quos adipisci
        deleniti exercitationem laboriosam. Nostrum eum quam saepe! Eos sit quia voluptatum ratione quidem quod aliquid.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nihil distinctio obcaecati, voluptatibus
        voluptates ut corporis iusto aut quos ad, non cumque unde optio maxime possimus amet est quis assumenda. Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Vel culpa voluptatibus sunt omnis voluptatum non, sit tenetur
        nihil ratione magnam voluptas facilis accusantium eius, quae alias in consequuntur. Distinctio, non. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Nemo quibusdam assumenda laborum cupiditate saepe qui ducimus
        corrupti, distinctio incidunt veniam amet veritatis, debitis consequuntur minus, iure dolores nobis mollitia
        possimus!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus sint laudantium quis, illo quos adipisci
        deleniti exercitationem laboriosam. Nostrum eum quam saepe! Eos sit quia voluptatum ratione quidem quod aliquid.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nihil distinctio obcaecati, voluptatibus
        voluptates ut corporis iusto aut quos ad, non cumque unde optio maxime possimus amet est quis assumenda. Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Vel culpa voluptatibus sunt omnis voluptatum non, sit tenetur
        nihil ratione magnam voluptas facilis accusantium eius, quae alias in consequuntur. Distinctio, non. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Nemo quibusdam assumenda laborum cupiditate saepe qui ducimus
        corrupti, distinctio incidunt veniam amet veritatis, debitis consequuntur minus, iure dolores nobis mollitia
        possimus!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus sint laudantium quis, illo quos adipisci
        deleniti exercitationem laboriosam. Nostrum eum quam saepe! Eos sit quia voluptatum ratione quidem quod aliquid.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nihil distinctio obcaecati, voluptatibus
        voluptates ut corporis iusto aut quos ad, non cumque unde optio maxime possimus amet est quis assumenda. Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Vel culpa voluptatibus sunt omnis voluptatum non, sit tenetur
        nihil ratione magnam voluptas facilis accusantium eius, quae alias in consequuntur. Distinctio, non. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Nemo quibusdam assumenda laborum cupiditate saepe qui ducimus
        corrupti, distinctio incidunt veniam amet veritatis, debitis consequuntur minus, iure dolores nobis mollitia
        possimus!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus sint laudantium quis, illo quos adipisci
        deleniti exercitationem laboriosam. Nostrum eum quam saepe! Eos sit quia voluptatum ratione quidem quod aliquid.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nihil distinctio obcaecati, voluptatibus
        voluptates ut corporis iusto aut quos ad, non cumque unde optio maxime possimus amet est quis assumenda. Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Vel culpa voluptatibus sunt omnis voluptatum non, sit tenetur
        nihil ratione magnam voluptas facilis accusantium eius, quae alias in consequuntur. Distinctio, non. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Nemo quibusdam assumenda laborum cupiditate saepe qui ducimus
        corrupti, distinctio incidunt veniam amet veritatis, debitis consequuntur minus, iure dolores nobis mollitia
        possimus!
      </p>
    </div>
  </Section>
);
