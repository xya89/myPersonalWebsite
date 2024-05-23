
import ImageGallery from "app/components/imageGallery";


export default function Page({ images }) {
    return (
        <section>
            <p className='text-lg leading-relaxed my-20'>这是照片</p>
            {images > 0 ? (
                <ImageGallery images={images} />
            ) : (
                <p>No images available.</p>
            )}
        </section>
    );
}
