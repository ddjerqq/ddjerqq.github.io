import React from "react";

export const AppFooter = () => {
  const yearNow = new Date().getFullYear();

  return (
    <footer className="relative z-50 py-4 w-full border-grid border-t bg-background antialiased">
      <div className="col-span-2 text-sm w-full text-center text-muted-foreground">
        All rights reserved &copy; {yearNow} Giorgi Nachkebia
      </div>
    </footer>
  );
}