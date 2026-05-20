import type { Variants, Transition } from 'framer-motion'

export const spring: Transition = { type: 'spring' as const, stiffness: 250, damping: 26 }
export const springFast: Transition = { type: 'spring' as const, stiffness: 280, damping: 28 }

export const stagger = (delay = 0.1): Variants => ({
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: delay } },
})

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 250, damping: 26 } },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } },
}
