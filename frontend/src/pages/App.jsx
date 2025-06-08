import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./Produits";
import DetailsProduits from "../components/DetailsProduits";
import Contact from "./Contact";
import Panier from "./Panier";
import NavBar from "../components/navBar";
import Home from "./Home";
import Mentions from "./MentionsLegales";
import { PanierProvider } from "../components/PanierContext";
import Apropos from "./Apropos";

function App() {
  return (
    <PanierProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PRODUITS" element={<Product />} />
        <Route path="/produit/:id" element={<DetailsProduits />} />
        <Route path="/CONTACT" element={<Contact />} />
        <Route path="/A-PROPOS" element={<Apropos />} />
        <Route path="/PANIER" element={<Panier />} />
        <Route path="/MENTIONS-LEGALES" element={<Mentions />} />
      </Routes>
    </PanierProvider>
  );
}

export default App;
