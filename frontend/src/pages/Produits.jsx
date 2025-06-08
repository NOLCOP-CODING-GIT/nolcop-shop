import { faCartPlus } from "@fortawesome/free-solid-svg-icons/faCartPlus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import produits from "../produits";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { PanierContext } from "../components/PanierContext";
import Footer from "../components/Footer";

function Product() {
  const { ajouterAuPanier, panier } = useContext(PanierContext);
  console.log("Panier actuel: ", panier)
  return (
    <div className="main">
      <h1 id="titlePageProduct">NOS PRODUITS</h1>
      <div className="produits">
        {produits.map((prod) => (
          <div className="produit" key={prod.id}>
            <img
              src={`/images/${prod.image}`}
              alt={`Image de ${prod.nom}`}
            />
            <h2 className="produitTitle">{prod.nom}</h2>
            <p className="price">{prod.prix} $</p>
            <div className="link-cart">
              <button
                type="button"
                className="link-cart-button"
                onClick={() => ajouterAuPanier(prod)}
              >
                <FontAwesomeIcon icon={faCartPlus} />
              </button>
              <Link to={`/produit/${prod.id}`}>
                <button type="button" className="link-cart-button">
                  Voir +
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default Product;
