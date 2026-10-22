import { useNavigate } from 'react-router'
import { Button } from '../components/ui/Button'

interface LoginPageProps {
  onSignIn: () => void
}

export const LoginPage = ({ onSignIn }: LoginPageProps) => {
  const navigate = useNavigate()

  const handleSignIn = () => {
    onSignIn()
    navigate('/contact')
  }

  return (
    <section className="bg-white rounded-2xl shadow-lg p-6 max-w-sm w-full text-center">
      <h2 className="text-xl font-semibold mb-3">Sign In</h2>
      <p className="text-sm text-gray-600 mb-4">
        Please sign in to access the protected Contact page.
      </p>
      <Button variant="primary" onClick={handleSignIn}>
        Sign In
      </Button>
    </section>
  )
}
