// src/app/planos/page.tsx
import React from "react";
import styles from "./styles/PlanosPage.module.css"; // Importe o CSS

const PlanosPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.iframeContainer}> {/* Contêiner para o iframe */}
        <iframe
          src="https://plano-de-ensino-six.vercel.app/"
          className={styles.iframe} // Classe para o iframe
          title="Plano de Ensino"
        />
      </div>
    </div>
  );
};

export default PlanosPage;
