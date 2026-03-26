import Link from 'next/link'
import Image from 'next/image'
import type { PostMeta } from '@/lib/posts'

interface Props {
  post: PostMeta
}

export default function PostCard({ post }: Props) {
  return (
    <Link href={`/posts/${post.slug}`} className="block group">
      <article className="bg-surface-container-lowest rounded-xl p-6 hover:bg-surface-container-low transition-all duration-200 ease-out shadow-warm hover:shadow-warm-md hover:-translate-y-0.5">
        {post.thumbnail && (
          <div className="relative aspect-video rounded-lg overflow-hidden mb-5">
            <Image src={post.thumbnail} alt={post.title} fill className="object-cover" />
          </div>
        )}

        <div className="flex items-center gap-3 mb-3">
          <span className="font-label font-bold text-xs tracking-widest text-primary uppercase">
            {post.category}
          </span>
          <span className="h-px w-8 bg-outline-variant/40" />
          <span className="font-label text-xs text-on-surface-variant uppercase tracking-widest">
            {post.readingTime} min read
          </span>
        </div>

        <h2 className="font-headline font-extrabold text-xl text-on-surface leading-tight mb-3 group-hover:text-primary transition-colors">
          {post.title}
        </h2>

        <p className="font-body text-on-surface-variant text-sm leading-relaxed line-clamp-2 mb-4">
          {post.summary}
        </p>

        <time className="font-label text-xs text-on-surface-variant tracking-wide">
          {new Date(post.date).toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
      </article>
    </Link>
  )
}
