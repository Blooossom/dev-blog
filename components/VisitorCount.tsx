'use client'

import { useEffect, useState } from 'react'

interface Counts {
  today: number
  total: number
}

export default function VisitorCount() {
  const [counts, setCounts] = useState<Counts | null>(null)

  useEffect(() => {
    fetch('/api/visitors', { method: 'POST' })
      .then((r) => r.json())
      .then((data) => setCounts(data))
      .catch(() => {})
  }, [])

  return (
    <div className="px-4 mb-4">
      <div className="bg-surface-container-low rounded-xl px-4 py-3 flex justify-between text-xs text-on-surface-variant">
        <div className="flex flex-col items-center gap-0.5">
          <span className="font-label uppercase tracking-widest text-[10px]">오늘</span>
          <span className="font-headline font-bold text-sm text-on-surface">
            {counts ? counts.today.toLocaleString() : '—'}
          </span>
        </div>
        <div className="w-px bg-outline-variant/30" />
        <div className="flex flex-col items-center gap-0.5">
          <span className="font-label uppercase tracking-widest text-[10px]">전체</span>
          <span className="font-headline font-bold text-sm text-on-surface">
            {counts ? counts.total.toLocaleString() : '—'}
          </span>
        </div>
      </div>
    </div>
  )
}
