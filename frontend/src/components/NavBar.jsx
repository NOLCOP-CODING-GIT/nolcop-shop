import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { PanierContext } from "./PanierContext";

function NavBar() {
  const { panier } = useContext(PanierContext);

  const totalArticles = panier.reduce((acc, p) => acc + p.quantite, 0);

  const [menuOuvert, setMenuOuvert] = useState(false);

  const toggleMenu = () => {
    setMenuOuvert(!menuOuvert);
  };

  return (
    <>
      <header>
        <h1 id="header-title">NOLCOP SHOP</h1>
        <nav>
          <ul className={`navLinksContainers ${menuOuvert ? "active" : ""}`}>
            <li>
              <Link className="navLinks" to="/">
                Accueil
              </Link>
            </li>
            <li>
              <Link className="navLinks" to="/PRODUITS">
                Produits
              </Link>
            </li>
            <li>
              {" "}
              <Link className="navLinks" to="/DETAILS-PRODUITS">
                DétailsProduits
              </Link>
            </li>
            <li>
              <Link className="navLinks" to="/A-PROPOS">
                A propos
              </Link>
            </li>
            <li>
              <Link className="navLinks" to="/MENTIONS-LEGALES">
                Mentions Légales
              </Link>
            </li>
            <li>
              <Link className="navLinks" to="/CONTACT">
                Profil
              </Link>
            </li>
          </ul>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <Link className="iconCartContainer" to="/PANIER">
              <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
              {totalArticles >= 0 && (
                <span id="addToCartSignal">{totalArticles}</span>
              )}
            </Link>
            <Link className="menuToggle" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faBars} />
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
