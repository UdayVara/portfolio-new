import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'

export const metadata: Metadata = {
  title: 'Uday Vara',
  description: 'Uday Vara - FUll Stack Developer from India',
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
