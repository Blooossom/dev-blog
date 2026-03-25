import { render, screen } from '@testing-library/react'
import PostCard from '@/components/PostCard'
import type { PostMeta } from '@/lib/posts'

const mockPost: PostMeta = {
  slug: 'test-post',
  title: 'Test Post Title',
  date: '2026-03-25',
  category: 'Frontend',
  tags: ['React'],
  summary: 'This is a test summary',
  readingTime: 3,
}

describe('PostCard', () => {
  it('renders the post title as a link', () => {
    render(<PostCard post={mockPost} />)
    expect(screen.getByRole('link', { name: /test post title/i })).toBeInTheDocument()
  })

  it('renders category, readingTime, and summary', () => {
    render(<PostCard post={mockPost} />)
    expect(screen.getByText('Frontend')).toBeInTheDocument()
    expect(screen.getByText(/3 min read/i)).toBeInTheDocument()
    expect(screen.getByText('This is a test summary')).toBeInTheDocument()
  })
})
