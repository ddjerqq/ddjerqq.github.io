import {ThemeToggle} from "@/components/ThemeToggle";
import {Link} from 'react-router-dom';
import {buttonVariants} from "@/components/ui/button";

export const AppHeader = () => {
  return (
    <header
      className="px-8 py-2 fixed top-0 mx-auto z-50 w-full flex items-center justify-between border-b border-grid bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">

      <div className="mr-4 flex">
        <Link to="/" className="mr-4 flex items-center gap-2">
          <img src="/favicon.ico" alt="logo" className="w-8 h-8 rounded-full"/>
          <span className="font-bold">Giorgi Nachkebia</span>
        </Link>

        <nav className="flex items-center text-sm gap-4">
          <Link to="/about"
                className="hover:text-foreground text-foreground/80 [&.active]:font-bold [&.active]:text-primary transition-colors">
            About me
          </Link>
          <Link to="/career"
                className="hover:text-foreground text-foreground/80 [&.active]:font-bold [&.active]:text-primary transition-colors">
            Career
          </Link>
          <Link to="/blog"
                className="hover:text-foreground text-foreground/80 [&.active]:font-bold [&.active]:text-primary transition-colors">
            Blog
          </Link>
          <Link to="/hire_me"
                className="hover:text-foreground text-foreground/80 [&.active]:font-bold [&.active]:text-primary transition-colors">
            Hire me
          </Link>
        </nav>
      </div>

      <div className="space-x-2 flex items-center">
        <ThemeToggle/>

        <Link to="/get_in_touch" className={buttonVariants({variant: "default", size: "default"})}>
          Get in touch
        </Link>
      </div>
    </header>
  );
}