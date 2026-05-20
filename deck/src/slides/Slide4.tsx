import { motion } from 'framer-motion'
import { stagger, fadeUp } from './variants'

const tools = [
  { name: 'Stryker Mako', logo: './logos/stryker.png', tag: 'Robotic Arthroplasty', desc: 'AI surgical planning + robotic-arm assisted knee & hip replacement. 3,000+ systems installed globally, 2M+ procedures.', india: 'Apollo, Fortis, Medanta, Manipal', color: 'var(--teal)' },
  { name: 'Zimmer Biomet ROSA', logo: './logos/zimmerbiomet.png', tag: 'Knee & Hip', desc: 'AI-guided robotic surgery — ROSA Knee, ROSA Hip, ROSA Partial Knee. Launched in India via ZB Next (Mumbai + Delhi).', india: 'Live at select Indian centres', color: 'var(--sky)' },
  { name: 'Gleamer / BoneView', logo: './logos/gleamer.png', tag: 'AI Radiology', desc: 'Fracture detection on plain X-rays. Standalone AI: AUC 0.97, ~93% sensitivity. Cuts missed fractures by ~29% (FDA data).', india: 'Used in Indian radiology pipelines', color: 'var(--amber)' },
  { name: 'OrthoGrid Systems', logo: './logos/orthogrid.png', tag: 'Intraoperative', desc: 'AI imaging guidance for hip alignment and positioning. Acquired by Zimmer Biomet (2024) — now part of their India portfolio.', india: 'Via Zimmer Biomet India', color: 'var(--teal)' },
  { name: 'Meril Mizzo Endo 4000', logo: './logos/meril.png', tag: '🇮🇳 Made in India', desc: "India's first AI + 5G soft-tissue robotic system. Powered GEM Hospital's first 1,500-km dual-console telesurgery (Chennai ↔ Vapi, Apr 2026).", india: 'Live at Echelon Navi Mumbai · GEM Chennai (2026)', color: 'var(--amber)', highlight: true },
]

function ToolCard({ t }: { t: typeof tools[0] }) {
  return (
    <motion.div variants={fadeUp}
      className="card"
      style={{
        borderLeft: `3px solid ${t.color}`,
        borderRadius: 14,
        padding: '20px 24px',
        display: 'flex', gap: 0, flexDirection: 'column',
        ...(t.highlight ? { background: 'rgba(245,158,11,0.05)', borderColor: 'var(--amber)' } : {}),
      }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
        <img
          src={t.logo}
          alt={t.name}
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
          style={{ width: 40, height: 40, borderRadius: 8, objectFit: 'contain', background: '#fff', padding: 4, flexShrink: 0 }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 1, minWidth: 0 }}>
          <p className="headline" style={{ fontSize: 19, color: t.color, lineHeight: 1.15 }}>{t.name}</p>
          <span className="pill" style={{ fontSize: 10, background: `${t.color}15`, color: t.color, border: `1px solid ${t.color}20`, alignSelf: 'flex-start' }}>{t.tag}</span>
        </div>
      </div>
      <p className="subhead" style={{ fontSize: 16, lineHeight: 1.4 }}>{t.desc}</p>
      <p style={{ fontFamily: 'var(--font-head)', fontSize: 13, color: 'var(--muted)', marginTop: 'auto', paddingTop: 10, letterSpacing: '0.04em' }}>
        🏥 {t.india}
      </p>
    </motion.div>
  )
}

function BoneViewDemo() {
  return (
    <motion.div variants={fadeUp}
      className="card"
      style={{
        borderLeft: '3px solid var(--amber)',
        borderRadius: 14,
        padding: '18px 22px',
        display: 'flex', flexDirection: 'column', gap: 10,
      }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p className="headline" style={{ fontSize: 15, color: 'var(--amber)', letterSpacing: '0.04em' }}>
          BoneView · Live AI Detection
        </p>
        <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-head)', fontSize: 10, color: 'var(--teal)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--teal)', boxShadow: '0 0 6px var(--teal)' }} />
          Live
        </span>
      </div>

      {/* X-ray viewer — constrained height so card matches its neighbour */}
      <div style={{ flex: 1, minHeight: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg viewBox="0 0 280 160" preserveAspectRatio="xMidYMid meet"
          style={{ width: '100%', height: '100%', maxHeight: 180, borderRadius: 8, background: 'linear-gradient(160deg, #0a1018 0%, #050709 100%)', display: 'block' }}>
          <defs>
            <linearGradient id="bone" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#e7ecf2" stopOpacity="0.95"/>
              <stop offset="50%" stopColor="#c8d1da" stopOpacity="0.85"/>
              <stop offset="100%" stopColor="#9aa4b0" stopOpacity="0.75"/>
            </linearGradient>
            <filter id="glow"><feGaussianBlur stdDeviation="1.2"/></filter>
          </defs>

          {/* faint grid */}
          <g stroke="rgba(255,255,255,0.04)" strokeWidth="0.5">
            {[0,1,2,3,4,5].map(i => <line key={`h${i}`} x1="0" y1={i*32} x2="280" y2={i*32}/>)}
            {[0,1,2,3,4,5,6,7,8].map(i => <line key={`v${i}`} x1={i*35} y1="0" x2={i*35} y2="160"/>)}
          </g>

          {/* Radius (upper) — mid-shaft fracture */}
          <g filter="url(#glow)">
            <path d="M 20 55 Q 90 48, 150 56 L 152 70 Q 92 64, 18 70 Z" fill="url(#bone)"/>
            <path d="M 150 56 L 158 50 L 168 58 L 175 54 Q 220 60, 258 62 L 256 76 Q 218 74, 175 70 L 168 73 L 158 66 Z" fill="url(#bone)"/>
            <path d="M 152 49 L 158 78" stroke="#1a1f28" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
          </g>

          {/* Ulna (lower) — clean */}
          <g filter="url(#glow)">
            <path d="M 22 100 Q 100 95, 200 100 Q 240 102, 260 108 L 258 118 Q 238 113, 200 112 Q 100 107, 20 112 Z" fill="url(#bone)" opacity="0.88"/>
          </g>

          {/* Detection box — fracture site */}
          <g>
            <rect x="140" y="40" width="38" height="42" fill="none" stroke="var(--amber)" strokeWidth="1.5"/>
            {[
              'M 140 48 L 140 40 L 148 40',
              'M 178 40 L 178 48',
              'M 170 40 L 178 40',
              'M 140 74 L 140 82 L 148 82',
              'M 178 82 L 170 82',
              'M 178 74 L 178 82',
            ].map((d,i) => <path key={i} d={d} stroke="var(--amber)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>)}
            <rect x="140" y="24" width="56" height="14" fill="var(--amber)" rx="2"/>
            <text x="168" y="34" fontFamily="Space Grotesk, sans-serif" fontSize="9" fontWeight="700" fill="#0a0c11" textAnchor="middle" letterSpacing="0.05em">FX · 94%</text>
          </g>

          {/* Secondary review */}
          <g opacity="0.85">
            <rect x="42" y="50" width="34" height="22" fill="none" stroke="var(--teal)" strokeWidth="1" strokeDasharray="3 2"/>
            <text x="46" y="86" fontFamily="Space Grotesk, sans-serif" fontSize="8" fontWeight="600" fill="var(--teal)" letterSpacing="0.05em">REVIEW · 71%</text>
          </g>

          {/* Scan readout */}
          <text x="10" y="14" fontFamily="JetBrains Mono, monospace" fontSize="7" fill="rgba(255,255,255,0.4)" letterSpacing="0.1em">CR · FOREARM · AP</text>
          <text x="270" y="14" fontFamily="JetBrains Mono, monospace" fontSize="7" fill="rgba(255,255,255,0.4)" letterSpacing="0.1em" textAnchor="end">AI v2.3</text>

          {/* crosshair */}
          <g stroke="rgba(255,255,255,0.15)" strokeWidth="0.5">
            <line x1="159" y1="20" x2="159" y2="150"/>
            <line x1="10" y1="61" x2="270" y2="61"/>
          </g>
        </svg>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
        <p style={{ fontFamily: 'var(--font-head)', fontSize: 11, color: 'var(--muted)', letterSpacing: '0.04em' }}>
          Mid-shaft radius fracture · auto-flagged
        </p>
        <p style={{ fontFamily: 'var(--font-head)', fontSize: 11, color: 'var(--teal)', fontWeight: 600 }}>
          Sens 93% · AUC 0.97
        </p>
      </div>
    </motion.div>
  )
}

export default function Slide4() {
  // Slot order: Mako | ROSA | Gleamer | [DEMO] | OrthoGrid | MIZZO
  // Puts the BoneView demo directly beside the Gleamer/BoneView card.
  const slots: (number | 'demo')[] = [0, 1, 2, 'demo', 3, 4]

  return (
    <div className="slide" style={{ justifyContent: 'space-between' }}>
      <div className="dot-grid" />

      <motion.div variants={stagger(0.1)} initial="hidden" animate="show">
        <motion.p variants={fadeUp} className="label-caps" style={{ marginBottom: 14 }}>AI in Your Theatre</motion.p>
        <motion.h2 variants={fadeUp} className="headline" style={{ fontSize: 60 }}>
          These Are Already Inside<br />
          <span className="teal">Indian Operation Theatres.</span>
        </motion.h2>
      </motion.div>

      <motion.div variants={stagger(0.1)} initial="hidden" animate="show"
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px 28px', flex: 1, alignItems: 'stretch', marginTop: 20 }}>
        {slots.map((s, i) =>
          s === 'demo'
            ? <BoneViewDemo key="demo" />
            : <ToolCard key={tools[s].name + i} t={tools[s]} />
        )}
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
        style={{ background: 'var(--teal-dim)', border: '1px solid rgba(0,212,200,0.18)', borderRadius: 12, padding: '18px 28px', marginTop: 12 }}>
        <p className="subhead" style={{ fontSize: 22 }}>
          ₹8 crore buys you Mako. &nbsp;<span style={{ color: 'var(--teal)', fontWeight: 600 }}>A smartphone and your workflow</span>&nbsp; buys you what I build.
        </p>
      </motion.div>

      <p style={{
        position: 'absolute', bottom: 18, left: 80,
        fontFamily: 'var(--font-body)', fontSize: 10, color: 'var(--muted)',
        opacity: 0.55, letterSpacing: '0.04em', maxWidth: '70%',
      }}>
        Sources: stryker.com · zimmerbiomet.com · gleamer.ai · BW Healthcare World (May 2026) · Digital Health News · PMC peer-reviewed studies
      </p>

      <span className="slide-num">04 / 07</span>
    </div>
  )
}
