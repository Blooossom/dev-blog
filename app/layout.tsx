import type { Metadata } from 'next'
import '@/styles/globals.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: "Architect's Library",
    template: "%s | Architect's Library",
  },
  description: '개발과 아키텍처에 대한 생각을 기록하는 공간',
  openGraph: {
    siteName: "Architect's Library",
    locale: 'ko_KR',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-background text-on-surface font-body min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-1 pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
