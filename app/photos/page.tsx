'use client'
import ImageGallery from "app/photos/components/imageGallery";

export default async function Page() {
    return (
        <section className="antialiased max-w-6xl mx-2 mt-8 lg:mx-auto flex-auto min-w-0 mt-6 flex flex-col px-2 lg:px-4">
            <h1 className="font-semibold text-2xl mb-8 mt-20 tracking-tighter
            bg-gradient-to-b text-transparent bg-clip-text 
            from-zinc-900 via-zinc-800 to-stone-500
            dark:from-zinc-300 dark:via-zinc-200 dark:to-stone-500
            ">
                Photo
            </h1>
            <p className='text-lg leading-relaxed my-20
            '>
                这是照片
            </p>
            <p>

            </p>
            {/* <Image
                loader={imageLoader}
                src={getAllFile(src) }
                alt={"no load"}
                width={100}
                height={100}
            /> */}

            <ImageGallery />
        </section>
    );
}
