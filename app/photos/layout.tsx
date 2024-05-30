import Footer from "app/components/footer"
import { Navbar } from "app/components/nav"

export const metadata = {
    title: 'Photo',
    description: 'Photo Gallery',
}

export default function PhotoLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <Navbar />
            {children}
            <Footer />
        </section>
    )
}