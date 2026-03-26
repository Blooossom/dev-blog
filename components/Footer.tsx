import Link from 'next/link'

const CATEGORIES = ['Frontend', 'Backend', 'Architecture', 'DevOps', 'AI']

export default function Footer() {
  return (
    <footer className="bg-surface-container mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <p className="font-headline font-black text-xl text-on-surface tracking-tighter mb-3">
            Architect&#39;s Library
          </p>
          <p className="font-body text-on-surface-variant text-sm leading-relaxed">
            개발과 아키텍처에 대한 생각을 기록하는 공간입니다.
          </p>
        </div>

        <div>
          <p className="font-label font-bold text-xs tracking-widest text-on-surface-variant uppercase mb-4">
            Categories
          </p>
          <ul className="space-y-2">
            {CATEGORIES.map((cat) => (
              <li key={cat}>
                <Link
                  href={`/categories/${cat.toLowerCase()}`}
                  className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors"
                >
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-label font-bold text-xs tracking-widest text-on-surface-variant uppercase mb-4">
            Links
          </p>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/search" className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors">
                Search
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-surface-container-high">
        <p className="max-w-7xl mx-auto px-6 lg:px-8 py-6 font-label text-xs text-on-surface-variant">
          © {new Date().getFullYear()} Architect&#39;s Library
        </p>
      </div>
    </footer>
  )
}
