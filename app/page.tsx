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
      <div className='w-32 h-32 rounded-full overflow-hidden bg-gray-300 dark:bg-gray-700 flex-shrink-0 mr-8 relative'>
        <Image
          src={"/profile/Profile_pic_5.jpg"}
          alt='Headshot'
          fill={true}
          style={{ aspectRatio: '1/1', objectFit: "cover" }} />
      </div>
      <h1 className="mb-8 mt-8 text-2xl font-semibold tracking-tighter">
        你好
      </h1>
      <p className="mb-4">
        {/* Introduction */}
        没想好写什么捏😋
      </p>
      <div className="my-8">
        {/* <BlogPosts /> */}
      </div>
      <div className='my-8'>
        {/* Education */}
        <section className='flex justify-center flex-col items-center'>
          <h1 className='font-bond text-2xl text-left mb-2'>
            Education
          </h1>
          <Education />
          <hr className='border-t-2 border-gray-700 my-4' />
        </section>
      </div>
      <div className='my-8'>
        {/* Experience */}
        <section className='flex justify-center flex-col items-center'>
          <h2 className='font-bond text-2xl text-left mb-2'>
            Experience
          </h2>
          <Experience />
        </section>
      </div>
      <div className='my-8'>
        {/* Projects */}
      </div>
    </section>
  )
}
