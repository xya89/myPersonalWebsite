import Footer from "app/components/footer"
import { Navbar } from "app/components/nav"

export const metadata = {
    title: 'About',
    description: 'Something about myself.',
}

export default function AboutMeLayout({
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