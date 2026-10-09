import { FaPhone, FaFacebook, FaInstagram } from 'react-icons/fa6'
import { contact } from '../data/contact'
import './ContactPills.css'

function ContactPills({ variant }) {
  const icons = variant === 'icons'

  return (
    <div className={icons ? 'pills pills-icons' : 'pills'}>
      <a href={contact.phoneHref} aria-label={icons ? 'Phone' : undefined}>
        <FaPhone /> <span className="pill-label">{contact.phoneLabel}</span>
      </a>
      <a
        href={contact.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={icons ? 'Facebook' : undefined}
      >
        <FaFacebook /> <span className="pill-label">Facebook</span>
      </a>
      <a
        href={contact.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={icons ? 'Instagram' : undefined}
      >
        <FaInstagram /> <span className="pill-label">Instagram</span>
      </a>
    </div>
  )
}

export default ContactPills