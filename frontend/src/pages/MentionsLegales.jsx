import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Mentions() {
  return (
    <div className="main">
      <div className="mentions-legales">
        <h1 className="mentions-legales-title">Mentions légales</h1>

        <section className="mention-legales-section">
          <h2 className="mentions-legales-title">Éditeur du site</h2>
          <p>
            Nom : NOLCOP CODING
            <br />
            Adresse : 123 rue de l'Internet, 75000 Paris
            <br />
            Email : nolcopcoding@gmail.com
            <br />
            Téléphone : +229 41 38 15 77
            <br />
            SIRET : 123 456 789 00012
            <br />
            RCS : Paris B 123 456 789
            <br />
            Code APE : 6201Z - Programmation informatique
            <br />
            Responsable de la publication : ZINSOU M. Jean Orland
          </p>
        </section>

        <section className="mention-legales-section">
          <h2 className="mentions-legales-title">Hébergement</h2>
          <p>
            Hébergeur : NOLCOP CODING
            <br />
            Adresse : 123 rue de l'Internet, 75000 Paris
            <br />
            Téléphone : +229 41 38 15 77
            <br />
            Site web :
            <Link style={{color:"#5f9ea0"}} to="" target="_blank" rel="noopener noreferrer">
              https://www.nolcopshop.com
            </Link>
          </p>
        </section>

        <section className="mention-legales-section">
          <h2 className="mentions-legales-title">Propriété intellectuelle</h2>
          <p>
            Le contenu de ce site (textes, images, vidéos, design, etc.) est
            protégé par le droit d’auteur. Toute reproduction ou utilisation
            sans autorisation est interdite.
          </p>
        </section>

        <section className="mention-legales-section">
          <h2 className="mentions-legales-title">Données personnelles</h2>
          <p>
            Les informations collectées via les formulaires sont destinées
            uniquement au traitement de votre demande. Conformément au Règlement
            Général sur la Protection des Données (RGPD), vous disposez d’un
            droit d’accès, de rectification et de suppression de vos données.
            Pour exercer ce droit, contactez-nous à l’adresse :
            <Link to="mailto:nolcopcoding@gmail.com" style={{ color: "#5f9ea0" }}>nolcopcoding@gmail.com.</Link>
          </p>
        </section>

        <section className="mention-legales-section">
          <h2 className="mentions-legales-title">Cookies</h2>
          <p>
            Ce site utilise des cookies pour mesurer l’audience et améliorer
            l’expérience utilisateur. Vous pouvez refuser les cookies en
            modifiant les paramètres de votre navigateur ou via la bannière de
            consentement.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Mentions;
