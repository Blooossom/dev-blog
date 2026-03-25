import { getAllPosts } from '@/lib/posts'
import FeaturedPost from '@/components/FeaturedPost'
import PostCard from '@/components/PostCard'

export default async function HomePage() {
  const posts = await getAllPosts()
  const [featured, ...rest] = posts

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
      {featured && <FeaturedPost post={featured} />}

      <section>
        <h2 className="font-headline font-bold text-2xl text-on-surface mb-10 tracking-tight">
          Latest Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  )
}
