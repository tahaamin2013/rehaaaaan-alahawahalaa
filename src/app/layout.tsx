import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/src/components/Navbar/Navbar'
import NextThemeProvider from '@/src/providers/theme-provider';
import Particles from '@/src/components/particles';
import Footer from '@/src/components/Footer';
import ScrollToTopButton from '@/src/components/UpGoingButton';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rehan Allahwala - Simple Human Being',
  description: 'Rehan Allahwala is Simple Human Being',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-black dark:text-white dark:bg-black transition-all duration-300 overflow-x-hidden`}>

      <NextThemeProvider>
      
      <Particles
      className="absolute inset-0 -z-10 animate-fade-in"
      quantity={100}
    />
        <Navbar />
        {children}
        <ScrollToTopButton />
        <Footer />
        
        </NextThemeProvider>
        </body>
    </html>
  )
}
