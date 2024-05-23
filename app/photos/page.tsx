import fs from 'fs';
import path from 'path';
import ImageGallery from "app/components/imageGallery";

// This function gets called at request time
export async function getServerSideProps() {
    try {
        // Read the JSON file from the file system
        const filePath = path.join(process.cwd(), 'app/data/imageSource.json');
        const jsonData = fs.readFileSync(filePath, 'utf8');
        const data = JSON.parse(jsonData);
        console.log(data);

        // Map data to the format expected by ImageGallery
        const formattedImages = data.map((img, index) => ({
            id: index,
            src: img.src,
            alt: img.alt,
            width: 300,  // Set default width
            height: 200, // Set default height
        }));

        // Pass data to the page via props
        return { props: { images: formattedImages } };
    } catch (error) {
        console.error('Error reading JSON data:', error);
        // Return an empty array if there's an error
        return { props: { images: [] } };
    }
}

export const metadata = {
    title: 'Photo',
    description: 'This is my photo',
};

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
