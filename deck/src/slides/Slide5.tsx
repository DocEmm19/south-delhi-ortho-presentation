import { Fragment } from 'react'
import { motion } from 'framer-motion'
import { stagger, fadeUp } from './variants'

const tools = [
  {
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    name: 'Consent Guardian',
    tag: 'Medico-legal',
    sub: 'Video consent + comprehension check. Timestamp + answers logged permanently.',
    pitch: '"From signature to verified understanding."',
    note: 'Tablet in waiting room · No new workflow',
    status: 'Built',
    color: 'var(--teal)',
    image: './tools/consent.jpg',
  },
  {
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>,
    name: 'Smart Discharge Bot',
    tag: 'Patient Compliance',
    sub: 'Discharge summary → 60s personalised audio → WhatsApp → patient\'s language.',
    pitch: '"Your bedside manner, in their pocket."',
    note: 'WhatsApp · Hindi, Punjabi + more',
    status: 'Built',
    color: 'var(--sky)',
    image: './tools/discharge.jpg',
  },
  {
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>,
    name: 'Pre-Op Implant Sizing',
    tag: 'Surgical Planning',
    sub: 'AI analysis of 2D X-rays → implant size + alignment angles, based on peer-reviewed benchmarks.',
    pitch: '"Know your implant before the first cut."',
    note: 'Reduces OR time · Less inventory waste',
    status: 'In Development',
    color: 'var(--amber)',
    image: './tools/preop.jpg',
  },
]

export default function Slide5() {
  return (
    <div className="slide" style={{ justifyContent: 'space-between' }}>
      <div className="dot-grid" />

      <motion.div variants={stagger(0.1)} initial="hidden" animate="show">
        <motion.p variants={fadeUp} className="label-caps" style={{ marginBottom: 14 }}>Three Tools for Your Practice</motion.p>
        <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap' }}>
          <h2 className="headline" style={{ fontSize: 54 }}>Built for Ortho Surgeons.</h2>
          {[
            { l: 'No New Hardware', bg: 'var(--teal-dim)', c: 'var(--teal)', b: 'rgba(0,212,200,0.18)' },
            { l: 'No IT Team', bg: 'rgba(56,189,248,0.1)', c: 'var(--sky)', b: 'rgba(56,189,248,0.2)' },
            { l: 'Ready in Days', bg: 'var(--amber-dim)', c: 'var(--amber)', b: 'rgba(245,158,11,0.22)' },
          ].map(p => (
            <span key={p.l} className="pill" style={{ background: p.bg, color: p.c, border: `1px solid ${p.b}`, fontSize: 13 }}>{p.l}</span>
          ))}
        </motion.div>
      </motion.div>

      <motion.div variants={stagger(0.13)} initial="hidden" animate="show"
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 22, alignItems: 'stretch', marginTop: 16 }}>
        {tools.map(t => (
          <motion.div key={t.name} variants={fadeUp}
            whileHover={{ y: -5, boxShadow: `0 8px 48px ${t.color}18` }}
            className="card tool-card"
            style={{ borderTop: `2px solid ${t.color}`, display: 'flex', flexDirection: 'column', gap: 0, padding: 0, overflow: 'hidden', transition: 'transform 0.2s, box-shadow 0.2s' }}>

            {/* Card header — natural height, content packed tight */}
            <div style={{ padding: '18px 22px 12px', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ color: t.color, display: 'flex', alignItems: 'center', gap: 10 }}>
                  {t.icon}
                  <span className="headline" style={{ fontSize: 21, color: t.color }}>{t.name}</span>
                </div>
                <span className="pill" style={{ fontSize: 11, background: t.status === 'Built' ? 'rgba(34,197,94,0.12)' : 'var(--amber-dim)', color: t.status === 'Built' ? '#4ade80' : 'var(--amber)', border: `1px solid ${t.status === 'Built' ? 'rgba(74,222,128,0.2)' : 'rgba(245,158,11,0.2)'}` }}>
                  {t.status}
                </span>
              </div>
              <span className="pill" style={{ fontSize: 11, background: `${t.color}12`, color: t.color, border: `1px solid ${t.color}1a`, alignSelf: 'flex-start' }}>{t.tag}</span>
              <div className="divider" />
              <p className="subhead" style={{ fontSize: 16, lineHeight: 1.4 }}>{t.sub}</p>
              <p style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: 16, color: 'var(--amber)', fontStyle: 'italic' }}>{t.pitch}</p>
            </div>

            {/* Product screenshot — square, centered, never cropped */}
            <div style={{
              width: '100%',
              maxWidth: 260,
              margin: '0 auto 14px',
              aspectRatio: '1 / 1',
              background: 'rgba(255,255,255,0.02)',
              border: `1px solid ${t.color}1a`,
              borderRadius: 10,
              overflow: 'hidden',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <img
                src={t.image}
                alt={`${t.name} screenshot`}
                style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
              />
            </div>

            {/* Footer note — pushed to bottom of card so all 3 notes line up */}
            <p className="label-caps" style={{ fontSize: 11, color: t.color, padding: '0 24px 18px', marginTop: 'auto', textAlign: 'center' }}>{t.note}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Impressive-fact banner — spans all 3 columns */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, type: 'spring' as const, stiffness: 240, damping: 26 }}
        style={{
          marginTop: 18,
          background: 'linear-gradient(90deg, rgba(0,212,200,0.06) 0%, rgba(245,158,11,0.06) 100%)',
          border: '1px solid rgba(0,212,200,0.18)',
          borderRadius: 14,
          padding: '20px 32px',
          display: 'grid',
          gridTemplateColumns: '1fr 1px 1fr 1px 1fr',
          alignItems: 'center',
          gap: 28,
        }}>
        {[
          { num: '4 days', label: 'idea → deployed', color: 'var(--teal)' },
          { num: '40+', label: 'physicians already using AI tools I built', color: 'var(--amber)' },
          { num: '₹0', label: 'licensing fees · owned by your practice', color: 'var(--sky)' },
        ].map((s, i, arr) => (
          <Fragment key={s.label}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4, textAlign: 'center' }}>
              <p className="display" style={{ fontSize: 34, color: s.color, lineHeight: 1 }}>{s.num}</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--muted-bright)', letterSpacing: '0.02em' }}>{s.label}</p>
            </div>
            {i < arr.length - 1 && <div style={{ width: 1, height: 40, background: 'rgba(255,255,255,0.08)' }} />}
          </Fragment>
        ))}
      </motion.div>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.95 }}
        className="subhead" style={{ fontSize: 18, textAlign: 'center', marginTop: 12, fontStyle: 'italic' }}>
        I'm looking for 2–3 ortho surgeons to build this with. These are not concepts — they are builds.
      </motion.p>

      <span className="slide-num">05 / 07</span>
    </div>
  )
}
