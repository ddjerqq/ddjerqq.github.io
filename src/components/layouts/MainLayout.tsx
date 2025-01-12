import type {ReactNode} from 'react';
import {AppHeader} from "@/components/layouts/AppHeader";
import {AppFooter} from "@/components/layouts/AppFooter";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({children}: MainLayoutProps) => {
  return (
    <>
      <div className="relative h-full flex flex-col items-center text-start">
        <AppHeader/>

        <section className="relative w-full h-full space-y-4 items-center justify-center text-center
                           overflow-y-scroll snap-y snap-mandatory">
            {children}
        </section>

        <AppFooter/>
      </div>
    </>
  );
}
