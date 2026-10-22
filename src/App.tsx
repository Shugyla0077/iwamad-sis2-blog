import { useState } from 'react'
import { Routes, Route } from 'react-router'
import { Layout } from './components/Layout'
import { ProtectedRoute } from './components/ProtectedRoute'
import { HomePage } from './pages/HomePage'
import { PostsPage } from './pages/PostsPage'
import { PostDetailPage } from './pages/PostDetailPage'
import { ContactPage } from './pages/ContactPage'
import { LoginPage } from './pages/LoginPage'
import { NotFoundPage } from './pages/NotFoundPage'
import './App.css'

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false)

  return (
    <Routes>
      <Route element={<Layout isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />}>
        <Route index element={<HomePage />} />
        <Route path="posts" element={<PostsPage />} />
        <Route path="posts/:id" element={<PostDetailPage />} />
        <Route path="login" element={<LoginPage onSignIn={() => setIsSignedIn(true)} />} />
        <Route element={<ProtectedRoute isSignedIn={isSignedIn} />}>
          <Route path="contact" element={<ContactPage onSignOut={() => setIsSignedIn(false)} />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
