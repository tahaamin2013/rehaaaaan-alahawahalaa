import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar/Navbar'
import NextThemeProvider from '@/providers/theme-provider';

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
      <body className={`${inter.className} bg-white dark:bg-black transition-all duration-300`}>
      <NextThemeProvider>
        <Navbar />
        {children}
        </NextThemeProvider>
        </body>
    </html>
  )
}
