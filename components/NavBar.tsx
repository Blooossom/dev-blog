'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'

const CATEGORIES = [
  { href: '/categories/frontend', label: 'Frontend' },
  { href: '/categories/backend', label: 'Backend' },
  { href: '/categories/devops', label: 'DevOps' },
  { href: '/categories/ai', label: 'AI' },
  { href: '/categories/general', label: 'General' },
]

export default function NavBar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [topicsOpen, setTopicsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  const linkClass = (href: string) =>
    `transition-colors duration-200 ${
      isActive(href)
        ? 'text-primary font-extrabold'
        : 'text-on-surface-variant hover:text-primary'
    }`

  const isTopicsActive = CATEGORIES.some((c) => pathname.startsWith(c.href))

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setTopicsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav transition-colors duration-300 border-b border-outline-variant/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-8 py-5">
        <Link
          href="/"
          className="text-2xl font-black text-on-surface tracking-tighter font-headline"
        >
          Architect&#39;s Library
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-8 font-headline font-bold tracking-tight text-sm">
          <Link href="/categories" className={linkClass('/categories')}>
            Articles
          </Link>

          {/* Topics dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setTopicsOpen((prev) => !prev)}
              className={`flex items-center gap-1 transition-colors duration-200 ${
                isTopicsActive
                  ? 'text-primary font-extrabold'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              Topics
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${topicsOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {topicsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-44 bg-surface-container rounded-xl shadow-lg border border-outline-variant/20 overflow-hidden animate-fade-in-down">
                <div className="py-1.5">
                  {CATEGORIES.map((cat) => (
                    <Link
                      key={cat.href}
                      href={cat.href}
                      onClick={() => setTopicsOpen(false)}
                      className="block px-4 py-2.5 text-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors duration-150"
                    >
                      {cat.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/tags" className={linkClass('/tags')}>
            Tags
          </Link>

          <Link href="/about" className={linkClass('/about')}>
            About
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-5">
          <Link href="/search" aria-label="검색" className="hover:scale-110 transition-transform duration-150 inline-flex">
            <svg
              className="w-5 h-5 text-on-surface-variant hover:text-primary transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </Link>
          <Link
            href="/subscribe/success"
            className="primary-gradient text-on-primary font-headline font-bold text-sm px-5 py-2 rounded-lg hover:opacity-90 hover:-translate-y-px active:translate-y-0 transition-all duration-150"
          >
            Subscribe
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-on-surface"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="메뉴 열기"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface-container-low px-6 pb-6 space-y-1 font-headline font-bold text-sm animate-slide-down">
          <Link
            href="/categories"
            className="block py-2.5 text-on-surface-variant hover:text-primary border-b border-outline-variant/10"
            onClick={() => setMenuOpen(false)}
          >
            Articles
          </Link>
          <div className="py-1 border-b border-outline-variant/10">
            <p className="text-xs text-on-surface-variant/50 uppercase tracking-wider pt-1 pb-1.5">Topics</p>
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="block py-2 pl-2 text-on-surface-variant hover:text-primary"
                onClick={() => setMenuOpen(false)}
              >
                {cat.label}
              </Link>
            ))}
          </div>
          <Link
            href="/tags"
            className="block py-2.5 text-on-surface-variant hover:text-primary border-b border-outline-variant/10"
            onClick={() => setMenuOpen(false)}
          >
            Tags
          </Link>
          <Link
            href="/about"
            className="block py-2.5 text-on-surface-variant hover:text-primary border-b border-outline-variant/10"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/search"
            className="block py-2.5 text-on-surface-variant hover:text-primary"
            onClick={() => setMenuOpen(false)}
          >
            Search
          </Link>
        </div>
      )}
    </nav>
  )
}
