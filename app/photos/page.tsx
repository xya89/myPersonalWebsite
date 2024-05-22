import ImageGallery from "app/components/imageGallery"

export const metadata = {
    title: 'Photo',
    description: 'This is my photo',
}

export default function Page() {
    return (
        <section>
            <p className='text-lg leading-relaxed my-20'>这是照片</p>
            {/* photo page component */}
            {/* <ImageGallery images={null} /> */}
        </section>
    )
}
