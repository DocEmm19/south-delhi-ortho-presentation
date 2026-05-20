import { motion } from 'framer-motion'
import { stagger, fadeUp } from './variants'

const bullets = [
  'Patients arriving with discharge instructions they actually understood',
  'Pre-op implant planning completed before the patient enters theatre',
  'Consent documented in a way that holds up in court',
  "Follow-up calls automated, in the patient's language",
]

export default function Slide6() {
  return (
    <div className="slide" style={{ justifyContent: 'space-between' }}>
      <div className="dot-grid" />

      <motion.div variants={stagger(0.1)} initial="hidden" animate="show">
        <motion.p variants={fadeUp} className="label-caps" style={{ marginBottom: 14 }}>The Opportunity</motion.p>
        <motion.h2 variants={fadeUp} className="headline" style={{ fontSize: 62 }}>
          The Tools Exist.<br />
          <span className="muted">Most Practices Aren't Using Them.</span>
        </motion.h2>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 72, flex: 1, alignItems: 'center', marginTop: 20 }}>

        <motion.div variants={stagger(0.1)} initial="hidden" animate="show" style={{ display: 'flex', flexDirection: 'column' }}>
          <motion.p variants={fadeUp} className="subhead" style={{ fontSize: 21, marginBottom: 26 }}>
            What AI-enabled ortho practices are doing right now:
          </motion.p>
          {bullets.map(b => (
            <motion.div key={b} variants={fadeUp} style={{ display: 'flex', gap: 18, alignItems: 'flex-start', paddingBottom: 22 }}>
              <span style={{ color: 'var(--teal)', flexShrink: 0, marginTop: 4 }}>
                <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
                  <circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M6 11l3.5 3.5L16 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <p className="subhead" style={{ fontSize: 25 }}>{b}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.45, type: 'spring' as const, stiffness: 200, damping: 22 }}
          className="card" style={{ padding: '48px 44px', display: 'flex', flexDirection: 'column', gap: 26 }}>
          <p className="label-caps">Elsevier · Clinician of the Future 2025 · India</p>
          <div>
            <p className="display" style={{ fontSize: 96, color: 'var(--white)', lineHeight: 1 }}>41%</p>
            <p className="subhead" style={{ fontSize: 22 }}>of Indian clinicians use AI — tripled from 12% in 2024.</p>
          </div>
          <div className="divider" />
          <div>
            <p className="display" style={{ fontSize: 96, color: 'var(--teal)', lineHeight: 1 }}>16%</p>
            <p className="subhead" style={{ fontSize: 22 }}>use it for clinical decisions. The rest stays in documentation.</p>
          </div>
          <div style={{ background: 'var(--teal-dim)', borderRadius: 10, padding: '16px 20px', borderLeft: '3px solid var(--teal)' }}>
            <p className="subhead" style={{ fontSize: 20, color: 'var(--white)', fontStyle: 'italic' }}>
              "The difference is not intelligence. It is implementation."
            </p>
          </div>
        </motion.div>
      </div>

      <p style={{
        position: 'absolute', bottom: 18, left: 80,
        fontFamily: 'var(--font-body)', fontSize: 10, color: 'var(--muted)',
        opacity: 0.55, letterSpacing: '0.04em', maxWidth: '70%',
      }}>
        Source: Elsevier · Clinician of the Future 2025 (n=275 Indian clinicians, n=2,200 across 109 countries · Oct 2025) · reported by IBEF
      </p>

      <span className="slide-num">06 / 07</span>
    </div>
  )
}
