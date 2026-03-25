import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllPosts, getPostBySlug } from '@/lib/posts'
import Comments from '@/components/Comments'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      images: post.thumbnail ? [post.thumbnail] : ['/og-default.png'],
    },
  }
}

export default async function PostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug)
  if (!post) notFound()

  const raw = fs.readFileSync(
    path.join(process.cwd(), 'content/posts', `${params.slug}.mdx`),
    'utf-8'
  )
  const { content } = matter(raw)

  return (
    <article className="max-w-3xl mx-auto px-6 lg:px-8 py-12">
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-5">
          <span className="font-label font-bold text-xs tracking-widest text-primary uppercase">
            {post.category}
          </span>
          <span className="h-px w-8 bg-outline-variant/40" />
          <span className="font-label text-xs text-on-surface-variant uppercase tracking-widest">
            {post.readingTime} min read
          </span>
        </div>
        <h1 className="font-headline text-4xl lg:text-6xl font-extrabold tracking-tighter text-on-surface leading-tight mb-6">
          {post.title}
        </h1>
        <p className="font-body text-xl text-on-surface-variant italic leading-relaxed mb-8">
          {post.summary}
        </p>
        <time className="font-label text-sm text-on-surface-variant">
          {new Date(post.date).toLocaleDateString('ko-KR', {
            year: 'numeric', month: 'long', day: 'numeric',
          })}
        </time>
      </header>

      <div className="prose prose-stone max-w-none font-body leading-relaxed">
        <MDXRemote source={content} />
      </div>

      <Comments />
    </article>
  )
}
