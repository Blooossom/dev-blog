import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const POSTS_DIR = path.join(process.cwd(), 'content/posts')
const OUTPUT = path.join(process.cwd(), 'public/search-index.json')

interface SearchEntry {
  slug: string
  title: string
  category: string
  tags: string[]
  summary: string
  body: string
  date: string
}

function main() {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.mdx'))
  const index: SearchEntry[] = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, '')
    const raw = fs.readFileSync(path.join(POSTS_DIR, filename), 'utf-8')
    const { data, content } = matter(raw)
    return {
      slug,
      title: data.title ?? '',
      category: data.category ?? '',
      tags: data.tags ?? [],
      summary: data.summary ?? '',
      body: content.replace(/[#*`>_\[\]()]/g, ' ').trim(),
      date: data.date ?? '',
    }
  })
  fs.mkdirSync(path.dirname(OUTPUT), { recursive: true })
  fs.writeFileSync(OUTPUT, JSON.stringify(index, null, 2))
  console.log(`Search index generated: ${index.length} posts → ${OUTPUT}`)
}

main()
