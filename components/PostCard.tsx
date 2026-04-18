import Link from 'next/link'
import Image from 'next/image'
import type { PostMeta } from '@/lib/posts'

interface Props {
  post: PostMeta
}

export default function PostCard({ post }: Props) {
  return (
    <Link href={`/posts/${post.slug}`} className="block group">
      <article className="bg-surface-container-low rounded-xl p-8 hover:bg-surface-container transition-all duration-300 ease-out flex flex-col h-full">
        {post.thumbnail && (
          <div className="relative aspect-video rounded-lg overflow-hidden mb-5">
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}

        <div className="mb-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary px-2 py-1 bg-primary-fixed rounded">
            {post.category}
          </span>
        </div>

        <h2 className="font-headline font-bold text-xl text-on-surface leading-snug mb-3 group-hover:text-primary transition-colors">
          {post.title}
        </h2>

        <p className="font-body text-on-surface-variant text-sm leading-relaxed line-clamp-3 flex-grow mb-6">
          {post.summary}
        </p>

        <div className="flex items-center gap-3 text-xs font-semibold text-stone-500 pt-4 border-t border-outline-variant/20">
          <time>
            {new Date(post.date).toLocaleDateString('ko-KR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <span className="w-1 h-1 bg-stone-300 rounded-full" />
          <span>{post.readingTime} MIN READ</span>
        </div>
      </article>
    </Link>
  )
}
