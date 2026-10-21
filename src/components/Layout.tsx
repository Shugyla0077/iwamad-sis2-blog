import { Outlet } from 'react-router'
import { Header } from './Header'
import { Footer } from './Footer'

interface LayoutProps {
  isSignedIn: boolean
  onSignOut: () => void
}

export const Layout = ({ isSignedIn, onSignOut }: LayoutProps) => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-between items-center text-gray-800 w-full">
      <Header title="Shugyla's Blog" isSignedIn={isSignedIn} onSignOut={onSignOut} />
      <main className="flex-grow flex items-center justify-center p-4 w-full">
        <Outlet />
      </main>
      <Footer text="© 2026 Student Blog Project. All rights reserved." />
    </div>
  )
}
