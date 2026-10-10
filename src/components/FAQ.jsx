import { faqs } from '../data/faqs'
import './FAQ.css'

function FAQ() {
  return (
    <section className="section" id="faq">
      <span className="eyebrow">Good to know</span>
      <h2>Questions, answered</h2>

      <div className="faq-list">
        {faqs.map((item) => (
          <details key={item.q} className="faq-item card">
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

export default FAQ