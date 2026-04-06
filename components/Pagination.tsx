import Link from 'next/link'

interface Props {
  currentPage: number
  totalPages: number
}

export default function Pagination({ currentPage, totalPages }: Props) {
  if (totalPages <= 1) return null

  const getPageHref = (page: number) => (page === 1 ? '/' : `/?page=${page}`)

  // 표시할 페이지 번호 계산 (현재 페이지 앞뒤 2개 + 첫/마지막 페이지)
  const getPageNumbers = (): (number | 'ellipsis')[] => {
    const delta = 2
    const range: number[] = []

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i)
    }

    const pages: (number | 'ellipsis')[] = [1]

    if (range[0] > 2) pages.push('ellipsis')
    pages.push(...range)
    if (range[range.length - 1] < totalPages - 1) pages.push('ellipsis')
    if (totalPages > 1) pages.push(totalPages)

    return pages
  }

  const pages = getPageNumbers()

  return (
    <nav className="flex items-center justify-center gap-1 mt-16" aria-label="페이지 탐색">
      {/* 이전 버튼 */}
      {currentPage > 1 ? (
        <Link
          href={getPageHref(currentPage - 1)}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg font-label text-sm text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          이전
        </Link>
      ) : (
        <span className="flex items-center gap-1.5 px-4 py-2 rounded-lg font-label text-sm text-outline-variant cursor-not-allowed">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          이전
        </span>
      )}

      {/* 페이지 번호 */}
      <div className="flex items-center gap-1">
        {pages.map((page, idx) =>
          page === 'ellipsis' ? (
            <span
              key={`ellipsis-${idx}`}
              className="w-9 h-9 flex items-center justify-center font-label text-sm text-outline-variant"
            >
              …
            </span>
          ) : page === currentPage ? (
            <span
              key={page}
              className="w-9 h-9 flex items-center justify-center rounded-lg font-label font-bold text-sm bg-primary text-on-primary"
              aria-current="page"
            >
              {page}
            </span>
          ) : (
            <Link
              key={page}
              href={getPageHref(page)}
              className="w-9 h-9 flex items-center justify-center rounded-lg font-label text-sm text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"
            >
              {page}
            </Link>
          )
        )}
      </div>

      {/* 다음 버튼 */}
      {currentPage < totalPages ? (
        <Link
          href={getPageHref(currentPage + 1)}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg font-label text-sm text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"
        >
          다음
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      ) : (
        <span className="flex items-center gap-1.5 px-4 py-2 rounded-lg font-label text-sm text-outline-variant cursor-not-allowed">
          다음
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      )}
    </nav>
  )
}
