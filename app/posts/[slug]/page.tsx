import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import { getAllPosts } from '@/lib/posts'
import Comments from '@/components/Comments'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const filePath = path.join(process.cwd(), 'content/posts', `${params.slug}.mdx`)
  if (!fs.existsSync(filePath)) return {}
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data } = matter(raw)
  return {
    title: data.title ?? '',
    description: data.summary ?? '',
    openGraph: {
      title: data.title ?? '',
      description: data.summary ?? '',
      images: data.thumbnail ? [data.thumbnail] : ['/og-default.png'],
    },
  }
}

export default async function PostPage({ params }: Props) {
  const filePath = path.join(process.cwd(), 'content/posts', `${params.slug}.mdx`)
  if (!fs.existsSync(filePath)) notFound()

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)

  const post = {
    slug: params.slug,
    title: data.title ?? '',
    date: data.date ?? '',
    category: data.category ?? '',
    tags: (data.tags ?? []) as string[],
    summary: data.summary ?? '',
    thumbnail: data.thumbnail as string | undefined,
    readingTime: Math.max(1, Math.ceil(content.trim().split(/\s+/).length / 200)),
  }

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Article */}
        <article className="lg:col-span-9">
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary px-2 py-1 bg-primary-fixed rounded">
                {post.category}
              </span>
              <span className="font-label text-xs text-stone-500 uppercase tracking-widest">
                {post.readingTime} min read
              </span>
            </div>
            <h1 className="font-headline text-4xl lg:text-5xl font-bold tracking-tight text-on-surface leading-tight mb-6">
              {post.title}
            </h1>
            <p className="font-body text-xl text-on-surface-variant leading-relaxed mb-8">
              {post.summary}
            </p>
            <time className="font-label text-sm text-stone-500">
              {new Date(post.date).toLocaleDateString('ko-KR', {
                year: 'numeric', month: 'long', day: 'numeric',
              })}
            </time>
          </header>

          <div className="prose prose-stone max-w-none font-body leading-relaxed
            prose-headings:font-headline prose-headings:font-bold prose-headings:tracking-tight
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-code:font-mono prose-code:text-sm
            prose-pre:bg-surface-container-highest prose-pre:rounded-xl">
            <MDXRemote source={content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
          </div>

          <Comments />
        </article>

        {/* Sidebar: post metadata */}
        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-28 space-y-6">
            <div className="bg-surface-container-low rounded-xl p-6">
              <p className="font-label font-bold text-xs uppercase tracking-widest text-on-surface-variant mb-3">
                About this post
              </p>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-xs text-stone-400 uppercase tracking-wider mb-1">Category</p>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary px-2 py-1 bg-primary-fixed rounded">
                    {post.category}
                  </span>
                </div>
                <div>
                  <p className="text-xs text-stone-400 uppercase tracking-wider mb-1">Reading Time</p>
                  <p className="font-semibold text-on-surface">{post.readingTime} min</p>
                </div>
                <div>
                  <p className="text-xs text-stone-400 uppercase tracking-wider mb-1">Published</p>
                  <p className="font-semibold text-on-surface">
                    {new Date(post.date).toLocaleDateString('ko-KR', {
                      year: 'numeric', month: 'long', day: 'numeric',
                    })}
                  </p>
                </div>
                {post.tags.length > 0 && (
                  <div>
                    <p className="text-xs text-stone-400 uppercase tracking-wider mb-2">Tags</p>
                    <div className="flex flex-wrap gap-1.5">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2 py-1 bg-surface-container rounded text-on-surface-variant font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
