import {MouseEventHandler} from "react";

export interface HackProps {
  text: string;
}

export const Hack = ({text}: HackProps) => {
  let interval: number | undefined;

  const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  function onmouseover(event: {target: HTMLElement}) {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((_, index) => {
          if(index < iteration) {
            return event.target.dataset.value![index];
          }

          return LETTERS[Math.floor(Math.random() * 26)]
        })
        .join("");

      if(iteration >= event.target.dataset.value!.length){
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 25) as unknown as number;
  }

  return (
    <h1 data-value={text}
        className="text-5xl bg-foreground text-background rounded-md p-4 font-geistMono font-semibold"
        onMouseOver={onmouseover as unknown as MouseEventHandler}>
      {text}
    </h1>
  );
}