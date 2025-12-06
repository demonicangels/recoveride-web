import type { Metadata } from 'next'
import '../index.css'
import { HeaderProvider } from '../providers/HeadeProvider'
import { FooterProvider } from '../providers/FooterProvider'
import { ScrollManager } from '../components/ScrollManager'

export const metadata: Metadata = {
  title: 'Recoveride: Your E-Bike Recovery Partner',
  description: 'Don’t lose your ride. Recoveride’s professional e-bike recovery team works to locate and retrieve your stolen e-bike in 72 hours or less, handling the entire bike theft recovery process—from police coordination to insurance support—so you don’t have to.',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body>
          <ScrollManager />
            <HeaderProvider/>
              {children}
            <FooterProvider />
        </body>
    </html>
  )
}