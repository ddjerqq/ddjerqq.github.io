import type {ReactNode} from 'react';
import {AppHeader} from "@/components/layouts/AppHeader";
import {AppFooter} from "@/components/layouts/AppFooter";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({children}: MainLayoutProps) => {
  return (
    <>
      <div className="h-full flex flex-col items-stretch justify-between">
        <AppHeader/>

        <section className="w-full px-8 mt-24 my-8">
          <div className="h-full flex-1 space-y-4 w-full flex flex-col items-center justify-center text-center">
            {children}
          </div>
        </section>

        <AppFooter/>
      </div>
    </>
  );
}
