import {ThemeToggle} from "@/components/ThemeToggle";
import {Link} from 'react-router-dom';
import {Button, buttonVariants} from "@/components/ui/button";
import {Avatar, AvatarFallback, AvatarImage,} from "@/components/ui/avatar"
import {Banknote, BookMarkedIcon, CreditCard, FunctionSquare, GitCommit, Github, LockOpen, LucideVolleyball, User,} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {HackedDropdownMenuItem} from "@/components/ui/HackedDropdownMenuItem";
import {HackText} from "@/components/ui/HackedText";

export const AppHeader = () => {
  return (
    <header className="p-4 py-3 rounded-lg fixed top-5 z-50 flex gap-6 w-[80%] sm:w-[60%] items-center
                       justify-between border border-grid backdrop-blur supports-[backdrop-filter]:bg-background/40">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm">
            <Avatar className="w-7 h-7">
              <AvatarImage src="/favicons/favicon.ico" alt="@ddjerqq"/>
              <AvatarFallback>GN</AvatarFallback>
            </Avatar>
            <span className="font-bold">About me</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48">
          <DropdownMenuLabel>About me</DropdownMenuLabel>
          <DropdownMenuGroup>
            <HackedDropdownMenuItem text="Who am I?" href="/#whoami" icon={<User/>}/>
            <HackedDropdownMenuItem text="My skills" href="/#my-skills" icon={<LucideVolleyball/>}/>
          </DropdownMenuGroup>
          <DropdownMenuSeparator/>

          <DropdownMenuLabel>Career</DropdownMenuLabel>
          <DropdownMenuGroup>
            <HackedDropdownMenuItem text="Work experience" href="/career/work" icon={<Banknote/>}/>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <GitCommit />
                <Link to="/career/projects">
                  <HackText text="Projects"/>
                </Link>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <HackedDropdownMenuItem text="Freelance" href="/career/freelance" icon={<CreditCard/>}/>
                  <HackedDropdownMenuItem text="Open source" href="/career/oss" icon={<LockOpen/>}/>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuGroup>
          <DropdownMenuSeparator/>

          <HackedDropdownMenuItem text="Blog" href="/career/work" icon={<BookMarkedIcon/>}/>
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="space-x-2 flex items-center">
        {/*<ThemeToggle/>*/}

        <Link to="https://github.com/ddjerqq" className={'hidden sm:flex ' + buttonVariants({variant: "outline", size: "sm"})}>
          <Github/>
          GitHub
        </Link>

        <Link to="/contact" className={buttonVariants({variant: "default", size: "sm"})}>
          Get in touch
        </Link>
      </div>
    </header>
  );
}