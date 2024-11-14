import styles from "./footer.module.scss";

import React from "react";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <p className={styles.footer__container}>
          © Mabilog 2024 | From Montréal with ❤️
        </p>
      </footer>
    </>
  );
};

export default Footer;
