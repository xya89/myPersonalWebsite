
import ImageGallery from "app/components/imageGallery";


export const metadata = {
    title: 'Photo',
    description: 'Photos.',
}

export default function Page() {
    return (
        <section className="antialiased max-w-6xl mx-2 mt-8 lg:mx-auto flex-auto min-w-0 mt-6 flex flex-col px-2 lg:px-4">
            <h1 className="font-semibold text-2xl mb-8 mt-20 tracking-tighter">Photo</h1>
            <p className='text-lg leading-relaxed my-20'>这是照片</p>
            {/* image gallery */}
            {/* <ImageGallery /> */}
            <ImageGallery />
        </section>
    );
}
