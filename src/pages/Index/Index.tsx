import {World} from "@/components/ui/globe";

export const Index = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center snap-always">
      <section id="hero" className="h-screen select-none space-y-8">
        <h1 className="text-6xl sm:text-8xl font-geist font-semibold">
          Hello, I'm <span className="text-primary">Gio</span>
        </h1>

        <div className="h-[400px] sm:h-[600px] w-[400px] sm:w-[600px] mx-auto">
          <World/>
        </div>
      </section>

      {/*<section id="what_i_do" className="h-screen select-none">*/}
      {/*  what i do?*/}
      {/*</section>*/}
    </div>
  );
}