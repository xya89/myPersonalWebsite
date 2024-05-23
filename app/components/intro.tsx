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
                <div>
                    无欲则刚
                </div>
                <div className="flex justify-between items-center">
                    <div className="text-3xl">
                        {/* Title */}
                    </div>
                    <div className="text-lg">
                        {/* introduction */}
                    </div>
                </div>
            </div>
        </section>
    )

}