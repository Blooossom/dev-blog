'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const CATEGORIES = [
  { href: '/categories/backend', label: 'Backend', icon: 'code' },
  { href: '/categories/frontend', label: 'Frontend', icon: 'web' },
  { href: '/categories/devops', label: 'DevOps', icon: 'cloud' },
  { href: '/categories/architecture', label: 'Architecture', icon: 'architecture' },
  { href: '/categories/ai', label: 'AI', icon: 'psychology' },
  { href: '/categories/general', label: 'General', icon: 'layers' },
]

export default function Sidebar() {
  const pathname = usePathname()

  const isActive = (href: string) => pathname.startsWith(href)

  return (
    <aside className="fixed left-0 h-screen w-64 pt-24 bg-stone-50 border-r border-outline-variant/20 z-40 hidden md:block">
      <div className="flex flex-col h-full px-4">
        <div className="mb-8 px-4">
          <h3 className="font-label font-medium uppercase tracking-widest text-xs text-on-surface-variant">
            Categories
          </h3>
          <p className="text-lg font-headline font-bold text-rose-900 mt-1">Technical Taxonomy</p>
        </div>

        <nav className="flex flex-col gap-1 pr-4">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-r-full transition-all duration-300 ${
                isActive(cat.href)
                  ? 'bg-rose-100 text-rose-900 font-bold'
                  : 'text-on-surface-variant hover:bg-surface-container-low hover:pl-6'
              }`}
            >
              <span className="material-symbols-outlined text-lg select-none">{cat.icon}</span>
              <span className="font-label font-medium uppercase tracking-widest text-xs">
                {cat.label}
              </span>
            </Link>
          ))}
        </nav>

        <div className="mt-auto mb-12 px-4">
          <Link
            href="/"
            className="block w-full primary-gradient text-on-primary py-4 rounded-xl font-label font-bold text-xs tracking-widest uppercase text-center hover:opacity-90 transition-opacity"
          >
            All Articles
          </Link>
        </div>
      </div>
    </aside>
  )
}
