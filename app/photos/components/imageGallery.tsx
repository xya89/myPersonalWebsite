'use client'
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { FadeText } from "app/utils/fadehovertext";
import { useIsVisible } from "app/utils/isVisible";

// 因为懒得买cloudiary等的付费api服务(确实贵，不如买点薯条，所以假装自己有一个api返回值
// 目前是通过jsDelivr进行资源分布的，正在摸索jsDelivr的相关api（如果有）
import imageSource from 'app/data/imageSource.json'

// Shuffle Image Array
const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
}

export default function ImageGallery() {

    const [selectedImage, setSelectedImage] = useState(null as any);
    const [shuffledImage, setShuffleImages] = useState([] as any);
    const [activeTags, setActiveTags] = useState(["B&W"]);

    const refAll = useRef(null);
    const isVisibleThis = useIsVisible(refAll)

    // shuffle image everytime on re-enter the viewbox
    useEffect(() => {
        setShuffleImages(shuffleArray([...imageSource]))
    }, []);

    // click anywhere else the popup will also close
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (selectedImage && !event.target.closest('.image-popup')) {
                closeOverlay();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [selectedImage]);

    const handleImageClick = (img) => {
        setSelectedImage(img);
    }

    const closeOverlay = () => {
        setSelectedImage(null);
    }

    const toggleTag = (tag) => {
        setActiveTags(preTags =>
            preTags.includes(tag)
                ? preTags.filter(t => t !== tag)
                : [...preTags, tag]
        );
    }


    const filteredImages = activeTags.length === 0
        ? shuffledImage
        : shuffledImage.filter(img =>
            img.tags && activeTags.every(tag => img.tags.includes(tag))
        );


    return (
        <section ref={refAll}
            className={`transition-opactiy ease-in duration-700 ${isVisibleThis ? "opacity-100" : "opacity-0"}`}>

            {/* tags */}
            <div className="w-full flex justify-center mb-4">
                <div className="w-full max-w-md flex justify-center items-center rounded-full p-0.5
                bg-stone-50 dark:bg-stone-900">
                    <div className="flex flex-wrap gap-1 w-full">
                        {["Digital", "Film", "B&W", "Color"].map(tag => (
                            <button
                                key={tag}
                                onClick={() => toggleTag(tag)}
                                className={`flex-1 px-4 py-2 rounded-full transition duration-300 ease-in-out 
                                    font-semibold text-md
                                    ${activeTags.includes(tag)
                                        ? "bg-red-600 text-white"
                                        : "bg-transparent text-stone-800 hover:text-stone-600 dark:text-amber-50 dark:hover:text-white"
                                    }`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>
            </div>


            {/* Main */}
            <div
                className={`grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 grid-flow-row gap-4 justify-normal 
                ${selectedImage ? 'blur-md grayscale brightness-50' : ''}
            `}>
                {filteredImages.map((img, index) => (
                    <div key={index}
                        className={`
                        relative w-full h-96 object-cover
                        `}
                    >
                        <div style={{ paddingTop: '75%' /* 4:3 aspect ratio */ }}>
                            <Image
                                src={img.src}
                                alt={img.alt}
                                layout="fill"
                                objectFit="cover"
                                onClick={() => handleImageClick(img)}
                                loading="lazy"
                                className="rounded-xl shadow-md"
                                onContextMenu={(e) => e.preventDefault()}
                            />
                        </div>
                    </div>
                ))}
            </div>
            {selectedImage && (
                <div className={`fixed inset-0 flex justify-center items-center z-50`}>
                    <div className={`
                    relative bg-white/90 dark:bg-black/50
                    lg:w-[70%] lg:h-[85%] lg:m-20 lg:mt-10
                    md:h-[60%]
                    w-11/12 h-3/4 
                    p-2 rounded-lg image-popup
                    `}>
                        {/* 右上角退出按钮 */}
                        <button className="dark:text-white absolute top-2 right-2 text-black" onClick={closeOverlay}>
                            &times;
                        </button>
                        <div className="flex relative mt-6 w-full lg:h-[85%] h-[70%]">
                            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                                <Image
                                    src={selectedImage.src}
                                    alt={selectedImage.alt}
                                    layout="fill"
                                    objectFit="contain"
                                    loading="lazy"
                                    onContextMenu={(e) => e.preventDefault()}
                                />
                            </div>
                        </div>

                        {/* 单页照片标题 - 统一 */}
                        <div className="items-center justify-center flex">
                            <FadeText
                                diyStyle="text-center lg:text-3xl text-2xl w-fit mt-2 mb-2 
                                text-transparent bg-clip-text bg-gradient-to-b
                                from-zinc-800 via-zinc-600 to-stone-600
                                dark:from-zinc-400 dark:via-zinc-100 dark:to-stone-300
                                hover:text-red-600 font-bold duration-150"
                                defaultText={'无题'}
                                hoverText={'答案并不重要'}
                                duration={300}
                                enableClicked={true}
                            />
                        </div>

                        {/* 照片信息  */}
                        <div className="justify-center flex center w-full mt-2 mb-2 px-4">
                            <div className="justify-between flex
                            lg:w-[90%] w-full text-sm lg:text-md
                            text-transparent bg-clip-text bg-gradient-to-b
                            from-zinc-800 via-zinc-600 to-stone-600
                            dark:from-zinc-400 dark:via-zinc-100 dark:to-stone-300">
                                <div className="flex flex-col text-left">
                                    {selectedImage.camera}<br />
                                    {selectedImage.lens}<br />
                                    {selectedImage.isFilm ? selectedImage.filmMake : ""}
                                </div>
                                <div className="flex flex-col text-right">
                                    {selectedImage.city}<br />
                                    {selectedImage.country}<br />
                                    {selectedImage.date}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </section>
    )
}