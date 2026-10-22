import { Button } from '../components/ui/Button'

interface ContactPageProps {
  onSignOut: () => void
}

export const ContactPage = ({ onSignOut }: ContactPageProps) => {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-6 max-w-sm w-full text-center">
      <h2 className="text-xl font-semibold mb-3">Contact Me</h2>
      <p className="text-sm text-gray-600 mb-4">Feel free to reach out to me via email:</p>
      <a
        href="mailto:s_zhambibay@kbtu.kz"
        className="text-indigo-600 font-medium underline hover:text-indigo-800 block mb-4"
      >
        s_zhambibay@kbtu.kz
      </a>
      <Button variant="secondary" onClick={onSignOut}>
        Sign Out
      </Button>
    </section>
  )
}
