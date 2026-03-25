import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getAllPosts, getAllCategories } from '@/lib/posts'
import PostCard from '@/components/PostCard'

interface Props { params: { category: string } }

export async function generateStaticParams() {
  const categories = await getAllCategories()
  return categories.map((cat) => ({ category: cat.toLowerCase() }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return { title: params.category }
}

export default async function CategoryPage({ params }: Props) {
  const posts = await getAllPosts()
  const filtered = posts.filter(
    (p) => p.category.toLowerCase() === params.category.toLowerCase()
  )
  if (filtered.length === 0) notFound()

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
      <h1 className="font-headline text-5xl font-extrabold tracking-tighter text-on-surface mb-12 capitalize">
        {params.category}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((post) => <PostCard key={post.slug} post={post} />)}
      </div>
    </div>
  )
}
