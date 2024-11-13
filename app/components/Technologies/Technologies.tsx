import Image from "next/image";
import React from "react";

import styles from "./technologies.module.scss";

import techs from "./tech";

const Technologies = () => {
  return (
    <div className={styles.technologies__container}>
      {techs.map((tech, index) => (
        <div
          className={`${styles.technologies__projectTile} ${
            tech.reverse ? styles.technologies__projectTile__reverse : ""
          }`}
          key={index}
        >
          <div className={styles.technologies__imageContainer}>
            <Image src={tech.image.src} alt={tech.image.alt} />
          </div>
          <div className={styles.technologies__textContainer}>
            <div className={styles.technologies__logoContainer}>
              <tech.svg />
            </div>
            <p>{tech.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Technologies;
