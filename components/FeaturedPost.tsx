import Link from 'next/link'
import type { PostMeta } from '@/lib/posts'
import FeaturedPostVisual from './FeaturedPostVisual'

interface Props {
  post: PostMeta
}

export default function FeaturedPost({ post }: Props) {
  return (
    <section className="mb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: text */}
        <div className="lg:col-span-7">
          <div className="mb-6">
            <span className="font-label font-medium uppercase tracking-widest text-xs text-primary block mb-1">
              Main Feature
            </span>
          </div>

          <h1 className="font-headline text-5xl lg:text-7xl font-bold tracking-tight text-on-surface leading-tight mb-8">
            {post.title}
          </h1>

          <p className="text-xl text-on-surface-variant font-body leading-relaxed max-w-xl mb-10">
            {post.summary}
          </p>

          <Link
            href={`/posts/${post.slug}`}
            className="inline-flex items-center gap-2 text-primary font-label font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all"
          >
            <span>Read Full Essay</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Right: featured visual */}
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-warm">
            <FeaturedPostVisual
              title={post.title}
              category={post.category}
              tags={post.tags}
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-container/10 -z-10 rounded-xl" />
        </div>
      </div>
    </section>
  )
}
