import ImageGallery from "app/photos/components/imageGallery";
import { FadeText } from "app/utils/fadehovertext";

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
            <FadeText
                diyStyle={'text-lg leading-relaxed mt-20 mb-10 w-fit'}
                defaultText={'这是照片'}
                hoverText={'一把米诺欧内的手通过好汉'}
                duration={300}
                enableClicked={true}
            />
            <h2
                className="text-large leading-relaxed mb-10">
                Used aliases
                <ul>
                    <li>- edwardyoung photography</li>
                    <li>- young photography</li>
                </ul>
            </h2>
            <ImageGallery />
        </section>
    );
}
