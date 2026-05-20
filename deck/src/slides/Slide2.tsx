import { motion } from 'framer-motion'

const row1 = [
  { year: '2017', label: 'The Exams', text: 'NDA cleared. JEE Mains cleared. NEET cleared.', note: 'No govt seat. No gap year.', color: 'var(--sky)', icon: '🎯' },
  { year: '2017', label: 'Ukraine', text: 'MBBS — National Medical University, Kyiv', note: 'Life had other plans.', color: 'var(--teal)', icon: '✈' },
  { year: '2020', label: 'COVID', text: 'US pathway shut overnight.', note: 'Adapt or stop.', color: 'var(--amber)', icon: '⚡' },
  { year: '2022', label: 'Ukr-Russia War', text: 'Evacuated mid-degree. India refused to recognise it.', note: 'Three doors, all closed.', color: '#f87171', icon: '🔀' },
  { year: '2023', label: 'FMGE', text: 'Foreign Medical Graduate Exam — cleared.', note: 'India said yes, finally.', color: 'var(--sky)', icon: '🩺' },
]

const row2 = [
  { year: '2024', label: 'Clinical Practice', text: 'Northern Railway Central Hospital → BLK-MAX Superspeciality Hospital.', note: 'Practiced. Observed. Got frustrated with the gaps.', color: 'var(--sky)', icon: '🏥' },
  { year: '2024', label: 'IIT Delhi', text: 'Executive MBA — Valedictorian.', note: 'Framework to build at scale.', color: 'var(--teal)', icon: '🏛' },
  { year: '2024', label: 'Jagriti Yatra', text: '8,000 km across India. 500 entrepreneurs.', note: 'Enterprise-grade business development.', color: 'var(--amber)', icon: '🚂' },
  { year: '2024', label: 'OMLAS Fellow', text: 'OMLAS Fellowship Champion.', note: 'Sustainability & enterprise leadership.', color: 'var(--sky)', icon: '🏆' },
  { year: '2025', label: 'AI Builder', text: 'AI Catalyst & Accelerator Fellow. Built monetised products.', note: '40+ physicians trained. Network that soars.', color: 'var(--teal)', icon: '🤖' },
]

function Card({ m, delay }: { m: typeof row1[0]; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, type: 'spring' as const, stiffness: 240, damping: 26 }}
      style={{
        background: 'rgba(15,20,32,0.9)',
        border: `1px solid ${m.color}20`,
        borderTop: `2px solid ${m.color}`,
        borderRadius: 14,
        padding: '18px 20px',
        display: 'flex', flexDirection: 'column', gap: 6,
        backdropFilter: 'blur(4px)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span className="label-caps" style={{ color: m.color, fontSize: 12 }}>{m.year}</span>
        <span style={{ fontSize: 17 }}>{m.icon}</span>
      </div>
      <p className="headline" style={{ fontSize: 18, color: m.color }}>{m.label}</p>
      <p className="subhead" style={{ fontSize: 16, lineHeight: 1.45 }}>{m.text}</p>
      <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontSize: 13, color: 'var(--muted)', marginTop: 'auto' }}>{m.note}</p>
    </motion.div>
  )
}

export default function Slide2() {
  return (
    <div className="slide" style={{ justifyContent: 'space-between', padding: '56px 80px' }}>
      {/* Certificate bleed background */}
      {[
        { top: '4%', left: '2%', w: 220, h: 155, rot: -8 },
        { top: '10%', left: '16%', w: 190, h: 135, rot: 4 },
        { top: '2%', left: '36%', w: 200, h: 145, rot: -3 },
        { top: '8%', left: '54%', w: 210, h: 150, rot: 6 },
        { top: '3%', left: '72%', w: 195, h: 140, rot: -5 },
        { top: '6%', left: '88%', w: 185, h: 130, rot: 3 },
        { top: '68%', left: '0%', w: 210, h: 148, rot: 5 },
        { top: '72%', left: '14%', w: 195, h: 138, rot: -4 },
        { top: '65%', left: '30%', w: 205, h: 145, rot: 7 },
        { top: '70%', left: '50%', w: 190, h: 132, rot: -6 },
        { top: '66%', left: '68%', w: 215, h: 152, rot: 4 },
        { top: '71%', left: '84%', w: 200, h: 142, rot: -3 },
      ].map((c, i) => (
        <div key={i} style={{
          position: 'absolute', top: c.top, left: c.left,
          width: c.w, height: c.h,
          background: 'rgba(255,255,255,0.035)',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: 6, transform: `rotate(${c.rot}deg)`,
          pointerEvents: 'none',
        }} />
      ))}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(8,10,15,0.88)', pointerEvents: 'none' }} />
      <div className="dot-grid" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring' as const, stiffness: 240, damping: 26 }}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <p className="label-caps" style={{ marginBottom: 8 }}>My Journey</p>
        <h2 className="headline" style={{ fontSize: 50 }}>
          Life Closed Every Door.&nbsp;<span className="teal">I Built a New One.</span>
        </h2>
      </motion.div>

      {/* Row 1 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0 20px', position: 'relative', zIndex: 1 }}>
        {row1.map((m, i) => <Card key={i} m={m} delay={0.1 + i * 0.07} />)}
      </div>

      {/* Pivot divider */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
        style={{ display: 'flex', alignItems: 'center', gap: 16, position: 'relative', zIndex: 1 }}
      >
        <div style={{ flex: 1, height: 1, background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.1))' }} />
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10,
          background: 'rgba(245,158,11,0.1)',
          border: '1px solid rgba(245,158,11,0.25)',
          borderRadius: 999, padding: '6px 20px',
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
          <span style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: 13, color: 'var(--amber)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            The Pivot
          </span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
        <div style={{ flex: 1, height: 1, background: 'linear-gradient(to left, transparent, rgba(255,255,255,0.1))' }} />
      </motion.div>

      {/* Row 2 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0 20px', position: 'relative', zIndex: 1 }}>
        {row2.map((m, i) => <Card key={i} m={m} delay={0.55 + i * 0.07} />)}
      </div>

      <span className="slide-num" style={{ zIndex: 2 }}>02 / 07</span>
    </div>
  )
}
