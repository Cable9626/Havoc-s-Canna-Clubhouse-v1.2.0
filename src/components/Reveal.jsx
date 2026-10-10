import { useEffect, useRef, useState } from 'react'
import './Reveal.css'

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(prefersReducedMotion)

  useEffect(() => {
    if (visible) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
        }
      },
      { threshold: 0, rootMargin: '0px 0px -58% 0px' }
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