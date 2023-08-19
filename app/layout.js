import Navbar from '@/components/Nabvar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head><title>My app</title></head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
