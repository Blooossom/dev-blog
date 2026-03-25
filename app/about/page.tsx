import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: '블로그 운영자 소개 페이지',
}

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 lg:px-8 py-12">
      <h1 className="font-headline text-5xl font-extrabold tracking-tighter text-on-surface mb-8">
        About Me
      </h1>
      <div className="bg-surface-container-lowest rounded-xl p-8 shadow-warm">
        <p className="font-body text-lg text-on-surface-variant leading-relaxed">
          안녕하세요. 개발과 아키텍처를 사랑하는 엔지니어입니다.
          이 블로그는 배우고 경험한 것들을 정리하는 공간입니다.
        </p>
      </div>
    </div>
  )
}
