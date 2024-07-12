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
                diyStyle={'text-3xl leading-relaxed mt-2 mb-10 w-fit font-bold hover:text-red-600 duration-350 '}
                defaultText={'その一瞬を、永遠に'}
                hoverText={'すべての過去は虚無に帰した。やがて涙が雨に消えるように。'}
                duration={300}
                enableClicked={true}
            />
            <div
                className="flex justify-between">
                <div
                    className="items-left text-large leading-relaxed mb-10 text-left">
                    My Watermarks:
                    <ul className="text-sm text-gray-700 dark:text-gray-400">
                        <li>Edwardyoung photography</li>
                        <li>Young photography</li>
                    </ul>
                </div>
                <div
                    className="items-right text-large leading-relaxed mb-10 text-right">
                    My Gears
                    <ul className="text-sm text-gray-700 dark:text-gray-400">
                        <li>Sony ILCE-7M3</li>
                        <li>Sony 16-35mm F4 ZA</li>
                        <li>...more</li>
                    </ul>
                </div>
            </div>

            <ImageGallery />
        </section>
    );
}
