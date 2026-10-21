import { NavLink } from 'react-router'
import logo from '../assets/logo.svg'
import { Button } from './ui/Button'

interface HeaderProps {
  title: string
  isSignedIn: boolean
  onSignOut: () => void
}

export const Header = ({ title, isSignedIn, onSignOut }: HeaderProps) => {
  return (
    <header className="w-full py-4 bg-white shadow-sm flex flex-col sm:flex-row justify-between items-center px-6 gap-3">
      <div className="flex items-center gap-3">
        <img src={logo} alt="" width={32} height={32} className="w-8 h-8 object-contain" />
        <h1 className="text-xl font-bold m-0">{title}</h1>
      </div>
      <nav className="flex items-center gap-4 flex-wrap justify-center">
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}>
          Home
        </NavLink>
        <NavLink to="/posts" className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}>
          Posts
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}>
          Contact
        </NavLink>
        {isSignedIn ? (
          <Button variant="secondary" onClick={onSignOut}>
            Sign Out
          </Button>
        ) : (
          <NavLink to="/login" className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}>
            Sign In
          </NavLink>
        )}
      </nav>
    </header>
  )
}
