import { motion } from 'framer-motion'
import { stagger, fadeUp } from './variants'

export default function Slide7() {
  return (
    <div className="slide" style={{ padding: 0, flexDirection: 'row' }}>
      <div className="dot-grid" />

      {/* Left — full-height dark panel with headline */}
      <div style={{ width: '55%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '80px 72px', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 70% at 30% 55%, rgba(0,212,200,0.06) 0%, transparent 65%)', pointerEvents: 'none' }} />

        <motion.div variants={stagger(0.12)} initial="hidden" animate="show" style={{ position: 'relative', zIndex: 1 }}>
          <motion.p variants={fadeUp} className="label-caps" style={{ marginBottom: 32 }}>South Delhi Ortho Surgeons · May 2026</motion.p>

          <motion.h1 variants={fadeUp} className="display" style={{ fontSize: 68, lineHeight: 1.07 }}>
            You didn't go to medical school to explain discharge instructions at 11 PM.
          </motion.h1>

          <motion.div variants={fadeUp} style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <p className="headline" style={{ fontSize: 34, color: 'var(--teal)' }}>AI can take that off your plate.</p>
            <p className="subhead" style={{ fontSize: 26 }}>Let me show you.</p>
          </motion.div>

          <motion.div variants={fadeUp}
            style={{ marginTop: 44, background: 'var(--amber-dim)', border: '1px solid rgba(245,158,11,0.25)', borderRadius: 16, padding: '26px 32px' }}>
            <p className="headline" style={{ fontSize: 24, color: 'var(--amber)', lineHeight: 1.45 }}>
              If any of the three tools resonated —<br />
              walk up to me in the next 15 minutes.<br />
              <span style={{ color: 'var(--white)' }}>That's all it takes to start.</span>
            </p>
          </motion.div>

          <motion.p variants={fadeUp} className="subhead" style={{ fontSize: 18, marginTop: 28, fontStyle: 'italic' }}>
            "Healthcare doesn't have an algorithm problem. It has an implementation problem."
          </motion.p>
        </motion.div>
      </div>

      {/* Right — contact card */}
      <div style={{ flex: 1, height: '100%', display: 'flex', alignItems: 'center', padding: '60px 72px 60px 40px', borderLeft: '1px solid var(--border)' }}>
        <motion.div
          initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, type: 'spring' as const, stiffness: 200, damping: 24 }}
          style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 28 }}
        >
          {/* Name + title */}
          <div>
            <p className="display" style={{ fontSize: 46, lineHeight: 1.1 }}>Dr. Piyush Malik</p>
            <p className="subhead" style={{ fontSize: 20, marginTop: 8 }}>Clinical AI Strategist &amp; Architect</p>
          </div>

          <div className="divider" />

          {/* Credential pills */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <p className="label-caps" style={{ marginBottom: 4 }}>Background</p>
            {[
              { label: 'MBBS · BLK-MAX Hospital', color: 'var(--sky)' },
              { label: 'IIT Delhi MBA · Valedictorian', color: 'var(--teal)' },
              { label: 'AI Catalyst Fellow 2026', color: 'var(--amber)' },
              { label: 'AI Accelerator Fellow 2026', color: 'var(--amber)' },
              { label: 'OMLAS Fellow Champion', color: 'var(--sky)' },
            ].map(c => (
              <span key={c.label} className="pill" style={{ background: `${c.color}12`, color: c.color, border: `1px solid ${c.color}20`, fontSize: 14, alignSelf: 'flex-start' }}>{c.label}</span>
            ))}
          </div>

          <div className="divider" />

          {/* Contact */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <p className="label-caps" style={{ marginBottom: 4 }}>Connect</p>
            <p className="subhead" style={{ fontSize: 20 }}>drmalikpiyush@gmail.com</p>
            <p className="subhead" style={{ fontSize: 20 }}>+91 98116 96473</p>
            <p style={{ color: 'var(--teal)', fontFamily: 'var(--font-head)', fontWeight: 600, fontSize: 20 }}>meetdrmalik.com</p>
          </div>

          {/* QR + scan prompt */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <div style={{
              width: 140, height: 140, borderRadius: 12,
              border: '1px solid var(--border)', background: '#fff',
              padding: 8, flexShrink: 0,
            }}>
              <img
                src="./qr.png"
                alt="Scan to message Dr. Piyush Malik on WhatsApp"
                style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <p className="headline" style={{ fontSize: 20, color: 'var(--white)' }}>Scan to connect</p>
              <p className="subhead" style={{ fontSize: 16 }}>Direct WhatsApp message.<br />No forms, no delays.</p>
            </div>
          </div>
        </motion.div>
      </div>

      <span className="slide-num" style={{ zIndex: 2 }}>07 / 07</span>
    </div>
  )
}
