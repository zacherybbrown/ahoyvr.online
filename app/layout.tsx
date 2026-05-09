import './globals.css'
import React from 'react'

export const metadata = {
  title: 'VR Forums',
  description: 'VR community forums',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}