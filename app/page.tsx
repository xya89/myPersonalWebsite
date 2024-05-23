'use client'
import { Education } from 'app/components/education'
import { Experience } from './components/experience'
import { AboutMe } from './components/aboutMe'
import { Intro } from './components/intro'
import { useState, useEffect, useRef } from 'react'

export function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting)
    })

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    }
  }, [ref]);
  return isIntersecting;
}

export default function Page() {
  const ref1 = useRef(null)
  const isVisibleEducation = useIsVisible(ref1);
  const ref2 = useRef(null)
  const isVisibeExperience = useIsVisible(ref2);
  return (
    <section>
      {/* Intro - landing section */}
      <Intro />
      {/* About Me */}
      <AboutMe />
      {/* Information Container */}
      <section className='divide-y divide-neutral-400 my-4 snap-start'>
        {/* Education */}
        <div
          ref={ref1}
          className={`transition-opactiy ease-in duration-700 ${isVisibleEducation ? "opacity-100" : "opacity-0"} my-8 flex justify-center flex-col`}>
          <h1 className='font-bond text-3xl text-left mb-4 mt-4'>
            Education
          </h1>
          <Education />
        </div>
        {/* Experience */}
        <div
          ref={ref2}
          className={`transition-opactiy ease-in duration-700 ${isVisibeExperience ? "opacity-100" : "opacity-0"} my-8 flex justify-center flex-col`}>
          <h1 className='font-bond text-3xl text-left mb-4 mt-4'>
            Experience
          </h1>
          <Experience />
        </div>
        <div className='my-8 flex justify-center flex-col'>
          {/* Projects */}
        </div>
      </section>

    </section>
  )
}
