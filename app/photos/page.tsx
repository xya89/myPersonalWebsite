
import ImageGallery from "app/components/imageGallery";

export default function Page() {
    return (
        <section>
            <p className='text-lg leading-relaxed my-20'>这是照片</p>
            {/* image gallery */}
            {/* <ImageGallery /> */}
            <img src="https://cdn.jsdelivr.net/gh/xya89/picx-images-hosting@master/test.3ye9zczv9w.webp" />
        </section>
    );
}
