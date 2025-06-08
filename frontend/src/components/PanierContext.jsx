import { createContext, useState, useEffect } from "react";

export const PanierContext = createContext();
export const PanierProvider = ({ children }) => {
  const [panier, setPanier] = useState(() => {
    const panierLocal = localStorage.getItem("monPanier");
    return panierLocal ? JSON.parse(panierLocal) : [];
  });

  useEffect(() => {
    localStorage.setItem("monPanier", JSON.stringify(panier));
  }, [panier]);

  const ajouterAuPanier = (prod) => {
    setPanier((prev) => {
      const produitExistant = prev.find((p) => p.id === prod.id);
      if (produitExistant) {
        return prev.map((p) =>
          p.id === prod.id ? { ...p, quantite: p.quantite + 1 } : p
        );
      } else {
        return [...prev, { ...prod, quantite: 1 }];
      }
    });

    console.log("Ajout au panier: ", prod);
  };

  const supprimerDuPanier = (id) => {
    setPanier((prev) => prev.filter((p) => p.id !== id));
  };

  const viderPanier = () => {
    setPanier([]);
  };

  const modifierQuantite = (id, quantite) => {
    setPanier((prev) =>
      prev.map((p) => (p.id === id ? { ...p, quantite: quantite } : p))
    );
  };

  const augmenterQuantite = (id) => {
    setPanier((prev) =>
      prev.map((p) =>
        p.id === id && p.quantite < p.stock
          ? { ...p, quantite: p.quantite + 1 }
          : p
      )
    );
  };

  const diminuerQuantite = (id) => {
    setPanier((prev) =>
      prev.map((p) =>
        p.id === id && p.quantite > 1 ? { ...p, quantite: p.quantite - 1 } : p
      )
    );
  };

  return (
    <PanierContext.Provider
      value={{
        panier,
        ajouterAuPanier,
        supprimerDuPanier,
        viderPanier,
        modifierQuantite,
        augmenterQuantite,
        diminuerQuantite,
      }}
    >
      {children}
    </PanierContext.Provider>
  );
};
