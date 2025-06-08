import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer class="footer">
      <p>&copy; 2025 NOLCOP SHOP. Tous droits réservés.</p>
      <div class="footer-links">
        <Link to="/CONTACT">Contactez-nous</Link>
        <Link to="/A-PROPOS">À propos</Link>
        <Link to="/MENTIONS-LEGALES">Mentions légales</Link>
      </div>
      <div className="reseaux-sociaux">
        <Link to="https://www.instagram.com/navistorewebsites" target="_blank">
          <FontAwesomeIcon className="footer-links-icons" icon={faInstagram} />
        </Link>
        <Link to="https://wa.me/22941381577" target="_blank">
          <FontAwesomeIcon className="footer-links-icons" icon={faWhatsapp} />
        </Link>
        <Link to="https://twitter.com/nolcopcoding" target="_blank">
          <FontAwesomeIcon className="footer-links-icons" icon={faXTwitter} />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
