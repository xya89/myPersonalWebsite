'use client'
import Image from "next/image";


export default function ImageGallery({ images }) {
    return (
        <div className="grid grid-rows-4 grid-flow-col gap-4">
            {images.map((img) => (
                <div key={img.id} className="relative w-full overflow-hidden">
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