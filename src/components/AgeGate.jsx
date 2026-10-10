import { useState, useEffect } from 'react'
import './AgeGate.css'

const KEY = 'havocs-age-confirmed'

function alreadyConfirmed() {
  try {
    return localStorage.getItem(KEY) === 'yes'
  } catch {
    return false
  }
}

function AgeGate() {
  const [confirmed, setConfirmed] = useState(alreadyConfirmed)
  const [denied, setDenied] = useState(false)

  useEffect(() => {
    document.body.style.overflow = confirmed ? '' : 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [confirmed])

  function confirm() {
    try {
      localStorage.setItem(KEY, 'yes')
    } catch {
      // storage can be blocked; the gate just shows again next visit
    }
    setConfirmed(true)
  }

  if (confirmed) return null

  return (
    <div
      className="age-gate"
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-gate-title"
    >
      <div className="age-gate-box card">
        <span className="age-gate-tag">Members 18+</span>
        <h2 id="age-gate-title">
          {denied ? 'Sorry!' : 'Are you 18 or older?'}
        </h2>
        <p>
          {denied
            ? 'Havoc\'s is a private club for adults only. Come back when you\'re 18.'
            : 'Havoc\'s Cannabis Clubhouse is a private social club for members 18 and over.'}
        </p>

        {!denied && (
          <div className="age-gate-buttons">
            <button className="btn btn-solid" onClick={confirm} autoFocus>
              Yes, I'm 18+
            </button>
            <button className="btn btn-outline" onClick={() => setDenied(true)}>
              No
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default AgeGate