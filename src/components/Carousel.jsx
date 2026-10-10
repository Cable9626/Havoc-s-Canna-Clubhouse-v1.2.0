import { useRef } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import { photos } from '../data/photos'
import './Carousel.css'

function Carousel() {
  const trackRef = useRef(null)

  function slide(direction) {
    const track = trackRef.current
    const atStart = track.scrollLeft <= 5
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 5

    if (direction === 1 && atEnd) {
      track.scrollTo({ left: 0, behavior: 'smooth' })
    } else if (direction === -1 && atStart) {
      track.scrollTo({ left: track.scrollWidth, behavior: 'smooth' })
    } else {
      track.scrollBy({ left: direction * track.clientWidth, behavior: 'smooth' })
    }
  }

  return (
    <section className="section gallery">
      <div className="carousel-wrap">
        <div className="carousel" ref={trackRef}>
          {photos.map((photo) => (
            <img key={photo.src} src={photo.src} alt={photo.alt} />
          ))}
        </div>

        <button
          className="carousel-btn carousel-prev"
          onClick={() => slide(-1)}
          aria-label="Previous photo"
        >
          <FaChevronLeft />
        </button>
        <button
          className="carousel-btn carousel-next"
          onClick={() => slide(1)}
          aria-label="Next photo"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  )
}

export default Carousel