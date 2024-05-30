import Link from "next/link";
// Landing page
export default function Page() {
  return (
    <section className="antialiased max-w-6xl mx-2 mt-8 lg:mx-auto flex-auto min-w-0 mt-6 flex flex-col px-2 lg:px-4">

      <Link
        href={'./aboutme'}>
        Enter
      </Link>
    </section>
  )
}
