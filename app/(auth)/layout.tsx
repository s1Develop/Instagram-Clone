// allows us to specify different rules for the authentication route.

import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import '../globals.css';

// Search Engine Optimization (SEO)
export const metadata = {
    title: 'Threads',
    description: 'A Next.js 13 Meta Threads Application'
}

const inter = Inter({ subsets: ["latin"]})

// children is what we want to display in it
export default function RootLayout({ 
    children 
}: { 
    children: React.ReactNode
}) {
    return (
    <ClerkProvider>
        <html lang="en">
            <body className={'${inter.className} bg-dark-1'}>
                {children}
            </body>

        </html>
    </ClerkProvider>
    )
}