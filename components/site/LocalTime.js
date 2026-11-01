'use client'
import { useEffect, useState } from 'react'
import { profile } from '@/data/profile'

export default function LocalTime({ className }) {
  const [time, setTime] = useState('')
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true, timeZone: profile.timezone })
    const tick = () => setTime(fmt.format(new Date()).toUpperCase())
    tick()
    const t = setInterval(tick, 15000)
    return () => clearInterval(t)
  }, [])
  return (
    <span className={className} suppressHydrationWarning>
      {time || '—'} IST
    </span>
  )
}
