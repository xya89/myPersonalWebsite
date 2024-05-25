
import ImageGallery from "app/components/imageGallery";

export default function Page() {
    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 mt-20 tracking-tighter">Photo</h1>
            <p className='text-lg leading-relaxed my-20'>这是照片</p>
            {/* image gallery */}
            {/* <ImageGallery /> */}
            <ImageGallery />
        </section>
    );
}
