import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const POSTS_DIR = path.join(process.cwd(), 'content/posts')

export interface PostMeta {
  slug: string
  title: string
  date: string
  category: string
  tags: string[]
  summary: string
  thumbnail?: string
  readingTime: number
}

function calcReadingTime(content: string): number {
  const wordCount = content.trim().split(/\s+/).length
  return Math.max(1, Math.ceil(wordCount / 200))
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.mdx'))
  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, '')
    const raw = fs.readFileSync(path.join(POSTS_DIR, filename), 'utf-8')
    const { data, content } = matter(raw)
    return {
      slug,
      title: data.title ?? '',
      date: data.date ?? '',
      category: data.category ?? '',
      tags: data.tags ?? [],
      summary: data.summary ?? '',
      thumbnail: data.thumbnail,
      readingTime: calcReadingTime(content),
    } satisfies PostMeta
  })
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPostBySlug(slug: string): Promise<PostMeta | null> {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  return {
    slug,
    title: data.title ?? '',
    date: data.date ?? '',
    category: data.category ?? '',
    tags: data.tags ?? [],
    summary: data.summary ?? '',
    thumbnail: data.thumbnail,
    readingTime: calcReadingTime(content),
  }
}

export async function getAllCategories(): Promise<string[]> {
  const posts = await getAllPosts()
  return [...new Set(posts.map((p) => p.category))].sort()
}

export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPosts()
  const tags = posts.flatMap((p) => p.tags)
  return [...new Set(tags)].sort()
}

export async function getTagFrequency(): Promise<Record<string, number>> {
  const posts = await getAllPosts()
  const freq: Record<string, number> = {}
  posts.flatMap((p) => p.tags).forEach((tag) => {
    freq[tag] = (freq[tag] ?? 0) + 1
  })
  return freq
}
