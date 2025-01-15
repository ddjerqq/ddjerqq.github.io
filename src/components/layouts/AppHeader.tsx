import {Link} from 'react-router-dom';
import {Button, buttonVariants} from "@/components/ui/button";
import {Avatar, AvatarFallback, AvatarImage,} from "@/components/ui/avatar"
import {Banknote, GitCommit, Github, LucideVolleyball, Mail, Table, User,} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {HackedDropdownMenuItem} from "@/components/ui/HackedDropdownMenuItem";

export const AppHeader = () => {
  return (
    <header className="p-4 py-3 rounded-lg fixed top-5 z-50 flex gap-6 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] items-center
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
            <HackedDropdownMenuItem text="Who am I?" href="/" icon={<User/>} onClick={() => window.scrollTo(0, 0)}/>
            <HackedDropdownMenuItem text="Overview" href="/#overview" icon={<Table/>}/>
            <HackedDropdownMenuItem text="My skills" href="/#my-skills" icon={<LucideVolleyball/>}/>
          </DropdownMenuGroup>
          <DropdownMenuSeparator/>

          <DropdownMenuLabel>Career</DropdownMenuLabel>
          <DropdownMenuGroup>
            <HackedDropdownMenuItem text="Work experience" href="/#work-experience" icon={<Banknote/>}/>
            <HackedDropdownMenuItem text="My projects" href="/#projects" icon={<GitCommit/>}/>
          </DropdownMenuGroup>
          <DropdownMenuSeparator/>

          <HackedDropdownMenuItem text="Contact" href="/#contact" icon={<Mail/>}/>
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="space-x-2 flex items-center">
        {/*<ThemeToggle/>*/}

        <Link to="https://github.com/ddjerqq" className={buttonVariants({variant: "outline", size: "sm"})}>
          <Github/>
          GitHub
        </Link>

        <a href="/#contact" className={buttonVariants({variant: "default", size: "sm"})}>
          Get in touch
        </a>
      </div>
    </header>
  );
}