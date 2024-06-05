'use client'
import { useRef } from "react";
import { useIsVisible } from "app/utils/isVisible"
import { CldVideoPlayer } from "next-cloudinary"
import 'next-cloudinary/dist/cld-video-player.css';

//TODO: Video hosted on Cloudinary free ver. update fetching techinques. 
import videoSource from "app/data/videoSource.json"


export function VideoGallery() {

    const refAll = useRef(null);
    const isVisibleThis = useIsVisible(refAll)


    return (
        <section ref={refAll}
            className={`transition-opactiy ease-in duration-700 ${isVisibleThis ? "opacity-100" : "opacity-0"}`}>
            {videoSource.map((vid, index) => (
                <div>
                    <p className="text-3xl mb-2">
                        {vid.Title}
                    </p>
                    <CldVideoPlayer
                        key={index}
                        width="1620"
                        height="1080"
                        src={vid.src}
                    />
                </div>
            ))}
        </section>
    )
}