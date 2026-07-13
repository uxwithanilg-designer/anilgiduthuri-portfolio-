'use client'
import { useEffect } from 'react'

export default function ScrollReveal() {
  useEffect(() => {
    // Original .reveal class
    const revealObs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('revealed'); revealObs.unobserve(e.target) }
      }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(r => revealObs.observe(r))

    // New animation classes
    const animObs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in-view'); animObs.unobserve(e.target) }
      }),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.anim-fade-up, .anim-fade-left, .anim-fade-right, .anim-scale').forEach(el => animObs.observe(el))

    return () => { revealObs.disconnect(); animObs.disconnect() }
  }, [])

  return null
}
