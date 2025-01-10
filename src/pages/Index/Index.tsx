import {World} from "@/components/ui/globe";

export const Index = () => {
  return (
    <div className="select-none w-full flex flex-col items-center justify-center text-center">
      <h1 className="text-8xl font-geist font-semibold">
        Hey, I'm Gio
      </h1>
      <div className="h-[600px] w-[600px]">
        <World/>
      </div>
    </div>
  );
}