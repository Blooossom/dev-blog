/**
 * @jest-environment node
 */
import { getAllPosts, getPostBySlug } from '@/lib/posts'

describe('getAllPosts', () => {
  it('returns an array of posts with required fields', async () => {
    const posts = await getAllPosts()
    expect(posts.length).toBeGreaterThan(0)
    const post = posts[0]
    expect(post).toHaveProperty('slug')
    expect(post).toHaveProperty('title')
    expect(post).toHaveProperty('date')
    expect(post).toHaveProperty('category')
    expect(post).toHaveProperty('tags')
    expect(post).toHaveProperty('summary')
    expect(post).toHaveProperty('readingTime')
  })

  it('calculates readingTime in minutes based on word count', async () => {
    const posts = await getAllPosts()
    const post = posts.find((p) => p.slug === 'hello-world')
    expect(post).toBeDefined()
    expect(post!.readingTime).toBeGreaterThanOrEqual(1)
  })
})

describe('getPostBySlug', () => {
  it('returns post metadata for a valid slug', async () => {
    const post = await getPostBySlug('hello-world')
    expect(post).not.toBeNull()
    expect(post!.title).toBe('Hello, World')
  })

  it('returns null for an invalid slug', async () => {
    const post = await getPostBySlug('does-not-exist')
    expect(post).toBeNull()
  })
})
