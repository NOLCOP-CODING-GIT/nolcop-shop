const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

// CORS pour autoriser le frontend hébergé
app.use(
  cors({
    origin: "https://nolcop-shop-niqe.onrender.com",
  })
);

// Middlewares
app.use(bodyParser.json());

// Connexion à la base de données SQLite
const db = new sqlite3.Database("./formulaire.db");

// Création de la table si elle n'existe pas
db.run(
  `CREATE TABLE IF NOT EXISTS reponses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nom TEXT,
    prenom TEXT,
    email TEXT UNIQUE,
    password TEXT
  )`
);

// ✅ INSCRIPTION
app.post("/api/formulaire", (req, res) => {
  const { nom, prenom, email, password } = req.body;

  db.get(`SELECT * FROM reponses WHERE email = ?`, [email], (err, row) => {
    if (err)
      return res.status(500).json({ success: false, message: "Erreur serveur" });

    if (row) {
      return res
        .status(400)
        .json({ success: false, message: "Cet email est déjà utilisé" });
    }

    db.run(
      `INSERT INTO reponses (nom, prenom, email, password) VALUES (?, ?, ?, ?)`,
      [nom, prenom, email, password],
      function (err) {
        if (err)
          return res.status(500).json({ success: false, message: "Erreur serveur" });

        res.status(200).json({
          success: true,
          message: `Inscription réussie, bienvenue ${prenom}!`,
          id: this.lastID,
        });
      }
    );
  });
});

// ✅ CONNEXION
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  db.get(
    `SELECT * FROM reponses WHERE email = ? AND password = ?`,
    [email, password],
    (err, row) => {
      if (err)
        return res.status(500).json({ success: false, message: "Erreur serveur" });

      if (!row) {
        return res
          .status(401)
          .json({ success: false, message: "Email ou mot de passe incorrect" });
      }

      res.status(200).json({
        success: true,
        message: `Bienvenue, ${row.prenom} !`,
        user: {
          nom: row.nom,
          prenom: row.prenom,
          email: row.email,
        },
      });
    }
  );
});

// ✅ Route de debug
app.get("/api/formulaire", (req, res) => {
  db.all(`SELECT * FROM reponses`, [], (err, rows) => {
    if (err)
      return res.status(500).json({ success: false, message: err.message });
    res.json(rows);
  });
});

// ✅ Sert le frontend buildé avec Vite
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// ✅ Pour React Router : redirige tout vers index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

// ✅ Démarrage du serveur
app.listen(3001, () => {
  console.log("Backend lancé sur http://localhost:3001");
});
