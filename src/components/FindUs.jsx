import { useState } from 'react'
import { FaLocationDot, FaWhatsapp } from 'react-icons/fa6'
import { locations } from '../data/locations'
import { contact } from '../data/contact'
import ContactPills from './ContactPills'
import './FindUs.css'

function FindUs() {
  const [active, setActive] = useState(0)
  const place = locations[active]

  return (
    <section className="section" id="find-us">
      <span className="eyebrow">Find us</span>
      <h2>Two spots in New Park</h2>

      <div className="locations">
        {locations.map((loc) => (
          <article key={loc.name} className="card location">
            <FaLocationDot className="pin" />
            <h3>{loc.name}</h3>
            <p>{loc.address}</p>
            <span className="venue">{loc.venue}</span>
            <a
              className="directions"
              href={
                'https://www.google.com/maps/search/?api=1&query=' +
                encodeURIComponent(loc.address)
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              Get directions ↗
            </a>
          </article>
        ))}
      </div>

      <div className="map-tabs">
        {locations.map((loc, i) => (
          <button
            key={loc.name}
            className={i === active ? 'map-tab active' : 'map-tab'}
            onClick={() => setActive(i)}
          >
            {loc.name}
          </button>
        ))}
      </div>

      <iframe
        className="map-frame"
        title={'Map of ' + place.name}
        src={
          'https://www.google.com/maps?q=' +
          encodeURIComponent(place.address) +
          '&output=embed'
        }
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <a
        className="btn btn-solid whatsapp"
        href={contact.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp /> Message the clubhouse
      </a>

      <ContactPills />
    </section>
  )
}

export default FindUs