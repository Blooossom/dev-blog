import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-6 lg:px-8 py-24 text-center">
      <p className="font-label font-bold text-xs tracking-widest text-primary uppercase mb-6">404 Error</p>
      <h1 className="font-headline text-7xl font-extrabold tracking-tighter text-on-surface mb-6">
        Page Not Found
      </h1>
      <p className="font-body text-xl text-on-surface-variant italic mb-12">
        찾으시는 페이지가 존재하지 않거나 이동되었습니다.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 primary-gradient text-on-primary font-headline font-bold px-8 py-3 rounded-xl"
      >
        홈으로 돌아가기
      </Link>
    </div>
  )
}
