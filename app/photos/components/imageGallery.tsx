'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

// 因为懒得买cloudiary等的付费api服务(确实贵，不如原神充值648)，所以假装自己有一个api返回值
// 目前是通过jsDelivr进行资源分布的，正在摸索jsDelivr的相关api（如果有）
import imageSource from 'app/data/imageSource.json'

// Shuffle Image Array
const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
}

export default function ImageGallery() {

    const [selectedImage, setSelectedImage] = useState(null as any);
    const [shuffledImage, setShuffleImages] = useState([] as any);

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

    return (
        <div>
            <div className={`grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 grid-flow-row gap-4 justify-normal 
                ${selectedImage ? 'blur-sm grayscale' : ''}
            `}>
                {shuffledImage.map((img, index) => (
                    <div key={index} className="relative w-full h-96 object-cover">
                        <Image
                            src={img.src}
                            alt={img.alt}
                            fill={true}
                            sizes="50%"
                            style={{ aspectRatio: '4/3', objectFit: "cover" }}
                            onClick={() => handleImageClick(img)}
                        />
                    </div>
                ))}
            </div>
            {selectedImage && (
                <div className="fixed inset-0 flex justify-center items-center z-50">
                    <div className="relative bg-white dark:bg-red-600 
                    lg:w-[70%] lg:h-[85%] lg:m-20 lg:mt-10
                    w-11/12 h-3/4 
                    p-2 rounded-lg image-popup">
                        <button className="dark:text-white absolute top-2 right-2 text-black" onClick={closeOverlay}>
                            &times;
                        </button>
                        <div className="flex relative mt-6 w-full h-[85%]">
                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                fill={true}
                                sizes="100%"
                                style={{ objectFit: "contain", display: "block" }}
                                className="object-top"
                            />
                        </div>
                        <div className="mt-2 justify-between flex">
                            <div className="flex">
                                something
                            </div>
                            <div className="flex">
                                another
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </div>
    )
}