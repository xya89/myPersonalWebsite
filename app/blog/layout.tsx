import Footer from "app/components/footer"
import { Navbar } from "app/components/nav"

export const metadata = {
    title: 'Blog',
    description: 'Read my blog.',
}

export default function PostLayout({
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