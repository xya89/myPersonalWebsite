'use client'
import { Education } from 'app/components/education'
import { Experience } from './components/experience'
import { AboutMe } from './components/aboutMe'

export default function Page() {
  return (
    <section>
      {/* About Me */}
      <AboutMe />
      {/* Information Container */}
      <section className='divide-y divide-neutral-400 my-4 snap-start'>
        {/* Education */}
        <div className='my-8 flex justify-center flex-col'>
          <h1 className='font-bond text-3xl text-left mb-4 mt-4'>
            Education
          </h1>
          <Education />
        </div>
        {/* Experience */}
        <div className='my-8 flex justify-center flex-col'>
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
