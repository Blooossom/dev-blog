import Link from 'next/link'
import type { PostMeta } from '@/lib/posts'

interface Props {
  posts: PostMeta[]
  activeCategory: string
}

// 실제 카테고리 순서 고정
const CATEGORY_ORDER = ['Backend', 'Frontend', 'DevOps', 'Network', 'DB', 'Architecture', 'AI', 'General']

export default function CategoryFilter({ posts, activeCategory }: Props) {
  const usedCategories = CATEGORY_ORDER.filter((cat) =>
    posts.some((p) => p.category === cat)
  )
  const categories = ['전체', ...usedCategories]

  const getCount = (cat: string) =>
    cat === '전체' ? posts.length : posts.filter((p) => p.category === cat).length

  const getHref = (cat: string) =>
    cat === '전체' ? '/' : `/?category=${encodeURIComponent(cat)}`

  return (
    <div className="flex gap-2 overflow-x-auto pb-1 mb-10 scrollbar-hide">
      {categories.map((cat) => {
        const isActive = cat === activeCategory
        return (
          <Link
            key={cat}
            href={getHref(cat)}
            className={`flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full font-label text-sm transition-all duration-200 ${
              isActive
                ? 'bg-primary text-on-primary font-bold shadow-sm'
                : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
            }`}
          >
            {cat}
            <span
              className={`text-xs font-bold tabular-nums px-1.5 py-0.5 rounded-full transition-colors ${
                isActive
                  ? 'bg-white/20 text-on-primary'
                  : 'bg-surface-container-high text-on-surface-variant'
              }`}
            >
              {getCount(cat)}
            </span>
          </Link>
        )
      })}
    </div>
  )
}
