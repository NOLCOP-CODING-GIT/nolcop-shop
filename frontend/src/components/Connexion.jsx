import { useState } from "react";
import NavBar from "../components/navBar";
import { Link } from "react-router-dom";

function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3001/api/formulaire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Formulaire envoyé avec succès...");
        setFormData({ nom: "", prenom: "", email: "", password: "" });
      } else {
        alert("Erreur lors de l'envoie...");
      }
    } catch (err) {
      console.error(err);
      alert("Erreur de réseau...");
    }
  };

  return (
    <>
      <NavBar />
      <main>
        <form action="formulaire" method="post" onSubmit={handleSubmit}>
          <h2>LOGIN</h2>
          <input
            type="text"
            name="nom"
            id="fn"
            placeholder="Votre nom"
            value={formData.nom}
            onChange={handleChange}
            autoFocus
            required
          />
          <input
            type="text"
            name="prenom"
            id="ln"
            placeholder="Votre prénom"
            value={formData.prenom}
            onChange={handleChange}
            autoFocus
            required
          />
          <input
            type="email"
            name="email"
            id="em"
            placeholder="Votre email"
            value={formData.email}
            onChange={handleChange}
            autoFocus
            required
          />
          <input
            type="password"
            name="password"
            id="pss"
            placeholder="Votre mot de passe"
            value={formData.password}
            onChange={handleChange}
            autoFocus
            required
          />
          <button type="submit">ENVOYER</button>
          <Link id="connect-form-link" to="">Connexion</Link>
        </form>
      </main>
    </>
  );
}

export default Contact;
