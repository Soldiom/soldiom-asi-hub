import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SOLDIOM ASI Hub - Enterprise AI Platform',
  description: 'All-in-one AI platform with chat, voice, images, video, maps, and business tools powered by Gemini',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">{children}</body>
    </html>
  )
}
