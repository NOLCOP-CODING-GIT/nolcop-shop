import { Fragment } from "react";

function PresentationSite() {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <h2 style={{ color: "#ffaa1d", fontSize: "1.5em", textAlign: "center" }}>
          Bienvenue chez NOLCOP SHOP – L’Excellence au Poignet
        </h2>
        <p
          style={{
            color: "#5f9ea0",
            fontSize: "1.5em",
            textAlign: "center",
            lineHeight: "2",
          }}
        >
          Chez NOLCOP SHOP, nous vous proposons une sélection rigoureuse de
          montres élégantes, fiables et conçues pour durer. Que vous soyez à la
          recherche d’un style classique, moderne ou sportif, nos collections
          s’adressent à celles et ceux qui recherchent la qualité, le
          raffinement et la précision.
        </p>
        <h3 style={{ color: "#ffaa1d", fontSize: "2em" }}>
          🎯Notre engagement :
        </h3>
        <ol
          type="A"
          style={{
            color: "#5f9ea0",
            fontSize: "1.5em",
            lineHeight: "2",
          }}
        >
          <li>Des montres au design soigné et aux finitions haut de gamme</li>
          <li>
            Une sélection pensée pour allier esthétisme, performance et
            durabilité
          </li>
          <li>Un service client réactif et à votre écoute</li>
          <li>Une livraison rapide et sécurisée</li>
        </ol>
        <p
          style={{
            color: "#333333",
            fontSize: "1.5em",
            display: "flex",
            textAlign: "center",
            lineHeight: "2",
            background: "#66a060",
            borderRadius: "10px",
            padding: "15px 10px",
            width: "100%",
          }}
        >
          Découvrez l’univers NOLCOP SHOP, où chaque montre raconte une
          histoire, la vôtre. Parcourez nos modèles et trouvez celle qui vous
          accompagnera au quotidien.
        </p>
      </div>
    </>
  );
}

export default PresentationSite;
