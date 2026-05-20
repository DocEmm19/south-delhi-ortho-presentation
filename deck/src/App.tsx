import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Slide1 from './slides/Slide1'
import Slide2 from './slides/Slide2'
import Slide3 from './slides/Slide3'
import Slide4 from './slides/Slide4'
import Slide5 from './slides/Slide5'
import Slide6 from './slides/Slide6'
import Slide7 from './slides/Slide7'

const SLIDES = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7]

const variants = {
  enter: (dir: number) => ({ x: dir * 80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir * -80, opacity: 0 }),
}

const transition = { type: 'spring' as const, stiffness: 280, damping: 30, mass: 0.8 }

export default function App() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const resize = () => {
      setScale(Math.min(window.innerWidth / 1920, window.innerHeight / 1080))
    }
    resize()
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  const go = useCallback((next: number) => {
    if (next < 0 || next >= SLIDES.length) return
    setDirection(next > current ? 1 : -1)
    setCurrent(next)
  }, [current])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'ArrowDown') go(current + 1)
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') go(current - 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [current, go])

  const SlideComponent = SLIDES[current]

  return (
    <div className="deck-root">
      <div className="deck-stage" style={{ transform: `scale(${scale})` }}>
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={transition}
            style={{ position: 'absolute', inset: 0 }}
          >
            <SlideComponent />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Nav zones */}
      <div className="nav-zone prev" onClick={() => go(current - 1)} />
      <div className="nav-zone next" onClick={() => go(current + 1)} />

      {/* Dot nav */}
      <nav className="dot-nav" aria-label="Slide navigation">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`dot${i === current ? ' active' : ''}`}
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </nav>
    </div>
  )
}
