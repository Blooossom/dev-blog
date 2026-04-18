import Link from 'next/link'

const CATEGORIES = ['Frontend', 'Backend', 'Architecture', 'DevOps', 'AI']

export default function Footer() {
  return (
    <footer className="bg-stone-100 md:ml-64 mt-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <p className="font-headline italic font-bold text-xl text-rose-900 mb-3">
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
                  className="font-body text-sm text-stone-500 hover:text-rose-700 hover:underline decoration-rose-300 underline-offset-4 transition-all"
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
              <Link href="/about" className="font-body text-sm text-stone-500 hover:text-rose-700 hover:underline decoration-rose-300 underline-offset-4 transition-all">
                About
              </Link>
            </li>
            <li>
              <Link href="/search" className="font-body text-sm text-stone-500 hover:text-rose-700 hover:underline decoration-rose-300 underline-offset-4 transition-all">
                Search
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-outline-variant/20">
        <p className="max-w-5xl mx-auto px-6 lg:px-8 py-6 font-label text-xs text-stone-500">
          © {new Date().getFullYear()} Architect&#39;s Library
        </p>
      </div>
    </footer>
  )
}
