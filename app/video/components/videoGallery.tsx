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
                    {/* 
                    <CldVideoPlayer
                        key={index}
                        width="1620"
                        height="1080"
                        src={vid.src}
                        pictureInPictureToggle={true}
                        className="rounded-xl"
                    /> */}
                    <div
                        className="mb-20 relative"
                        style={{ paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%' }}
                    >
                        <iframe
                            src={vid.src}
                            width="1280"
                            height="720"
                            allowFullScreen
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                        >
                        </iframe>
                    </div>


                </div>
            ))}
        </section>
    )
}