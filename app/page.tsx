import { getAllPosts } from '@/lib/posts'
import FeaturedPost from '@/components/FeaturedPost'
import PostCard from '@/components/PostCard'
import Pagination from '@/components/Pagination'
import CategoryFilter from '@/components/CategoryFilter'

const POSTS_PER_PAGE = 9

export default async function HomePage({
  searchParams,
}: {
  searchParams: { page?: string; category?: string }
}) {
  const allPosts = await getAllPosts()

  const activeCategory = searchParams.category ?? ''
  const currentPage = Math.max(1, parseInt(searchParams.page ?? '1', 10))

  // 카테고리 필터링
  const filtered = activeCategory
    ? allPosts.filter((p) => p.category === activeCategory)
    : allPosts

  // Featured: 전체 탭 1페이지에만 표시
  const showFeatured = !activeCategory && currentPage === 1
  const gridPosts = showFeatured ? filtered.slice(1) : filtered

  const totalPages = Math.ceil(gridPosts.length / POSTS_PER_PAGE)
  const start = (currentPage - 1) * POSTS_PER_PAGE
  const paginated = gridPosts.slice(start, start + POSTS_PER_PAGE)

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
      {/* Featured — 전체 탭 1페이지만 */}
      {showFeatured && filtered[0] && <FeaturedPost post={filtered[0]} />}

      <section>
        {/* 카테고리 필터 */}
        <CategoryFilter
          posts={allPosts}
          activeCategory={activeCategory || '전체'}
        />

        {/* 포스트 그리드 */}
        {paginated.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginated.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-center text-on-surface-variant font-body py-24">
            해당 카테고리의 포스트가 없습니다.
          </p>
        )}
      </section>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        category={activeCategory || undefined}
      />
    </div>
  )
}
