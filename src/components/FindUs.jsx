import { FaLocationDot } from 'react-icons/fa6'
import { locations } from '../data/locations'
import ContactPills from './ContactPills'
import './FindUs.css'

function FindUs() {
  return (
    <section className="section" id="find-us">
      <span className="eyebrow">Find us</span>
      <h2>Two spots in New Park</h2>

      <div className="locations">
        {locations.map((place) => (
          <article key={place.name} className="card location">
            <FaLocationDot className="pin" />
            <h3>{place.name}</h3>
            <p>{place.address}</p>
            <span className="venue">{place.venue}</span>
            <a
              className="directions"
              href={
                'https://www.google.com/maps/search/?api=1&query=' +
                encodeURIComponent(place.address)
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              Get directions ↗
            </a>
          </article>
        ))}
      </div>

      <ContactPills />
    </section>
  )
}

export default FindUs