import type {ReactNode} from 'react';
import {AppHeader} from "@/components/layouts/AppHeader";
import {AppFooter} from "@/components/layouts/AppFooter";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({children}: MainLayoutProps) => {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center justify-between text-start">
        <AppHeader/>

        {children}

        <AppFooter/>
      </div>
    </>
  );
}
