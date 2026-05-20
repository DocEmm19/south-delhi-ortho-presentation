import { motion } from 'framer-motion'
import { stagger, fadeUp } from './variants'

const companies = [
  { name: 'Qure.ai', logo: './logos/qure.png', desc: 'AI radiology · 15M+ patients/year · 90+ countries · IPO-bound', color: 'var(--teal)' },
  { name: 'SigTuple', logo: './logos/sigtuple.png', desc: 'AI microscopy · Blood & pathology analysis', color: 'var(--sky)' },
  { name: 'Niramai', logo: './logos/niramai.png', desc: 'AI thermal breast cancer screening · Radiation-free', color: 'var(--amber)' },
  { name: 'Tricog Health', logo: './logos/tricog.png', desc: 'Real-time AI cardiac diagnostics', color: 'var(--sky)' },
  { name: 'Redcliffe Labs', logo: './logos/redcliffe.png', desc: 'AI Smart Reports · AI Face Scans · 220+ cities', color: 'var(--teal)' },
  { name: 'Superhealth', logo: './logos/superhealth.png', desc: 'SuperOS · Agentic AI hospital OS · Dhoni-backed', color: 'var(--amber)' },
]

const hospitals = ['Apollo Hospitals', 'Fortis', 'Medanta', 'AIIMS', 'Kokilaben', 'BLK-MAX']

export default function Slide3() {
  return (
    <div className="slide" style={{ justifyContent: 'space-between' }}>
      <div className="dot-grid" />

      <motion.div variants={stagger(0.1)} initial="hidden" animate="show">
        <motion.p variants={fadeUp} className="label-caps" style={{ marginBottom: 14 }}>AI in India Today</motion.p>
        <motion.h2 variants={fadeUp} className="headline" style={{ fontSize: 62 }}>
          India Is Not Watching From the Sidelines.<br />
          <span className="teal">It's Building.</span>
        </motion.h2>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 56, flex: 1, alignItems: 'start', marginTop: 20 }}>

        {/* Left: company logo grid */}
        <motion.div variants={stagger(0.1)} initial="hidden" animate="show" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <motion.p variants={fadeUp} className="label-caps" style={{ marginBottom: 4 }}>Indian companies leading the charge</motion.p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {companies.map(c => (
              <motion.div key={c.name} variants={fadeUp}
                className="card"
                style={{ borderLeft: `3px solid ${c.color}`, borderRadius: 12, padding: '20px 22px', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <img
                  src={c.logo}
                  alt={c.name}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                  style={{ width: 36, height: 36, borderRadius: 8, objectFit: 'contain', background: '#fff', padding: 3, flexShrink: 0 }}
                />
                <div>
                  <p className="headline" style={{ fontSize: 19, color: c.color }}>{c.name}</p>
                  <p className="subhead" style={{ fontSize: 16, marginTop: 4 }}>{c.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: stats + Superhealth callout + hospitals */}
        <motion.div variants={stagger(0.1)} initial="hidden" animate="show" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {/* Stats */}
          <motion.div variants={fadeUp} className="card" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <p className="label-caps">India by the numbers</p>
            <div style={{ display: 'flex', gap: 32 }}>
              <div>
                <p className="display" style={{ fontSize: 56, color: 'var(--teal)', lineHeight: 1 }}>500+</p>
                <p className="subhead" style={{ fontSize: 17 }}>Surgical robots installed</p>
              </div>
              <div>
                <p className="display" style={{ fontSize: 56, color: 'var(--sky)', lineHeight: 1 }}>50K+</p>
                <p className="subhead" style={{ fontSize: 17 }}>Robotic procedures/year</p>
              </div>
            </div>
          </motion.div>

          {/* Superhealth callout */}
          <motion.div variants={fadeUp}
            style={{ background: 'var(--amber-dim)', border: '1px solid rgba(245,158,11,0.25)', borderRadius: 14, padding: '22px 24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
              <img
                src="./logos/superhealth.png"
                alt="Superhealth"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                style={{ width: 32, height: 32, borderRadius: 6, background: '#fff', padding: 2, objectFit: 'contain' }}
              />
              <p className="headline" style={{ fontSize: 20, color: 'var(--amber)' }}>Superhealth · SuperOS</p>
            </div>
            <p className="subhead" style={{ fontSize: 17 }}>
              World's first agentic AI OS running an actual hospital — Bengaluru.
              "Magic Discharge." 15 Indian languages. MS Dhoni-backed.
              100-hospital network target by 2030.
            </p>
          </motion.div>

          {/* Hospitals */}
          <motion.div variants={fadeUp} className="card" style={{ padding: '20px 24px' }}>
            <p className="label-caps" style={{ marginBottom: 14 }}>Hospitals already using AI in Ortho</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {hospitals.map(h => (
                <span key={h} className="pill pill-teal" style={{ fontSize: 13 }}>{h}</span>
              ))}
            </div>
            <p className="subhead" style={{ fontSize: 16, marginTop: 14 }}>
              Apollo, Fortis, Medanta & Kokilaben run Mako. Kokilaben alone: 800+ robotic knee replacements last year. AIIMS launched robotic onco + ortho programs (2025–26).
            </p>
          </motion.div>
        </motion.div>
      </div>

      <p style={{
        position: 'absolute', bottom: 18, left: 80,
        fontFamily: 'var(--font-body)', fontSize: 10, color: 'var(--muted)',
        opacity: 0.55, letterSpacing: '0.04em', maxWidth: '70%',
      }}>
        Sources: qure.ai · superhealth.co · niramai.com · BW Healthcare World (2025) · apollohospitals.com · fortishealthcare.com · medanta.org · kokilabenhospital.com · blkmaxhospital.com · aiims.edu
      </p>

      <span className="slide-num">03 / 07</span>
    </div>
  )
}
