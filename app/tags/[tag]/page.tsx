import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getAllPosts, getAllTags } from '@/lib/posts'
import PostCard from '@/components/PostCard'

interface Props { params: { tag: string } }

export async function generateStaticParams() {
  const tags = await getAllTags()
  return tags.map((tag) => ({ tag: encodeURIComponent(tag.toLowerCase()) }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return { title: `#${decodeURIComponent(params.tag)}` }
}

export default async function TagPage({ params }: Props) {
  const tag = decodeURIComponent(params.tag)
  const posts = await getAllPosts()
  const filtered = posts.filter((p) =>
    p.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  )
  if (filtered.length === 0) notFound()

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
      <h1 className="font-headline text-5xl font-extrabold tracking-tighter text-on-surface mb-12">
        #{tag}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((post) => <PostCard key={post.slug} post={post} />)}
      </div>
    </div>
  )
}
