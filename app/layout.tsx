import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: "Architect's Library",
  description: '개발과 아키텍처에 대한 생각을 기록하는 공간',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-background text-on-surface font-body min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  )
}
