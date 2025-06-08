import { useParams } from "react-router-dom";
import produits from "../produits";

function DetailsProduits() {
  const { id } = useParams();
  const produit = produits.find((p) => p.id === parseInt(id));
  if (!produit) {
    return <p>Produit introuvable</p>;
  }

  return (
    <div className="main">
      <h1 className="detailsProduitsTitle">Détails du Produit</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOM</th>
            <th>QUANTITE EN STOCK</th>
            <th>PRIX UNITAIRE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{produit.id}</td>
            <td>{produit.nom}</td>
            <td>{produit.stock}</td>
            <td>{produit.prix} $</td>
          </tr>
        </tbody>
      </table>

      <div className="produit-mobile">
        <p>ID : {produit.id}</p>
        <p>NOM : {produit.nom}</p>
        <p>QUANTITE EN STOCK : {produit.stock}</p>
        <p>PRIX UNITAIRE : {produit.prix.toFixed(2)} $</p>
      </div>
    </div>
  );
}

export default DetailsProduits;
