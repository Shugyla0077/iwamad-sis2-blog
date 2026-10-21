export interface Post {
  id: number
  title: string
  summary: string
  content: string
  date: string
  tag: string
}

export const posts: Post[] = [
  {
    id: 1,
    title: 'Getting Started with React and TypeScript',
    summary: 'What I learned in Week 1 and Week 2 about components and typed props.',
    content:
      'React lets us split the user interface into small reusable components. Using TypeScript interfaces for props helps catch mistakes right in the editor before opening the browser.',
    date: 'Oct 5, 2026',
    tag: 'React',
  },
  {
    id: 2,
    title: 'Routing Between Pages with React Router',
    summary: 'How Layout routes, Outlet, and NavLink work in a single-page app.',
    content:
      'With React Router, the Header and Footer stay on the screen while Outlet switches the main page content without a full browser reload. Using useParams lets us open each blog post by its id.',
    date: 'Oct 9, 2026',
    tag: 'Routing',
  },
  {
    id: 3,
    title: 'Design Tokens and UI Components from Figma',
    summary: 'Turning Week 5 Figma tokens into CSS variables for Card, Button, and Tag.',
    content:
      'In Week 5 we defined ten design tokens for colors, spacing, and border radius. Moving them into tokens.css made our Button, Card, and Tag components consistent and fixed text contrast.',
    date: 'Oct 13, 2026',
    tag: 'Design',
  },
  {
    id: 4,
    title: 'Managing Local State with useState',
    summary: 'Why each post card keeps its own independent like counter.',
    content:
      'When state is created with useState inside a component, every rendered PostCard gets its own state instance. Clicking the like button on one post updates immediately without changing the others.',
    date: 'Oct 17, 2026',
    tag: 'State',
  },
  {
    id: 5,
    title: 'Testing Components with Vitest',
    summary: 'Writing unit and component tests using React Testing Library and userEvent.',
    content:
      'Vitest and React Testing Library allow us to render components in jsdom and simulate real clicks with userEvent. We can also test routes and protected pages using MemoryRouter.',
    date: 'Oct 21, 2026',
    tag: 'Testing',
  },
]
