import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import { test, expect } from 'vitest'
import { LikeButton } from './LikeButton'
import { PostsPage } from '../pages/PostsPage'
import { posts } from '../data/posts'
import App from '../App'

test('renders like button and increments count on click', async () => {
  render(<LikeButton />)

  const button = screen.getByRole('button')
  expect(button).toHaveTextContent('♥ 0')

  await userEvent.click(button)
  expect(button).toHaveTextContent('♥ 1')
})

test('renders one card per post in the posts array', () => {
  render(
    <MemoryRouter>
      <PostsPage />
    </MemoryRouter>
  )

  for (const post of posts) {
    expect(screen.getByText(post.title)).toBeInTheDocument()
  }
})

test('protected contact page shows sign-in when signed out', () => {
  render(
    <MemoryRouter initialEntries={['/contact']}>
      <App />
    </MemoryRouter>
  )

  expect(screen.getByRole('heading', { name: 'Sign In' })).toBeInTheDocument()
})
