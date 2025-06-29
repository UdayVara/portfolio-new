import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'

export const metadata: Metadata = {
  title: 'Uday Vara',
  description: 'Uday Vara - Full Stack Developer from India',
  icons: {
    icon: "/favicon.ico", // or .svg
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body><Toaster position='bottom-right' richColors/>
        
        {children}
        </body>
    </html>
  )
}
