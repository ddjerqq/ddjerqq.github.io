import React from "react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Link} from "@/components/ui/link";
import {Github, Headphones, Linkedin, Mail, Mailbox, Phone, Send} from "lucide-react";
import {BackgroundBeams} from "@/components/ui/BackgroundBeams";

export const AppFooter = () => {
  return (
    <footer className="relative z-50 px-8 pb-6 w-full border-grid border-t bg-background antialiased">
      <div className="relative">
        <div className="py-4 grid items-start gap-12 grid-cols-1 sm:grid-cols-2">
          <div className="flex flex-col text-start gap-2 max-w-md">
            <span className="text-xl font-semibold mb-2">
                Newsletter
            </span>

            <span className="text-muted-foreground text-sm">
              Enter your email to receive notifications about new blogs and updates from me!
            </span>
            <Input disabled placeholder="Enter your email"/>
            <Button disabled>Subscribe</Button>
          </div>

          <div className="relative">
            <address className="absolute flex flex-col text-start gap-1 not-italic">
              <span className="text-xl font-semibold mb-2">
                  Contact
              </span>

              <ul className="text-sm space-y-2">
                <li>
                  <Link href="https://github.com/ddjerqq" target="_blank" rel="noreferrer" className="flex gap-2">
                    <Github className="w-5 h-5"/>
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href="https://t.me/tenxdeveloper" target="_blank" rel="noreferrer" className="flex gap-2">
                    <Send className="w-5 h-5"/>
                    Telegram
                  </Link>
                </li>
                <li>
                  <Link href="https://discord.com/users/725773984808960050" target="_blank" rel="noreferrer" className="flex gap-2">
                    <Headphones className="w-5 h-5"/>
                    Discord
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/in/giorgi-torvalds-4a4a30285/" target="_blank" rel="noreferrer" className="flex gap-2">
                    <Linkedin className="w-5 h-5"/>
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="mailto:g@nachkebia.dev" target="_blank" rel="noreferrer" className="flex gap-2">
                    <Mail className="w-5 h-5"/>
                    g@nachkebia.dev
                  </Link>
                </li>
              </ul>
            </address>
            <BackgroundBeams/>
          </div>
        </div>
      </div>
    </footer>
  );
}