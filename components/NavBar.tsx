'use client'

import Link from 'next/link'
import { useState } from 'react'

const NAV_LINKS = [
  { href: '/categories', label: 'Articles' },
  { href: '/categories/frontend', label: 'Frontend' },
  { href: '/categories/backend', label: 'Backend' },
  { href: '/about', label: 'About' },
]

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-8 py-5">
        <Link
          href="/"
          className="text-2xl font-black text-on-surface tracking-tighter font-headline"
        >
          Architect&#39;s Library
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-8 font-headline font-bold tracking-tight text-sm">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-on-surface-variant hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-5">
          <Link href="/search" aria-label="검색">
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
            className="primary-gradient text-on-primary font-headline font-bold text-sm px-5 py-2 rounded-lg hover:opacity-90 transition-opacity"
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
        <div className="md:hidden bg-surface-container-low px-6 pb-6 space-y-4 font-headline font-bold text-sm">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-on-surface-variant hover:text-primary"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/search" className="block text-on-surface-variant hover:text-primary">
            검색
          </Link>
        </div>
      )}
    </nav>
  )
}
