import type { Metadata } from 'next'
import '@style/globals.css'
import { poppins } from './libs/fonts/font'
import ScrollContext from './libs/context/scrollContext'



export const metadata: Metadata = {
  title: 'Swatter | Your Furniture Haven',
  description: 'Transform your space with high-quality furniture and professional room decoration services. Explore our wide range of stylish furniture pieces for every room.',
  keywords:'furniture, home decor, room decoration, interior design, living room furniture, bedroom furniture, dining room furniture'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
       <ScrollContext>
        {children}
       </ScrollContext>
        </body>
    </html>
  )
}
