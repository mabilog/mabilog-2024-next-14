import React from "react";
import styles from "./getInTouch.module.scss";

const GetInTouch = () => {
  return (
    <div className={styles.getInTouch}>
      <p>Fancy building some cool stuff together?</p>
      <a href="#" className={styles.getInTouch__link}>
        Get in touch
      </a>
    </div>
  );
};

export default GetInTouch;
