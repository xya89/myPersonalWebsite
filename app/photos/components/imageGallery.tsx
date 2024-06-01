'use client'
import Image from "next/image";
import imageSource from 'app/data/imageSource.json'

export default function ImageGallery() {

    const handleImageClick = () => {
        //handle image click
    }

    return (
        <div className="grid grid-rows-4 grid-flow-col gap-4">
            {imageSource.map((img, index) => (
                <div key={index} className="relative w-full overflow-hidden">
                    <Image
                        src={img.src}
                        alt={img.alt}
                        width={img.width}
                        height={img.height}
                        layout="responsive"
                    />
                </div>
            ))}
        </div>
    )
}