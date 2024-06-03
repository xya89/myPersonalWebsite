'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

// 因为懒得买cloudiary等的付费api服务(确实贵，不如原神充值648)，所以假装自己有一个api返回值
// 目前是通过jsDelivr进行资源分布的，正在摸索jsDelivr的相关api（如果有）
import imageSource from 'app/data/imageSource.json'

export default function ImageGallery() {

    const [selectedImage, setSelectedImage] = useState(null as any);

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
                {imageSource.map((img, index) => (
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
                    <div className="relative bg-white dark:bg-red-600 w-5/6 h-3/4 max-h-screen p-4 rounded-lg image-popup">
                        <button className="dark:text-white absolute top-2 right-2 text-black" onClick={closeOverlay}>
                            &times;
                        </button>
                        <div className="flex relative w-full h-full">
                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                fill={true}
                                sizes="100%"
                                style={{ objectFit: "contain" }}

                            />
                        </div>

                    </div>
                </div>
            )}
        </div>
    )
}