import { getAllPosts } from '@/lib/posts'
import FeaturedPost from '@/components/FeaturedPost'
import PostCard from '@/components/PostCard'
import Pagination from '@/components/Pagination'

const POSTS_PER_PAGE = 9

export default async function HomePage({
  searchParams,
}: {
  searchParams: { page?: string }
}) {
  const posts = await getAllPosts()
  const [featured, ...rest] = posts

  const currentPage = Math.max(1, parseInt(searchParams.page ?? '1', 10))
  const totalPages = Math.ceil(rest.length / POSTS_PER_PAGE)

  const start = (currentPage - 1) * POSTS_PER_PAGE
  const paginated = rest.slice(start, start + POSTS_PER_PAGE)

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
      {currentPage === 1 && featured && <FeaturedPost post={featured} />}

      <section>
        <h2 className="font-headline font-bold text-2xl text-on-surface mb-10 tracking-tight">
          {currentPage === 1 ? 'Latest Articles' : `Articles — Page ${currentPage}`}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginated.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  )
}
