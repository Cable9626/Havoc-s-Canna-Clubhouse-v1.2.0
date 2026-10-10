import { FaShirt, FaHatCowboy, FaImage, FaNoteSticky } from 'react-icons/fa6'
import { merch } from '../data/merch'
import './Merch.css'

const icons = {
  tee: FaShirt,
  cap: FaHatCowboy,
  poster: FaImage,
  sticker: FaNoteSticky,
}

function Merch() {
  return (
    <section className="section" id="merch">
      <span className="eyebrow">Merch</span>
      <h2>Coming soon: Havoc's merch</h2>
      <p>
        Car-culture tees, caps, stickers and prints are in the works. There's
        nothing to order yet, so this is a first look.
      </p>

      <div className="merch-grid">
        {merch.map((item) => {
          const Icon = icons[item.kind]
          return (
            <article key={item.name} className="card merch-item">
              <div className="merch-visual">
                {item.image ? (
                  <img src={item.image} alt={item.name} />
                ) : (
                  <Icon className="merch-icon" />
                )}
              </div>
              <span className="merch-soon">Coming soon</span>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Merch