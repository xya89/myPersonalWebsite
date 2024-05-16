import { BlogPosts } from 'app/components/posts'
import { Education } from './components/education'
import { Experience } from './components/experience'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        About
      </h1>
      <p className="mb-4">
        {`个人简介`}
      </p>
      <div className="my-8">
        {/* <BlogPosts /> */}
      </div>
      <div className='my-8'>
        {/* Education */}
        <section className='flex justify-center flex-col items-center'>
          <h2 className='font-bond text-2xl text-left mb-2'>Education</h2>
          <Education />
        </section>
      </div>
      <div className='my-8'>
        {/* Experience */}
        <section className='flex justify-center flex-col items-center'>
          <h2>Experience</h2>
          <Experience />
        </section>
      </div>
      <div className='my-8'>
        {/* Projects */}
      </div>
    </section>
  )
}
