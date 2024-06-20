'use client'
import Link from "next/link";
import React from "react";
import { useIsVisible } from "app/utils/isVisible";
import Particles from "./components/particles";
import { FadeText } from "app/utils/fadehovertext"
import { CurrentDateTime } from "app/utils/currentDateTime";
import { useRef } from "react";

const navigation = [
  { name: "About", href: "/aboutme" },
  { name: "Blog", href: "/blog" },
  { name: "Photo", href: "/photos" },
  { name: "Video", href: "/video" },
  { name: "and More", href: "/404" },
];

export default function Home() {
  const ref1 = useRef(null);
  const isVisible = useIsVisible(ref1);

  return (
    <div ref={ref1}
      className={`flex flex-col items-center justify-center w-screen h-screen overflow-hidden
        transition-opactiy ease-in duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
      <div className="hidden w-screen h-px md:block" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={300}
        color={{ r: 255, g: 10, b: 10 }}
      />


      {/* <FadeText
      diyStyle={"font-serif text-7xl font-bold"}
      defaultText={"時に、西暦2024年"}
      hoverText={""}
      duration={300}
      enableClicked={true}/> */}
      <CurrentDateTime
      diyStyle="font-serif text-7xl font-bold"
      year={true}
      hours={true}
      minutes={true}
      seconds={true}/>
      {/* <FadeText
        diyStyle="
        z-10 text-6xl sm:text-6xl md:text-8xl text-center break-normal mb-4
        bg-gradient-to-tr inline-block text-transparent bg-clip-text
        from-red-300/20 via-neutral-600 to-stone-200/20 
        dark:from-red-600/70 dark:via-zinc-600 dark:to-zinc-900"
        defaultText={"Hello"}
        hoverText={"なんで春日影やったの!?"}
        duration={300}
        enableClicked={true}
      /> */}
      <div className="hidden w-screen h-px md:block bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      {/* <FadeText
        diyStyle="
        z-10 mt-8 text-lg sm:text-xl md:text-2xl text-center break-normal
        bg-gradient-to-tl inline-block text-transparent bg-clip-text
        from-red-600/30 via-neutral-600/90 to-stone-200/30
        dark:from-red-600/60 dark:via-zinc-500/80 dark:to-red-700"
        defaultText={"I'm Sean Yang, welcome to my website."}
        hoverText={"春日影はやらないから"}
        duration={300}
        enableClicked={true}
      /> */}

      <div className="my-16 text-center ">
        <nav className="my-16 ">
          <ul className="flex items-center justify-center gap-4 
          bg-gradient-to-b text-transparent bg-clip-text 
          from-zinc-700/70 via-zinc-500 to-zinc-700.70
          dark:from-zinc-300/50 dark:via-zinc-200/70 dark:to-stone-800">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xl duration-500 hover:text-zinc-800 dark:hover:text-zinc-300"
              >
                {item.name}
              </Link>

            ))}
          </ul>
        </nav>
      </div>
    </div>
  );

}