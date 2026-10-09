import { useState, useEffect } from 'react'
import { hours, formatHour, getSouthAfricaNow } from '../data/hours'
import './Hours.css'

function Hours() {
  const [now, setNow] = useState(getSouthAfricaNow())

  useEffect(() => {
    const id = setInterval(() => setNow(getSouthAfricaNow()), 60000)
    return () => clearInterval(id)
  }, [])

  const todayRow = hours.find((row) => row.days.includes(now.day))
  const isOpen = now.hour >= todayRow.open && now.hour < todayRow.close

  return (
    <section className="section" id="hours">
      <span className="eyebrow">Trading hours</span>
      <h2>Havoc's Clubhouse trading hours</h2>

      <div className={isOpen ? 'open-status is-open' : 'open-status'}>
        {isOpen ? (
          <>
            <span className="dot" /> Open now
            <span className="closes">Closes {formatHour(todayRow.close)}</span>
          </>
        ) : (
          'Closed now'
        )}
      </div>

      <p>
        Pop in during trading hours to meet the crew and sort out membership
        on-site. Times shown are Kimberley local time.
      </p>

      <table className="hours-table">
        <tbody>
          {hours.map((row) => (
            <tr key={row.label}>
              <td>
                {row.label}
                {row.days.includes(now.day) && (
                  <span className="today-tag">Today</span>
                )}
              </td>
              <td>
                {formatHour(row.open)} – {formatHour(row.close)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default Hours