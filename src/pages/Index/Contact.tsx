import {Link} from "@/components/ui/link";
import {Github, Headphones, Linkedin, Mail, Send} from "lucide-react";
import {SectionWrapper} from "@/components/SectionWrapper";
import {HackText} from "@/components/ui/HackedText";

export const Contact = () => {
  return (
    <SectionWrapper id="contact" className="items-center bg-dot-neutral-800">
      <div className="h-screen flex flex-col justify-center">
        <h2 className="text-white text-6xl font-black text-center mb-4">
          Contact me
        </h2>

        <address className="flex flex-col text-start gap-1 not-italic">
          <ul className="text-lg space-y-2">
            <li>
              <Link href="https://github.com/ddjerqq" target="_blank" rel="noreferrer" className="flex gap-2">
                <Github className="w-8 h-8"/>
                <HackText text="GitHub"/>
              </Link>
            </li>
            <li>
              <Link href="https://t.me/tenxdeveloper" target="_blank" rel="noreferrer" className="flex gap-2">
                <Send className="w-8 h-8"/>
                <HackText text="Telegram"/>
              </Link>
            </li>
            <li>
              <Link href="https://discord.com/users/725773984808960050" target="_blank" rel="noreferrer" className="flex gap-2">
                <Headphones className="w-8 h-8"/>
                <HackText text="Discord"/>
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/tenxdeveloper/" target="_blank" rel="noreferrer"
                    className="flex gap-2">
                <Linkedin className="w-8 h-8"/>
                <HackText text="LinkedIn"/>
              </Link>
            </li>
            <li>
              <Link href="mailto:g@nachkebia.dev" target="_blank" rel="noreferrer" className="flex gap-2">
                <Mail className="w-8 h-8"/>
                <HackText text="g@nachkebia.dev"/>
              </Link>
            </li>
          </ul>
        </address>
      </div>
    </SectionWrapper>
  );
}