'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface Props {
  initialQuery?: string
}

export default function SearchBar({ initialQuery = '' }: Props) {
  const [query, setQuery] = useState(initialQuery)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="포스트 검색..."
        className="w-full bg-surface-container-highest rounded-full px-5 py-3 pr-12 font-label text-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary/30"
      />
      <button
        type="submit"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary"
        aria-label="검색"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </form>
  )
}
