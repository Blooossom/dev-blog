interface Props {
  title: string
  category: string
  tags?: string[]
}

const CAT: Record<string, { bg1: string; bg2: string; accent: string; accent2: string }> = {
  DevOps:       { bg1: '#0d1b2e', bg2: '#1a3d6b', accent: '#60a5fa',  accent2: '#93c5fd' },
  Frontend:     { bg1: '#1a1033', bg2: '#3b1f7a', accent: '#c4b5fd',  accent2: '#e9d5ff' },
  Backend:      { bg1: '#042712', bg2: '#155235', accent: '#6ee7b7',  accent2: '#bbf7d0' },
  AI:           { bg1: '#1a0730', bg2: '#4a1070', accent: '#f0abfc',  accent2: '#fae8ff' },
  General:      { bg1: '#1c1714', bg2: '#3d302a', accent: '#fbbf24',  accent2: '#fde68a' },
  Architecture: { bg1: '#100e1e', bg2: '#2d2060', accent: '#fb923c',  accent2: '#fed7aa' },
}

export default function FeaturedPostVisual({ title, category, tags = [] }: Props) {
  const c = CAT[category] ?? CAT.General
  const [main, sub] = title.split(' — ')

  return (
    <div
      className="w-full h-full relative overflow-hidden"
      style={{ background: `linear-gradient(145deg, ${c.bg1} 0%, ${c.bg2} 100%)` }}
    >
      {/* Subtle grid */}
      <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
        <defs>
          <pattern id="fpgrid" width="44" height="44" patternUnits="userSpaceOnUse">
            <path d="M44 0H0V44" fill="none" stroke="white" strokeWidth="0.4" strokeOpacity="0.08" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#fpgrid)" />
      </svg>

      {/* Glow orbs */}
      <div
        className="absolute -top-16 -right-16 w-64 h-64 rounded-full"
        style={{ background: c.accent, opacity: 0.12, filter: 'blur(60px)' }}
      />
      <div
        className="absolute top-1/3 -right-8 w-40 h-40 rounded-full"
        style={{ background: c.accent2, opacity: 0.08, filter: 'blur(40px)' }}
      />

      {/* Decorative rings */}
      <svg
        className="absolute top-10 right-10"
        width="160" height="160"
        viewBox="0 0 160 160"
        aria-hidden="true"
      >
        <circle cx="80" cy="80" r="72" fill="none" stroke={c.accent} strokeWidth="1" strokeOpacity="0.25" />
        <circle cx="80" cy="80" r="50" fill="none" stroke={c.accent} strokeWidth="1" strokeOpacity="0.18" />
        <circle cx="80" cy="80" r="28" fill="none" stroke={c.accent} strokeWidth="1.5" strokeOpacity="0.30" />
        <circle cx="80" cy="80" r="8"  fill={c.accent} fillOpacity="0.4" />
      </svg>

      {/* Decorative lines */}
      <svg
        className="absolute top-0 right-0 w-full h-full"
        viewBox="0 0 400 600"
        preserveAspectRatio="xMaxYMin meet"
        aria-hidden="true"
      >
        <line x1="380" y1="0" x2="200" y2="600" stroke={c.accent} strokeWidth="0.6" strokeOpacity="0.10" />
        <line x1="340" y1="0" x2="160" y2="600" stroke={c.accent} strokeWidth="0.4" strokeOpacity="0.07" />
      </svg>

      {/* Category badge */}
      <div className="absolute top-7 left-7">
        <span
          className="text-[11px] font-bold tracking-[2.5px] uppercase px-4 py-1.5 rounded-full border"
          style={{
            color: c.accent,
            borderColor: `${c.accent}55`,
            background: `${c.accent}18`,
          }}
        >
          {category}
        </span>
      </div>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="absolute top-1/2 -translate-y-1/2 left-7 flex flex-wrap gap-2 max-w-[85%]">
          {tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-medium tracking-wide px-2.5 py-1 rounded"
              style={{ background: `${c.accent}14`, color: `${c.accent2}` }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-2/3 pointer-events-none"
        style={{
          background: `linear-gradient(to top, ${c.bg1}f0 0%, ${c.bg1}90 40%, transparent 100%)`,
        }}
      />

      {/* Title */}
      <div className="absolute bottom-0 left-0 right-0 px-7 pb-8">
        <p className="text-[22px] font-extrabold leading-snug text-white mb-1 tracking-tight">
          {main}
        </p>
        {sub && (
          <p className="text-[14px] font-medium leading-relaxed" style={{ color: `${c.accent2}bb` }}>
            {sub}
          </p>
        )}
      </div>
    </div>
  )
}
