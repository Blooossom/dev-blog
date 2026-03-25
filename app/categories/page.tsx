import Link from 'next/link'
import type { Metadata } from 'next'
import { getAllPosts, getAllCategories, getTagFrequency } from '@/lib/posts'
import TagCloud from '@/components/TagCloud'

export const metadata: Metadata = { title: 'Categories' }

export default async function CategoriesPage() {
  const [posts, categories, tagFreq] = await Promise.all([
    getAllPosts(),
    getAllCategories(),
    getTagFrequency(),
  ])

  const categoryCount = categories.reduce<Record<string, number>>((acc, cat) => {
    acc[cat] = posts.filter((p) => p.category === cat).length
    return acc
  }, {})

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
      <h1 className="font-headline text-5xl font-extrabold tracking-tighter text-on-surface mb-12">
        Knowledge Base
      </h1>

      <section className="mb-16">
        <h2 className="font-headline font-bold text-xl text-on-surface mb-8 tracking-tight">Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link key={cat} href={`/categories/${cat.toLowerCase()}`}>
              <div className="bg-surface-container-lowest rounded-xl p-6 shadow-warm hover:bg-surface-container-low transition-colors">
                <p className="font-headline font-bold text-lg text-on-surface mb-1">{cat}</p>
                <p className="font-label text-sm text-on-surface-variant">{categoryCount[cat]} posts</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-headline font-bold text-xl text-on-surface mb-8 tracking-tight">Tags</h2>
        <div className="bg-surface-container-low rounded-xl p-8">
          <TagCloud tagFrequency={tagFreq} />
        </div>
      </section>
    </div>
  )
}
