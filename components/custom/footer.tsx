import { Background } from '@/components/custom/background'
import Link from 'next/link'

const links = [
    {
        title: 'Programs',
        href: '#',
    },
    {
        title: 'Events',
        href: '#',
    },
    {
        title: 'About YALI Lagos',
        href: '#',
    },
    {
        title: 'Contact Us',
        href: '#',
    },
 
]

export default function FooterSection() {
    return (
       

         <footer className=" py-12 dark:bg-primary">
            <div className="mx-auto max-w-5xl px-6">
                <div className="flex flex-wrap justify-between gap-6">
                    <span className="text-muted-foreground order-last block text-center text-sm md:order-first">© {new Date().getFullYear()} YALI Lagos Network, All rights reserved</span>
                    <div className="order-first flex flex-wrap justify-center gap-6 text-sm md:order-last">
                        {links.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="text-muted-foreground hover:text-primary block duration-150">
                                <span>{link.title}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
       
    )
}
