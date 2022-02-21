import { FC } from 'react';
import { Footer } from '@/components/molecules/footer';

export interface LayoutProps {
  className?: string;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative flex flex-col w-full min-h-screen k-app">
      <main className="w-full k-main flex-[1_0_auto] bg-white-f-9">
        <div className="k-container">{children}</div>
      </main>
      <Footer className="flex-shrink-0 k-footer" />
    </div>
  );
};
