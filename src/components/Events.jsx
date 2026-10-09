import { useState, useRef } from 'react'
import { events } from '../data/events'
import './Events.css'

function Events() {
  const [selected, setSelected] = useState(null)
  const dialogRef = useRef(null)

  function openPhoto(event) {
    setSelected(event)
    dialogRef.current.showModal()
  }

  function closePhoto() {
    dialogRef.current.close()
  }

  return (
    <section className="section" id="whats-on">
      <span className="eyebrow">On the wall</span>
      <h2>What's on at the clubhouse</h2>
      <p>
        Havoc's doubles as a hangout for Kimberley's lowered-car crowd —
        park-offs, charity meets and the odd dab competition, all hosted
        on-site.
      </p>

      <div className="events">
        {events.map((event) => (
          <article key={event.title} className="card event">
            {event.photo && (
              <button
                className="photo-btn"
                onClick={() => openPhoto(event)}
                aria-label={'Open photo: ' + event.title}
              >
                <img className="event-photo" src={event.photo} alt={event.alt} />
              </button>
            )}
            {event.tag && <span className="event-tag">{event.tag}</span>}
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </article>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="lightbox"
        onClick={(e) => {
          if (e.target === dialogRef.current) closePhoto()
        }}
      >
        <button className="lightbox-close" onClick={closePhoto} aria-label="Close photo">
          ×
        </button>
        {selected && <img src={selected.photo} alt={selected.alt} />}
      </dialog>
    </section>
  )
}

export default Events