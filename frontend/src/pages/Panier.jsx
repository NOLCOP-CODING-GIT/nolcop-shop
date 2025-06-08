import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PanierContext } from "../components/PanierContext";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { AuthContext } from "../components/UserContext";
import Footer from "../components/Footer";

function Panier() {
  const {
    panier,
    supprimerDuPanier,
    viderPanier,
    augmenterQuantite,
    diminuerQuantite,
  } = useContext(PanierContext);

  //Calculer le total general
  const totalGeneral = panier.reduce(
    (total, prod) => total + prod.prix * prod.quantite,
    0
  );

  const [messageCommande, setMessageCommande] = useState("");

  const { userLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleCommande = () => {
    const nom = localStorage.getItem("contactNom");
    const email = localStorage.getItem("contactEmail");

    if (!userLoggedIn) {
      navigate("/contact?redirect=panier"); // Redirection vers page login avec retour prévu
      return;
    }

    if (!nom || !email) {
      alert(
        "Merci de remplir vos informations de contact avant de valider la commande."
      );
      return;
    }

    const templateParams = {
      to_email: email,
      user_name: nom,
      order_total: totalGeneral.toFixed(2),
    };

    emailjs
      .send(
        "service_o6mum59",
        "template_ufdhy0m",
        templateParams,
        "Rsb99CDSZZWBRk7zD"
      )
      .then(() => {
        setMessageCommande(
          "Commande validée ! Un e-mail de paiement vous sera envoyé."
        );
        viderPanier();

        setTimeout(() => {
          setMessageCommande("");
        }, 3000);
      })

      .catch((error) => {
        console.error("Erreur lors de l'envoie de l'email : ", error);
      });
  };

  return (
    <div className="main">
      <div className="panierPageContainer">
        {messageCommande && (
          <span className="confirmation-message">
            <FontAwesomeIcon icon={faCheckCircle} />
            {messageCommande}
          </span>
        )}

        <h1 className="panierPageTitle">
          <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon> Votre Panier
        </h1>
        {panier.length === 0 ? (
          <p id="panierVideText">Votre panier est vide.</p>
        ) : (
          <>
            <table>
              <thead>
                <tr>
                  <th>Produit</th>
                  <th>Stock</th>
                  <th>Quantité</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {panier.map((prod) => (
                  <tr key={prod.id}>
                    <td>{prod.nom}</td>
                    <td>{prod.stock}</td>
                    <td>
                      <div className="quantite-modif-container">
                        <button
                          type="button"
                          className="quantite-modif-button"
                          onClick={() => diminuerQuantite(prod.id)}
                        >
                          -
                        </button>
                        <span>{prod.quantite}</span>
                        <button
                          type="button"
                          className="quantite-modif-button"
                          onClick={() => augmenterQuantite(prod.id)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>{(prod.prix * prod.quantite).toFixed(2)} $</td>
                    <td>
                      <button
                        type="button"
                        className="removeProductInCart"
                        onClick={() => supprimerDuPanier(prod.id)}
                      >
                        <FontAwesomeIcon icon={faClose} />
                        Supprimer
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {panier.map((prod) => (
              <div className="produit-mobile" key={prod.id}>
                <p>PRODUIT : {prod.nom}</p>
                <p>QUANTITE EN STOCK : {prod.stock}</p>
                <p>
                  <span className="quantite-modif-container">
                    <button
                      type="button"
                      className="quantite-modif-button"
                      onClick={() => diminuerQuantite(prod.id)}
                    >
                      -
                    </button>
                    <span>{prod.quantite}</span>
                    <button
                      type="button"
                      className="quantite-modif-button"
                      onClick={() => augmenterQuantite(prod.id)}
                    >
                      +
                    </button>
                  </span>
                </p>
                <p>Total: {(prod.prix * prod.quantite).toFixed(2)} $</p>
                <p>
                  <button
                    type="button"
                    className="removeProductInCart"
                    onClick={() => supprimerDuPanier(prod.id)}
                  >
                    <FontAwesomeIcon icon={faClose} />
                    Supprimer
                  </button>
                </p>
              </div>
            ))}

            <div className="tablePanierFooter">
              {panier.length > 0 && (
                <div className="totalGenValueContainer">
                  <h3 id="totalGenValueText">Total Général: </h3>
                  <span id="totalGenValuePrice">
                    {totalGeneral.toFixed(2)} $
                  </span>
                </div>
              )}
              <button
                type="button"
                className="tablePanierFooterActions"
                onClick={viderPanier}
              >
                <FontAwesomeIcon icon={faTrash} />
                Vider le panier
              </button>
              <button
                type="button"
                onClick={handleCommande}
                className="tablePanierFooterActions"
              >
                <FontAwesomeIcon icon={faCheckCircle} />
                Commander
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
export default Panier;
