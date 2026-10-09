import './Hero.css'

const facts = [
  { label: 'Where', value: 'New Park, Kimberley' },
  { label: 'Open', value: 'Seven days a week' },
  { label: 'Who', value: 'Members 18+' },
]

function Hero() {
  return (
    <section className="hero">
      <span className="hero-badge">Private members club · 18+</span>

      <h1 className="hero-title">
        <span className="line line-green">Havoc's</span>
        <span className="line">Cannabis</span>
        <span className="line glow">Clubhouse</span>
      </h1>

      <p className="tagline">Where every bud is a friend.</p>
            <div className="hero-buttons">
        <a className="btn btn-solid" href="#whats-on">See what's on</a>
        <a className="btn btn-outline" href="#find-us">Find the clubhouse</a>
      </div>

      <dl className="facts">
        {facts.map((fact) => (
          <div key={fact.label}>
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>
    </section>
         
  )
}

export default Hero