'use client'
import { CldVideoPlayer } from "next-cloudinary"
import 'next-cloudinary/dist/cld-video-player.css';

export default function Page() {
    return (
        <section className="antialiased max-w-6xl mx-2 mt-8 lg:mx-auto flex-auto min-w-0 mt-6 flex flex-col px-2 lg:px-4">
            <p className='text-lg leading-relaxed my-20'>这是视频</p>
            {/* Video page component */}

            <CldVideoPlayer
                width="1620"
                height="1080"
                src="https://res.cloudinary.com/dasffmfcg/video/upload/v1717613723/porfolio/Video/WeChat_20240605115436_wvk3hf.mp4"
            />
        </section>
    )
}
