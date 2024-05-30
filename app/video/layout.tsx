import Footer from "app/components/footer"
import { Navbar } from "app/components/nav"

export const metadata = {
    title: 'Video',
    description: 'Constructing...',
}

export default function VideoLayout({
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