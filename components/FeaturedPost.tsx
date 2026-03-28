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
          <div className="mb-6 flex items-center space-x-4">
            <span className="font-label font-bold text-xs tracking-widest text-primary uppercase">
              Featured Essay
            </span>
            <span className="h-px w-12 bg-outline-variant/30" />
            <span className="font-label font-bold text-xs tracking-widest text-on-surface-variant uppercase">
              {post.readingTime} Min Read
            </span>
          </div>

          <h1 className="font-headline text-5xl lg:text-7xl font-extrabold tracking-tighter text-on-surface leading-tight mb-8">
            {post.title}
          </h1>

          <p className="text-xl lg:text-2xl text-on-surface-variant italic mb-10 leading-relaxed max-w-2xl font-body">
            {post.summary}
          </p>

          <Link
            href={`/posts/${post.slug}`}
            className="inline-flex items-center gap-2 text-primary font-headline font-bold hover:translate-x-1 transition-transform"
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
