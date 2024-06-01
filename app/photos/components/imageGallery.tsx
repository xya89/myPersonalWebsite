'use client'
import Image from "next/image";

// 因为懒得买cloudiary等的付费api服务(确实贵，不如原神充值648)，所以假装自己有一个api返回值
// 目前是通过jsDelivr进行资源分布的，正在摸索jsDelivr的相关api（如果有）
import imageSource from 'app/data/imageSource.json'

export default function ImageGallery() {

    // const handleImageClick = () => {
    //     //handle image click
    // }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 grid-flow-row gap-4 justify-normal">
            {imageSource.map((img, index) => (
                <div key={index} className="relative w-full h-96 object-cover">
                    <Image
                        src={img.src}
                        alt={img.alt}
                        // TODO: fix styling!!!
                        // width={300}
                        // height={200}
                        fill={true}
                        sizes="50%"
                        style={{ aspectRatio: '4/3', objectFit: "cover" }}
                    />
                </div>
            ))}
        </div>
    )
}