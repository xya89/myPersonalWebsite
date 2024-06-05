'use client'
import { FadeText } from "app/utils/fadehovertext"
import { VideoGallery } from "./components/videoGallery"

export default function Page() {
    return (
        <section className="antialiased max-w-6xl mx-2 mt-8 lg:mx-auto flex-auto min-w-0 mt-6 flex flex-col px-2 lg:px-4">
            <h1 className="font-semibold text-2xl mb-8 mt-20 tracking-tighter
            bg-gradient-to-b text-transparent bg-clip-text 
            from-zinc-900 via-zinc-800 to-stone-500
            dark:from-zinc-300 dark:via-zinc-200 dark:to-stone-500
            ">
                Video
            </h1>
            <FadeText
                diyStyle={'text-2xl leading-relaxed mt-2 mb-10 w-fit font-bold'}
                defaultText={'Some random videos i took on my phone, hosted and delivered on/via cloudinary'}
                hoverText={'still in construction...'}
                duration={300}
                enableClicked={true}
            />

            <VideoGallery />

        </section>
    )
}
