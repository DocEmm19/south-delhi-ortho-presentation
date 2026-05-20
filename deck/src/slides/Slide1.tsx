import { motion } from 'framer-motion'
import { stagger, fadeUp } from './variants'

export default function Slide1() {
  return (
    <div className="slide" style={{ flexDirection: 'row', padding: 0, gap: 0 }}>
      <div className="dot-grid" />

      {/* Left — hero image */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}
        style={{
          width: '44%', height: '100%', flexShrink: 0,
          position: 'relative', overflow: 'hidden',
          borderRight: '1px solid var(--border)',
        }}
      >
        <img
          src="./hero.png"
          alt="Dr. Piyush Malik"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
        />
        {/* gradient fade into right edge */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'linear-gradient(to right, transparent 60%, var(--bg) 100%)',
        }} />
        {/* subtle bottom fade */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'linear-gradient(to top, rgba(8,10,15,0.5) 0%, transparent 40%)',
        }} />
      </motion.div>

      {/* Right — content */}
      <motion.div
        variants={stagger(0.1)} initial="hidden" animate="show"
        style={{ flex: 1, height: '100%', padding: '80px 80px 80px 72px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 0 }}
      >
        <motion.p variants={fadeUp} className="label-caps" style={{ marginBottom: 40 }}>
          South Delhi Orthopaedic Surgeons · May 2026
        </motion.p>

        <motion.p variants={fadeUp} className="display" style={{ fontSize: 72 }}>I'm a doctor.</motion.p>
        <motion.p variants={fadeUp} className="display" style={{ fontSize: 72, marginTop: 4 }}>
          Last month I built something that
        </motion.p>
        <motion.p variants={fadeUp} className="display" style={{ fontSize: 72, marginTop: 4 }}>
          would have cost <span className="teal">₹25 lakhs</span>
        </motion.p>
        <motion.p variants={fadeUp} className="display" style={{ fontSize: 72, marginTop: 4 }}>
          and 6 months with a dev team.
        </motion.p>
        <motion.p variants={fadeUp} className="display" style={{ fontSize: 72, marginTop: 4 }}>
          It took me <span className="teal">4 days.</span>
        </motion.p>

        <motion.p variants={fadeUp} className="subhead" style={{ fontSize: 26, marginTop: 36, maxWidth: 600 }}>
          And I'm here to show you what it can do to yours.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          className="label-caps" style={{ marginTop: 48, fontSize: 15 }}
        >
          Dr. Piyush Malik &nbsp;·&nbsp; Clinical AI Strategist &amp; Architect
        </motion.p>
      </motion.div>

      <span className="slide-num">01 / 07</span>
    </div>
  )
}
