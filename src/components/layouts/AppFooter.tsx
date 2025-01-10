import {Link} from "@/components/ui/link";
import {Button} from "@/components/ui/button";
import React from "react";
import {Input} from "@/components/ui/input";

export const AppFooter = () => {
  return (
    <footer className="px-8 py-2 border-grid border-t bg-background">
      <div className="container">
        <div className="py-4 grid items-start gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          <div className="col-span-1 sm:col-span-2 flex flex-col gap-2 max-w-md">
                <span className="text-xl font-semibold mb-2">
                    Newsletter
                </span>

            <span className="text-muted-foreground text-sm">
                    Enter your email to receive notifications about product updates and our newsletter.
                </span>

            <Input placeholder="Enter your email"/>

            <Button>Subscribe</Button>
          </div>

          <div className="flex flex-col gap-2">
                <span className="text-xl font-semibold mb-2">
                    Partner sites
                </span>

            <ul className="text-sm space-y-1">
              <li>
                <Link target="_blank" rel="noreferer" href="https://amazon.com">
                  amazon.com
                </Link>
              </li>
              <li>
                <Link target="_blank" rel="noreferer" href="https://ebay.com">
                  ebay.com
                </Link>
              </li>
              <li>
                <Link target="_blank" rel="noreferer" href="https://aliexpress.com">
                  aliexpress.com
                </Link>
              </li>
              <li>
                <Link target="_blank" rel="noreferer" href="https://alibaba.com">
                  alibaba.com
                </Link>
              </li>
              <li>
                <Link target="_blank" rel="noreferer" href="https://shein.com">
                  shein.com
                </Link>
              </li>
            </ul>
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

        <div className="w-full text-start pb-4 text-sm leading-loose text-muted-foreground">
          &copy; 2025-2028 All rights reserved.{` `}

          <Link href="https://t.me/tenxdeveloper" target="_blank" rel="noreferrer">
            Telegram
          </Link>
        </div>
      </div>
    </footer>
  );
}