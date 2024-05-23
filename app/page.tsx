'use client'
import { Education } from './components/education'
import { Experience } from './components/experience'
import Image from 'next/image'

// TODO: get a CMS and fetch image effectively, 
// dont use static website tho!!!!

export default function Page() {
  return (
    <section>
      {/* Headshot photo */}
      <div className='mt-20 w-32 h-32 rounded-full overflow-hidden bg-gray-300 dark:bg-gray-700 flex-shrink-0 mr-8 relative'>
        <Image
          src={"/profile/Profile_pic_5.jpg"}
          alt='Headshot'
          fill={true}
          style={{ aspectRatio: '1/1', objectFit: "cover" }}
          sizes='50%'
          priority={true} />
      </div>
      <h1 className="mb-8 mt-8 text-2xl font-semibold tracking-tighter">
        你好
      </h1>
      <p className="mb-4">
        {/* Introduction */}
        没想好写什么捏😋<br />
        placeholder<br />
        placeholder<br />placeholder<br />placeholder<br />placeholder<br />placeholder<br />placeholder<br />placeholder<br />placeholder<br />placeholder<br />placeholder<br />
      </p>
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
