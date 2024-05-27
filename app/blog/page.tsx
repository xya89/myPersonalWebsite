import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section className="antialiased max-w-6xl mx-2 mt-8 lg:mx-auto flex-auto min-w-0 mt-6 flex flex-col px-8">
      <h1 className="font-semibold text-2xl mb-8 mt-20 tracking-tighter">My Blog</h1>
      <p className='text-lg leading-relaxed my-4'>大家好啊，今天给大家看点想看的东西</p>
      <BlogPosts />
    </section>
  )
}
