import * as fs from 'fs'
import * as path from 'path'
import matter from 'gray-matter'

const POSTS_DIR = path.join(process.cwd(), 'content/posts')
const OUT_DIR   = path.join(process.cwd(), 'public/thumbnails')

// ── Types ────────────────────────────────────────────────────────────────────

interface Colors {
  bg1: string; bg2: string; accent: string; accent2: string
}

// ── Category base colors ─────────────────────────────────────────────────────

const CAT_COLORS: Record<string, Colors> = {
  DevOps:       { bg1: '#0d1b2e', bg2: '#1a3d6b', accent: '#60a5fa', accent2: '#93c5fd' },
  Frontend:     { bg1: '#1a1033', bg2: '#3b1f7a', accent: '#c4b5fd', accent2: '#e9d5ff' },
  Backend:      { bg1: '#042712', bg2: '#155235', accent: '#6ee7b7', accent2: '#bbf7d0' },
  AI:           { bg1: '#1a0730', bg2: '#4a1070', accent: '#f0abfc', accent2: '#fae8ff' },
  General:      { bg1: '#1c1714', bg2: '#3d302a', accent: '#fbbf24', accent2: '#fde68a' },
  Architecture: { bg1: '#100e1e', bg2: '#2d2060', accent: '#fb923c', accent2: '#fed7aa' },
  DB:           { bg1: '#0e1a2e', bg2: '#1a3a5c', accent: '#38bdf8', accent2: '#7dd3fc' },
  Network:      { bg1: '#0f1e1a', bg2: '#1a3d32', accent: '#34d399', accent2: '#6ee7b7' },
}

// ── Pattern functions ────────────────────────────────────────────────────────

function pLayers(c: Colors): string {
  const boxes = [
    { x: 590, y: 170, w: 510, h: 82 },
    { x: 630, y: 280, w: 450, h: 82 },
    { x: 670, y: 390, w: 390, h: 82 },
  ]
  return boxes.map((b, i) => `
    <rect x="${b.x}" y="${b.y}" width="${b.w}" height="${b.h}" rx="14"
      fill="${c.accent}" fill-opacity="${0.06 + i * 0.05}"
      stroke="${c.accent}" stroke-width="1.5" stroke-opacity="${0.2 + i * 0.12}"/>
    <rect x="${b.x + 20}" y="${b.y + 20}" width="${b.w - 40}" height="${b.h - 40}" rx="6"
      fill="${c.accent}" fill-opacity="${0.04 + i * 0.03}"/>
    <circle cx="${b.x + 30}" cy="${b.y + b.h / 2}" r="5" fill="${c.accent}" fill-opacity="${0.35 + i * 0.1}"/>
    <circle cx="${b.x + 50}" cy="${b.y + b.h / 2}" r="5" fill="${c.accent}" fill-opacity="${0.25 + i * 0.08}"/>
  `).join('')
}

function pNetwork(c: Colors): string {
  const nodes = [
    { x: 840, y: 190, r: 26 }, { x: 990, y: 270, r: 18 }, { x: 700, y: 310, r: 18 },
    { x: 1060, y: 400, r: 16 }, { x: 830, y: 420, r: 22 }, { x: 660, y: 470, r: 16 },
    { x: 960, y: 490, r: 14 },
  ]
  const edges = [[0,1],[0,2],[1,3],[1,4],[2,4],[3,4],[4,5],[4,6],[2,5]]

  const lines = edges.map(([a, b]) =>
    `<line x1="${nodes[a].x}" y1="${nodes[a].y}" x2="${nodes[b].x}" y2="${nodes[b].y}"
      stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.2"/>`
  ).join('\n')

  const circles = nodes.map((n, i) => `
    <circle cx="${n.x}" cy="${n.y}" r="${n.r + 8}" fill="${c.accent}" fill-opacity="${i === 0 ? 0.1 : 0.07}"
      stroke="${c.accent}" stroke-width="1.5" stroke-opacity="${i === 0 ? 0.5 : 0.3}"/>
    <circle cx="${n.x}" cy="${n.y}" r="${n.r}" fill="${c.accent}" fill-opacity="${i === 0 ? 0.35 : 0.2}"/>
  `).join('')

  return lines + circles
}

function pTraces(c: Colors): string {
  const spans = [
    { x: 570, y: 185, w: 560 },
    { x: 630, y: 243, w: 400 },
    { x: 600, y: 301, w: 470 },
    { x: 690, y: 359, w: 240 },
    { x: 650, y: 417, w: 320 },
    { x: 700, y: 475, w: 190 },
    { x: 770, y: 475, w: 130 },
  ]
  return spans.map((s, i) => `
    <rect x="${s.x}" y="${s.y}" width="${s.w}" height="30" rx="15"
      fill="${c.accent}" fill-opacity="${0.07 + (i % 3) * 0.04}"
      stroke="${c.accent}" stroke-width="1" stroke-opacity="0.25"/>
    <rect x="${s.x}" y="${s.y}" width="4" height="30" rx="2" fill="${c.accent}" fill-opacity="0.5"/>
    <circle cx="${s.x + s.w - 15}" cy="${s.y + 15}" r="5" fill="${c.accent}" fill-opacity="0.3"/>
  `).join('')
}

function pChart(c: Colors): string {
  const pts: [number, number][] = [
    [580, 490], [660, 440], [740, 410], [820, 360], [900, 310], [980, 258], [1060, 220], [1120, 190],
  ]
  const polyline = pts.map(([x, y]) => `${x},${y}`).join(' ')
  const area = `580,520 ${polyline} 1120,520`

  const gridLines = [490, 410, 330, 250, 170].map(y =>
    `<line x1="570" y1="${y}" x2="1130" y2="${y}" stroke="${c.accent}" stroke-width="0.5" stroke-opacity="0.12"/>`
  ).join('\n')

  const dotMarkers = pts.map(([x, y]) => `
    <circle cx="${x}" cy="${y}" r="8" fill="${c.bg1}" stroke="${c.accent}" stroke-width="2.5" stroke-opacity="0.7"/>
    <circle cx="${x}" cy="${y}" r="3.5" fill="${c.accent}" fill-opacity="0.9"/>
  `).join('')

  return `
    ${gridLines}
    <polygon points="${area}" fill="${c.accent}" fill-opacity="0.06"/>
    <polyline points="${polyline}" fill="none" stroke="${c.accent}" stroke-width="3"
      stroke-linecap="round" stroke-linejoin="round" stroke-opacity="0.65"/>
    ${dotMarkers}
  `
}

function pBrowser(c: Colors): string {
  return `
    <rect x="570" y="145" width="570" height="380" rx="16"
      fill="${c.accent}" fill-opacity="0.04" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.25"/>
    <rect x="570" y="145" width="570" height="48" rx="16"
      fill="${c.accent}" fill-opacity="0.1"/>
    <rect x="570" y="177" width="570" height="16" fill="${c.accent}" fill-opacity="0.1"/>
    <circle cx="606" cy="169" r="7" fill="${c.accent}" fill-opacity="0.4"/>
    <circle cx="628" cy="169" r="7" fill="${c.accent}" fill-opacity="0.3"/>
    <circle cx="650" cy="169" r="7" fill="${c.accent}" fill-opacity="0.2"/>
    <rect x="678" y="157" width="280" height="24" rx="12"
      fill="${c.accent}" fill-opacity="0.1" stroke="${c.accent}" stroke-width="1" stroke-opacity="0.2"/>
    <rect x="600" y="222" width="460" height="14" rx="7" fill="${c.accent}" fill-opacity="0.1"/>
    <rect x="600" y="250" width="380" height="10" rx="5" fill="${c.accent}" fill-opacity="0.07"/>
    <rect x="600" y="274" width="420" height="10" rx="5" fill="${c.accent}" fill-opacity="0.07"/>
    <rect x="600" y="312" width="210" height="90" rx="10" fill="${c.accent}" fill-opacity="0.06"/>
    <rect x="826" y="312" width="234" height="90" rx="10" fill="${c.accent}" fill-opacity="0.06"/>
    <rect x="600" y="420" width="460" height="10" rx="5" fill="${c.accent}" fill-opacity="0.07"/>
    <rect x="600" y="446" width="330" height="10" rx="5" fill="${c.accent}" fill-opacity="0.05"/>
    <rect x="600" y="472" width="370" height="10" rx="5" fill="${c.accent}" fill-opacity="0.05"/>
  `
}

function pHexagons(c: Colors): string {
  function hex(cx: number, cy: number, r: number, op: number): string {
    const pts: string[] = []
    for (let i = 0; i < 6; i++) {
      const a = (Math.PI / 3) * i - Math.PI / 6
      pts.push(`${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`)
    }
    return `<polygon points="${pts.join(' ')}"
      fill="${c.accent}" fill-opacity="${op}"
      stroke="${c.accent}" stroke-width="1.5" stroke-opacity="${Math.min(op * 3, 0.6)}"/>`
  }

  const grid: [number, number, number, number][] = [
    [840, 215, 72, 0.09], [968, 287, 56, 0.07], [712, 287, 56, 0.07],
    [840, 359, 56, 0.11], [996, 399, 42, 0.06], [684, 399, 42, 0.06],
    [900, 455, 38, 0.07], [780, 455, 38, 0.07], [1030, 487, 32, 0.05],
  ]

  return grid.map(([cx, cy, r, op]) => hex(cx, cy, r, op)).join('\n')
}

function pFlow(c: Colors): string {
  return `
    <defs>
      <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0,0 L7,3 L0,6 Z" fill="${c.accent}" fill-opacity="0.55"/>
      </marker>
    </defs>
    <rect x="574" y="210" width="150" height="58" rx="10"
      fill="${c.accent}" fill-opacity="0.1" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.4"/>
    <line x1="728" y1="239" x2="784" y2="239" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.45" marker-end="url(#arr)"/>
    <rect x="788" y="210" width="150" height="58" rx="10"
      fill="${c.accent}" fill-opacity="0.15" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.5"/>
    <line x1="942" y1="239" x2="998" y2="239" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.45" marker-end="url(#arr)"/>
    <rect x="1002" y="210" width="130" height="58" rx="10"
      fill="${c.accent}" fill-opacity="0.2" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.6"/>
    <line x1="863" y1="268" x2="863" y2="340" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.4" marker-end="url(#arr)"/>
    <rect x="720" y="344" width="132" height="50" rx="10"
      fill="${c.accent}" fill-opacity="0.09" stroke="${c.accent}" stroke-width="1" stroke-opacity="0.3"/>
    <rect x="874" y="344" width="132" height="50" rx="10"
      fill="${c.accent}" fill-opacity="0.09" stroke="${c.accent}" stroke-width="1" stroke-opacity="0.3"/>
    <line x1="863" y1="340" x2="786" y2="344" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.3"/>
    <line x1="863" y1="340" x2="940" y2="344" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.3"/>
    <rect x="720" y="430" width="132" height="50" rx="10"
      fill="${c.accent}" fill-opacity="0.07" stroke="${c.accent}" stroke-width="1" stroke-opacity="0.2"/>
    <rect x="874" y="430" width="132" height="50" rx="10"
      fill="${c.accent}" fill-opacity="0.07" stroke="${c.accent}" stroke-width="1" stroke-opacity="0.2"/>
    <line x1="786" y1="394" x2="786" y2="430" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.25" marker-end="url(#arr)"/>
    <line x1="940" y1="394" x2="940" y2="430" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.25" marker-end="url(#arr)"/>
  `
}

function pNeural(c: Colors): string {
  const layers = [
    [{ x: 640, y: 220 }, { x: 640, y: 320 }, { x: 640, y: 420 }],
    [{ x: 820, y: 180 }, { x: 820, y: 270 }, { x: 820, y: 360 }, { x: 820, y: 450 }],
    [{ x: 1000, y: 240 }, { x: 1000, y: 360 }],
    [{ x: 1110, y: 300 }],
  ]

  const edges: string[] = []
  for (let li = 0; li < layers.length - 1; li++) {
    for (const a of layers[li]) {
      for (const b of layers[li + 1]) {
        edges.push(`<line x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}"
          stroke="${c.accent}" stroke-width="1" stroke-opacity="0.14"/>`)
      }
    }
  }

  const dots = layers.flat().map((n, i) => `
    <circle cx="${n.x}" cy="${n.y}" r="18" fill="${c.accent}" fill-opacity="0.1"
      stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.35"/>
    <circle cx="${n.x}" cy="${n.y}" r="9" fill="${c.accent}" fill-opacity="0.3"/>
  `).join('')

  return edges.join('\n') + dots
}

function pCode(c: Colors): string {
  const lines = [
    { w: 400, indent: 0 },   { w: 280, indent: 36 },  { w: 340, indent: 36 },
    { w: 190, indent: 72 },  { w: 260, indent: 72 },  { w: 140, indent: 36 },
    { w: 90,  indent: 0 },   { w: 360, indent: 0 },   { w: 240, indent: 36 },
    { w: 310, indent: 36 },  { w: 110, indent: 0 },
  ]
  const startY = 208

  return `
    <rect x="564" y="158" width="550" height="400" rx="14"
      fill="${c.accent}" fill-opacity="0.04" stroke="${c.accent}" stroke-width="1" stroke-opacity="0.2"/>
    <rect x="564" y="158" width="550" height="38" rx="14"
      fill="${c.accent}" fill-opacity="0.1"/>
    <rect x="564" y="184" width="550" height="12" fill="${c.accent}" fill-opacity="0.1"/>
    <circle cx="596" cy="177" r="6" fill="${c.accent}" fill-opacity="0.35"/>
    <circle cx="616" cy="177" r="6" fill="${c.accent}" fill-opacity="0.25"/>
    <circle cx="636" cy="177" r="6" fill="${c.accent}" fill-opacity="0.18"/>
    ${lines.map((l, i) => `
      <rect x="${592 + l.indent}" y="${startY + i * 32}" width="${l.w}" height="10" rx="5"
        fill="${c.accent}" fill-opacity="${i % 3 === 0 ? 0.14 : i % 3 === 1 ? 0.09 : 0.07}"/>
    `).join('')}
    <rect x="592" y="${startY + 10 * 32}" width="12" height="20" rx="2"
      fill="${c.accent}" fill-opacity="0.5"/>
  `
}

function pThreads(c: Colors): string {
  return Array.from({ length: 6 }, (_, t) => {
    const yBase = 185 + t * 55
    const phase = t * (Math.PI / 3)
    const pts: string[] = []
    for (let x = 570; x <= 1130; x += 18) {
      const y = yBase + 22 * Math.sin((x - 570) / 75 + phase)
      pts.push(`${x},${y.toFixed(1)}`)
    }
    return `<polyline points="${pts.join(' ')}"
      fill="none" stroke="${c.accent}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
      stroke-opacity="${0.12 + t * 0.07}"/>`
  }).join('\n')
}

function pShield(c: Colors): string {
  return `
    <path d="M 840 152 L 1050 218 L 1050 370 Q 1050 478 840 534 Q 630 478 630 370 L 630 218 Z"
      fill="${c.accent}" fill-opacity="0.07" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.28"/>
    <path d="M 840 196 L 1010 252 L 1010 372 Q 1010 462 840 508 Q 670 462 670 372 L 670 252 Z"
      fill="${c.accent}" fill-opacity="0.05" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.18"/>
    <path d="M 756 362 L 810 418 L 930 290"
      fill="none" stroke="${c.accent}" stroke-width="9" stroke-linecap="round"
      stroke-linejoin="round" stroke-opacity="0.48"/>
  `
}

function pSpring(c: Colors): string {
  return `
    <path d="M 840 320 Q 694 196 642 338 Q 694 484 840 320"
      fill="${c.accent}" fill-opacity="0.1" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.32"/>
    <path d="M 840 320 Q 986 196 1038 338 Q 986 484 840 320"
      fill="${c.accent}" fill-opacity="0.1" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.32"/>
    <circle cx="840" cy="320" r="32" fill="${c.accent}" fill-opacity="0.18"
      stroke="${c.accent}" stroke-width="2" stroke-opacity="0.5"/>
    <circle cx="840" cy="320" r="14" fill="${c.accent}" fill-opacity="0.5"/>
    <circle cx="796" cy="274" r="8" fill="${c.accent}" fill-opacity="0.25"/>
    <circle cx="884" cy="274" r="8" fill="${c.accent}" fill-opacity="0.25"/>
  `
}

function pGauge(c: Colors): string {
  const cx = 860, cy = 400, r = 195

  function arc(startDeg: number, endDeg: number, radius: number): string {
    const s = startDeg * Math.PI / 180
    const e = endDeg * Math.PI / 180
    const x1 = (cx + radius * Math.cos(s)).toFixed(1)
    const y1 = (cy + radius * Math.sin(s)).toFixed(1)
    const x2 = (cx + radius * Math.cos(e)).toFixed(1)
    const y2 = (cy + radius * Math.sin(e)).toFixed(1)
    const large = endDeg - startDeg > 180 ? 1 : 0
    return `M ${x1} ${y1} A ${radius} ${radius} 0 ${large} 1 ${x2} ${y2}`
  }

  const ticks = Array.from({ length: 11 }, (_, i) => {
    const angle = (210 + i * 12) * Math.PI / 180
    const r1 = 178, r2 = i % 5 === 0 ? 152 : 164
    return `<line
      x1="${(cx + r1 * Math.cos(angle)).toFixed(1)}" y1="${(cy + r1 * Math.sin(angle)).toFixed(1)}"
      x2="${(cx + r2 * Math.cos(angle)).toFixed(1)}" y2="${(cy + r2 * Math.sin(angle)).toFixed(1)}"
      stroke="${c.accent}" stroke-width="${i % 5 === 0 ? 2.5 : 1.5}"
      stroke-opacity="${i % 5 === 0 ? 0.5 : 0.28}"/>`
  }).join('\n')

  const needleAngle = 296 * Math.PI / 180
  return `
    <path d="${arc(210, 330, 182)}"
      fill="none" stroke="${c.accent}" stroke-width="18" stroke-linecap="round" stroke-opacity="0.1"/>
    <path d="${arc(210, 296, 182)}"
      fill="none" stroke="${c.accent}" stroke-width="18" stroke-linecap="round" stroke-opacity="0.38"/>
    ${ticks}
    <line x1="${cx}" y1="${cy}"
          x2="${(cx + 152 * Math.cos(needleAngle)).toFixed(1)}"
          y2="${(cy + 152 * Math.sin(needleAngle)).toFixed(1)}"
      stroke="${c.accent}" stroke-width="4" stroke-linecap="round" stroke-opacity="0.7"/>
    <circle cx="${cx}" cy="${cy}" r="14" fill="${c.accent}" fill-opacity="0.45"/>
    <circle cx="${cx}" cy="${cy}" r="5" fill="${c.accent}" fill-opacity="0.9"/>
  `
}

function pDocker(c: Colors): string {
  const boxes = [
    { x: 620, y: 192, w: 88, h: 72 },
    { x: 716, y: 192, w: 88, h: 72 },
    { x: 812, y: 192, w: 88, h: 72 },
    { x: 668, y: 272, w: 88, h: 72 },
    { x: 764, y: 272, w: 88, h: 72 },
    { x: 716, y: 352, w: 88, h: 72 },
  ]
  return boxes.map((b, i) => `
    <rect x="${b.x}" y="${b.y}" width="${b.w}" height="${b.h}" rx="8"
      fill="${c.accent}" fill-opacity="${0.07 + i * 0.025}"
      stroke="${c.accent}" stroke-width="1.5" stroke-opacity="${0.22 + i * 0.05}"/>
    <rect x="${b.x + 12}" y="${b.y + 14}" width="18" height="14" rx="3"
      fill="${c.accent}" fill-opacity="${0.2 + i * 0.04}"/>
    <rect x="${b.x + 38}" y="${b.y + 14}" width="18" height="14" rx="3"
      fill="${c.accent}" fill-opacity="${0.2 + i * 0.04}"/>
    <rect x="${b.x + 12}" y="${b.y + 36}" width="64" height="4" rx="2"
      fill="${c.accent}" fill-opacity="${0.12 + i * 0.02}"/>
    <rect x="${b.x + 12}" y="${b.y + 46}" width="44" height="4" rx="2"
      fill="${c.accent}" fill-opacity="${0.1}"/>
  `).join('')
}

// ── Pattern map ──────────────────────────────────────────────────────────────

type PatternKey = 'layers' | 'network' | 'traces' | 'chart' | 'browser' |
                  'hexagons' | 'flow' | 'neural' | 'code' | 'threads' |
                  'shield' | 'spring' | 'gauge' | 'docker'

const PATTERN_FNS: Record<PatternKey, (c: Colors) => string> = {
  layers:   pLayers,
  network:  pNetwork,
  traces:   pTraces,
  chart:    pChart,
  browser:  pBrowser,
  hexagons: pHexagons,
  flow:     pFlow,
  neural:   pNeural,
  code:     pCode,
  threads:  pThreads,
  shield:   pShield,
  spring:   pSpring,
  gauge:    pGauge,
  docker:   pDocker,
}

// ── Post → config mapping ────────────────────────────────────────────────────

interface PostConfig {
  pattern: PatternKey
  colors?: Partial<Colors>
}

const POST_CONFIGS: Record<string, PostConfig> = {
  'docker-image-and-container':     { pattern: 'docker' },
  'docker-image-build':             { pattern: 'layers' },
  'docker-volume':                  { pattern: 'docker',   colors: { accent: '#34d399', accent2: '#6ee7b7' } },
  'docker-network':                 { pattern: 'network' },
  'docker-compose':                 { pattern: 'flow' },
  'docker-swarm':                   { pattern: 'network',  colors: { bg1: '#0a1628', bg2: '#1a3a6e', accent: '#93c5fd' } },
  'opentelemetry':                  { pattern: 'traces' },
  'prometheus-intro':               { pattern: 'chart' },
  'grafana-intro':                  { pattern: 'gauge',    colors: { accent: '#f97316', accent2: '#fdba74' } },
  'prometheus-grafana-integration': { pattern: 'chart',    colors: { accent: '#fb923c', accent2: '#fde68a' } },
  'zero-downtime-deployment':       { pattern: 'flow',     colors: { accent: '#4ade80', accent2: '#86efac' } },
  'forward-reverse-proxy':          { pattern: 'flow' },
  'nginx-upstream':                 { pattern: 'flow',     colors: { bg1: '#0d1b2e', bg2: '#1a3d6b', accent: '#60a5fa', accent2: '#93c5fd' } },
  'hexagonal-architecture':         { pattern: 'hexagons' },
  'ddd-bounded-context':            { pattern: 'hexagons', colors: { accent: '#6ee7b7', accent2: '#a7f3d0' } },
  'cqrs-pattern':                   { pattern: 'flow',     colors: { accent: '#86efac', accent2: '#d1fae5' } },
  'anemic-domain-model':            { pattern: 'layers',   colors: { accent: '#6ee7b7' } },
  'java-interface-default-method':  { pattern: 'code' },
  'java-wait-notify':               { pattern: 'threads' },
  'java21-virtual-threads':         { pattern: 'threads',  colors: { accent: '#4ade80', accent2: '#86efac' } },
  'concurrency-and-fiber':          { pattern: 'threads',  colors: { accent: '#34d399', accent2: '#6ee7b7' } },
  'synchronized-volatile':          { pattern: 'threads',  colors: { accent: '#a3e635', accent2: '#d9f99d' } },
  'spring-dependency':              { pattern: 'spring',   colors: { accent: '#4ade80', accent2: '#86efac' } },
  'graphql':                        { pattern: 'network',  colors: { bg1: '#1a0b2e', bg2: '#3d1773', accent: '#e879f9', accent2: '#f5d0fe' } },
  'http-status-code':               { pattern: 'chart',    colors: { bg1: '#0d1b2e', bg2: '#1a3d6b', accent: '#60a5fa', accent2: '#93c5fd' } },
  'sse':                            { pattern: 'flow',     colors: { bg1: '#0d1b2e', bg2: '#1a3d6b', accent: '#38bdf8', accent2: '#7dd3fc' } },
  'msa':                            { pattern: 'network',  colors: { bg1: '#1a0b2e', bg2: '#2d1b69', accent: '#a78bfa', accent2: '#ddd6fe' } },
  'tcp-handshake':                  { pattern: 'layers',   colors: { bg1: '#0d2e1b', bg2: '#1a5235', accent: '#4ade80', accent2: '#86efac' } },
  'sync-async-blocking':            { pattern: 'threads',  colors: { bg1: '#1a1033', bg2: '#3b1f7a', accent: '#c4b5fd', accent2: '#e9d5ff' } },
  'timeseries-db':                  { pattern: 'chart',    colors: { bg1: '#0d1b2e', bg2: '#1a3d6b', accent: '#34d399', accent2: '#6ee7b7' } },
  'engineering-cost':               { pattern: 'gauge',    colors: { bg1: '#1c1714', bg2: '#3d302a', accent: '#fbbf24', accent2: '#fde68a' } },
  'transaction-boundary':           { pattern: 'flow',     colors: { bg1: '#042712', bg2: '#155235', accent: '#6ee7b7', accent2: '#bbf7d0' } },
  'optimistic-pessimistic-update':  { pattern: 'browser',  colors: { bg1: '#1a1033', bg2: '#3b1f7a', accent: '#c4b5fd', accent2: '#e9d5ff' } },
  'kubernetes-basics':              { pattern: 'network',  colors: { bg1: '#0d1b2e', bg2: '#1a3d6b', accent: '#60a5fa', accent2: '#93c5fd' } },
  'redis-caching-strategy':         { pattern: 'layers',   colors: { bg1: '#042712', bg2: '#155235', accent: '#6ee7b7', accent2: '#bbf7d0' } },
  'react-server-components':        { pattern: 'browser',  colors: { bg1: '#1a1033', bg2: '#3b1f7a', accent: '#c4b5fd', accent2: '#e9d5ff' } },
  'java-gc-deep-dive':              { pattern: 'threads',  colors: { bg1: '#042712', bg2: '#155235', accent: '#6ee7b7', accent2: '#bbf7d0' } },
  'react-fiber':                    { pattern: 'neural',   colors: { bg1: '#1a1033', bg2: '#3b1f7a', accent: '#c4b5fd', accent2: '#e9d5ff' } },
  'react-state-no-rerender':        { pattern: 'code',     colors: { bg1: '#1a1033', bg2: '#3b1f7a', accent: '#c4b5fd', accent2: '#e9d5ff' } },
  'react-memoization':              { pattern: 'layers',   colors: { bg1: '#1a1033', bg2: '#3b1f7a', accent: '#c4b5fd', accent2: '#e9d5ff' } },
  'react-library-or-framework':     { pattern: 'flow',     colors: { bg1: '#1a1033', bg2: '#3b1f7a', accent: '#c4b5fd', accent2: '#e9d5ff' } },
  'semaphore-mutex':                { pattern: 'threads',  colors: { bg1: '#042712', bg2: '#155235', accent: '#6ee7b7', accent2: '#bbf7d0' } },
  'db-replication':                 { pattern: 'network',  colors: { bg1: '#0e1a2e', bg2: '#1a3a5c', accent: '#38bdf8', accent2: '#7dd3fc' } },
  'git-merge-rebase-pull':          { pattern: 'flow',     colors: { bg1: '#1c1714', bg2: '#3d302a', accent: '#fbbf24', accent2: '#fde68a' } },
  'mcp-model-context-protocol':     { pattern: 'neural',   colors: { bg1: '#1a0730', bg2: '#4a1070', accent: '#f0abfc', accent2: '#fae8ff' } },
  'spring-cloud-gateway':           { pattern: 'flow',     colors: { bg1: '#042712', bg2: '#155235', accent: '#6ee7b7', accent2: '#bbf7d0' } },
  'yaml':                           { pattern: 'code',     colors: { bg1: '#1c1714', bg2: '#3d302a', accent: '#fbbf24', accent2: '#fde68a' } },
  'cicd-pipeline':                  { pattern: 'flow',     colors: { bg1: '#0d1b2e', bg2: '#1a3d6b', accent: '#60a5fa', accent2: '#93c5fd' } },
  'axios-vs-fetch':                 { pattern: 'network',  colors: { bg1: '#1a1033', bg2: '#3b1f7a', accent: '#c4b5fd', accent2: '#e9d5ff' } },
  'nat':                            { pattern: 'network',  colors: { bg1: '#0d1b2e', bg2: '#1a3d6b', accent: '#60a5fa', accent2: '#93c5fd' } },
  'java-call-by-value':             { pattern: 'code',     colors: { bg1: '#042712', bg2: '#155235', accent: '#6ee7b7', accent2: '#bbf7d0' } },
  'sql-injection':                  { pattern: 'shield',   colors: { bg1: '#1a0a0a', bg2: '#4a1010', accent: '#f87171', accent2: '#fecaca' } },
  'xss':                            { pattern: 'shield',   colors: { bg1: '#1a0f0a', bg2: '#4a2510', accent: '#fb923c', accent2: '#fed7aa' } },
  'decorator-pattern':              { pattern: 'layers',   colors: { bg1: '#100e1e', bg2: '#2d2060', accent: '#fb923c', accent2: '#fed7aa' } },
  'factory-method-pattern':         { pattern: 'flow',     colors: { bg1: '#100e1e', bg2: '#2d2060', accent: '#fb923c', accent2: '#fed7aa' } },
  'db-connection-pool':             { pattern: 'chart',    colors: { bg1: '#042712', bg2: '#155235', accent: '#6ee7b7', accent2: '#bbf7d0' } },
  'spring-boot-event':              { pattern: 'spring',   colors: { bg1: '#042712', bg2: '#155235', accent: '#4ade80', accent2: '#86efac' } },
  'orval':                          { pattern: 'code',     colors: { bg1: '#1a1033', bg2: '#3b1f7a', accent: '#c4b5fd', accent2: '#e9d5ff' } },
  'configuration-properties':       { pattern: 'spring',   colors: { bg1: '#042712', bg2: '#155235', accent: '#6ee7b7', accent2: '#bbf7d0' } },
  'jenkins':                        { pattern: 'flow',     colors: { bg1: '#1a1208', bg2: '#3d2a10', accent: '#fb923c', accent2: '#fed7aa' } },
  'message-queue':                  { pattern: 'flow',     colors: { bg1: '#042712', bg2: '#155235', accent: '#4ade80', accent2: '#86efac' } },
  'kafka':                          { pattern: 'network',  colors: { bg1: '#0a0f1a', bg2: '#1a2a4a', accent: '#60a5fa', accent2: '#93c5fd' } },
  'ssh':                            { pattern: 'shield',   colors: { bg1: '#0d1b2e', bg2: '#1a3d6b', accent: '#60a5fa', accent2: '#93c5fd' } },
  'ftp-sftp':                       { pattern: 'flow',     colors: { bg1: '#0d1b2e', bg2: '#1a3d6b', accent: '#38bdf8', accent2: '#7dd3fc' } },
  'postgresql-pg-hba':              { pattern: 'shield',   colors: { bg1: '#0e1a2e', bg2: '#1a3a5c', accent: '#38bdf8', accent2: '#7dd3fc' } },
  'elk-stack':                      { pattern: 'traces',   colors: { bg1: '#0d1b2e', bg2: '#1a3d6b', accent: '#60a5fa', accent2: '#93c5fd' } },
  'linux-chmod':                    { pattern: 'shield',   colors: { bg1: '#0d1b2e', bg2: '#1a3d6b', accent: '#60a5fa', accent2: '#93c5fd' } },
  'monorepo':                       { pattern: 'layers',   colors: { bg1: '#1c1714', bg2: '#3d302a', accent: '#fbbf24', accent2: '#fde68a' } },
  'validation':                     { pattern: 'shield',   colors: { bg1: '#042712', bg2: '#155235', accent: '#6ee7b7', accent2: '#bbf7d0' } },
  'java-classloader':               { pattern: 'layers',   colors: { bg1: '#042712', bg2: '#155235', accent: '#6ee7b7', accent2: '#bbf7d0' } },
  'coupling-cohesion':              { pattern: 'layers',   colors: { bg1: '#1c1714', bg2: '#3d302a', accent: '#fbbf24', accent2: '#fde68a' } },
  'css-font-metrics':               { pattern: 'browser',  colors: { bg1: '#1a1033', bg2: '#3b1f7a', accent: '#c4b5fd', accent2: '#e9d5ff' } },
  'headless-ui':                    { pattern: 'browser',  colors: { bg1: '#1a1033', bg2: '#3b1f7a', accent: '#c4b5fd', accent2: '#e9d5ff' } },
  'tanstack-use-infinite-query':    { pattern: 'flow',     colors: { bg1: '#1a1033', bg2: '#3b1f7a', accent: '#c4b5fd', accent2: '#e9d5ff' } },
  'jwt':                            { pattern: 'shield',   colors: { bg1: '#042712', bg2: '#155235', accent: '#6ee7b7', accent2: '#bbf7d0' } },
  'aws-s3':                         { pattern: 'network',  colors: { bg1: '#0d1b2e', bg2: '#1a3d6b', accent: '#60a5fa', accent2: '#93c5fd' } },
  'grpc':                           { pattern: 'network',  colors: { bg1: '#042712', bg2: '#155235', accent: '#6ee7b7', accent2: '#bbf7d0' } },
  'git-tag-versioning-release':     { pattern: 'flow',     colors: { bg1: '#1c1714', bg2: '#3d302a', accent: '#fbbf24', accent2: '#fde68a' } },
  'react-suspense':                 { pattern: 'browser',  colors: { bg1: '#1a1033', bg2: '#3b1f7a', accent: '#c4b5fd', accent2: '#e9d5ff' } },
  'react-use-promise':              { pattern: 'browser',  colors: { bg1: '#1a1033', bg2: '#3b1f7a', accent: '#c4b5fd', accent2: '#e9d5ff' } },
  'react-error-boundary':           { pattern: 'shield',   colors: { bg1: '#1a1033', bg2: '#3b1f7a', accent: '#c4b5fd', accent2: '#e9d5ff' } },
  'dispatcher-servlet':             { pattern: 'flow',     colors: { bg1: '#042712', bg2: '#155235', accent: '#6ee7b7', accent2: '#bbf7d0' } },
  'load-balancing':                 { pattern: 'network',  colors: { bg1: '#0f1e1a', bg2: '#1a3d32', accent: '#34d399', accent2: '#6ee7b7' } },
  'oauth':                          { pattern: 'shield',   colors: { bg1: '#042712', bg2: '#155235', accent: '#6ee7b7', accent2: '#bbf7d0' } },
  'code-review':                    { pattern: 'code',     colors: { bg1: '#1c1714', bg2: '#3d302a', accent: '#fbbf24', accent2: '#fde68a' } },
  'claude-mythos':                  { pattern: 'neural',   colors: { bg1: '#1a0730', bg2: '#4a1070', accent: '#f0abfc', accent2: '#fae8ff' } },
  'claude-token-optimization':      { pattern: 'neural',   colors: { bg1: '#1a0730', bg2: '#4a1070', accent: '#f0abfc', accent2: '#fae8ff' } },
  'strategy-pattern':               { pattern: 'layers',   colors: { bg1: '#100e1e', bg2: '#2d2060', accent: '#fb923c', accent2: '#fed7aa' } },
  'spring-boot-4-features':         { pattern: 'spring' },
  'spring-http-clients-comparison': { pattern: 'flow',     colors: { accent: '#6ee7b7' } },
  'tree-shaking':                   { pattern: 'network',  colors: { bg1: '#0f1a2e', bg2: '#1e3460', accent: '#7dd3fc', accent2: '#bae6fd' } },
  'browser-rendering':              { pattern: 'browser' },
  'transpiling':                    { pattern: 'code',     colors: { bg1: '#0f1a2e', bg2: '#1e3460', accent: '#93c5fd', accent2: '#bfdbfe' } },
  'bundler':                        { pattern: 'layers',   colors: { bg1: '#0f1a2e', bg2: '#1e3460', accent: '#7dd3fc', accent2: '#bae6fd' } },
  'react-ts-falsy':                 { pattern: 'neural',   colors: { bg1: '#1a1033', bg2: '#3b1f7a', accent: '#c4b5fd', accent2: '#e9d5ff' } },
  'csr-vs-ssr':                     { pattern: 'browser',  colors: { accent: '#e9d5ff', accent2: '#f3e8ff' } },
  'web-vitals':                     { pattern: 'gauge' },
  'react-use-effect-event':         { pattern: 'neural',   colors: { bg1: '#0d1b33', bg2: '#1e3a6e', accent: '#7dd3fc', accent2: '#bae6fd' } },
  'package-manager':                { pattern: 'layers',   colors: { bg1: '#0f1a2e', bg2: '#1e3460', accent: '#7dd3fc', accent2: '#bae6fd' } },
  'bun':                            { pattern: 'code',     colors: { bg1: '#1c0d0a', bg2: '#4a1a10', accent: '#fb923c', accent2: '#fed7aa' } },
  'zod':                            { pattern: 'shield' },
  'fsd-architecture':               { pattern: 'layers',   colors: { accent: '#c4b5fd' } },
  'typescript-utility-types':       { pattern: 'code',     colors: { accent: '#93c5fd', accent2: '#bfdbfe' } },
  'ai-vibe-coding-architecture':    { pattern: 'neural' },
  'claude-superpowers-plugin':      { pattern: 'shield',   colors: { bg1: '#1a0730', bg2: '#4a1070', accent: '#f0abfc' } },
  'claude-computer-use-2026':       { pattern: 'browser',  colors: { bg1: '#1a0730', bg2: '#4a1070', accent: '#f0abfc', accent2: '#fae8ff' } },
  'claude-code-channels':           { pattern: 'network',  colors: { bg1: '#1a0730', bg2: '#4a1070', accent: '#c4b5fd' } },
  'gstack':                         { pattern: 'network',  colors: { bg1: '#1a0730', bg2: '#4a1070', accent: '#e879f9' } },
  'claude-skills-superpowers':      { pattern: 'shield',   colors: { bg1: '#1a0730', bg2: '#3b1070', accent: '#e879f9' } },
}

// ── Title wrapping ───────────────────────────────────────────────────────────

function wrapTitle(title: string): string[] {
  const MAX = 22

  // Korean em-dash '—' separator: split on ' — '
  const dashIdx = title.indexOf(' — ')
  if (dashIdx > 0 && dashIdx <= MAX + 2) {
    const p1 = title.substring(0, dashIdx)
    const p2 = title.substring(dashIdx + 3)
    if (p1.length <= MAX + 2 && p2.length <= MAX + 6) return [p1, p2]
  }

  if (title.length <= MAX) return [title]

  // Break near midpoint at a space
  const mid = Math.floor(title.length / 2)
  let idx = title.lastIndexOf(' ', mid + 4)
  if (idx < mid - 6) idx = title.indexOf(' ', mid)
  if (idx === -1) return [title.substring(0, MAX), title.substring(MAX)]

  return [title.substring(0, idx), title.substring(idx + 1)]
}

// ── SVG generator ─────────────────────────────────────────────────────────────

function generateSVG(slug: string, title: string, category: string): string {
  const base   = CAT_COLORS[category] ?? CAT_COLORS.General
  const config = POST_CONFIGS[slug]
  const colors: Colors = config?.colors ? { ...base, ...config.colors } : { ...base }
  const fn     = PATTERN_FNS[config?.pattern ?? 'code']
  const pat    = fn(colors)

  const lines    = wrapTitle(title)
  const fontSize = lines[0].length > 20 ? 34 : lines[0].length > 14 ? 40 : 46
  const titleY   = lines.length === 1 ? 546 : 516
  const badgeW   = category.length * 10 + 28

  // Escape XML special chars in title
  const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${colors.bg1}"/>
      <stop offset="100%" stop-color="${colors.bg2}"/>
    </linearGradient>
    <linearGradient id="lf" x1="100%" y1="0%" x2="20%" y2="0%">
      <stop offset="0%"   stop-color="${colors.bg1}" stop-opacity="0"/>
      <stop offset="55%"  stop-color="${colors.bg1}" stop-opacity="0.82"/>
      <stop offset="100%" stop-color="${colors.bg1}" stop-opacity="1"/>
    </linearGradient>
    <linearGradient id="bf" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%"   stop-color="${colors.bg2}" stop-opacity="0"/>
      <stop offset="100%" stop-color="${colors.bg1}" stop-opacity="0.9"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- Pattern -->
  ${pat}

  <!-- Left & bottom fade overlays -->
  <rect width="1200" height="630" fill="url(#lf)"/>
  <rect width="1200" height="630" fill="url(#bf)"/>

  <!-- Category badge -->
  <rect x="60" y="52" width="${badgeW}" height="32" rx="16"
    fill="${colors.accent}" fill-opacity="0.15"
    stroke="${colors.accent}" stroke-width="1" stroke-opacity="0.5"/>
  <text x="74" y="73"
    font-family="system-ui,-apple-system,Segoe UI,sans-serif"
    font-size="13" font-weight="700" letter-spacing="2.5"
    fill="${colors.accent}" fill-opacity="0.95">${esc(category.toUpperCase())}</text>

  <!-- Title -->
  ${lines.map((line, i) => `
  <text x="60" y="${titleY + i * (fontSize + 6)}"
    font-family="system-ui,-apple-system,Segoe UI,sans-serif"
    font-size="${fontSize}" font-weight="800"
    fill="white" fill-opacity="0.95">${esc(line)}</text>`).join('')}
</svg>`
}

// ── Main ──────────────────────────────────────────────────────────────────────

function main() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true })

  const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.mdx'))
  let count = 0

  for (const file of files) {
    const slug    = file.replace('.mdx', '')
    const filePath = path.join(POSTS_DIR, file)
    const raw     = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(raw)

    const title    = (data.title as string) ?? slug
    const category = (data.category as string) ?? 'General'

    // Generate SVG
    const svg = generateSVG(slug, title, category)
    fs.writeFileSync(path.join(OUT_DIR, `${slug}.svg`), svg)

    // Update frontmatter if thumbnail not already set
    const thumbPath = `/thumbnails/${slug}.svg`
    if (data.thumbnail !== thumbPath) {
      data.thumbnail = thumbPath
      const updated = matter.stringify(`\n${content}`, data)
      fs.writeFileSync(filePath, updated)
    }

    count++
    console.log(`✓ ${slug}`)
  }

  console.log(`\nGenerated ${count} thumbnails → public/thumbnails/`)
}

main()
