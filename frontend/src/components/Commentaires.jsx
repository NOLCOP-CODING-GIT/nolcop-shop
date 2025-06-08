function Commentaire(){
    return(
        <main>
      <form onSubmit={handleSubmit}>
        <h2>{isLogin ? "Connexion" : "Inscription"}</h2>
        {!isLogin && (
          <>
            <input
              type="text"
              name="nom"
              placeholder="Nom"
              value={formData.nom}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="prenom"
              placeholder="Prénom"
              value={formData.prenom}
              onChange={handleChange}
              required
            />
          </>
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
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
    );
}

export default Commentaire;