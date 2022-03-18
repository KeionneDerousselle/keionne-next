import { FC } from 'react';
import classNames from 'classnames';
import Slide from 'react-reveal/Slide';

export type ProgressBarProps = {
  id: string;
  className?: string;
  label?: string;
  value: number;
  colorClassName?: string;
};

export const ProgressBar: FC<ProgressBarProps> = ({ id, className, label, value, colorClassName }) => {
  const normalizedProgress = Math.round(Math.max(Math.min(value, 100), 0));
  const progressBarStyle = {
    width: `${normalizedProgress}%`,
  };

  return (
    <div className={classNames('inline-block w-full progressbar__container', className)}>
      <label htmlFor={id} className="flex items-center justify-between mb-3">
        <span className="font-medium text-purple-600">{label}</span>
      </label>

      <div className="overflow-hidden shadow-none bg-slate-400 progressbar__background h-[10px] rounded-2xl">
        <Slide left>
          <div className="w-full h-full">
            <div
              id={id}
              role="progressbar"
              style={progressBarStyle}
              aria-valuemin={0}
              aria-valuenow={normalizedProgress}
              aria-valuemax={100}
              className={classNames('h-full rounded-2xl transition-all', colorClassName)}
            />
          </div>
        </Slide>
      </div>
    </div>
  );
};
