import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/UserContext";
import Footer from "../components/Footer";

function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    password: "",
  });

  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const { setUserLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    localStorage.setItem("contactEmail", formData.email);
    localStorage.setItem("contactNom", formData.nom);
  }, [formData.email, formData.nom]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = isLogin
      ? "http://localhost:3001/api/login"
      : "http://localhost:3001/api/formulaire";

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert(data.message);

        if (isLogin) {
          localStorage.setItem("userLoggedIn", "true");
          localStorage.setItem("contactNom", data.user.nom);
          localStorage.setItem("contactEmail", data.user.email);
          setUserLoggedIn(true);
          navigate("/panier");
        } else {
          setFormData({ nom: "", prenom: "", email: "", password: "" });
        }
      } else {
        alert(data.message || "Erreur lors de l'envoi.");
      }
    } catch (err) {
      console.error(err);
      alert("Erreur de connexion au serveur.");
    }
  };

  return (
    <div className="main">
      <main>
        <form onSubmit={handleSubmit}>
          <h2>{isLogin ? "Connexion" : "Inscription"}</h2>
          {!isLogin && (
            <>
              <input
                type="text"
                name="nom"
                placeholder="Votre nom"
                value={formData.nom}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="prenom"
                placeholder="Votre prénom"
                value={formData.prenom}
                onChange={handleChange}
                required
              />
            </>
          )}
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Votre mot de passe"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <div className="buttonForm">
            <button type="button" onClick={() => setIsLogin((prev) => !prev)}>
              {isLogin ? "Créer un compte" : "Se connecter"}
            </button>
            <button type="submit">
              {isLogin ? "Se connecter" : "S'inscrire"}
            </button>
          </div>
        </form>
      </main>
      <Footer/>
    </div>
  );
}

export default Contact;
