import ContactPills from './ContactPills'
import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <a className="footer-logo" href="#top">Havoc's</a>
            <span className="footer-sub">
              Cannabis Clubhouse · New Park, Kimberley
            </span>
          </div>
           <ContactPills variant="icons" />
        </div>

        <p className="disclaimer">
          Havoc's Cannabis Clubhouse is a private social club for members 18
          and over. No cannabis is sold to the public, and nothing on this
          page can be ordered or bought online — it's here for directions,
          hours and what's on.
        </p>

        <div className="footer-bottom">
          © {new Date().getFullYear()} Brightline Dynamics
        </div>
      </div>
    </footer>
  )
}

export default Footer