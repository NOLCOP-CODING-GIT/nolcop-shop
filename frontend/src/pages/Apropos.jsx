import React from "react";
import Footer from "../components/Footer";

function Apropos() {
  return (
    <div className="main">
      <div className="apropos-container">
        <h1 className="aproposPageTitle">À propos de NOLCOP SHOP</h1>

        <p className="apropos-text">
          Chez <strong style={{ color: "#66a060" }}>NOLCOP SHOP</strong>, nous
          croyons que chaque seconde compte. Nous vous proposons une collection
          exclusive de montres de luxe, alliant élégance, précision et
          excellence artisanale.
        </p>

        <p className="apropos-text">
          Fondée par des passionnés d'horlogerie, notre boutique vise à offrir
          des montres authentiques et certifiées, pour les amateurs exigeants
          comme pour les collectionneurs.
        </p>

        <p className="apropos-text">
          Nous sélectionnons soigneusement chaque pièce pour garantir style,
          performance et raffinement. Nos montres sont bien plus que des
          instruments de mesure du temps : elles racontent une histoire.
        </p>
        <p className="apropos-text">
          Par exemple : <br />
          1. Montre Rider <br />
          Élégance brute & style affirmé ; <br />
          La Rider séduit par son design robuste et masculin, tout en conservant
          une silhouette raffinée. Boîtier acier inoxydable, bracelet cuir
          épais, cadran minimaliste : cette montre allie force et sobriété. Elle
          est idéale pour ceux qui veulent une montre au charisme affirmé, sans
          compromis sur la classe. Caractérisé par : <br />
          <span className="rider-composition">
            🔹 Boîtier : Acier brossé 44 mm <br />
            🔹 Bracelet : Cuir noir cousu main <br />
            🔹 Mouvement : Quartz haute précision <br />
            🔹 Étanchéité : 5 ATM <br />
            🔹 Style : Urbain, viril, élégant
          </span>
        </p>
        <p
          style={{ fontSize: "1.88em", color: "#66a060" }}
          className="apropos-text"
        >
          Merci de faire partie de cette aventure. Chez{" "}
          <strong>NOLCOP SHOP</strong>, le luxe prend tout son sens.
        </p>
      </div>
      <Footer/>
    </div>
  );
}

export default Apropos;
