import { render, screen } from '@testing-library/react'
import NavBar from '@/components/NavBar'

describe('NavBar', () => {
  it('renders the blog logo/name', () => {
    render(<NavBar />)
    expect(screen.getByText("Architect's Library")).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<NavBar />)
    expect(screen.getByRole('link', { name: /articles/i })).toBeInTheDocument()
  })
})
