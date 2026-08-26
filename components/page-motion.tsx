'use client'

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function PageMotion({ children }: { children: React.ReactNode }) {
  const scope = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const root = scope.current
    if (!root) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const ctx = gsap.context(() => {
      const header = root.querySelector('.site-header')
      if (header) gsap.from(header, { y: -24, autoAlpha: 0, duration: 0.8, ease: 'power3.out' })
      const heroItems = root.querySelectorAll('.hero-copy > *, .hero-visual')
      if (heroItems.length) gsap.from(heroItems, { y: 28, autoAlpha: 0, duration: 0.85, stagger: 0.08, delay: 0.12, ease: 'power3.out' })
      gsap.utils.toArray<HTMLElement>('.section, .dark-section, footer').forEach((section) => {
        const items = section.querySelectorAll(':scope > *, .service-card, .step, .material-feature > *')
        gsap.from(items, {
          y: 30,
          autoAlpha: 0,
          duration: 0.75,
          stagger: 0.07,
          ease: 'power2.out',
          scrollTrigger: { trigger: section, start: 'top 82%', once: true },
        })
      })
      gsap.utils.toArray<HTMLElement>('.editorial-image img').forEach((image) => {
        gsap.fromTo(image, { scale: 1.08 }, { scale: 1, duration: 1.4, ease: 'power2.out', scrollTrigger: { trigger: image, start: 'top 90%', once: true } })
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return <div ref={scope}>{children}</div>
}

export function MagneticImage({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
