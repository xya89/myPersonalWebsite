'use client'
import { useState } from "react";
export function Intro() {

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
            <div className="container lg:mx-auto space-y-6 w-full">
                <div className="text-center">
                    <h1 className="text-2xl animate-fadeOut duration-3000">
                        无欲则刚
                    </h1>
                </div>
                <div className="flex justify-between items-center">
                    <div className="text-lg">
                        {/* Title */}
                        一德阁
                    </div>
                    <div className="text-lg">
                        {/* introduction */}
                        {isEnglish ? "AMNS" : "阿米诺斯"}
                    </div>
                </div>
            </div>
        </section>
    )

}