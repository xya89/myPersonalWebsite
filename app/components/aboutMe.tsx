'use client'
import { useState } from "react"
import Image from "next/image"
import aboutMe from "app/data/aboutMe.json"

export function AboutMe() {

    const [isEnglish, setIsEnglish] = useState(true);

    //Toggle EN and CH
    const toggleEN = () => {
        setIsEnglish(prevState => !prevState);
    }


    return (
        <section className="relative w-full">
            <button onClick={toggleEN} className="absolute top-4 right-4 px-2 py-1 bg-blue-500 text-white text-sm rounded-md shadow-md hover:bg-blue-600">
                {isEnglish ? "切换到中文" : "Switch to English"}
            </button>

            <div className='mt-20 w-32 h-32 rounded-full overflow-hidden bg-gray-300 dark:bg-gray-700 flex-shrink-0 mr-8 relative'>
                {/* Headshot photos */}
                <Image
                    src={"/profile/Profile_pic_5.jpg"}
                    alt='Headshot'
                    fill={true}
                    style={{ aspectRatio: '1/1', objectFit: "cover" }}
                    sizes='50%'
                    priority={true} />
            </div>
            <h1 className="mb-8 mt-8 text-2xl font-semibold tracking-tighter">
                {/* Conditionally rending text based on language */}
                {isEnglish ? "Hello" : "你好"}
            </h1>
            <p className="mb-4">
                {/* Introduction */}
                {aboutMe.map((line, idx) => (
                    <div key={idx}>
                        {isEnglish ? (
                            line.en.split('-').map((sentence, index) => (
                                <p key={index}>{sentence.trim()}</p>
                            ))
                        ) : (
                            line.zh.split("-").map((sentence, index) => (
                                <p key={index}>{sentence.trim()}</p>
                            ))
                        )}
                    </div>
                ))}


            </p>

        </section>
    )


}