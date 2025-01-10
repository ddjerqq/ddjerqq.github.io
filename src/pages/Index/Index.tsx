import {World} from "@/components/ui/globe";
import { Mouse } from "lucide-react"

export const Index = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center snap-always">
      <section id="hero" className="h-screen select-none space-y-8">
        <h1 className="text-8xl font-geist font-semibold">
          Hey, I'm Gio
        </h1>

        <div className="h-[600px] w-[600px] mx-auto">
          <World/>
        </div>

        <h1 className="text-4xl font-geist">
          I build full stack web app
        </h1>
      </section>

      {/*<section id="what_i_do" className="h-screen select-none">*/}
      {/*  what i do?*/}
      {/*</section>*/}
    </div>
  );
}