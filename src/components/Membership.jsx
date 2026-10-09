import { perks } from '../data/perks'
import './Membership.css'

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12.5l3 3 5-6" />
    </svg>
  )
}

function Membership() {
  return (
    <section className="section" id="membership">
      <span className="eyebrow">How it works</span>
      <h2>This isn't a shop. It's a club.</h2>
      <p>
        That's the model Havoc's runs on: a private social club in New Park,
        Kimberley, built around community, not a till.
      </p>
      <p>
        There's no online menu here yet and no ordering ahead. Membership is
        arranged in person, so pop in, meet the crew, and sign up on-site.
      </p>

      <ul className="perks">
        {perks.map((perk) => (
          <li key={perk} className="card perk">
            <CheckIcon />
            {perk}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Membership