import React from "react";

import styles from "./hero.module.scss";
import { Cartoon } from "../svg";

const Hero = () => {
  return (
    <div className={styles.hero__container}>
      <div className={styles.hero__titleContainer}>
        <h1 className={styles.hero__title}>👋 Hi! I&apos;m Angelo</h1>
        <h2>
          a Web Developer based in Montréal 🍁. I help some of the fastest
          growing startups launch and grow their products.
        </h2>
      </div>
      <div className={styles.hero__imageContainer}>
        <Cartoon className={styles.hero__image} />
      </div>
    </div>
  );
};

export default Hero;
