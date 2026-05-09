import './globals.css'

export const metadata = {
  title: 'VR Forums',
  description: 'Futuristic VR forum platform'
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