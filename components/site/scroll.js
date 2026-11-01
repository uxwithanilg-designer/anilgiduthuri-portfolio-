'use client'

// Smooth-scroll to an in-page id, using Lenis when it is running.
export function scrollToId(id, { immediate = false } = {}) {
  const el = document.getElementById(id)
  if (!el) return false
  const lenis = window.__lenis
  if (lenis) lenis.scrollTo(el, { offset: -88, immediate, duration: 1.4 })
  else el.scrollIntoView({ behavior: immediate ? 'auto' : 'smooth', block: 'start' })
  return true
}

// Click handler for links like "/#work": scroll in place on the home page,
// let Next.js navigate everywhere else.
export function onHashLink(e, href, pathname) {
  const [path, hash] = href.split('#')
  if (!hash) return
  if ((path || '/') === pathname && scrollToId(hash)) {
    e.preventDefault()
    history.replaceState(null, '', `#${hash}`)
  }
}

export function lockScroll(lock) {
  const lenis = window.__lenis
  if (lenis) lock ? lenis.stop() : lenis.start()
  document.documentElement.style.overflow = lock ? 'hidden' : ''
}
