'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState, Suspense } from 'react'
import Link from 'next/link'
import SearchBar from '@/components/SearchBar'

interface SearchEntry {
  slug: string
  title: string
  category: string
  tags: string[]
  summary: string
  body: string
  date: string
}

function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') ?? ''
  const [results, setResults] = useState<SearchEntry[]>([])
  const [index, setIndex] = useState<SearchEntry[]>([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    fetch('/search-index.json')
      .then((r) => r.json())
      .then((data: SearchEntry[]) => {
        setIndex(data)
        setLoaded(true)
      })
  }, [])

  useEffect(() => {
    if (!loaded || !query.trim()) {
      setResults([])
      return
    }
    const q = query.toLowerCase()
    setResults(
      index.filter(
        (entry) =>
          entry.title.toLowerCase().includes(q) ||
          entry.summary.toLowerCase().includes(q) ||
          entry.body.toLowerCase().includes(q) ||
          entry.tags.some((t) => t.toLowerCase().includes(q))
      )
    )
  }, [query, index, loaded])

  return (
    <div>
      <div className="mb-10 max-w-xl">
        <SearchBar initialQuery={query} />
      </div>

      {query && (
        <p className="font-label text-sm text-on-surface-variant mb-8">
          &ldquo;{query}&rdquo; 검색 결과: {results.length}건
        </p>
      )}

      {results.length > 0 ? (
        <ul className="space-y-6">
          {results.map((entry) => (
            <li key={entry.slug} className="bg-surface-container-lowest rounded-xl p-6 shadow-warm">
              <Link href={`/posts/${entry.slug}`}>
                <p className="font-label text-xs text-primary uppercase tracking-widest mb-2">{entry.category}</p>
                <h2 className="font-headline font-bold text-xl text-on-surface hover:text-primary transition-colors mb-2">
                  {entry.title}
                </h2>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">{entry.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : query && loaded ? (
        <div className="text-center py-24">
          <p className="font-headline text-3xl font-bold text-on-surface mb-4">검색 결과 없음</p>
          <p className="font-body text-on-surface-variant">
            &ldquo;{query}&rdquo;에 해당하는 포스트를 찾지 못했습니다.
          </p>
        </div>
      ) : null}
    </div>
  )
}

export default function SearchPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
      <h1 className="font-headline text-5xl font-extrabold tracking-tighter text-on-surface mb-12">Search</h1>
      <Suspense fallback={null}>
        <SearchResults />
      </Suspense>
    </div>
  )
}
