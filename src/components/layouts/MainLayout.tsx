import type {ReactNode} from 'react';
import {AppHeader} from "@/components/layouts/AppHeader";
import {AppFooter} from "@/components/layouts/AppFooter";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({children}: MainLayoutProps) => {
  return (
    <>
      <div className="h-full flex flex-col items-center justify-between text-start">
        <AppHeader/>

        <section className="w-full h-full items-center justify-center text-center overflow-y-scroll snap-y snap-proximity">
          {children}

          <AppFooter/>
        </section>
      </div>
    </>
  );
}
