import type { Metadata } from 'next'
import Link from 'next/link'
import { getTagFrequency } from '@/lib/posts'

export const metadata: Metadata = { title: 'Tags' }

export default async function TagsPage() {
  const tagFreq = await getTagFrequency()

  const sorted = Object.entries(tagFreq).sort((a, b) => b[1] - a[1])
  const maxCount = sorted[0]?.[1] ?? 1

  const sizeClass = (count: number) => {
    const ratio = count / maxCount
    if (ratio > 0.75) return 'text-2xl font-bold'
    if (ratio > 0.5) return 'text-xl font-semibold'
    if (ratio > 0.25) return 'text-base font-medium'
    return 'text-sm font-normal'
  }

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
      <h1 className="font-headline text-5xl font-extrabold tracking-tighter text-on-surface mb-4">
        Tags
      </h1>
      <p className="text-on-surface-variant font-body mb-12">
        {sorted.length}개 태그 · {Object.values(tagFreq).reduce((a, b) => a + b, 0)}개 포스트
      </p>

      <div className="bg-surface-container-low rounded-2xl p-8 md:p-12">
        <div className="flex flex-wrap gap-4">
          {sorted.map(([tag, count]) => (
            <Link
              key={tag}
              href={`/tags/${tag.toLowerCase()}`}
              className={`font-label text-on-surface-variant hover:text-primary transition-colors duration-150 ${sizeClass(count)}`}
            >
              #{tag}
              <span className="ml-1 text-xs text-on-surface-variant/40 font-normal">
                {count}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
