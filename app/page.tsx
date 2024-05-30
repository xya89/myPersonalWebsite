'use client'
import Link from "next/link";
import React from "react";
import { useIsVisible } from "./utils/isVisible";
import Particles from "./components/particles";
import { useRef } from "react";

const navigation = [
  { name: "About", href: "/aboutme" },
  { name: "Blog", href: "/blog" },
  { name: "Photo", href: "/photos" },
];

export default function Home() {
  const ref1 = useRef(null);
  const isVisible = useIsVisible(ref1);
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
      <div className="hidden w-screen h-px md:block" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={300}
        color={{ r: 255, g: 0, b: 0 }}
      />
      <h1 ref={ref1}
        className={`z-10 text-4xl sm:text-6xl md:text-8xl
        transition-opactiy ease-in duration-700 ${isVisible ? "opacity-100" : "opacity-0"} mb-4
        bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block
        text-transparent bg-clip-text
        `}>
        Hello
      </h1>
      <div className="hidden w-screen h-px md:block bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <h2 ref={ref1}
        className={`z-10 mt-8 text-center break-normal text-2xl sm:text-3xl md:text-4xl
      transition-opactiy ease-in duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        My name is Sean Yang, welcome to my website.
      </h2>
      <div className="my-16 text-center ">
        <nav className="my-16 ">
          <ul className="flex items-center justify-center gap-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xl duration-500 text-zinc-500 hover:text-zinc-300"
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