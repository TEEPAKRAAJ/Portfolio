import './globals.css'
import Navbar from './components/Navbar'
import ChatlingWidget from './components/ChatlingWidget'
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar /> {/* Only here */}
        {children}
        <ChatlingWidget />
      </body>
    </html>
  )
}
