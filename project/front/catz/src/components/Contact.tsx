import '../style/contact.css';
import Header from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';  

function Contact() {
  return (
    <div className="contact">
      <Header />
      <form className="contact__form">
        <div className="contact__form-row">
          <div className="contact__form-group">
            <label htmlFor="firstName">FIRST NAME*</label>
            <input type="text" id="firstName" name="firstName" />
          </div>
          <div className="contact__form-group">
            <label htmlFor="lastName">LAST NAME*</label>
            <input type="text" id="lastName" name="lastName" />
          </div>
        </div>

        <div className="contact__form-group">
          <label htmlFor="email">EMAIL*</label>
          <input type="email" id="email" name="email" />
        </div>

        <div className="contact__form-group">
          <label htmlFor="message">MESSAGE*</label>
          <textarea id="message" name="message" rows={4}></textarea>
        </div>

        <button type="submit" className="contact__submit-btn">Send Message</button>
      </form>


      <footer className="contact__footer">
        <h2 className="contact__title">Our socials</h2>
        <div className="contact__socials">
          <a href="https://github.com/ange1dust88" className="contact__social-link"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://x.com/" className="contact__social-link"><FontAwesomeIcon icon={faXTwitter} /></a>
          <a href="https://www.youtube.com/" className="contact__social-link"><FontAwesomeIcon icon={faYoutube} /></a>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
