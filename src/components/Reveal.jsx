import { useEffect, useRef, useState } from 'react'
import './Reveal.css'

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (visible) return
    const margin = window.innerWidth < 700 ? '-15%' : '-60%'

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
        }
      },
       { threshold: 0, rootMargin: `0px 0px ${margin} 0px` }
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [visible])

  return (
    <div
      ref={ref}
      className={visible ? 'reveal visible' : 'reveal'}
      style={{ transitionDelay: delay + 's' }}
    >
      {children}
    </div>
  )
}

export default Reveal