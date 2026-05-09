import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'AhoyVR Forums',
  description: 'VR community forums'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}