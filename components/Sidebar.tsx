'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import VisitorCount from './VisitorCount'

const TAXONOMY = [
  {
    label: 'Backend',
    href: '/categories/backend',
    icon: 'code',
    tags: ['Java', 'Spring', 'API'],
  },
  {
    label: 'Frontend',
    href: '/categories/frontend',
    icon: 'web',
    tags: ['React', 'TypeScript', 'JavaScript', 'UI', 'Browser', 'Tooling'],
  },
  {
    label: 'Infra',
    href: '/categories/infra',
    icon: 'cloud',
    tags: ['Docker', 'Kubernetes', 'CI/CD', 'Nginx', 'Monitoring', 'Linux', 'AWS', 'Common'],
  },
  {
    label: 'Network',
    href: '/categories/network',
    icon: 'router',
    tags: [],
  },
  {
    label: 'CS',
    href: '/categories/cs',
    icon: 'memory',
    tags: [],
  },
  {
    label: 'DB',
    href: '/categories/db',
    icon: 'database',
    tags: ['SQL', 'NoSQL'],
  },
  {
    label: 'Architecture',
    href: '/categories/architecture',
    icon: 'architecture',
    tags: [],
  },
  {
    label: 'Security',
    href: '/categories/security',
    icon: 'shield',
    tags: [],
  },
  {
    label: 'AI',
    href: '/categories/ai',
    icon: 'psychology',
    tags: ['Claude', 'Common'],
  },
  {
    label: 'General',
    href: '/categories/general',
    icon: 'layers',
    tags: [],
  },
]

export default function Sidebar() {
  const pathname = usePathname()

  const getDefaultOpen = () => {
    const match = TAXONOMY.findIndex(
      (cat) =>
        pathname.startsWith(cat.href) ||
        cat.tags.some((tag) => pathname === `/tags/${encodeURIComponent(tag)}` || pathname === `/tags/${tag}`)
    )
    return match >= 0 ? match : null
  }

  const [openIndex, setOpenIndex] = useState<number | null>(getDefaultOpen)

  useEffect(() => {
    setOpenIndex(getDefaultOpen())
  }, [pathname])

  const isCatActive = (href: string) => pathname.startsWith(href)
  const isTagActive = (tag: string) =>
    pathname === `/tags/${encodeURIComponent(tag)}` || pathname === `/tags/${tag}`

  return (
    <aside className="fixed left-0 h-screen w-64 pt-24 bg-stone-50 border-r border-outline-variant/20 z-40 hidden md:flex flex-col overflow-y-auto">
      <div className="flex flex-col flex-1 px-4 pb-6">
        <nav className="flex flex-col gap-0.5 pt-2">
          {TAXONOMY.map((cat, idx) => {
            const isOpen = openIndex === idx
            const catActive = isCatActive(cat.href)

            return (
              <div key={cat.href}>
                {/* 대분류 */}
                <div className="flex items-center gap-1 pr-4">
                  <Link
                    href={cat.href}
                    className={`flex-1 flex items-center gap-3 px-4 py-2.5 rounded-r-full transition-all duration-200 ${
                      catActive
                        ? 'bg-rose-100 text-rose-900 font-bold'
                        : 'text-on-surface-variant hover:bg-surface-container-low'
                    }`}
                  >
                    <span className="font-headline text-base font-semibold">
                      {cat.label}
                    </span>
                  </Link>
                  {cat.tags.length > 0 && <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="p-1 text-on-surface-variant hover:text-primary transition-colors"
                    aria-label={isOpen ? '접기' : '펼치기'}
                  >
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>}
                </div>

                {/* 소분류 태그 */}
                {isOpen && cat.tags.length > 0 && (
                  <div className="ml-4 mt-0.5 mb-1 flex flex-col gap-0.5 border-l-2 border-rose-100 pl-3 pr-4 animate-fade-in">
                    {cat.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/tags/${tag}`}
                        className={`px-3 py-1.5 rounded-r-full font-label font-medium uppercase tracking-widest text-xs transition-all duration-150 ${
                          isTagActive(tag)
                            ? 'text-rose-900 font-bold bg-rose-50'
                            : 'text-on-surface-variant hover:text-rose-800 hover:bg-surface-container-low'
                        }`}
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </nav>

        <div className="mt-auto pt-6">
          <VisitorCount />
        </div>
        <div className="px-4">
          <Link
            href="/"
            className="block w-full primary-gradient text-on-primary py-3 rounded-xl font-label font-bold text-xs tracking-widest uppercase text-center hover:opacity-90 transition-opacity"
          >
            All Articles
          </Link>
        </div>
      </div>
    </aside>
  )
}
