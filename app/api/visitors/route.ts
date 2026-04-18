import { kv } from '@vercel/kv'
import { NextResponse } from 'next/server'

export const runtime = 'edge'

export async function POST() {
  const today = new Date().toISOString().slice(0, 10) // YYYY-MM-DD
  const todayKey = `visitors:${today}`

  const [total, todayCount] = await Promise.all([
    kv.incr('visitors:total'),
    kv.incr(todayKey),
  ])

  // 오늘 키는 자정 이후 만료 (86400초)
  await kv.expire(todayKey, 86400)

  return NextResponse.json({ total, today: todayCount })
}

export async function GET() {
  const today = new Date().toISOString().slice(0, 10)

  const [total, todayCount] = await Promise.all([
    kv.get<number>('visitors:total'),
    kv.get<number>(`visitors:${today}`),
  ])

  return NextResponse.json({ total: total ?? 0, today: todayCount ?? 0 })
}
