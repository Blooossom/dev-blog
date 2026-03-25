import Link from 'next/link'

interface Props {
  tagFrequency: Record<string, number>
}

export default function TagCloud({ tagFrequency }: Props) {
  const maxCount = Math.max(...Object.values(tagFrequency), 1)

  const sizeClass = (count: number) => {
    const ratio = count / maxCount
    if (ratio > 0.75) return 'text-lg font-bold'
    if (ratio > 0.5) return 'text-base font-semibold'
    if (ratio > 0.25) return 'text-sm font-medium'
    return 'text-xs font-normal'
  }

  return (
    <div className="flex flex-wrap gap-3">
      {Object.entries(tagFrequency).map(([tag, count]) => (
        <Link
          key={tag}
          href={`/tags/${encodeURIComponent(tag.toLowerCase())}`}
          className={`font-label text-on-surface-variant hover:text-primary transition-colors ${sizeClass(count)}`}
        >
          #{tag}
        </Link>
      ))}
    </div>
  )
}
