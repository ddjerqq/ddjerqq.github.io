import React from "react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Link} from "@/components/ui/link";
import {BackgroundBeams} from "@/components/ui/BackgroundBeams";

export const AppFooter = () => {
  return (
    <footer className="px-8 pb-6 py-2 w-full border-grid border-t bg-background relative antialiased">
      <div className="py-4 grid items-start gap-12 grid-cols-1 sm:grid-cols-2">
        <div className="flex flex-col gap-2 max-w-md">
            <span className="text-xl font-semibold mb-2">
                Newsletter
            </span>

          <span className="text-muted-foreground text-sm">
                Enter your email to receive notifications about new blogs and updates from me!
            </span>
          <Input disabled placeholder="Enter your email"/>
          <Button disabled>Subscribe</Button>
        </div>

        <address className="flex flex-col gap-1 not-italic">
            <span className="text-xl font-semibold mb-2">
                Contact
            </span>

          <ul className="text-sm space-y-1">
            <li>
              <Link href="https://maps.app.goo.gl/sKYqWLaHK5Av5ir28" target="_blank" rel="noreferrer">
                2935 Ocean Parkway, apt. 2J, Brooklyn NyF
              </Link>
            </li>
            <li>
              <Link href="tel:+9950322120282" target="_blank" rel="noreferrer">
                GEO: +995 (0) 322 120282F
              </Link>
            </li>
            <li>
              <Link href="tel:+13472968796" target="_blank" rel="noreferrer">
                USA: +1 347-296-8796F
              </Link>
            </li>

            <li>
              <Link href="tel:+9950322142244" target="_blank" rel="noreferer">
                Forsa Express: +995 (0) 322 142244F
              </Link>
            </li>

            <li>
              <Link href="tel:+13477075400" target="_blank" rel="noreferer">
                Whatsapp, Telegram, Viber: +1 347-707-5400F
              </Link>
            </li>

            <li>
              <Link href="mailto:contact@sangoway.com" target="_blank" rel="noreferrer">
                contact@sangoway.comF
              </Link>
            </li>
          </ul>
        </address>
      </div>
      <BackgroundBeams/>
    </footer>
  );
}